import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage.js';
import { CardSelectionPage } from '../pages/CardSelectionPage.js';
import { GoldCardDetailsPage } from '../pages/GoldCardDetailsPage.js';
import { ApplicationFormPage } from '../pages/ApplicationFormPage.js';
import { urls } from '../Utils/TestData.js';

test('FR Credit Card Application Flow', async ({ page }) => {
  const landing = new LandingPage(page);
  const cards = new CardSelectionPage(page);
  const goldCard = new GoldCardDetailsPage(page);
  const form = new ApplicationFormPage(page);

  await landing.navigateTo(urls.homepage);
  await landing.clickPersonalCards();

  await cards.openGoldCardDetails();
  await goldCard.proceedToApplication();

  await form.enterDummyData();
  await form.clickContinue();
});
