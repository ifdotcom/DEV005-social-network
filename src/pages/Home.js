const Home = (navigateTo) => {
  const viewHome = `
    <h1 id="tittleLogo">Frikis del Espacio</h1>
    <img id="logo" src= "./img/vaca1_480.png" alt="Imagen del logo "/>  
    <div id="btns">
      <button id="btn-login">Iniciar Sesión</button>
      <button id="btn-register">Registrarse</button>
    </div>
    `;
  const root = document.getElementById('root');
  root.innerHTML = viewHome;

  const btnLogin = document.getElementById('btn-login');

  btnLogin.addEventListener('click', () => {
    navigateTo('#/login');
  });
  const btnRegister = document.getElementById('btn-register');
  btnRegister.addEventListener('click', () => {
    navigateTo('#/register');
  });
  return viewHome;
};
export default Home;
