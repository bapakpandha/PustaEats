import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestoIdb = {
  async getResto(id) {
    if (id) {
      console.log('DEV_UTIL_LOG: getresto', id);
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    } else {
      console.log('DEV_UTIL_LOG: getresto Failed. No resto detected');
      return;
    }
  },
  async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putResto(resto) {
    if (resto.id) {
      console.log('DEV_UTIL_LOG: putresto', resto);
      return (await dbPromise).put(OBJECT_STORE_NAME, resto);
    } else {
      console.log('DEV_UTIL_LOG: putresto Failed. No resto detected');
      return;
    }
  },
  async deleteResto(id) {
    if (id) {
      try {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
      } catch (error) {
        console.warn('DEV_UTIL_LOG: delete Resto Error:', error);
        return;
      }

    } else {
      console.log('DEV_UTIL_LOG: getresto Failed. No resto detected');
      return;
    }
  },
};

export default FavoriteRestoIdb;
