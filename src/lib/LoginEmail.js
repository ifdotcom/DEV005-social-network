import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
export const buttonLogin = (button, navigateTo, email, password, form) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    const passwordValue = password.value;
    const emailValue = email.value;
    form.reset();
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          navigateTo('/dashboard');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);  //eslint-disable-line
        console.log(errorMessage); //eslint-disable-line
      });
  });
};
