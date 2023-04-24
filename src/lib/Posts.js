import { onAuthStateChanged } from 'firebase/auth';
import {
  savePost, getPost, auth, onGetPosts,
} from './firebase';

export const idUser = () => {
  const userID = [];
  onAuthStateChanged(auth, (user) => {
    const emailName = user.email;
    const emailAt = emailName.search('@');
    const emailCutted = emailName.slice(0, emailAt);
    userID.push(emailCutted);
  });
  return userID;
};

// obtener post de firebase
export const gettingPosts = async (callback) => {
  const querySnapshot = await getPost();
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  callback(data);
};
// export const gettingPosts = (callback) => {
//   const data = [];
//   onGetPosts(() => {
//     const querySnapshot = getPost();
//     querySnapshot.forEach((doc) => {
//       data.push(doc.data());
//     });
//     callback(data);
//   });
// };

// guardar en firebase
export const savePostFire = (textArea, btnPublish) => {
  btnPublish.addEventListener('click', async () => {
    const idUserPost = await idUser();
    const idUserPostSave = idUserPost[0];
    const valueTextArea = textArea.value;
    savePost(idUserPostSave, valueTextArea);
  });
};

// export const getPosts = c(gettingPosts);
