import validationForm from '../utils/FormValidation';

const Login = () => {
  const viewLogin = `
      <div id="container-logo">
          <img src="./img/vaca1_480.png" alt="Imagen del Logo" id="logo" />
          <h1 id="title">Frikis Del Espacio</h1>
      </div>
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
        <label for="password">Contraseña</label>
        <input class="btn" type="password" id="password" name="user_password" required/>
        <button id="button-login" type="submit">Iniciar Sesión</button>
        <div id="links">
          <a href="#" id="forgot-pwd">¿Olvidaste tu contraseña?</a>
          <p id="create-account">¿No tienes un cuenta? <a href="#">Crea una</a></span></p>
        </div>
      </form>
      `;

  const root = document.getElementById('root');
  root.innerHTML = viewLogin;

  validationForm();
  return viewLogin;
};
export default Login;
