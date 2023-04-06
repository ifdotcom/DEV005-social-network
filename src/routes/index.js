import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Footer from '../templates/Footer';
import Register from '../pages/Register';
import Login from '../pages/login';

const root = document.getElementById('root');
const footer = document.getElementById('footer');

const navigateTo = (hash) => {
  if (!hash || hash === '#/') {
    Home(navigateTo);
  } else if (hash === '#/login') {
    root.innerHTML = Login();
  } else if (hash === '#/register') {
    root.innerHTML = Register();
  } else {
    Error404(navigateTo);
  }

  footer.innerHTML = Footer();
  window.history.pushState({}, hash, window.location.origin + hash);
};

const router = () => {
  root.innerHTML = null;

  const { hash } = window.location;
  navigateTo(hash);
};

export default router;
