
import { Request, Response } from 'express';
import UserService from '../services/user.service';

export const login = async (req: Request, res: Response) => {
  
  const { email, password } = req.body;
    try {
      const data = await UserService.authenticateUser(email, password);
      res.status(200).json({data});
    } catch (error) {
      res.status(400).json({ message: 'Error in user', error });
    }
  }

export const register = async (req: Request, res: Response) => {

  const { email, password, username, userlastname, phone} = req.body;
    try {
      const data = await UserService.register(email, password, username, userlastname, phone);
      res.status(200).json({data});
    } catch (error) {
      res.status(400).json({ message: 'Error in user', error });
    }
  }  

 



