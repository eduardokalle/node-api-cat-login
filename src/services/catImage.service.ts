import axios from 'axios';

class CatImageService {

   public async getCatImage(breedId) {
     
      const response = await axios.get(process.env.API_CAT+`/images/search?limit=10&breed_ids=${breedId}`, {
         headers: {
           'x-api-key': process.env.CAT_API_KEY!,
         },
       });

       return response.data;
   }

}   

export default new CatImageService();