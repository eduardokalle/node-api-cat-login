import { Request, Response } from 'express';
import CatService from '../services/cat.service';

 export const getCatBreeds = async (req: Request, res: Response) => {
  try {
    const data = await CatService.getCatBreeds();
    res.status(200).json({data});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cat Breeds' });
  }
};

export const getCatBreedsid = async (req: Request, res: Response) => {

  const breedId = req.params.breed_id;
  try {
    const data = await CatService.getCatBreedsid(breedId);
    res.status(200).json({data});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cat Breeds for id' });
  }
};

export const getCatBreedsSearch = async (req: Request, res: Response) => {
  try {
    const data = await CatService.getCatBreedsSearch();
    res.status(200).json({data});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cat Breeds search' });
  }
};