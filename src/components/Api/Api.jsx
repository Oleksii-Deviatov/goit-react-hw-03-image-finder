import axios from 'axios';

const apikey = '19742000-8f2cd71a75112bf6e0b5f6064';

axios.defaults.baseURL = 'https://pixabay.com/api';

const Api = (query, page) =>
  axios
    .get(
      `/?q=${query}&page=${page}&key=${apikey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data);

export default Api;
