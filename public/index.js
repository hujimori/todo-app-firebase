import { firestore } from './firebase';

window.onload = async () => {
  // データの追加
  const value = {
    task: 'hogehoge',
    status: 1,
    createdAt: new Date(),
  };

  await firestore.collection('todos').add(value);
};
