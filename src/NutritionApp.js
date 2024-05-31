import React from 'react';
import SearchForm from './components/SearchForm';
import NutritionData from './components/NutritionData';
import { useState } from 'react';

const NutritionApp = () => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <h1>Nutrition Info</h1>
      <SearchForm setQuery={setQuery} />
      <NutritionData query={query} />
    </div>
  );
};

export default NutritionApp;