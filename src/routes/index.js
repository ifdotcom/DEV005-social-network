import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Footer from '../templates/Footer';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const root = document.getElementById('root');
const footer = document.getElementById('footer');
const parseLocation = () => window.location.hash.slice(1).toLowerCase() || '/';

const navigateTo = (hash) => {
  window.history.pushState({}, hash, window.location.origin + hash);
  if (!hash || hash === '/') {
    Home(navigateTo);
  } else if (hash === '/login') {
    Login();
  } else if (hash === '/register') {
    root.innerHTML = Register();
  } else if (hash === '/dashboard') {
    Dashboard();
  } else {
    Error404();
  }
  footer.innerHTML = Footer();
};

const router = () => {
  root.innerHTML = null;
  const hash = parseLocation();
  navigateTo(hash);
};

export default router;
