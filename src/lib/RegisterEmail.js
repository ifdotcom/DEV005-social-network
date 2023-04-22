import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

// const auth = getAuth();
export const buttonRegister = (passwordValue, emailValue) => new Promise((resolve, reject) => {
  createUserWithEmailAndPassword(auth, emailValue, passwordValue)

    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      resolve({ nameUser: user });
    })
    .catch((error) => {
      const errorCode = error.code;
      reject(new Error({ code: errorCode }));
        console.log(errorCode); //eslint-disable-line
    });
});
