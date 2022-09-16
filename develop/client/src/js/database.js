import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => console.error('putDb not implemented');

export const getDb = async () => {
  console.error('getDb not implemented');
  const contactDb = await openDB('content', 1);

  const tx = contactDb.transaction('content', 'readonly');

  const store = tx.objectStore('content');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  return result;
};


initdb();
