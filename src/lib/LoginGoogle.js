import {
  signOut, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';

import { auth } from './firebase.js';

export const buttonLoginG = (button, navigateTo) => {
  button.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      if (credentials) {
        // console.log(credentials); //eslint-disable-line
        navigateTo('/dashboard');
      }
    } catch (error) {
      // console.log(error); //eslint-disable-line
    }
  });
};

export const buttonSignOut = (button, navigateTo) => {
  button.addEventListener('click', async () => {
    // const auth = getAuth();
    signOut(auth).then(() => {
      navigateTo('/');
      // console.log('se cerró la sesión'); //eslint-disable-line
    }).catch(() => {
      // console.log(error); //eslint-disable-line
    });
  });
};
