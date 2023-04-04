import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Footer from '../templates/Footer';
import Register from '../pages/Register';
import Login from '../pages/Login';

// const routes = {
//   '/': Home,
//   '/#login': Login,
//   '/#register': Register,
// };
const router = () => {
  const root = document.getElementById('root');
  const footer = document.getElementById('footer');

  root.innerHTML = null;

  
  const { hash } = location;

  if (!hash || hash === '#/') {
    root.innerHTML = Home();
  } else if (hash === '#/login') {
    root.innerHTML = Login();
  } else if (hash === '#/register') {
    root.innerHTML = Register();
  }
  footer.innerHTML = Footer();
};

export default router;
