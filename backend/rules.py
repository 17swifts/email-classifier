from flask import Flask, request, jsonify

app = Flask(__name__)

# Define rules for classification with keywords for English, Dutch, and Danish
rules = {
    "Immediate Attention": {
        "languages": {
            "en": ["urgent", "immediate action", "asap", "attention required", "important", "as soon as possible", "please respond"],
            "nl": ["onmiddellijke actie", "dringend", "spoedig", "belangrijk", "actie vereist", "zo spoedig mogelijk"],
            "da": ["hastende", "omgående handling", "hurtigst muligt", "opmærksomhed kræves", "vigtig", "så hurtigt som muligt"]
        }
    },
    "Promotional": {
        "languages": {
            "en": ["sale", "discount", "promotion", "offer", "buy now", "limited time", "deal", "marketing", "use the code", "use code", "special offer"],
            "nl": ["uitverkoop", "korting", "promotie", "aanbieding", "koop nu", "beperkte tijd", "overeenkomst", "marketing", "gebruik de code", "gebruik code", "speciale aanbieding"],
            "da": ["udsalg", "rabat", "kampagne", "tilbud", "køb nu", "begrænset tid", "del", "markedsføring", "bruge koden", "brug kode", "special tilbud"]
        }
    },
    "Updates": {
        "languages": {
            "en": ["update", "news", "latest", "newsletter", "announcement", "new", "yearly", "monthly", "weekly"],
            "nl": ["update", "nieuws", "laatste", "nieuwsbrief", "aankondiging", "nieuw", "jaarlijks", "maandelijks", "wekelijks"],
            "da": ["opdatering", "nyheder", "seneste", "nyhedsbrev", "meddelelse", "ny", "årligt", "månedligt", "ugentligt"]
        }
    },
    "Junk": {
        "languages": {
            "en": ["unsubscribe", "spam", "lottery", "win", "prize", "claim"],
            "nl": ["uitschrijven", "spam", "loterij", "winnen", "prijs", "claim"],
            "da": ["afmeld", "spam", "lotteri", "vinde", "præmie", "kræv"]
        }
    }
}

@app.route('/rules', methods=['GET'])
def get_rules():
    return jsonify(rules)

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

    return jsonify({'message': 'Rule added successfully', 'rules': rules})

@app.route('/rules', methods=['PUT'])
def edit_rule():
    data = request.json
    category = data.get('category')
    language = data.get('language')
    keywords = data.get('keywords')

    if category in rules and "languages" in rules[category]:
        rules[category]["languages"][language] = keywords
        return jsonify({'message': 'Rule updated successfully', 'rules': rules})
    else:
        return jsonify({'message': 'Category or language not found'}), 404

@app.route('/rules/<category>', methods=['DELETE'])
def delete_rule(category):
    if category in rules:
        del rules[category]
        return jsonify({'message': 'Rule deleted successfully', 'rules': rules})
    else:
        return jsonify({'message': 'Category not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
