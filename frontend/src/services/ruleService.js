const API_URL = 'http://localhost:5000';

export const fetchRules = async () => {
    //   const response = await fetch(`${API_URL}/rules`);
    //   const data = await response.json();
    const data = {
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
      };
    return data;
};

export const addRule = async (rule) => {
    const response = await fetch(`${API_URL}/rules`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rule)
    });
    const data = await response.json();
    return data;
};

export const editRule = async (rule) => {
    const response = await fetch(`${API_URL}/rules`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(rule)
    });
    const data = await response.json();
    return data;
};

export const deleteRule = async (category) => {
    const response = await fetch(`${API_URL}/rules/${category}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
};
