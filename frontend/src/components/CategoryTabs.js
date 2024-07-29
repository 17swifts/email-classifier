import React from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import './styles/CategoryTabs.css';

const CategoryTabs = ({ categories, activeCategory, onTabClick, onEditCategory, onDeleteCategory }) => {
  return (
    <Nav variant="tabs" className="mb-3">
      <Nav.Item key="All">
        <Nav.Link
          active={activeCategory === 'All'}
          onClick={() => onTabClick('All')}
        >
          All
        </Nav.Link>
      </Nav.Item>
      {Object.keys(categories).map(category => (
        <Nav.Item key={category}>
          <Nav.Link
            active={category === activeCategory}
            onClick={() => onTabClick(category)}
          >
            {category}
            <Dropdown className="d-inline ml-2">
              <Dropdown.Toggle as="span" className="burger-menu">
                &#x2630;
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => onEditCategory({ name: category, languages: categories[category].languages })}>
                  Edit Category
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onDeleteCategory(category)}>Delete Category</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default CategoryTabs;
