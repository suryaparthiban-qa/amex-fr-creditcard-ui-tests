import { GoldCardDetailsPageLocators } from '../locators/PageLocators.js';

export class GoldCardDetailsPage {
  constructor(page) {
    this.page = page;
    this.applyNowButton = GoldCardDetailsPageLocators.applyNowButton;
  }

  async proceedToApplication() {
    await this.page.click(this.applyNowButton);
  }
}
