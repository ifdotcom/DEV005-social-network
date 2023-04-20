import {
  signOut, getAuth, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
// import { async } from 'regenerator-runtime';
// import { getCredential } from '../utils/GetCredential.js';

const auth = getAuth();
export const buttonLoginG = (button, navigateTo) => {
  button.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      // getCredential(credentials);
      if (credentials) {
        console.log(credentials); //eslint-disable-line  
        navigateTo('/dashboard');
      }
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  });
};

export const buttonSignOut = (button, navigateTo) => {
  button.addEventListener('click', async () => {
    // const auth = getAuth();
    signOut(auth).then(() => {
      navigateTo('/');
      console.log('se cerró la sesión'); //eslint-disable-line
    }).catch((error) => {
      console.log(error); //eslint-disable-line
    });
  });
};
