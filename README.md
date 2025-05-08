# Amex France Credit Card UI Test Automation

## 📌 Objective

This UI test automation project validates the **Credit Card Application Flow** for **American Express France** using **Playwright**.

### 🔗 Test Scenario Flow

1. **Homepage**  
   Visit: [https://www.americanexpress.com/fr-fr/](https://www.americanexpress.com/fr-fr/)  
   Click: “Cartes Particuliers”

2. **All Cards Page**  
   Visit: [FR All Cards](https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-proprietaires/)  
   Click: “En savoir plus” under “Carte Gold American Express”

3. **Gold Card Details Page**  
   Visit: [Gold Card Description](https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold)  
   Click: “Demandez votre carte”

4. **Application Form Page**  
   Fill dummy values in `First Name` and `Last Name` fields  
   Click: “Sauvegarder et Continuer”

---

## 📂 Project Structure

```bash
PlaywrightAssignment/
├── tests/
│   └── cardApp.spec.js                 # Main test file
├── pages/
│   ├── LandingPage.js                  # Homepage interactions
│   ├── CardSelectionPage.js            # All cards page interactions
│   ├── GoldCardDetailsPage.js          # Gold card details page
│   └── ApplicationFormPage.js          # Final application form
├── locators/
│   └── PageLocators.js                 # Centralized locator repository
├── Utils/
│   └── TestData.js                     # URL test data
├── playwright.config.js                # Playwright configuration
└── README.md                           # Project documentation
