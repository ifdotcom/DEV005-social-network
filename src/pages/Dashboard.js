import { buttonSignOut } from '../lib/SignOut.js';
import { savePostFire, gettingPosts } from '../lib/Posts.js';
import { deletePost, getPost } from '../lib/firebase.js';

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
    <div id="myModal" class="modal">
      <div class="modal-content">
        <p>¿Estas seguro(a) de eliminar tu publicación?</p>
        <button id="yes">Sí</button>
        <button id="not">No</button>
      </div>
    </div>
    `;

  const mainDashboard = document.createElement('div');
  mainDashboard.classList.add('main-dashboard');
  mainDashboard.innerHTML = viewDashboard;

  const buttonOut = mainDashboard.querySelector('#button-signOut');
  const postText = mainDashboard.querySelector('#post-text');
  const btnPost = mainDashboard.querySelector('#button-post');
  const containerPost = mainDashboard.querySelector('#containerPosts');
  const myModal = mainDashboard.querySelector('#myModal');
  const not = mainDashboard.querySelector('#not');
  const yes = mainDashboard.querySelector('#yes');
  not.addEventListener('click', () => {
    myModal.style.display = 'none';
  });
  // savePost();
  let updateStatus = false;
  gettingPosts((posts) => {
    const postTemplates = posts.map((post) => {
      const dataPost = post.data();
      const taskContainerPost = `
      <div class="box-gradient">
          <div id="postPublic">
            <span id="name-post">${dataPost.idUser}</span>
              <p id="description-post">
              ${dataPost.post}
              </p>
            <button class="btn-edit icon-pencil" data-id="${post.id}">
              <i class="fa-solid fa-pencil"></i>
            </button>
            <button class="btn-delete icon-trash" data-id="${post.id}">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <button class="icon-star" data-id="${post.id}">
              <span id="likes">10</span>
              <i class="fa-solid fa-star"></i>
            </button>
          </div>
        </div> 
        `;
      return taskContainerPost;
    });
    containerPost.innerHTML = postTemplates.join('');
    // array de strings
    const btnsDelete = containerPost.querySelectorAll('.btn-delete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', () => {
        const idPost2 = btn.dataset.id;
        myModal.style.display = 'block';
        yes.addEventListener('click', () => {
          deletePost(idPost2);
          myModal.style.display = 'none';
        });
      });
    });
    const btnsEdit = containerPost.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const idPost = btn.dataset.id;
        // editPost(idPost);
        const post = await getPost(idPost);
        console.log(post.data());
        const dataPost = post.data();
        postText.value = dataPost.post;
        updateStatus = true;
      });
    });
  });
  savePostFire(postText, btnPost, updateStatus);
  buttonSignOut(buttonOut, navigateTo);
  return mainDashboard;
};
export default Dashboard;
