import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
export const buttonLogin = (
  button,
  navigateTo,
  email,
  password,
  form,
  errorEmail,
  errorPassword,
) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    const passwordValue = password.value;
    const emailValue = email.value;
    if (emailValue === '' && passwordValue === '') {
      errorEmail.style.visibility = 'visible';
      errorEmail.textContent = 'Es un campo obligatorio';
      errorPassword.style.visibility = 'visible';
      errorPassword.textContent = 'Es un campo obligatorio';
      setTimeout(() => {
        errorEmail.style.visibility = 'hidden';
        errorPassword.style.visibility = 'hidden';
      }, 5000);
    }
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
        if (errorCode === 'auth/invalid-email' && emailValue !== '') {
          errorEmail.style.visibility = 'visible';
          errorEmail.textContent = 'Email incorrecto';
          setTimeout(() => {
            errorEmail.style.visibility = 'hidden';
            errorPassword.style.visibility = 'hidden';
          }, 5000);
        } else if (errorCode === 'auth/wrong-password') {
          errorPassword.style.visibility = 'visible';
          errorPassword.textContent = 'Contraseña Incorrecta';
          setTimeout(() => {
            errorPassword.style.visibility = 'hidden';
            errorEmail.style.visibility = 'hidden';
          }, 5000);
        } else if (errorCode === 'auth/internal-error') {
          errorPassword.style.visibility = 'visible';
          errorPassword.textContent = 'Ingresa una contraseña';
          setTimeout(() => {
            errorPassword.style.visibility = 'hidden';
            errorEmail.style.visibility = 'hidden';
          }, 5000);
        } else if (errorCode === 'auth/user-not-found') {
          errorEmail.style.visibility = 'visible';
          errorEmail.textContent = 'Email incorrecto';
          setTimeout(() => {
            errorEmail.style.visibility = 'hidden';
            errorPassword.style.visibility = 'hidden';
          }, 5000);
        }
      });
  });
};
