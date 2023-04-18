import { buttonSignOut } from '../lib/LoginGoogle';

const Dashboard = (navigateTo) => {
  const viewDashboard = `
    <div id="headerDashboard">
      <h1 class="tittle-dashboard">Frikis Del Espacio</h1>
      <article id= "LogOut">
        <img id="logoSignOut" src= "./img/vaca2.png" alt="Imagen  "/>
        <button id ="button-signOut">Cerrar Sesión</button>
      </article>
    </div>
    <div id="barDashboard"></div>
    <div id="circleAlien">
      <div id= "circleAlien2">
        <img id="imgAlien" src= "./img/imgAlienDashboard.png" alt="Imagen de Alien "/>
      </div>
    </div>
    <p><span id= "userName"> Aquí va el nombre del usuario.</span></p>
    <div id = "border-textArea">
    
    <textarea id="post-text" name="textarea" placeholder="Escribir publicación..."></textarea>
    </div>
   <button id="button-post" class="btn-post">Continúa con Google
    </button>

    <div id='containerPosts'></div>
    `;

  const mainDashboard = document.createElement('div');
  mainDashboard.classList.add('main-dashboard');
  mainDashboard.innerHTML = viewDashboard;

  const buttonOut = mainDashboard.querySelector('#button-signOut');
  buttonSignOut(buttonOut, navigateTo);
  return mainDashboard;
};
export default Dashboard;
