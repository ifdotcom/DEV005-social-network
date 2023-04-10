const Register = () => {
  const viewRegister = `
  <h1 id="tittleLogo-2">Frikis del Espacio</h1>
  <img id="logo-2" src= "./img/vaca1_480.png" alt="Imagen del logo"/>  
    <div class="register">
      <h1 class="tittleFrikis">Frikis del Espacio</h1>
      <img class="logoSmall" src="./img/vaca1_480.png" alt="Vaca abducida por alien"/>
      <div class="container-register">
        <button class="btnG"><img src="./img/G.png" alt="Ícono de google"/><span>Continúa con Google</span></button>
        <p class="or"><span class="line"></span><span>o</span><span class="line"></span></p>
        <form id=formRegister>
          <label for="inputEmail">EMAIL</label>
          <div class="gradient">
            <input type="email" id="inputEmail" name="inputEmail" class="inputStyle" placeholder="ejemplo@ejemplo.com" required>
          </div>
          <p class=input-error>*Ingresa un email válido.</p>
          <label for="inputPassword">CREAR CONTRASEÑA</label>
          <div class="gradient">
            <input type="password" id="inputPassword" name="inputPassword" class="inputStyle" placeholder="**********" maxlength="10" minlength="5" required>
          </div>
          <p class=input-error>*Contraseña [5-10] caracteres. </p>
          <button class="btnRegister">Registrarse</button>
        </form>
        <p class="go-login">¿Ya tienes una cuenta? <a href="#/login">Inicia Sesión</a></p>
      </div>
    </div>
    `;
  return viewRegister;
};
export default Register;
