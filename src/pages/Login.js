import { buttonLoginG } from '../lib/LoginGoogle';
import { buttonLogin } from '../lib/LoginEmail';

const Login = (navigateTo) => {
  const viewLogin = `
    <h1 id="tittleLogo-2">Frikis del Espacio</h1>
    <img id="logo-2" src= "./img/vaca1_480.png" alt="Imagen del logo"/>  
      <div class="login-view">
        <div id="container-logo">
          <img src="./img/vaca1_480.png" alt="Imagen del Logo" id="logo" />
          <h1 class="tittle-login" id="title">Frikis Del Espacio</h1>
        </div>
        <div class="container-login">
          <button id="button-google" class="btn">
            <img src="./img/google.png" alt="Imagen de Google" id="logo-google" />
            Continúa con Google
          </button>
          <div id="bars">
            <div id="bar-left"></div>
            <span id="bar-text">O</span>
            <div id="bar-right"></div>
          </div>
          <form action="" id="form-login">
            <label for="mail">EMAIL</label>
            <input class="btn" type="email" id="mail" name="user_mail" title="El email es incorrecto" placeholder="ejemplo@ejemplo.com" required/>
            <p id= "errorEmail" class=input-error>*Ingresa un email válido.</p>
            <label for="password">CONTRASEÑA</label>
            <div class="icon-login">
              <span class="icon-eye" id="icon-password">
                <i class="fa-regular fa-eye-slash"></i>
              </span>
              <input class="btn" type="password" id="password" name="user_password" placeholder="**********" required/>
            </div>
            <p id= "errorPassword" class=input-error>*Contraseña [5-10] caracteres. </p>
            <button id="button-login" type="submit">Iniciar Sesión</button>
            <div id="links">
              <a href="#" id="forgot-pwd">¿Olvidaste tu contraseña?</a>
              <p id="create-account">¿No tienes una cuenta? <a href="/register">Crea una</a></span></p>
            </div>
          </form>
        </div>
      </div>
      `;

  const mainLogin = document.createElement('div');
  mainLogin.classList.add('main-login');
  mainLogin.innerHTML = viewLogin;
  const formLogin = mainLogin.querySelector('#form-login');
  const mail = mainLogin.querySelector('#mail');
  const password = mainLogin.querySelector('#password');
  const buttonLog = mainLogin.querySelector('#button-login');
  const btnGoogle = mainLogin.querySelector('#button-google');
  const errorEmail = mainLogin.querySelector('#errorEmail');
  const errorPassword = mainLogin.querySelector('#errorPassword');
  const iconEye = mainLogin.querySelector('.icon-eye');
  iconEye.addEventListener('click', () => {
    const icon = iconEye.querySelector('i');

    if (iconEye.nextElementSibling.type === 'password') {
      iconEye.nextElementSibling.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    } else {
      iconEye.nextElementSibling.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    }
  });
  buttonLoginG(btnGoogle, navigateTo);
  buttonLogin(buttonLog, navigateTo, mail, password, formLogin, errorEmail, errorPassword);

  return mainLogin;
};
export default Login;
