// src/components/Analytics.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './styles/Analytics.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = ({ show, onHide, emailData }) => {
  const categoryCounts = emailData.reduce((acc, email) => {
    if (email.category !== 'All') {
      acc[email.category] = (acc[email.category] || 0) + 1;
    }
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        label: 'Number of Emails',
        data: Object.values(categoryCounts),
        backgroundColor: [
          '#C39B9C',
          '#5f82a9',
          '#79BB98',
          '#f8cd58',
          '#425B77'
        ],
        hoverBackgroundColor: [
          '#C39B9C',
          '#5f82a9',
          '#79BB98',
          '#f8cd58',
          '#425B77'
        ]
      }
    ]
  };

  // Placeholder for confidence levels
  const confidenceLevel = 90; // Example confidence level - could return value from machine learning model in future etc

  return (
    <Modal show={show} onHide={onHide} size="md">
      <Modal.Header closeButton>
        <Modal.Title>Email Analytics</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="chart-container">
          <Pie data={data} />
        </div>
        <div className="confidence-level">
          <h4>Classification Confidence Level: {confidenceLevel}%</h4>
        </div>
        {/* Add more statistics here */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Analytics;
