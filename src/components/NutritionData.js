import React, { useState, useEffect } from 'react';
import NutritionInfo from '../components/NutritionInfo';
import fetchNutritionData from '../api';

const NutritionData = ({ query }) => {
  const [nutritionData, setNutritionData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        try {
          const data = await fetchNutritionData(query);
          setNutritionData(data);
          setNotFound(false);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            setNotFound(true);
          } else {
            console.error('Error fetching nutrition data:', error);
          }
        }
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      {notFound ? (
        <p>Food not found.</p>
      ) : (
        nutritionData && <NutritionInfo data={nutritionData} />
      )}
    </div>
  );
};

export default NutritionData;
