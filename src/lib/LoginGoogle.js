import {
  GoogleAuthProvider, signInWithPopup,
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
