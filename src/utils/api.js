import axios from 'axios';
const BASE_URL = 'https://api.apilayer.com/youtube';

const options = {
  params: {
    q: '{q}' 
  },
  headers: {
    'apikey': process.env.REACT_APP_MOVIE_API_KEY,
    'Content-Type': 'application/json'
  }
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}