export const LandingPageLocators = {
  personalCardsLink: "//a//p[text()='Cartes Particuliers']"
};

export const CardSelectionPageLocators = {
  goldCardLearnMoreButton: "//div[contains(text(),'Carte Gold American')]/ancestor::div[3]//a[text()='En savoir plus']"
};

export const GoldCardDetailsPageLocators = {
  applyNowButton: 'a:has-text("Demandez votre carte")'
};

export const ApplicationFormLocators = {
  firstNameField: '#fieldControl-input-firstName',
  lastNameField: '#fieldControl-input-lastName',
  continueButton: 'button:has-text("Sauvegarder et Continuer")'
};
