import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const buttonLoginG = (button) => {
  button.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials);
    } catch (error) {
      console.log(error);
    }
  });
};
