import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
export const buttonRegister = (button, navigateTo, email, password, errorEmail, errorPassword) => {
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
        console.log(errorCode);
        if (errorCode === 'auth/email-already-in-use') {
          errorEmail.style.visibility = 'visible';
          errorEmail.textContent = 'El email ya está en uso';
          setTimeout(() => {
            errorEmail.style.visibility = 'hidden';
          }, 5000);
        } else if (errorCode === 'auth/internal-error') {
          errorPassword.style.visibility = 'visible';
          errorPassword.textContent = 'Ingresa una contraseña';
          setTimeout(() => {
            errorPassword.style.visibility = 'hidden';
            errorEmail.style.visibility = 'hidden';
          }, 5000);
        } else if (errorCode === 'auth/weak-password') {
          errorPassword.style.visibility = 'visible';
          errorPassword.textContent = 'Contraseña mínimo 6 caracteres';
          setTimeout(() => {
            errorEmail.style.visibility = 'hidden';
            errorPassword.style.visibility = 'hidden';
          }, 5000);
        } else if (errorCode === 'auth/missing-email') {
          errorEmail.style.visibility = 'visible';
          errorEmail.textContent = 'Este campo es obligatorio';
          setTimeout(() => {
            errorEmail.style.visibility = 'hidden';
            errorPassword.style.visibility = 'hidden';
          }, 5000);
        } else if (errorCode === 'auth/invalid-email') {
          errorEmail.style.visibility = 'visible';
          errorEmail.textContent = 'Email inválido';
          setTimeout(() => {
            errorEmail.style.visibility = 'hidden';
            errorPassword.style.visibility = 'hidden';
          }, 5000);
        }
      });
  });
};
