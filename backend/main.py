from flask import Flask, request, jsonify
from flask_cors import CORS
from rules import rules
from rule_filtering_emails_languages import classify_emails

# Create the app
app = Flask(__name__)
# Set cors to allow for endpoints to be hit
CORS(app)

# Endpoint to get all classified emails
@app.route('/emails', methods=['GET'])
def get_emails():
    emails = classify_emails(rules)
    return jsonify(emails)

# Update email category based on id
# NOTE: Ideally this would not need to call classify_emails() to return the datatype, but instead 
#       be connected to a database to store the email model object 
@app.route('/emails/<id>', methods=['PUT'])
def update_email_category(id):
    data = request.json
    category = data.get('newCategory')

    emails = classify_emails(rules)
    if int(id)-1 in emails['emails']:
        emails['emails'][int(id)-1]['category'] = category
        return jsonify({'message': 'Successfully updated email category', 'emails': emails['emails']})
    else:
        return jsonify({'message': 'Email was not found'}), 404
    
# Endpoint to get all rules
# NOTE: A database would be used to store the rules not a separate python file
@app.route('/rules', methods=['GET'])
def get_rules():
    return jsonify(rules)

# Endpoint to add another rule, given a name, language (en, nl, da) and keywords.
# NOTE: This new rule would only be available during that session of the website, 
#       in the future a database would store these rules
@app.route('/rules', methods=['POST'])
def add_rule():
    data = request.json
    category = data.get('category')
    language = data.get('language')
    keywords = data.get('keywords')

    if category not in rules:
        rules[category] = {"languages": {}}

    if "languages" not in rules[category]:
        rules[category]["languages"] = {}

    rules[category]["languages"][language] = keywords
    # Re-classify the emails with the new rules
    emails = classify_emails(rules)

    return jsonify({'message': 'Successfully added rule', 'rules': rules, 'emails': emails['emails']})

# Endpoint to edit a rule, only the keywords can be editied. 
@app.route('/rules', methods=['PUT'])
def edit_rule():
    data = request.json
    category = data.get('category')
    language = data.get('language')
    keywords = data.get('keywords')

    if category in rules and "languages" in rules[category]:
        rules[category]["languages"][language] = keywords
        # Re-classify the emails with the new rules
        emails = classify_emails(rules)
        return jsonify({'message': 'Successfully updated rule', 'rules': rules, 'emails': emails['emails']})
    else:
        return jsonify({'message': 'Category or language not found'}), 404

# Endpoint to delete a rule, only deleted for the period of the session
@app.route('/rules/<category>', methods=['DELETE'])
def delete_rule(category):
    if category in rules:
        del rules[category]
        return jsonify({'message': 'Successfully deleted rule', 'rules': rules})
    else:
        return jsonify({'message': 'Category not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)