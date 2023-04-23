import { buttonSignOut } from '../lib/SignUp.js';
import { gettingPosts, sharePost } from '../lib/Posts.js';

const Dashboard = (navigateTo) => {
  const viewDashboard = `
    <div id="headerDashboard">
      <h1 class="tittle-dashboard">Frikis Del Espacio</h1>
      <article id= "LogOut">
        <img id="logoSignOut" src= "./img/vaca2.png" alt="Imagen  "/>
        <button id ="button-signOut">Cerrar Sesión</button>
      </article>
    </div>
    <div id="barDashboard"></div>
    
    <div id="profile">
    <div id="circleAlien">
      <div id= "circleAlien2">
        <img id="imgAlien" src= "./img/imgAlienDashboard.png" alt="Imagen de Alien "/>
      </div>
    </div>
    <span id= "userName"> Gabriela79 </span>
    </div>
    <div id = "border-textArea">
      <textarea id="post-text" name="textarea" placeholder="Escribir publicación..."></textarea>
    </div>
    <div id="container-btn">
      <button id="button-post" class="btn-post">Publicar</button>
    </div>

    <div id='containerPosts'>
      <div class="box-gradient">
        <div id="postPublic">
          <span id="name-post">Gabriela79</span>
            <p id="description-post">
            Lorem ipsum dolor sit amet consectetur adet morbia, orci penatibus cubilia at parturient integer rutrum varius, metus dis scelerisque ligula vitae vel 
          </p>
          <span class="icon-pencil">
            <i class="fa-solid fa-pencil"></i>
          </span>
          <span class="icon-trash">
            <i class="fa-solid fa-trash-can"></i>
          </span>
          <span class="icon-star">
            <span id="likes">10</span>
            <i class="fa-solid fa-star"></i>
          </span>
        </div>
      </div>    
    </div>
    `;
  // Falta poner en constante .. el text area y el botón publicar

  const mainDashboard = document.createElement('div');
  mainDashboard.classList.add('main-dashboard');
  mainDashboard.innerHTML = viewDashboard;

  const buttonOut = mainDashboard.querySelector('#button-signOut');

  const postText = mainDashboard.querySelector('#post-text');
  const btnPost = mainDashboard.querySelector('#button-post');
  const containerPost = mainDashboard.querySelector("#containerPosts"); //eslint-disable-line
  // savePost();

  gettingPosts((posts) => {
    const postTemplates = posts.map((post) => {
      const taskContainerPost = `
      <div class="box-gradient">
          <div id="postPublic">
            <span id="name-post">${post.idUser}</span>
              <p id="description-post">
              ${post.post}
              </p>
            <span class="icon-pencil">
              <i class="fa-solid fa-pencil"></i>
            </span>
            <span class="icon-trash">
              <i class="fa-solid fa-trash-can"></i>
            </span>
            <span class="icon-star">
              <span id="likes">10</span>
              <i class="fa-solid fa-star"></i>
            </span>
          </div>
        </div> 
        `;
      return taskContainerPost;
    });
    containerPost.innerHTML = postTemplates.join('');
    // array de strings
  });
  // });
  // dom
  sharePost(postText, btnPost);
  buttonSignOut(buttonOut, navigateTo);

  return mainDashboard;
};
export default Dashboard;
