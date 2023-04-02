import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Footer from "../templates/Footer";

const routes = {
  "/": Home,
};

const router = async () => {
  const home = document.getElementById("home");

  home.innerHTML = await Home();
};

export default router;
