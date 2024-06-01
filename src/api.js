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
      console.error('Response error:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request error:', error.message);
    }
    throw error;
  }
};

export default fetchNutritionData;
