import axios from "axios";

const BASE_URL = "https://ott-details.p.rapidapi.com";

const options = {
  params: {
    start_year: '1970',
    end_year: '2020',
    min_imdb: '6',
    max_imdb: '7.8',
    genre: 'action',
    language: 'english',
    type: 'movie',
    sort: 'latest',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY,
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}