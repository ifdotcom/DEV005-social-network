import { buttonLoginG } from '../lib/LoginGoogle';
import { buttonRegister } from '../lib/RegisterEmail';

const Register = (navigateTo) => {
  const viewRegister = `
  <h1 id="tittleLogo-2">Frikis del Espacio</h1>
  <img id="logo-2" src= "./img/vaca1_480.png" alt="Imagen del logo"/>  
    <div class="register">
      <h1 class="tittleFrikis">Frikis Del Espacio</h1>
      <img class="logoSmall" src="./img/vaca1_480.png" alt="Vaca abducida por alien"/>
      <div class="container-register">
        <button class="btnG"><img src="./img/G.png" alt="Ícono de google"/><span>Continúa con Google</span></button>
        <p class="or"><span class="line"></span><span>o</span><span class="line"></span></p>
        <form id=formRegister>
          <label for="inputEmail">EMAIL</label>
          <div class="gradient">
            <input type="email" id="inputEmail" name="inputEmail" class="inputStyle" placeholder="ejemplo@ejemplo.com" required>
          </div>
          <p id="errorEmail" class=input-error>*Ingresa un email válido.</p>
          <label for="inputPassword">CREAR CONTRASEÑA</label>
          <div class="gradient">
            <span class="icon-eye">
              <i class="fa-regular fa-eye-slash"></i>
            </span>
            <input type="password" id="inputPassword" name="inputPassword" class="inputStyle" placeholder="**********" required>
          </div>
          <p id="errorPassword" class=input-error>*Contraseña [5-10] caracteres. </p>
          <button class="btnRegister">Registrarse</button>
        </form>
        <p class="go-login">¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a></p>
      </div>
    </div>
    `;

  const mainRegister = document.createElement('div');
  mainRegister.classList.add('main-register');
  mainRegister.innerHTML = viewRegister;
  const inputEmail = mainRegister.querySelector('#inputEmail');
  const inputPassword = mainRegister.querySelector('#inputPassword');
  const btnRegister = mainRegister.querySelector('.btnRegister');
  const btnGoogle = mainRegister.querySelector('.btnG');
  const errorEmail = mainRegister.querySelector('#errorEmail');
  const errorPassword = mainRegister.querySelector('#errorPassword');

  const iconEye = mainRegister.querySelector('.icon-eye');
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
  buttonRegister(btnRegister, navigateTo, inputEmail, inputPassword, errorEmail, errorPassword);
  return mainRegister;
};
export default Register;
