/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.container-Empty');
  I.see('Tidak Ada Data Yang Ditampilkan. Daftar Restoran Kosong.', '.container-Empty .loader h1');
});

Scenario('liking a restaurant from Resto detail', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto_card a', 5);
  I.seeElement('.resto_card a');
  I.click(locate('.resto_card a').first());

  I.waitForElement('.favButtonContainer', 5);
  I.seeElement('.favButtonContainer');
  I.click('.favButtonContainer button');

  const restaurantFirstElement = locate('.detail_resto.judul_resto').first();
  const RestaurantName = await I.grabTextFrom(restaurantFirstElement);

  const assert = require('assert');

  I.amOnPage('/#/favorite');

  const favRestaurantFirstElement = locate('.resto_card_nama h2').first();
  const favRestaurantName = await I.grabTextFrom(favRestaurantFirstElement);

  assert.strictEqual(RestaurantName, favRestaurantName);
});

Scenario('liking a restaurant from Resto Populer list in home (/)', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.favButtonContainer', 5);
  I.seeElement('.favButtonContainer');
  I.click(locate('.favButtonContainer button').first());

  const restaurantFirstElement = locate('.resto_card_nama h2').first();
  const RestaurantName = await I.grabTextFrom(restaurantFirstElement);

  const assert = require('assert');

  I.amOnPage('/#/favorite');

  const favRestaurantFirstElement = locate('.resto_card_nama h2').first();
  const favRestaurantName = await I.grabTextFrom(favRestaurantFirstElement);

  assert.strictEqual(RestaurantName, favRestaurantName);
});

/* eslint-enable no-undef */