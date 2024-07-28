// components/EmailList.js
import React from 'react';
import EmailItem from './EmailItem';
import './EmailList.css';

const EmailList = ({ emails, onEmailClick, onCategoryChange }) => {
  return (
    <div className="email-list">
      {emails.map(email => (
        <EmailItem
          key={email.id}
          email={email}
          onClick={() => onEmailClick(email)}
          onCategoryChange={onCategoryChange}
        />
      ))}
    </div>
  );
};

export default EmailList;
