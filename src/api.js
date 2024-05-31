import axios from 'axios';

const fetchNutritionData = async (query) => {
  const appId = process.env.REACT_APP_NUTRITIONIX_APP_ID;
  const apiKey = process.env.REACT_APP_NUTRITIONIX_API_KEY;

  try {
    const response = await axios.post(
      'https://trackapi.nutritionix.com/v2/natural/nutrients',
      { query: query },
      {
        headers: {
          'x-app-id': appId,
          'x-app-key': apiKey,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.foods[0];
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Response error:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Request error:', error.message);
    }
    throw error; // Re-throw the error for handling in the component
  }
};

export default fetchNutritionData;
