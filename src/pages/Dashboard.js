import { buttonSignOut } from '../lib/LoginGoogle';

const Dashboard = (navigateTo) => {
  const viewDashboard = `
    <h1>bienvenido</h1>
    <button id ="button-singOut" class="btn">Cerrar Sesión</button>
    `;
  /* const root = document.getElementById('root');
  root.innerHTML = viewDashboard; */
  const mainDashboard = document.createElement('div');
  mainDashboard.classList.add('main-dashboard');
  mainDashboard.innerHTML = viewDashboard;

  const buttonOut = mainDashboard.querySelector('#button-singOut');
  buttonSignOut(buttonOut, navigateTo);
  return mainDashboard;
};
export default Dashboard;
