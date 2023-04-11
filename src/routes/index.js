import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Footer from "../templates/Footer";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const root = document.getElementById("root");
const footer = document.getElementById("footer");
// const parseLocation = () =>
//   window.location.pathname.slice(1).toLowerCase() || "/";

// const navigateTo = (hash) => {
//   if (!hash || hash === "/") {
//     Home(navigateTo);
//   } else if (hash === "/login" || hash === "login") {
//     Login();
//   } else if (hash === "/register" || hash === "register") {
//     root.innerHTML = Register();
//   } else if (hash === "/dashboard" || hash === "login") {
//     Dashboard();
//   } else {
//     Error404();
//   }
//   window.history.pushState({}, hash, window.location.origin + hash);

//   footer.innerHTML = Footer();
// };

// const router = () => {
//   root.innerHTML = null;
//   const hash = parseLocation();

//   window.onpopstate = () => {
//     navigateTo(hash);
//   };
//   navigateTo(hash || "/");
// };

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/error", component: Error404 },
];

const defaultRoute = "/";

function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path
    );
    if (root) {
      route.component(navigateTo);
    }
  } else {
    navigateTo("/error");
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
