import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class UserService {
  public async register(email: string, password: string, username: string , userlastname: string , phone: string ){

   const existingUser = await User.findOne({ email });
   if (existingUser) {
      return { message: 'Existing User' };
   }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({email , password: hashedPassword, username, userlastname, phone });
    await user.save();
   
    const data = {
      user: user,
      message: 'User registered successfully'
   }

    return data;
  }

  public async authenticateUser(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      return { message: 'Invalid credentials' };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { message: 'Invalid credentials' };;
    }
  
    if (isPasswordValid) {
      const token = jwt.sign({ 
         id: user._id, 
         username: user.username, 
         userlastname: user.userlastname, 
         phone: user.phone,
         email: user.email 
      }, process.env.JWT_SECRET!, { expiresIn: '1h' });

     const data = {
         token: token,
         message: 'correct credentials'
      }

      return data;
    }
  }
}

export default new UserService();
