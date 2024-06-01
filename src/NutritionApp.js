import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import NutritionData from './components/NutritionData';

const NutritionApp = () => {
  const [queries, setQueries] = useState([]);

  const handleQuerySubmit = (query) => {
    if (queries.includes(query)) {
      alert(`${query} already exists`);
    } else {
      setQueries([...queries, query]); 
    }
  };

  return (
    <div>
      <h1>Nutrition Info</h1>
      <SearchForm onQuerySubmit={handleQuerySubmit} />
      {queries.map((query, index) => (
        <NutritionData key={index} query={query} />
      ))}
    </div>
  );
};

export default NutritionApp;
