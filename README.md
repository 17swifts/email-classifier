# Email Classifier

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Classification Logic](#classification-logic)
- [Usage](#usage)
- [Assumptions & Limitations](#assumptions--limitations)
- [Components](#reat-components)
- [Backend API](#backend-api)
- [Technologies Used](#technologies-used)

## Overview
This project is an email client application developed as part of a technical assignment for Shipster. The application classifies emails into categories such as Immediate Attention, Promotional, Updates, and Junk. It includes a user-friendly interface built with React and Bootstrap, and a backend API built with Python and Flask for managing email data and rules. Emails are classified using a rule basede filtering approach with help from Natural Language Processing (spaCy) to support multiple languages. Given more data, a hybrid classification approach would be used with a machine learning model. Similarly, an SQLLite database would also be added to store stateful data and improve category management features described below. 

## Features
- **Email Classification**: Automatically categorize emails based on predefined rules.
- **Category Management**: Add, edit, and delete categories and their associated rules.
- **Email Search**: Search emails by sender, subject, or body content.
- **Detailed Email View**: Click on an email to view detailed information.
- **Analytics Screen**: View email statistics, including a pie chart of email categories and classification confidence levels.

## Setup Instructions

###  Software needed

To run this project locally you will need the following softwares installed.

1. Node.js 
    - If you haven't installed Node.js yet, you can download and install it from [Node.js official website](https://nodejs.org/en).
2. Miniconda
    - If you haven't installed Miniconda yet, you can download and install it from [Miniconda's official website](https://docs.anaconda.com/miniconda/).
3. Git

Clone the repository 
```bash
   git clone https://github.com/17swifts/Email-classifier.git
   cd Email-classifier
```

### Backend

1. Navigate to the backend directory.
2. Install dependencies: `conda create --name emailclassifier --file requirements.txt`
3. Activate conda environent `conda activate emailclassifier`
4. Run the server: `python main.py`

### Frontend

1. Navigate to the frontend directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Classification Logic

- Emails are read from the file with utf-8 encoding for non qwerty characters.
- The language of the email is detected using Natural Language Processing library spaCy 
- Emails are classified using rule based filtering, where the category with the most hits/ count is assigned to that email
- Rules are stored in as json/ dict in a separate rules.py file

## Usage
### Running the Application

1. Start the backend server.
2. Start the frontend server.
3. Open `http://localhost:3000` in your browser to view the application.

## Assumptions & Limitations

- The solution needs to work across multiple languages.
- Given the provided 20 emails is the training set for classification, the correct category must be known for accuracy testing. This was not provided, therefore, I manually classified the emails based on my personal understanding of the categories. 
- The application 

## React Components

- **App.js**: Main application component that integrates all other components.
- **Header.js**: Header component with a button to open the Analytics screen.
- **Footer.js**: Footer component with copyright 
- **SearchBar.js**: Component for searching emails and adding category.
- **CategoryTabs.js**: Tabs for selecting and managing email categories.
- **CategoryForm.js**: Form for adding and editing categories.
- **EmailList.js**: List of emails.
- **EmailItem.js**: Individual email item with a dropdown for changing categories.
- **EmailDetail.js**: Detailed view of a selected email.
- **Analytics.js**: Screen displaying email statistics and analytics.

## Backend API

- **GET /emails**: Fetch all emails.
- **PUT /emails/<id>**: Update the category of an email.
- **GET /rules**: Fetch all classification rules.
- **POST /rules**: Add a new rule.
- **PUT /rules/**: Edit an existing rule.
- **DELETE /rules/**: Delete a rule.

## Technologies Used    

- **Frontend**: React, Bootstrap, react-bootstrap, react-avatar, react-chartjs-2, chart.js
- **Backend**: Python, spaCy, Flask, Flask-CORS