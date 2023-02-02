import { db } from './firebase.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

console.log('hello');

try {
  const docRef = await addDoc(collection(db, 'todos'), {
    task: 'hoge',
    last: 'Lovelace',
    createdAt: new Date(),
  });
  console.log('Document written with ID: ', docRef.id);
} catch (e) {
  console.error('Error adding document: ', e);
}
