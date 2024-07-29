import React from 'react';
import { Dropdown, ListGroup } from 'react-bootstrap';
import Avatar from 'react-avatar';
import './styles/EmailItem.css';

const EmailItem = ({ email, onClick, onCategoryChange }) => {
  const snippet = email.body.length > 200 ? `${email.body.substring(0, 197)}...` : email.body;

  function getInitials(email) {
    // Splitting the email into parts
    const parts = email.split('@')[0].split('.');

    // If there are parts i.e a name within email
    if (parts.length > 1) {
      return parts.map(part => part[0].toUpperCase()).join('');
    }
    // Email sent from a company address or no . in email
    else {
      return parts[0][0].toUpperCase();
    }
  }

  return (
    <ListGroup.Item className="email-item-container">
      <div className="email-item" onClick={onClick}>
        <div className="email-avatar-container">
          <Avatar value={getInitials(email.from)} size={40} round={true} className="email-avatar" />
        </div>
        <div className="email-content">
          <div className="email-sender">{email.from}</div>
          <div className="email-subject">{email.subject}</div>
          <div className="email-snippet">{snippet}</div>
        </div>
        <Dropdown onClick={(e) => e.stopPropagation()} className="dropdown-container">
          <Dropdown.Toggle as="span" className="burger-icon">
            &#x2630;
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {['Immediate Attention', 'Promotional', 'Updates', 'Junk'].map(category => (
              <Dropdown.Item
                key={category}
                onClick={() => onCategoryChange(email.id, category)}
              >
                Move to {category}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </ListGroup.Item>
  );
};

export default EmailItem;
