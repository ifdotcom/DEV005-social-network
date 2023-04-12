import { buttonSignOut } from '../lib/LoginGoogle';

const Dashboard = (navigateTo) => {
  const viewDashboard = `
    <h1>bienvenido</h1>
    <button id ="button-singOut" class="btn">Cerrar Sesión</button>
    `;
  const root = document.getElementById('root');
  root.innerHTML = viewDashboard;

  const buttonOut = document.getElementById('button-singOut');
  buttonSignOut(buttonOut, navigateTo);

  return viewDashboard;
};
export default Dashboard;
