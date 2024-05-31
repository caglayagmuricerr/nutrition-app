import React from 'react';

const NutritionInfo = ({ data }) => {
  return (
    <div>
      <h2>Nutrition Information</h2>
      <p><strong>Food:</strong> {data.food_name}</p>
      <p><strong>Calories:</strong> {data.nf_calories}</p>
      <p><strong>Protein:</strong> {data.nf_protein} g</p>
      <p><strong>Carbohydrates:</strong> {data.nf_total_carbohydrate} g</p>
      <p><strong>Fats:</strong> {data.nf_total_fat} g</p>
      {/* Add more nutritional details as needed */}
    </div>
  );
};

export default NutritionInfo;