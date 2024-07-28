import React, { useState } from 'react';
import './CategoryForm.css';

const CategoryForm = ({ category, onSubmit, onCancel }) => {
  const [name, setName] = useState(category?.name || '');
  const [language, setLanguage] = useState(category?.language || 'en');
  const [rules, setRules] = useState(category?.rules?.join(', ') || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      name,
      language,
      rules: rules.split(',').map(rule => rule.trim())
    };
    onSubmit(newCategory);
  };

  return (
    <div className="category-form-overlay">
      <form className="category-form" onSubmit={handleSubmit}>
        <h2>{category ? 'Edit Category' : 'Add Category'}</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)} required>
            <option value="en">English</option>
            <option value="nl">Dutch</option>
            <option value="da">Danish</option>
          </select>
        </label>
        <label>
          Rules (comma separated):
          <input type="text" value={rules} onChange={(e) => setRules(e.target.value)} required />
        </label>
        <div className="form-buttons">
          <button type="submit">{category ? 'Update' : 'Add'}</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
