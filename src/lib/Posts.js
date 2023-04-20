import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { savePost, getPost } from './firebase';

const auth = getAuth();

const idUser = [];
onAuthStateChanged(auth, (user) => {
  console.log(user.uid); //eslint-disable-line

  idUser.push(user.uid);
});

window.addEventListener('DOMContentLoaded', async () => {
  const querySnapshot = await getPost();

  querySnapshot.forEach((doc) => {
    const taskContainerPost = `
    <div class="box-gradient">
        <div id="postPublic">
          <span id="name-post">${doc.idUser}</span>
            <p id="description-post">
            ${doc.post}
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
      console.log(doc.id, ' => ', doc.data());  //eslint-disable-line
    return taskContainerPost;
    // doc.data() is never undefined for query doc snapshots
  });
});
export const sharePost = (textArea, btnPublish) => {
  btnPublish.addEventListener('click', () => {
    const valueTextArea = textArea.value;
    const idUserPost = idUser[0];
    savePost(idUserPost, valueTextArea);
  });
};
