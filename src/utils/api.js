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
    'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'x-rapidapi-host': 'imdb146.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Resource not found:", error.response.data);
      // Handle 404 error appropriately, e.g., display an error message to the user
    } else {
      console.error("Error occurred:", error.message);
      // Handle other errors here, such as network issues or server errors
    }
    // Optionally rethrow the error to propagate it further
    throw error;
  }
}
