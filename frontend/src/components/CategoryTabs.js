import React from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import './styles/CategoryTabs.css';

const CategoryTabs = ({ categories, activeCategory, onTabClick, onEditCategory, onDeleteCategory }) => {
  return (
    // Add an All tab containing emails regardless of category. This tab does not have a burger menu
    <Nav variant="tabs" className="category-tabs">
      <Nav.Item key="All" className="category-tab-item">
        <Nav.Link
          active={activeCategory === 'All'}
          onClick={() => onTabClick('All')}
        >
          All
        </Nav.Link>
      </Nav.Item>
      {/* For all other categories map them to a Nav item */}
      {Object.keys(categories).map(category => (
        <Nav.Item key={category} className="category-tab-item">
          <Nav.Link
            active={category === activeCategory}
            onClick={() => onTabClick(category)}
          >
            <div className="category-tab-content">
              {category}
              <Dropdown className="category-dropdown">
                <Dropdown.Toggle as="span" className="category-dropdown-toggle">
                  &#x2630;
                </Dropdown.Toggle>
                <Dropdown.Menu className="category-dropdown-menu">
                  <Dropdown.Item onClick={() => onEditCategory({ name: category, languages: categories[category].languages })}>
                    Edit Category
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => onDeleteCategory(category)}>Delete Category</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default CategoryTabs;
