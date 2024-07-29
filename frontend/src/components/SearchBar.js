import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery, onAddCategory }) => {
  return (
    <div className="search-bar mb-3">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search emails..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button onClick={onAddCategory}>
          Add Category
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
