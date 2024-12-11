import { LikeButtonInitiator } from '../src/scripts/utils/likeButton-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
/* eslint-disable no-undef */
describe('Discarding Restaurant from Favorite', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="favButtonContainer"></div>';
  };

  const dummyRestoId = { id: 1 };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(dummyRestoId.id);
  });

  it('should display unlike widget when the Restaurant has been liked', async () => {
    await LikeButtonInitiator.init(dummyRestoId, document.querySelector('.favButtonContainer'));
    expect(document.querySelector('[aria-label="dislike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the Restaurant has been liked', async () => {
    await LikeButtonInitiator.init(dummyRestoId, document.querySelector('.favButtonContainer'));
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked Restaurant from the list', async () => {
    await LikeButtonInitiator.init(dummyRestoId, document.querySelector('.favButtonContainer'));
    document.querySelector(`#FavoriteButton-${dummyRestoId.id}`).dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked Restaurant is not in the list', async () => {
    await LikeButtonInitiator.init(dummyRestoId, document.querySelector('.favButtonContainer'));
    await FavoriteRestoIdb.deleteResto(1);
    document.querySelector(`#FavoriteButton-${dummyRestoId.id}`).dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
/* eslint-enable no-undef */