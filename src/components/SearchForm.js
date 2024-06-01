import React, { useState } from 'react';

const SearchForm = ({ onQuerySubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onQuerySubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input  
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter food name..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
