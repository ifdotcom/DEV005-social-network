const Error404 = () => {
  const viewError = `
    <h1>Página no encontrada...</h1>
    <img id="alien" src= "./img/imgError.png" alt="Imagen del Alien "/>     
    `;
  const root = document.getElementById('root');
  root.innerHTML = viewError;
  // navigateTo('/error404');
  return viewError;
};
export default Error404;
