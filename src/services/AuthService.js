import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function getProfile(uid) {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('Profiles')
      .doc(uid)
      .get()
      .then((documentSnapshot) => {
        resolve(documentSnapshot.data());
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function signIn(email, password) {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function signOut() {
  return new Promise((resolve, reject) => {
    if (auth().currentUser) {
      auth()
        .signOut()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    }
  });
}

function register(email, password, role) {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        let uid = auth().currentUser.uid;
        firestore().collection('Profiles').doc(uid).set({
          role: role,
        });

        resolve('User account created');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          reject('That email address is invalid!');
        }

        console.error(error);
        reject(error);
      });
  });
}

export default {
  signIn,
  signOut,
  register,
  getProfile,
};