import Error404 from "../pages/Error404";
import Home from '../pages/Home';
import Footer from "../templates/Footer";

const routes = {
  "/": Home,
};

const router = async () => {
  const home = document.getElementById('home');
  const footer = document.getElementById('footer');

  home.innerHTML = await Home();
  footer.innerHTML = await Footer();


};

export default router;
