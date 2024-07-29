const API_URL = 'http://localhost:5000';

export const fetchEmails = async () => {
    // const response = await fetch(`${API_URL}/emails`);
    // const data = await response.json();
    const data = 
          [{
            "id": 1,
            "category": "Immediate Attention",
            "sender": "oliver.smith@techinnovators.com",
            "to": "vishv@shippingcompany.com",
            "subject": "Urgent: Quarterly Report Submission",
            "body": "Hi Vishv,\n\nI hope this email finds you well. I'm reaching out regarding the urgent matter of our quarterly financial report. As you know, our board meeting is scheduled for tomorrow morning, and we absolutely need this report to be completed and submitted by end of day today.\n\nKey points to remember:\n1. Ensure all expenses sender the past quarter are included and categorized correctly.\n2. Double-check all figures for accuracy, especially our revenue projections and cost analysis.\n3. Include the updated charts we discussed in our last meeting.\n4. If you encounter any discrepancies or need clarification, please don't hesitate to reach out to Jessica in the finance team.\n\nI understand this is a tight deadline, but it's crucial for our strategic planning. Your hard work on this is greatly appreciated.\n\nLet me know if you need any support or resources to get this done.\n\nThanks,\nOliver Smith\nCFO, Tech Innovators"
          },
          {
            "id": 2,
            "category": "Immediate Attention",
            "sender": "karin.van.dijk@zorgmed.nl",
            "to": "vishv@shippingcompany.com",
            "subject": "Onmiddellijke Actie Vereist: Veiligheidstraining",
            "body": "Beste Vishv,\n\nIk hoop dat deze e-mail je in goede gezondheid bereikt. Ik schrijf je met betrekking tot een dringende kwestie: de verplichte veiligheidstraining die alle medewerkers vóór het einde van deze week moeten afronden.\n\nHier zijn de belangrijkste punten:\n1. De training bestaat uit 5 modules, die elk ongeveer 30 minuten duren.\n2. Na elke module is er een korte quiz om je begrip te testen.\n3. Je moet een score van minstens 80% behalen om te slagen.\n4. Deze training is essentieel voor het behoud van onze ISO-certificering.\n\nAls je problemen ondervindt bij het inloggen of technische problemen hebt, neem dan onmiddellijk contact op met onze IT-afdeling op it@zorgmed.nl.\n\nBegrijp alsjeblieft de urgentie hiervan - het niet voltooien van deze training kan gevolgen hebben voor je werkstatus.\n\nAls je vragen hebt over de inhoud van de training, aarzel dan niet om contact op te nemen met je teamleider of met mij.\n\nBedankt voor je snelle aandacht hiervoor.\n\nMet vriendelijke groet,\nKarin van Dijk\nHR Manager, ZorgMed"
          },
          {
            "id": 3,
            "category": "Immediate Attention",
            "sender": "marcel.hansen@globalservices.com",
            "to": "vishv@shippingcompany.com",
            "subject": "Contract Renewal Discussion - ABC Corp",
            "body": "Hi Vishv,\n\nI trust this email finds you well. We need to discuss the renewal terms for our contract with ABC Corp as soon as possible. Given the importance of this client and the complexity of the agreement, I'd like to schedule a meeting no later than tomorrow afternoon.\n\nKey points for discussion:\n1. Review of current contract terms and performance metrics\n2. Proposed changes to pricing structure\n3. New service level agreements (SLAs)\n4. Potential expansion of services\n5. Contract duration and exit clauses\n\nPlease come prepared with:\n- A summary of our performance against current KPIs\n- Any feedback or requests sender ABC Corp's team\n- Your recommendations for improvements or changes\n\nI've attached the current contract and our internal analysis for your review. Let's aim to finalize our renewal strategy by the end of this week, as we need to present our proposal to ABC Corp next Tuesday.\n\nPlease confirm your availability for tomorrow afternoon, and let me know if you need any additional information to prepare.\n\nBest regards,\nMarcel Hansen\nAccount Manager, Global Services"
          },
          {
            "id": 4,
            "category": "Immediate Attention",
            "sender": "it.support@meditech.com",
            "to": "vishv@shippingcompany.com",
            "subject": "System Maintenance Notification - Action Required",
            "body": "Dear Vishv,\n\nThis is an important notification regarding scheduled system maintenance that will impact all MediTech systems.\n\nMaintenance Details:\n- Date: Tonight (July 18, 2024)\n- Time: 11:00 PM to 2:00 AM (3 hours)\n- Affected Systems: All MediTech platforms, including email, CRM, and financial systems\n\nRequired Actions:\n1. Save all work and log off sender all MediTech systems before 10:45 PM.\n2. Do not attempt to log in during the maintenance window.\n3. Clear your browser cache before logging in tomorrow morning.\n\nPurpose of Maintenance:\n- Upgrading our cybersecurity infrastructure\n- Implementing performance enhancements to our database systems\n- Applying critical patches to address recently identified vulnerabilities\n\nPost-Maintenance:\n- You may need to reset your password upon first login after the maintenance.\n- Please report any issues to the IT Support team immediately.\n\nWe understand this may cause some inconvenience and appreciate your cooperation. If you have any critical tasks that must be completed during this time, please contact the IT Support team at ext. 5555 for assistance.\n\nThank you for your understanding and cooperation.\n\nBest regards,\nMediTech IT Support Team"
          },
          {
            "id": 5,
            "category": "Promotional",
            "sender": "nieuwsbrief@fashionworld.nl",
            "to": "vishv@shippingcompany.com",
            "subject": "Nieuwe Zomercollectie is Hier! Exclusieve Kortingen voor Jou",
            "body": "Beste Vishv,\n\nDe zon schijnt, de temperaturen stijgen, en onze gloednieuwe zomercollectie is eindelijk gearriveerd! Als een van onze gewaardeerde klanten willen we jou als eerste laten profiteren van onze exclusieve aanbiedingen.\n\nHoogtepunten van onze nieuwe collectie:\n1. Luchtige linnen jurken in trendy pastelkleuren\n2. Handgemaakte sandalen van duurzaam materiaal\n3. Stijlvolle zwemkleding voor alle lichaamstypen\n4. Lichtgewicht pakken perfect voor zomerse kantooroutfits\n\nExclusieve kortingen voor jou:\n- 50% korting op geselecteerde items uit de nieuwe collectie\n- 30% korting op alle accessoires bij aankoop van een kledingstuk\n- Gratis verzending bij bestellingen boven €75\n\nDeze aanbiedingen zijn slechts geldig tot en met 25 juli, dus wees er snel bij!\n\nBezoek onze website www.fashionworld.nl en gebruik de code ZOMER2024 bij het afrekenen om van deze kortingen te profiteren.\n\nWe kunnen niet wachten om te zien hoe jij onze nieuwe collectie stylet. Deel je look op Instagram met #FashionWorldZomer voor de kans om een €200 shoptegoed te winnen!\n\nStralende zomergroeten,\nHet FashionWorld Team"
          },
          {
            "id": 6,
            "category": "Promotional",
            "sender": "offers@adventuretravels.dk",
            "to": "vishv@shippingcompany.com",
            "subject": "Fantastiske Rejsetilbud til Dig! Spar op til 50% på Drømmerejsen",
            "body": "Hej Vishv,\n\nEr du klar til at forvandle dine rejsedrømme til virkelighed? Vi har samlet en række fantastiske tilbud, der er skræddersyet til eventyrlystne rejsende som dig!\n\nVores Bedste Tilbud:\n1. Eksotisk Bali Retreat: 10 dage fra kun 8.995 kr (normalpris 17.990 kr)\n   Inkluderer: Flyrejse, luksusresort, yoga-sessioner og kulturelle udflugter\n\n2. Safari Eventyr i Tanzania: 8 dage fra 15.500 kr (normalpris 29.999 kr)\n   Inkluderer: Flyrejse, safarilodge, guidede game drives, besøg hos Masai-stamme\n\n3. Island Rundrejse: 6 dage fra 6.995 kr (normalpris 13.990 kr)\n   Inkluderer: Flyrejse, bil, overnatninger, Den Gyldne Cirkel, og Blue Lagoon entre\n\n4. Græsk Ø-Hop: 12 dage fra 9.995 kr (normalpris 18.990 kr)\n   Inkluderer: Flyrejse, færger mellem øerne, overnatninger, guidede ture\n\nAlle pakker kan tilpasses dine ønsker og behov. Book inden 31. juli og få en gratis opgradering til deluxe-værelse på dit første hotel!\n\nHusk, disse priser er eksklusive for vores loyale kunder og gælder kun ved booking gennem dette link: www.adventuretravels.dk/exclusive-vishv\n\nHar du spørgsmål eller ønsker at skræddersy din rejse? Ring til os på +45 xx xx xx xx, vi er klar til at hjælpe!\n\nGod rejse!\n\nMed venlig hilsen,\nAdventure Travels Team"
        },
        {
        "id": 7,
        "category": "Promotional",
        "sender": "promotions@techstore.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Mega Sale op Elektronica! Tot 70% Korting - Alleen deze Week",
        "body": "Beste Vishv,\n\nBereid je voor op de grootste elektronicaverkoop van het jaar! Onze Mega Sale is nu live, met ongelooflijke kortingen tot wel 70% op topmerken en de nieuwste gadgets.\n\nHoogtepunten van onze sale:\n\n1. Smartphones:\n   - Nieuwste iPhone 15 Pro: Nu €899 (normaal €1199)\n   - Samsung Galaxy S24: Nu €749 (normaal €999)\n\n2. Laptops:\n   - MacBook Air (M3 chip): Nu €999 (normaal €1299)\n   - Dell XPS 13: Nu €899 (normaal €1199)\n\n3. Smart Home:\n   - Google Nest Hub: Nu €59 (normaal €99)\n   - Philips Hue Starterpack: Nu €99 (normaal €179)\n\n4. Audio:\n   - Sony WH-1000XM5 koptelefoon: Nu €279 (normaal €399)\n   - Bose SoundLink Revolve+ II: Nu €199 (normaal €299)\n\n5. Gaming:\n   - PlayStation 5 bundel: Nu €449 (normaal €599)\n   - Nintendo Switch OLED: Nu €299 (normaal €349)\n\nExtra voordelen:\n- Gratis bezorging bij bestellingen boven €50\n- 2 jaar extra garantie bij aankopen boven €500\n- 30 dagen niet-goed-geld-terug garantie\n\nDeze aanbiedingen zijn geldig t/m 25 juli of zolang de voorraad strekt. Wees er snel bij, want op=op!\n\nShop nu op www.techstore.com/megasale en gebruik code MEGA70 voor een extra 5% korting op je gehele bestelling.\n\nMis deze kans niet om te besparen op de beste technologie!\n\nTechnische groeten,\nHet TechStore Team"
        },
        {
        "id": 8,
        "category": "Updates",
        "sender": "newsletter@mealdelights.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Delicious Meals Delivered to Your Doorstep - Special Offer Inside!",
        "body": "Hi Vishv,\n\nTired of wondering what’s for dinner? Let Meal Delights take care of your meals with our delicious, chef-prepared dishes delivered right to your doorstep!\n\nThis week’s special offers:\n\n1. New Customer Discount: 50% off your first week of meals\n2. Refer a Friend: Get a free week of meals when your friend signs up\n3. Summer Menu Launch: Try our new seasonal specials\n\nWhy choose Meal Delights?\n\n• Fresh, locally-sourced ingredients\n• Customizable meal plans (vegetarian, vegan, keto, paleo options available)\n• No commitment - pause or cancel anytime\n• Eco-friendly packaging\n\nThis Week’s Menu Highlights:\n\n1. Grilled Lemon Herb Chicken with Quinoa Salad\n2. Spicy Tofu Stir-Fry with Brown Rice (Vegan)\n3. Atlantic Salmon with Roasted Vegetables (Keto-friendly)\n4. Mediterranean Chickpea Bowl (Vegetarian)\n5. BBQ Pulled Pork with Sweet Potato Mash\n\nHow it works:\n1. Choose your meal plan (2, 4, or 6 meals per week)\n2. Select your dishes sender our weekly rotating menu\n3. Receive your meals in refrigerated boxes\n4. Heat and enjoy in minutes!\n\nReady to simplify your meal planning? Visit www.mealdelights.com/vishv to get started and use code VISHV50 for 50% off your first week!\n\nQuestions? Our customer service team is available 24/7 at support@mealdelights.com.\n\nBon appétit!\n\nThe Meal Delights Team"
        },
        {
        "id": 9,
        "category": "Updates",
        "sender": "noreply@europabank.nl",
        "to": "vishv@shippingcompany.com",
        "subject": "Uw Maandelijks Bankafschrift is Beschikbaar - Juli 2024",
        "body": "Beste Vishv,\n\nUw maandelijkse bankafschrift voor de periode 1 juli 2024 tot en met 31 juli 2024 is nu beschikbaar voor inzage in uw online bankomgeving.\n\nHoofdpunten van uw afschrift:\n\n1. Saldo per 1 juli 2024: €5.432,10\n2. Totaal inkomende transacties: €3.245,67\n3. Totaal uitgaande transacties: €2.876,54\n4. Saldo per 31 juli 2024: €5.801,23\n\nBelangrijke transacties deze maand:\n- Salarisstorting: €2.950,00 (15/07/2024)\n- Hypotheekafschrijving: €1.200,00 (01/07/2024)\n- Energierekening: €145,67 (05/07/2024)\n\nOm uw volledige afschrift te bekijken:\n1. Log in op www.europabank.nl\n2. Ga naar ‘Mijn Rekeningen’\n3. Selecteer ‘Bankafschriften’\n4. Download het PDF-bestand voor juli 2024\n\nBelangrijke mededelingen:\n- Onze rentetarieven voor spaarrekeningen zijn verh…"
        },
        {
        "id": 10,
        "category": "Updates",
        "sender": "support@companyX.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Important Notice: Server Downtime",
        "body": "Dear Vishv,\n\nI hope this message finds you well. This is to inform you about an upcoming server downtime scheduled for maintenance.\n\nMaintenance Details:\n- Date: August 5, 2024\n- Time: 10:00 PM to 2:00 AM (4 hours)\n- Affected Systems: CompanyX’s internal servers, including email, CRM, and project management tools\n\nAction Required:\n1. Please save all your work and log out of all systems before 9:45 PM on the maintenance day.\n2. Avoid accessing any systems during the maintenance window.\n3. After maintenance, clear your browser cache before logging in.\n\nPurpose of Maintenance:\n- Upgrade server hardware for improved performance\n- Apply security patches to ensure data integrity\n- Enhance system stability and reliability\n\nWe apologize for any inconvenience caused and appreciate your cooperation.\n\nIf you have any urgent tasks, please complete them before the maintenance period or reach out to our support team at support@companyX.com.\n\nThank you for your understanding.\n\nBest regards,\nCompanyX IT Support Team"
        },
        {
        "id": 11,
        "category": "Promotional",
        "sender": "marketing@startupvision.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Exclusive Invitation: Startup Vision Summit 2024",
        "body": "Hello Vishv,\n\nWe are thrilled to invite you to the Startup Vision Summit 2024, the premier event for entrepreneurs and innovators in the tech industry.\n\nEvent Details:\n- Date: September 12-14, 2024\n- Location: Silicon Valley Convention Center, San Francisco, CA\n\nHighlights:\n- Keynote sessions with industry leaders\n- Panels and discussions on emerging trends\n- Networking opportunities with investors and fellow entrepreneurs\n- Startup pitch competitions\n- Product showcases and demos\n\nAs a valued member of our community, we believe this summit will provide valuable insights and networking opportunities for you.\n\nRegistration is now open. Secure your spot today at www.startupvision.com/summit2024.\n\nWe look forward to welcoming you to the Startup Vision Summit!\n\nBest regards,\nThe Startup Vision Team"
        },
        {
        "id": 12,
        "category": "Promotional",
        "sender": "info@realestatefirm.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Exclusive Property Listings: Your Dream Home Awaits!",
        "body": "Hi Vishv,\n\nAre you in the market for a new home or investment property? Discover exclusive listings tailored to your preferences!\n\nFeatured Properties:\n\n1. Modern City Apartment:\n   - Location: Downtown, close to major tech firms\n   - Price: €750,000\n   - Features: 2 bedrooms, city views, fitness center\n\n2. Suburban Family House:\n   - Location: Quiet neighborhood, excellent schools\n   - Price: €550,000\n   - Features: 3 bedrooms, large garden, garage\n\n3. Coastal Villa:\n   - Location: Scenic coastal area, panoramic ocean views\n   - Price: €1,200,000\n   - Features: 4 bedrooms, private beach access, infinity pool\n\n4. Investment Opportunity:\n   - Location: Upcoming business district\n   - Price: €1,500,000\n   - Features: Commercial space, high rental yield\n\nEach property is carefully curated to meet your lifestyle or investment needs. Whether you’re looking for a cozy apartment or a luxurious villa, we have options that match your criteria.\n\nSchedule a private viewing or request more information by contacting our real estate advisors at info@realestatefirm.com.\n\nLet us help you find your dream property!\n\nBest regards,\nThe Real Estate Firm Team"
        },
        {
        "id": 13,
        "category": "Updates",
        "sender": "updates@healthyliving.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Your Weekly Wellness Tips: Stay Healthy and Energized",
        "body": "Hi Vishv,\n\nWelcome to your weekly dose of wellness tips sender Healthy Living!\n\nThis Week’s Tips:\n1. Boost Your Immunity: Try incorporating more vitamin C-rich foods like oranges, strawberries, and bell peppers into your diet.\n2. Stay Hydrated: Keep a reusable water bottle with you throughout the day to ensure you’re drinking enough water.\n3. Get Moving: Take short breaks during work to stretch or take a quick walk to increase circulation and reduce stiffness.\n4. Mindful Eating: Practice mindful eating by savoring each bite and paying attention to your body’s hunger and fullness cues.\n5. Stress Management: Take time for relaxation activities such as deep breathing, meditation, or yoga to reduce stress levels.\n\nRemember, small changes can lead to big improvements in your overall well-being!\n\nStay tuned for more tips next week. Have a healthy and energized week ahead!\n\nBest regards,\nThe Healthy Living Team"
        },
        {
        "id": 14,
        "category": "Updates",
        "sender": "service@creditcardbank.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Your Monthly Credit Card Statement - July 2024",
        "body": "Dear Vishv,\n\nYour monthly credit card statement for July 2024 is now available for viewing.\n\nKey Highlights:\n- Previous Balance: €1,200.00\n- Payments and Credits: -€1,200.00\n- Purchases and Charges: €980.00\n- Current Balance: €980.00\n- Minimum Payment Due: €50.00\n\nFor a detailed breakdown of your transactions, please log in to your online banking account or view your statement via the mobile app.\n\nIf you have any questions or notice any discrepancies, please contact our customer service team immediately at service@creditcardbank.com.\n\nThank you for choosing Credit Card Bank.\n\nBest regards,\nThe Credit Card Bank Team"
        },
        {
        "id": 15,
        "category": "Updates",
        "sender": "subscriptions@technewsweekly.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Your Tech News Weekly Digest",
        "body": "Hello Vishv,\n\nHere’s your weekly digest of the latest in tech news and trends!\n\nTop Stories:\n1. Apple’s Latest Product Launch Event Recap\n2. Cybersecurity Threats and Solutions for Businesses\n3. Future of Remote Work: Hybrid Models and Technology Integration\n4. Advances in Artificial Intelligence and Machine Learning\n\nFeatured Article:\n- How 5G Technology Is Transforming Healthcare\n\nStay informed and ahead in the fast-paced world of technology!\n\nFor more tech insights, visit www.technewsweekly.com.\n\nBest regards,\nThe Tech News Weekly Team"
        },
        {
        "id": 16,
        "category": "Immediate Attention",
        "sender": "alerts@yourbank.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Important Account Notification: Unauthorized Access Attempt",
        "body": "Dear Vishv,\n\nWe detected an unauthorized login attempt on your online banking account.\n\nDetails:\n- Date: July 17, 2024\n- Time: 3:45 PM (UTC)\n- IP Address: 192.168.1.1\n- Location: [City, Country]\n\nAction Taken:\n- For security reasons, we have temporarily disabled access to your account.\n- No transactions were allowed sender the unauthorized attempt.\n\nWhat You Should Do:\n1. Verify your recent account activity and transactions for any unrecognized entries.\n2. Change your online banking password immediately by visiting www.yourbank.com and selecting ‘Forgot Password’.\n3. Contact our customer support team at alerts@yourbank.com if you need further assistance or notice any suspicious activity.\n\nProtecting your account security is our top priority. We apologize for any inconvenience caused and thank you for your prompt attention to this matter.\n\nBest regards,\nYour Bank Security Team"
        },
        {
        "id": 17,
        "category": "Updates",
        "sender": "notifications@socialmedia.com",
        "to": "vishv@shippingcompany.com",
        "subject": "New Message Notification",
        "body": "Hi Vishv,\n\nYou have received a new message on your social media account.\n\nMessage Details:\n- Sender: [Sender’s Name]\n- Date: July 18, 2024\n- Time: 10:30 AM\n\nTo view your message, please log in to your account at www.socialmedia.com.\n\nIf you have any questions or need assistance, feel free to contact our support team.\n\nBest regards,\nThe Social Media Team"
        },
        {
        "id": 18,
        "category": "Updates",
        "sender": "updates@traveladvisor.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Your Recent Trip to Thailand: Rate Your Experience",
        "body": "Hello Vishv,\n\nWe hope you enjoyed your recent trip to Thailand booked through Travel Advisor.\n\nWe would love to hear about your experience and any feedback you may have regarding the accommodations, activities, or our services.\n\nPlease take a moment to rate your trip and provide us with your valuable feedback by clicking on the following link: www.traveladvisor.com/rate-experience?bookingID=123456\n\nYour input helps us improve our services and create better travel experiences for our customers.\n\nThank you for choosing Travel Advisor. We look forward to serving you again!\n\nBest regards,\nThe Travel Advisor Team"
        },
        {
        "id": 19,
        "category": "Updates",
        "sender": "newsletter@jobseekers.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Weekly Job Alerts: New Opportunities Matched to Your Profile",
        "body": "Hi Vishv,\n\nHere are this week’s top job opportunities tailored for you!\n\nFeatured Jobs:\n1. Senior Software Engineer at Tech Innovators\n   - Location: Remote\n   - Apply by: August 1, 2024\n\n2. Marketing Manager at Global Services\n   - Location: New York, NY\n   - Apply by: August 3, 2024\n\n3. Financial Analyst at Finance Experts\n   - Location: London, UK\n   - Apply by: July 31, 2024\n\n4. Project Manager at Innovate Tech\n   - Location: San Francisco, CA\n   - Apply by: August 2, 2024\n\nExplore these opportunities and more by logging in to your JobSeekers account and applying directly.\n\nIf you have any questions or need assistance, please contact our support team at support@jobseekers.com.\n\nBest wishes in your job search!\n\nWarm regards,\nThe JobSeekers Team"
        },
        {
        "id": 20,
        "category": "Immediate Attention",
        "sender": "support@cloudstorage.com",
        "to": "vishv@shippingcompany.com",
        "subject": "Action Required: Storage Quota Exceeded",
        "body": "Dear Vishv,\n\nYour cloud storage account is reaching its allocated quota limit.\n\nDetails:\n- Current Usage: 95% of 50GB\n- Quota Limit: 50GB\n\nAction Required:\n1. Please review and delete unnecessary files or upgrade your storage plan to continue using our services without interruptions.\n2. Failure to take action may result in new file uploads being blocked or existing files becoming read-only.\n\nUpgrade Your Storage:\n- Visit www.cloudstorage.com/upgrade to explore our storage plans and choose the one that best suits your needs.\n\nIf you have any questions or need assistance, please contact our support team at support@cloudstorage.com.\n\nThank you for choosing CloudStorage.com.\n\nBest regards,\nThe CloudStorage Team"
        }];
    return data;
  };

//   export const fetchEmails = async () => {
//     const response = await fetch('http://localhost:5000/emails');
//     const data = await response.json();
//     return data;
//   };

  export const updateEmailCategory = async (email) => {
    const response = await fetch(`${API_URL}/emails/${email.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    });
    const data = await response.json();
    return data;
  };