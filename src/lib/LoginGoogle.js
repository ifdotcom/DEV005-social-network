import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getCredentials } from '../routes/index';

export const buttonLoginG = (button) => {
  button.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const credentials = await signInWithPopup(auth, provider);
      getCredentials(credentials);
      console.log(credentials); //eslint-disable-line
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  });
};
