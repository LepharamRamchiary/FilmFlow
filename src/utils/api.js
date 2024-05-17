import axios from "axios";

const BASE_URL = "https://streaming-availability.p.rapidapi.com/shows/search/filters";

const options = {
  params: {
    country: '<REQUIRED>',
    show_type: 'movie',
    series_granularity: 'show',
    order_by: 'original_title',
    output_language: 'en',
    order_direction: 'asc',
    genres_relation: 'and'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_MOVIE_API_KEY,
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
    const {response} = await axios.get(`${BASE_URL}/${url}`, options);
    return response;
};


