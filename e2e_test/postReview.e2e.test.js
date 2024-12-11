/* eslint-disable no-undef */
const assert = require('assert');

Feature('Post Review of a Restaurant');


Scenario('Post a Review in a Restaurant', async ({ I }) => {

  // Masuk Halaman Utama
  I.amOnPage('/');

  // Masuk ke salah detail resto dari halaman home
  I.waitForElement('.resto_card a', 5);
  I.seeElement('.resto_card a');
  I.click(locate('.resto_card a').first());

  // Memastikan adanya elemen form review
  I.waitForElement('.add-review', 5);
  I.seeElement('input#addReviewName');
  I.seeElement('input#addReviewPost');
  I.seeElement('button#submitAddreview');

  // Buat variabel isi review dan username review
  const reviewText = 'E2E Post Review text';
  const reviewUsername = 'Username e2e';

  // Input dan submit review
  I.fillField('input#addReviewName', reviewUsername);
  I.fillField('input#addReviewPost', reviewText);
  I.click('button#submitAddreview');

  // Pastikan kesamaan username review terakhir
  I.waitForElement('.detail-review-item-content p#name', 5);
  const lastReviewUsername = locate('.detail-review-item-content p#name').last();
  const lastUserName = await I.grabTextFrom(lastReviewUsername);
  assert.strictEqual(reviewUsername, lastUserName);

  // Pastikan kesamaan Isi review terakhir
  const lastReviewText = locate('.detail-review-item-content p#reviewContent').last();
  const lastReviewContent = await I.grabTextFrom(lastReviewText);
  assert.strictEqual(reviewText, lastReviewContent);

});
/* eslint-enable no-undef */