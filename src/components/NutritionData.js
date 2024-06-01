import React, { useState, useEffect } from 'react';
import fetchNutritionData from '../api';
import Card from './Card';

const NutritionData = ({ query }) => {
  const [nutritionData, setNutritionData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (query) {
        try {
          const data = await fetchNutritionData(query);
          console.log('API Response:', data);
          setNutritionData(data);
          setNotFound(false);
        } catch (error) {
          console.error('Error fetching nutrition data:', error);
          setNotFound(true);
        } finally {
          setLoading(false);
        }
      }
    };
  
    fetchData();
  }, [query]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (notFound) {
    setLoading(false);
    return <p>Food not found.</p>;
  }

  if (!nutritionData) {
    return null;
  }

  const items = [
    `Serving Size: (${nutritionData.serving_weight_grams} g)`,
    `Calories: ${nutritionData.nf_calories} kcal`,
    `Protein: ${nutritionData.nf_protein} g`,
    `Carbohydrates: ${nutritionData.nf_total_carbohydrate} g`,
    `Fats: ${nutritionData.nf_total_fat} g`
  ];

  return (
    <Card
      image={nutritionData.photo.thumb}
      title={nutritionData.food_name}
      items={items} // Pass the items array as a prop
    />
  );
};

export default NutritionData;
