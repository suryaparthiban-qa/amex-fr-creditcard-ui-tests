import { LandingPageLocators } from '../locators/PageLocators.js';

export class LandingPage {
  constructor(page) {
    this.page = page;
    this.personalCardsLink = LandingPageLocators.personalCardsLink;
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async clickPersonalCards() {
    await this.page.click(this.personalCardsLink);
  }
}
