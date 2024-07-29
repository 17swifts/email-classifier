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
