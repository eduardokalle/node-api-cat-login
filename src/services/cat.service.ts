import axios from 'axios';

class CatService {

   public async getCatBreeds() {
     
      const response = await axios.get(process.env.API_CAT+'/breeds', {
         headers: {
           'x-api-key': process.env.CAT_API_KEY!,
         },
       });

       return response.data;
   }

   public async getCatBreedsid(breedId) {
     
      const response = await axios.get(process.env.API_CAT+`/breeds/${breedId}`, {
         headers: {
           'x-api-key': process.env.CAT_API_KEY!,
         },
       });

       return response.data;
   }

   public async getCatBreedsSearch() {
     
      const response = await axios.get('https://api.thecatapi.com/v1/breeds/search', {
      headers: {
        'x-api-key': process.env.CAT_API_KEY!,
      },
    });

       return response.data;
   }
}

export default new CatService();