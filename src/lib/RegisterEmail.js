import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
export const buttonRegister = (button, navigateTo, email, password) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();

    const passwordValue = password.value;
    const emailValue = email.value;
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)

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
