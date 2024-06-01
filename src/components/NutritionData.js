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
    return <p>Food not found.</p>;
  }
  
  if (!nutritionData) {
    return null;
  }
  
  console.log(nutritionData.nf_cholesterol);

  const items = [
    `Serving Size: (${nutritionData.serving_weight_grams} g)`,
    `Calories: ${nutritionData.nf_calories} kcal`,
    `Protein: ${nutritionData.nf_protein} g`,
    `Carbohydrates: ${nutritionData.nf_total_carbohydrate} g`,
    `Fats: ${nutritionData.nf_total_fat} g`,
    `Cholesterol: ${nutritionData.nf_cholesterol} mg`,
    `Sodium: ${nutritionData.nf_sodium} mg`,
    `Sugars: ${nutritionData.nf_sugars} g`,
    `Fiber: ${nutritionData.nf_dietary_fiber} g`,
    `Potassium: ${nutritionData.nf_potassium} mg`,
    `Saturated Fats: ${nutritionData.nf_saturated_fat} g`,    
  ];
  
  return (
    <Card
    image={nutritionData.photo.thumb}
    title={nutritionData.food_name}
    items={items}
    />
  );
};

export default NutritionData;
