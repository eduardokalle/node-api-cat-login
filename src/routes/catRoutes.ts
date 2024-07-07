import { Router } from 'express';
import { getCatImage } from '../controllers/catControllerImage';
import { getCatBreeds ,getCatBreedsid, getCatBreedsSearch } from '../controllers/catController';

const router: Router = Router();

router.get('/imagesbybreedid/:breed_id', getCatImage);
router.get('/breeds', getCatBreeds);
router.get('/breeds/search', getCatBreedsSearch);
router.get('/breed/:breed_id',getCatBreedsid);

export default router;