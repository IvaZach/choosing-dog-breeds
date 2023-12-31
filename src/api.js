import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_bBmQ1mBnAm55XOp6l4lugyIvVYsnuDBBWpfPMuDNJDE1hCbIvTksgxwq6dMCkQJr';

export const fetchBreeds = async () => {
  const response = await axios.get('/breeds');
  return response.data;
};

export const fetchDogByBreed = async breedId => {
  const response = await axios.get('/images/search', {
    params: {
      breed_id: breedId,
    },
  });
  return response.data[0];
};
