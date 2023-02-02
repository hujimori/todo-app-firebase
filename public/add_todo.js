import { db } from './firebase.js';
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

console.log('hello');

// データの追加
try {
  const docRef = await addDoc(collection(db, 'todos'), {
    task: 'hoge',
    status: 1,
    createdAt: new Date(),
  });
  console.log('Document written with ID: ', docRef.id);
} catch (e) {
  console.error('Error adding document: ', e);
}

// データの読み取り（1件）
const docID = 'x7uEJwdW5q4mcU4xhMI0';
const docRef = doc(db, 'todos', docID);
const docSnap = await getDoc(docRef);
console.log(docSnap);
console.log(docSnap.id);
console.log(docSnap.data());

class Todo {
  constructor(task, status, createdAt) {
    this.task = task;
    this.status = status;
    this.createdAt = createdAt;
  }

  toString() {
    return this.task + ',' + this.status + ',' + this.createdAt;
  }
}

const todoConverter = {
  toFirestore: (todo) => {
    return {
      task: todo.task,
      status: todo.status,
      createdAt: todo.createdAt,
    };
  },

  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Todo(data.task, data.status, data.createdAt);
  },
};

const ref = doc(db, 'todos', docID).withConverter(todoConverter);
const docSnap2 = await getDoc(ref);
if (docSnap2.exists()) {
  const todo = docSnap2.data();

  console.log(todo.toString());
} else {
  console.log('No such document');
}

const washingtoRef = doc(db, 'todos', docID);

await updateDoc(washingtoRef, {
  status: 0,
});

const ref2 = doc(db, 'todos', docID).withConverter(todoConverter);
const docSnap3 = await getDoc(ref);
if (docSnap3.exists()) {
  const todo = docSnap3.data();

  console.log(todo.toString());
} else {
  console.log('No such document');
}

const frankDocRef = doc(db, 'users', 'frank');
await setDoc(frankDocRef, {
  name: 'Frank',
  favorites: {
    food: 'Pizza',
    color: 'Blue',
    subject: 'recess',
  },
  age: 12,
});

await updateDoc(frankDocRef, {
  age: 13,
  'favorites.color': 'Red',
});

const frankDocRef2 = doc(db, 'users', 'frank');
await setDoc(frankDocRef2, {
  name: 'Frank',
  favorites: {
    food: 'Pizza',
    color: 'Blue',
    subject: 'Recess',
  },
  age: 12,
}).then(function () {
  console.log('Frank created');
});

const frankDocRef3 = doc(db, 'users', 'frank');
await updateDoc(frankDocRef3, {
  favorites: {
    food: 'Ice Cream',
  },
}).then(function () {
  console.log('Frank created');
});
