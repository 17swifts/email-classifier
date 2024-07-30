import spacy
from spacy.language import Language
from spacy_language_detection import LanguageDetector
from collections import defaultdict
import json
import os

# Load the language detector pipeline 
def get_lang_detector(nlp, name):
    return LanguageDetector(seed=42)  # We use the seed 42

Language.factory("language_detector", func=get_lang_detector) 

# Load spaCy language models
nlp_en = spacy.load('en_core_web_sm')
nlp_nl = spacy.load('nl_core_news_sm')
nlp_da = spacy.load('da_core_news_sm')
nlp_en.add_pipe('language_detector', last=True)
nlp_nl.add_pipe('language_detector', last=True)
nlp_da.add_pipe('language_detector', last=True)

# Function to detect language using spaCy
def detect_language(text):
    if nlp_nl(text)._.language['language'] == 'nl':
        return 'nl'
    if nlp_da(text)._.language['language'] == 'da':
        return 'da'
    return 'en'

# Function to classify emails based on rules
def classify_email(email, rules):
    content = f"{email['from']} {email['subject']} {email['body']}".lower()
    
    language = detect_language(content)

    # Count the number of keywords found
    keyword_counts = {category: 0 for category in rules.keys()}
    
    # Search text for keywords
    for category, keywords_dict in rules.items():
        keywords = keywords_dict['languages'].get(language, [])
        for keyword in keywords:
            keyword_counts[category] += content.count(keyword)
    
    # Determine category with the highest keyword count
    max_count = max(keyword_counts.values())
    best_category = [category for category, count in keyword_counts.items() if count == max_count]
    
    if max_count == 0:
        return 'Junk'  # If no keywords matched, classify as Junk
    return best_category[0]  # Return the category with the highest count

# Function to export which classifies all emails 
def classify_emails(rules):
    # Load the JSON data
    current_dir = os.path.dirname(__file__)
    with open(os.path.join(current_dir, 'data', 'ShipsterAssignment.json'), 'r', encoding='utf-8') as file:
        data = json.load(file)

    emails = data['emails']

    # Initialize dictionaries to hold classified emails
    classified_emails = defaultdict(list)

    # Classify each email
    for email in emails:
        category = classify_email(email, rules)
        email['category'] = category
        classified_emails['emails'].append(email)

    # Convert defaultdict to a regular dictionary for output
    classified_emails = dict(classified_emails)
    return classified_emails
