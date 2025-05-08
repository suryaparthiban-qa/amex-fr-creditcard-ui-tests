import { CardSelectionPageLocators } from '../locators/PageLocators.js';

export class CardSelectionPage {
  constructor(page) {
    this.page = page;
    this.goldCardLearnMoreButton = CardSelectionPageLocators.goldCardLearnMoreButton;
  }

  async openGoldCardDetails() {
    await this.page.click(this.goldCardLearnMoreButton);
  }
}
