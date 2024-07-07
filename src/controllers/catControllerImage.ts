import { Request, Response } from 'express';
import CatImageService from '../services/catImage.service';


export const getCatImage = async (req: Request, res: Response) => {

  const breedId = req.params.breed_id;
   try {
    const data = await CatImageService.getCatImage(breedId);
    res.status(200).json({data});
   } catch (error) {
     res.status(500).json({ message: 'Error fetching cat image' });
   }
 };
