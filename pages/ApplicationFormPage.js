import { ApplicationFormLocators } from '../locators/PageLocators.js';

export class ApplicationFormPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = ApplicationFormLocators.firstNameField;
    this.lastNameField = ApplicationFormLocators.lastNameField;
    this.continueButton = ApplicationFormLocators.continueButton;
  }

  async enterDummyData() {
    await this.page.fill(this.firstNameField, 'Jean');
    await this.page.fill(this.lastNameField, 'Dupont');
  }

  async clickContinue() {
    await this.page.click(this.continueButton);
  }
}
