import Error404 from '../pages/Error404.js';
import Home from '../pages/Home.js';
import Footer from '../templates/Footer.js';
import Register from '../pages/Register.js';
import Login from '../pages/Login.js';
import Dashboard from '../pages/Dashboard.js';

const root = document.getElementById('root');
const footer = document.getElementById('footer');

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/error', component: Error404 },
  { path: '/dashboard', component: Dashboard },
];

const defaultRoute = '/';

export function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    if (root) {
      // route.component(navigateTo);
      root.innerHTML = '';
      const newContent = route.component(navigateTo);
      root.append(newContent);
    }
  } else {
    navigateTo('/error');
  }
  footer.innerHTML = Footer();
}

const router = () => {
  window.onpopstate = () => {
    navigateTo(window.location.pathname);
  };
  navigateTo(window.location.pathname || defaultRoute);
};

export default router;
