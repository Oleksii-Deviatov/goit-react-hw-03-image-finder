import axios from 'axios';

const API_KEY = '19742000-8f2cd71a75112bf6e0b5f6064';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  q: null,
  page: null,
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const Api = async (q, page) => {
  try {
    const { data } = await axios.get('', {
      params: { q, page },
    });
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default Api;
