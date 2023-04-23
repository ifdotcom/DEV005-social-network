import { onAuthStateChanged } from 'firebase/auth';
import { savePost, getPost, auth } from './firebase';

export const idUser = () => {
  const userID = [];
  onAuthStateChanged(auth, (user) => {
    userID.push(user.uid);
  });
  return userID;
};

export const gettingPosts = async (callback) => {
  const querySnapshot = await getPost();
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  callback(data);
};
export const sharePost = (textArea, btnPublish) => {
  btnPublish.addEventListener('click', async () => {
    const idUserPost = await idUser();
    const idUserPostSave = idUserPost[0];
    const valueTextArea = textArea.value;
    savePost(idUserPostSave, valueTextArea);
  });
};
