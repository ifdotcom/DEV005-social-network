// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, doc, deleteDoc, collection, addDoc, getDocs, onSnapshot, orderBy, updateDoc, getDoc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDr_i_8XfqSbS2ej-v0w-r6Wy2FCpmL_sw',
//   authDomain: 'social-network-b08d0.firebaseapp.com',
//   projectId: 'social-network-b08d0',
//   storageBucket: 'social-network-b08d0.appspot.com',
//   messagingSenderId: '611309449971',
//   appId: '1:611309449971:web:52cdfd8a7f8dfccac87d86',
// };
const firebaseConfig = {
  apiKey: 'AIzaSyBpUAmyGv1olj6CsTJ6A8rZtCvK3XgzpXA',
  authDomain: 'myfirstproyect-bb58e.firebaseapp.com',
  projectId: 'myfirstproyect-bb58e',
  storageBucket: 'myfirstproyect-bb58e.appspot.com',
  messagingSenderId: '849896345504',
  appId: '1:849896345504:web:4482e1224f5e61429d5ec5',
  measurementId: 'G-5HVRKB5KL9',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Función para guardar posts
export const savePost = (idUser, post, date) => {
  addDoc(collection(db, 'posts'), { idUser, post, date });
};

export const getPosts = () => getDocs(collection(db, 'posts'));

export const onGetPosts = (callback) => onSnapshot(collection(db, 'posts'), orderBy('datePost', 'des'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
export const getPost = (id) => getDoc(doc(db, 'posts', id));
export const editPost = (id, newPost) => updateDoc(doc(db, 'posts', id), newPost);
