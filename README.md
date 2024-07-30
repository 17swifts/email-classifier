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
- [Approach](#approach)
- [Classification Lit Review and Thoughts](#classification-lit-review-and-thoughts)
- [Testing](#testing)

## Overview
This project is an email client application developed as part of a technical assignment for Shipster. The application classifies emails into categories such as Immediate Attention, Promotional, Updates, and Junk. It includes a user-friendly interface built with React and Bootstrap, and a backend API built with Python and Flask for managing email data and rules. Emails are classified using a rule basede filtering approach with help from Natural Language Processing (spaCy) to support multiple languages. Given more data, a hybrid classification approach would be used with a machine learning model. Similarly, an SQLLite database would also be added to store stateful data and improve category management features described below. 

![image](https://github.com/user-attachments/assets/106a68fb-2e6f-4d89-ab63-846415645254)


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

- Given the provided 20 emails is the training set for classification, the correct category must be known for accuracy testing. This was not provided, therefore, I manually classified the emails based on my personal understanding of the categories. 
- The application uses useState and useEffect components of React to store state variables, however all changes made during the session are not stored in a database or external data store. Therefore for each session new categories or edits made are wiped. With more time I would implement a database using SQLite
- Classifcation of emails only supports 3 languages, English, Dutch and Danish. So whilst it supports multiple lanaguges, it is not scalable without further development. 

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

## Approach

- 1 hour understanding the project
- Background research on the best methods for email classification
- UI/UX design
    - Started with hand drawn mockup and ideas
    - I can use the mockup to create component names 
    - I wanted the emails to look like how Gmail or outlook display emails in a list. Having a similar design to existing applications resonates with users, and the familiarity is appealing 
    - I also wanted a clean and simple color scheme that emulated that used by The Shipping Collective 
- Implement classification of emails as python file
- Using mock classified email, created the UI
- Created main python file with endpoints in flask to fetch from the front end
- Improved styling 
- Created basic testing plan
- Tested features of the application
- Fixed any small bugs or styling issues

## Classification Lit Review and Thoughts

- Multiple approaches for classifiers 
    - **Rule-Based Filtering**
        - Easy to implement and can be effective for well-defined tasks.
        - Tailor the rules to the specific scenario
        - Risk of overfitting to the provided data
        - Risk of scalability because rules need to be updated as we encounter new patterns. Too many rules too frequently 
        - Risk of scalability because it only works for the specified languages. Adding more requires further maintenance
        - Risk of Coverage as it may miss nuances in text that machine learning models could capture.
        - Could use a translator to convert to a common language i.e English however through testing it was found to be extremely slow and also risks incorrectly translating nuances to languages 
    - **Machine learning**
        - Assumes that the category field exists in the JSON data and is correctly labelled (we do not have this)
        - Requires enough labelled data for each category to train the model effectively (we do not have this)
        - Major data dependencies 
        - Easily scalable for languages and coverage 
        - Automatically identifies and learns features relevant to classification from the data, potentially uncovering complex patterns
        - Risk for overfitting like rule based filtering 
    - **Natural Language Processing (NLP) Techniques**
        - Can understand nuances in text unlike the other methods 
        - Take a long time to run and can be resource heavy 
        - Some technical complexity not needed in this case
    - **Hybrid Approaches** (using both rule-based and ML for example)
        - Is more flexible because it combines strengths of different methods to improve overall performance.
        - Can address limitations of individual approaches, such as combining rule-based methods with machine learning to handle edge cases.
- Ideally I would want to use a hybrid approach, as this would cover all edge cases and be more scalable and maintainable, however with data limitations I followed a simple rule based filtering approach 
- Research on the classification of emails topic showed a preference for machine learning as the main approach. Especially when it came to spam or not spam. Algorithms of note were Support Vector Classification (SVC), Naïve Bayes (NB) or Artifical Neural Networks (AAN). However, each of these studies had a labelled dataset of more than 1000 emails. With only 20 emails unlabelled, such an approach would not be feasile.
- I wrote an example program using SVC algorithm, however only had a maximum accuracy of 0.4 which is not acceptable for this project

## Testing

For this project I considered doing unit tests for both the front and backend. For python and flask, I would have used `pytest` to mock and check the endpoints. For react, the built in node testing with `App.test.js` would have been extended past loading the App page. However, with time constraints I decided to focus on Functional Testing the of features developed and documented manually. 

| Requirement | Pass/Fail |
| ----------- | --------- |
| Application can GET classified emails | Pass |
| Application can GET categories with lanuages & rules | Pass |
| User can swap between categories and the emails list changes | Pass |
| User can view all emails regardless of category in one list | Pass |
| User can search for an email based on sender | Pass |
| User can search for an email based on email subject | Pass |
| User can search for an email based on email body | Pass |
| User can add a category by specifying the name, language and rules | Pass |
| Added category appears as a new tab and any emails reclassified appear under it | Pass |
| Added category appears as an option to move email to | Pass |
| User can edit rules for a given category | Pass |
| Edited rules then reclassify emails | Pass |
| User can delete a category | Pass |
| Deleted categories are no longer visible as a tab | Pass |
| After deletion of a category, emails in that category are reclassifed | Pass |
| User can move an email from one category to another | Pass |
| User can click on an email to view it in detail | Pass |
| User can click on the chart button to view analytics | Pass |
| Analytics display detail for only current categories | Pass |
| Header component is sticky to the top of the screen | Pass |
| Wesbite performs reasonaly in mobile view | Pass |
| Burger menu dropdown works | Pass |
| User known which email they are viewing using hover over features | Pass |
