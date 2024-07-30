import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Analytics from './components/Analytics';
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
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    fetchEmails().then(data => setEmails(data['emails']));
    fetchEmails().then(data => console.log(data['emails']));
    fetchRules().then(data => setCategories(data));
  }, []);

  const filteredEmails = emails.filter(email => 
    (activeCategory === 'All' || email.category === activeCategory) &&
    (email.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
     email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
     email.body.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAddCategory = (category) => {
    addRule({
      category: category.name,
      language: category.language,
      keywords: category.rules
    }).then((data) => {
      setCategories(data['rules']);
      setEmails(data['emails']);
      setShowCategoryForm(false);
    });
  };

  const handleEditCategory = (updatedCategory) => {
    editRule({
      category: updatedCategory.name,
      language: updatedCategory.language,
      keywords: updatedCategory.rules
    }).then((data) => {
      setCategories(data['rules']);
      setEditingCategory(null);
      setEmails(data['emails']);
      setShowCategoryForm(false);
    });
  };

  const handleDeleteCategory = (category) => {
    deleteRule(category).then((data) => {
      setCategories(data['rules']);
      setEmails(data['emails']);
      setActiveCategory('All');
    });
  };

  const handleUpdateEmailCategory = (emailId, newCategory) => {
    updateEmailCategory(emailId, newCategory).then((data) => {
      setEmails(data['emails']);
    });
  };

  return (
    <div className="app">
      <Header onAnalyticsClick={() => setShowAnalytics(true)} />
      <Container fluid="lg">
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
                categories={categories}
                onEmailClick={setSelectedEmail}
                onCategoryChange={(emailId, newCategory) => handleUpdateEmailCategory(emailId, newCategory)}
              />
            )}
          </>
        )}
        </Container>
      <Footer />
      <Analytics 
        show={showAnalytics} 
        onHide={() => setShowAnalytics(false)} 
        emailData={emails} 
      />
    </div>
  );
};

export default App;
