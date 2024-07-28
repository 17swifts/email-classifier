import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery, onAddCategory }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search emails..."
      />
      <button onClick={onAddCategory} className="add-category-button">Add Category</button>
    </div>
  );
};

export default SearchBar;
