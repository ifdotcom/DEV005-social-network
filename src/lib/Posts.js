import { onAuthStateChanged } from 'firebase/auth';
import {
  savePost, auth, onGetPosts,
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

export const gettingPosts = (callback) => {
  onGetPosts((querySnapshot) => {
    // const querySnapshot = getPost();
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc);
    });
    callback(data);
  });
};

// guardar en firebase
export const savePostFire = (textArea, btnPublish, updateStatus) => {
  btnPublish.addEventListener('click', async () => {
    const idUserPost = await idUser();
    const idUserPostSave = idUserPost[0];
    const valueTextArea = textArea.value;
    const datePost = Date(Date.now());
    const datePostFormat = datePost.toString();
    // if (valueTextArea !== '') {
    //   if (updateStatus) {
    //     console.log('updating');
    //   } else {
    //     savePost(idUserPostSave, valueTextArea, datePostFormat);
    //   }
    // }
    if (!updateStatus) {
      await savePost(idUserPostSave, valueTextArea, datePostFormat);
    } else {
      // updateStatus = false;
      console.log('updating');
    }

    textArea.value = '';
  });
};
