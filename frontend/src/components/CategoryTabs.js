import React from 'react';
import './CategoryTabs.css';

const CategoryTabs = ({ categories, activeCategory, onTabClick, onEditCategory, onDeleteCategory }) => {
  const handleEdit = (category) => {
    onEditCategory(category);
  };

  const handleDelete = (category) => {
    onDeleteCategory(category);
  };

  return (
    <div className="category-tabs">
      {categories.map(category => (
        <div
          key={category}
          className={`category-tab ${category === activeCategory ? 'active' : ''}`}
          onClick={() => onTabClick(category)}
        >
          <span className="category-name">{category}</span>
          <div className="burger-menu">
            <div className="burger-icon">&#x2630;</div>
            <div className="burger-options">
              <button onClick={(e) => { e.stopPropagation(); handleEdit(category); }}>Edit</button>
              <button onClick={(e) => { e.stopPropagation(); handleDelete(category); }}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
