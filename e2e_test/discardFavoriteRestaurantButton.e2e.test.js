/* eslint-disable no-undef */
Feature('Discard Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.container-Empty');
  I.see('Tidak Ada Data Yang Ditampilkan. Daftar Restoran Kosong.', '.container-Empty .loader h1');
});

Scenario('unliking a restaurant from Resto detail Page', async ({ I }) => {
  // Masuk Homepage
  I.amOnPage('/');

  // Klik Favoritkan resto dari halaman home
  I.waitForElement('.favButtonContainer', 5);
  I.seeElement('.favButtonContainer');
  I.click(locate('.favButtonContainer button').first());

  // Dapatkan nama resto yang baru saja di like dari halaman home
  const restaurantFirstElement = locate('.resto_card_nama h2').first();
  const RestaurantName = await I.grabTextFrom(restaurantFirstElement);

  const assert = require('assert');

  // Pindah ke halaman favorit
  I.amOnPage('/#/favorite');

  // Pastikan resto yang baru saja difavoritkan muncul di halaman favorit
  const favRestaurantFirstElement = locate('.resto_card_nama h2').first();
  const favRestaurantName = await I.grabTextFrom(favRestaurantFirstElement);

  // Memastikan resto di halaman favorit sama dengan yang sudah di like
  assert.strictEqual(RestaurantName, favRestaurantName);

  // Masuk ke detail resto
  I.seeElement('.resto_card a');
  I.click(locate('.resto_card a').first());

  // Unlike favorit resto dari detail
  I.waitForElement('.favButtonContainer', 5);
  I.seeElement('.favButtonContainer');
  I.click('.favButtonContainer button');

  // Kembali ke halaman favorit
  I.amOnPage('/#/favorite');

  // Pastikan bahwa sudah tidak ada lagi resto yang ada di halaman favorit
  I.waitForElement('.container-Empty', 5);
  I.seeElement('.container-Empty');
  I.see('Tidak Ada Data Yang Ditampilkan. Daftar Restoran Kosong.', '.container-Empty .loader h1');
});

Scenario('unliking a restaurant from Resto Populer list in home (/)', async ({ I }) => {
  // Masuk Homepage
  I.amOnPage('/');

  // Klik Favoritkan resto dari halaman home
  I.waitForElement('.favButtonContainer', 5);
  I.seeElement('.favButtonContainer');
  I.click(locate('.favButtonContainer button').first());

  // Dapatkan nama resto yang baru saja di like dari halaman home
  const restaurantFirstElement = locate('.resto_card_nama h2').first();
  const RestaurantName = await I.grabTextFrom(restaurantFirstElement);

  const assert = require('assert');

  // Pindah ke halaman favorit
  I.amOnPage('/#/favorite');

  // Pastikan resto yang baru saja difavoritkan muncul di halaman favorit
  const favRestaurantFirstElement = locate('.resto_card_nama h2').first();
  const favRestaurantName = await I.grabTextFrom(favRestaurantFirstElement);

  // Memastikan resto di halaman favorit sama dengan yang sudah di like
  assert.strictEqual(RestaurantName, favRestaurantName);

  // Kembali ke halaman Home
  I.amOnPage('/');

  // Unlike Resto dari Halaman Home
  I.waitForElement('.favButtonContainer', 5);
  I.seeElement('.favButtonContainer');
  I.click(locate('.favButtonContainer button').first());

  // Pindah ke halaman favorit
  I.amOnPage('/#/favorite');

  // Pastikan bahwa sudah tidak ada lagi resto yang ada di halaman favorit
  I.waitForElement('.container-Empty', 5);
  I.seeElement('.container-Empty');
  I.see('Tidak Ada Data Yang Ditampilkan. Daftar Restoran Kosong.', '.container-Empty .loader h1');
});
/* eslint-enable no-undef */