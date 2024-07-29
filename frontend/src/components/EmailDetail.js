import React from 'react';
import { Card, CloseButton } from 'react-bootstrap';
import './styles/EmailDetail.css';

const EmailDetail = ({ email, onClose }) => {
  if (!email) {
    return null;
  }

  return (
    <Card className="email-detail-card shadow">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div>
          <strong>From:</strong> {email.from} <br />
          <strong>To:</strong> {email.to}
        </div>
        <CloseButton onClick={onClose} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{email.subject}</Card.Title>
        <Card.Text>{email.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EmailDetail;
