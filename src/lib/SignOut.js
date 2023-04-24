import { signOut } from 'firebase/auth';
import { auth } from './firebase.js';

export const buttonSignOut = (button, navigateTo) => {
  button.addEventListener('click', async () => {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigateTo('/');
        // console.log('se cerró la sesión'); //eslint-disable-line
      })
      .catch(() => {
        // console.log(error); //eslint-disable-line
      });
  });
};
