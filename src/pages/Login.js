import { buttonLoginG } from '../lib/LoginGoogle';

const Login = (navigateTo) => {
  const viewLogin = `
  <h1 id="tittleLogo-2">Frikis del Espacio</h1>
  <img id="logo-2" src= "./img/vaca1_480.png" alt="Imagen del logo"/>  
    <div class="container-login">
      <div id="container-logo">
        <img src="./img/vaca1_480.png" alt="Imagen del Logo" id="logo" />
        <h1 class="tittle-login" id="title">Frikis Del Espacio</h1>
      </div>
      <div class="container-register">
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
        <label for="mail">Correo electrónico</label>
        <input class="btn" type="email" id="mail" name="user_mail" title="El email es incorrecto" required/>
        <p class=input-error>*Ingresa un email válido.</p>
        <label for="password">Contraseña</label>
        <input class="btn" type="password" id="password" name="user_password" required/>
        <p class=input-error>*Contraseña [5-10] caracteres. </p>
        <button id="button-login" type="submit">Iniciar Sesión</button>
        <div id="links">
          <a href="#" id="forgot-pwd">¿Olvidaste tu contraseña?</a>
          <p id="create-account">¿No tienes un cuenta? <a href="/register">Crea una</a></span></p>
        </div>
      </form>
      </div>
    </div>
      `;
  const root = document.getElementById('root');
  root.innerHTML = viewLogin;
  const btnGoogle = document.getElementById('button-google');
  buttonLoginG(btnGoogle, navigateTo);
  return viewLogin;
};
export default Login;
