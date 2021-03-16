import axios from 'axios';

// const apikey = '19742000-8f2cd71a75112bf6e0b5f6064';

// axios.defaults.baseURL = 'https://pixabay.com/api';

// const Api = (query, page) =>
//   axios
//     .get(
//       `/?q=${query}&page=${page}&key=${apikey}&image_type=photo&orientation=horizontal&per_page=12`,
//     )
//     .then(({ data }) => data);

const API_KEY = '19742000-8f2cd71a75112bf6e0b5f6064';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const Api = async ({ query, page }) => {
  try {
    const { data } = await axios.get('', {
      params: { query, page },
    });
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default Api;
