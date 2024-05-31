import React, { useState } from 'react';

const SearchForm = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
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