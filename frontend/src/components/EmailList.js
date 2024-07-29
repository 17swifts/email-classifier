import React from 'react';
import { ListGroup } from 'react-bootstrap';
import EmailItem from './EmailItem';
import './EmailList.css';

const EmailList = ({ emails, onEmailClick, onCategoryChange }) => {
  return (
    <ListGroup variant="flush" className="email-list">
      {emails.map(email => (
        <EmailItem
          key={email.id}
          email={email}
          onClick={() => onEmailClick(email)}
          onCategoryChange={onCategoryChange}
        />
      ))}
    </ListGroup>
  );
};

export default EmailList;
