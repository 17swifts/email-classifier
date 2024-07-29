import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import EmailList from './components/EmailList';
import CategoryTabs from './components/CategoryTabs';
import SearchBar from './components/SearchBar';
import CategoryForm from './components/CategoryForm';
import EmailDetail from './components/EmailDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import { fetchEmails, updateEmailCategory } from './services/emailService';
import { fetchRules, addRule, editRule, deleteRule } from './services/ruleService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [emails, setEmails] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  useEffect(() => {
    fetchRules().then(data => console.log(data));
    fetchEmails().then(data => setEmails(data));
    fetchRules().then(data => setCategories(data));
  }, []);

  const filteredEmails = emails.filter(email => 
    (activeCategory === 'All' || email.category === activeCategory) &&
    (email.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
     email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
     email.body.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAddCategory = (category) => {
    addRule(category).then((data) => {
      setCategories(Object.keys(data.rules));
      setShowCategoryForm(false);
    });
  };

  const handleEditCategory = (updatedCategory) => {
    editRule(updatedCategory).then((data) => {
      setCategories(Object.keys(data.rules));
      setEditingCategory(null);
      setShowCategoryForm(false);
    });
  };

  const handleDeleteCategory = (category) => {
    deleteRule(category).then((data) => {
      setCategories(Object.keys(data.rules));
      setActiveCategory('All');
    });
  };

  return (
    <div className="app">
      <Header />
      <Container fluid>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onAddCategory={() => setShowCategoryForm(true)}
        />
        {showCategoryForm || editingCategory ? (
          <CategoryForm
            category={editingCategory}
            onSubmit={editingCategory ? handleEditCategory : handleAddCategory}
            onCancel={() => {
              setShowCategoryForm(false);
              setEditingCategory(null);
            }}
          />
        ) : (
          <>
            {/* <CategoryTabs
              categories={['All', ...categories]}
              activeCategory={activeCategory}
              onTabClick={setActiveCategory}
              onEditCategory={setEditingCategory}
              onDeleteCategory={handleDeleteCategory}
            /> */}
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onTabClick={setActiveCategory}
              onEditCategory={setEditingCategory}
              onDeleteCategory={handleDeleteCategory}
            />
            {selectedEmail ? (
              <EmailDetail email={selectedEmail} onClose={() => setSelectedEmail(null)} />
            ) : (
              <EmailList
                emails={filteredEmails}
                onEmailClick={setSelectedEmail}
                onCategoryChange={(emailId, newCategory) => updateEmailCategory(emailId, newCategory)}
              />
            )}
          </>
        )}
        </Container>
      <Footer />
    </div>
  );
};

export default App;
