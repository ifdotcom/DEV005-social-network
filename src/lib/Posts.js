import { onAuthStateChanged } from 'firebase/auth';
import { savePost, getPost, auth } from './firebase';

const idUser = [];
onAuthStateChanged(auth, (user) => {
  // console.log(user.uid); //eslint-disable-line

  idUser.push(user.uid);
});

export const gettingPosts = async (callback) => {
  const querySnapshot = await getPost();
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  callback(data);
};
export const sharePost = (textArea, btnPublish) => {
  btnPublish.addEventListener('click', () => {
    const valueTextArea = textArea.value;
    const idUserPost = idUser[0];
    savePost(idUserPost, valueTextArea);
  });
};
