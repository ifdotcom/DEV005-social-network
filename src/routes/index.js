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
  const home = document.getElementById('home');
  const login = document.getElementById('login');
  const register = document.getElementById('register');
  const footer = document.getElementById('footer');

  footer.innerHTML = Footer();

  const { hash } = window.location;
  console.log(hash);
  if (!hash || hash === '/#') {
    home.innerHTML = Home();
  } else if (hash === '/#login') {
    login.innerHTML = Login();
  } else if (hash === '/#register') {
    register.innerHTML = Register();
  }
};

export default router;
