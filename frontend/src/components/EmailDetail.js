// components/EmailDetail.js
import React from 'react';
import './EmailDetail.css';

const EmailDetail = ({ email, onClose }) => {
  return (
    <div className="email-detail">
      <button className="close-button" onClick={onClose}>Close</button>
      <div className="email-sender"><strong>From:</strong> {email.sender}</div>
      <div className="email-subject"><strong>Subject:</strong> {email.subject}</div>
      <div className="email-body">{email.body}</div>
    </div>
  );
};

export default EmailDetail;
