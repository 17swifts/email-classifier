import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './styles/CategoryForm.css';

const CategoryForm = ({ category, onSubmit, onCancel }) => {
  const [name, setName] = useState(category?.name || '');
  const [language, setLanguage] = useState(category ? Object.keys(category.languages)[0] : 'en');
  const [rules, setRules] = useState(category ? category.languages[language].join(', ') : '');

  // Set the names, rules and langugage when editting
  useEffect(() => {
    if (category) {
      setName(category.name);
      setLanguage(Object.keys(category.languages)[0]);
      setRules(category.languages[Object.keys(category.languages)[0]].join(', '));
    }
  }, [category]);

  // Changes the rules shown when the language selecter is changed in edit view
  useEffect(() => {
    if (category && language) {
      setRules(category.languages[language].join(', '));
    }
  }, [language, category]);

  // When the form is submitted create a category object to return containing the name, langauge and rules
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
    <Modal show onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{category ? 'Edit Category' : 'Add Category'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={!!category}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Language</Form.Label>
            <Form.Control
              as="select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            >
              <option value="en">English</option>
              <option value="nl">Dutch</option>
              <option value="da">Danish</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rules (comma separated)</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              type="text"
              value={rules}
              onChange={(e) => setRules(e.target.value)}
              required
            />
          </Form.Group>
          <div className="form-buttons">
            <Button variant="primary" type="submit">
              {category ? 'Update' : 'Add'}
            </Button>
            <Button variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CategoryForm;
