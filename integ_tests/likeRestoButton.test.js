import { LikeButtonInitiator } from '../src/scripts/utils/likeButton-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
/* eslint-disable no-undef */
describe('Liking a restaurant', () => {
  const dummyRestoId = { id: 1 };

  const initializeLikeButton = async (restoId) => {
    document.body.innerHTML = '<div class="favButtonContainer"></div>';
    await LikeButtonInitiator.init(restoId, document.querySelector('.favButtonContainer'));
  };

  beforeEach(async () => {
    await FavoriteRestoIdb.deleteResto(dummyRestoId.id);
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(dummyRestoId.id);
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await initializeLikeButton(dummyRestoId);
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();

  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await initializeLikeButton(dummyRestoId);
    expect(document.querySelector('[aria-label="dislike this restaurant"]')).toBeFalsy();

  });

  it('should be able to like the restaurant', async () => {
    await initializeLikeButton(dummyRestoId);
    document.querySelector(`#notFavoriteButton-${dummyRestoId.id}`).dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
  });

  it('should not add a Restaurant again when its already liked', async () => {
    await initializeLikeButton(dummyRestoId);
    await FavoriteRestoIdb.putResto({ id: 1 });
    document.querySelector(`#notFavoriteButton-${dummyRestoId.id}`).dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
  });

  it('should not add a Restaurant when it has no id', async () => {
    await initializeLikeButton({});
    document.querySelector('#notFavoriteButton-undefined').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('should save the restaurant with correct data', async () => {
    const restaurant = { id: 1, name: 'Test Restaurant', rating: 4.5 };
    await FavoriteRestoIdb.putResto(restaurant);
    const savedResto = await FavoriteRestoIdb.getResto(restaurant.id);
    expect(savedResto).toEqual(restaurant);
  });

  it('should not throw error if like button is not available in the DOM', async () => {
    document.body.innerHTML = '';
    await expect(async () => {
      await initializeLikeButton(dummyRestoId);
      document.querySelector(`#notFavoriteButton-${dummyRestoId.id}`).dispatchEvent(new Event('click'));
    }).not.toThrow();
  });

}
);
/* eslint-enable no-undef */