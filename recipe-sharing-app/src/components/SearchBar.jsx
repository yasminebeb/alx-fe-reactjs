// src/components/SearchBar.jsx
import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          margin: '10px 0',
          width: '100%',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default SearchBar;
