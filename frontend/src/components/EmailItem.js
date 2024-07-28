// components/EmailItem.js
import React from 'react';
import './EmailItem.css';

const EmailItem = ({ email, onClick }) => {
  const snippet = email.body.length > 200 ? `${email.body.substring(0, 197)}...` : email.body;

  return (
    <div className="email-item" onClick={onClick}>
      <div className="email-sender">{email.sender}</div>
      <div className="email-subject">{email.subject}</div>
      <div className="email-snippet">{snippet}</div>
    </div>
  );
};

export default EmailItem;
