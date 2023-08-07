// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getDatabase, set, ref, get, child, onValue } from 'firebase/database';
import Notiflix from 'notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyC21irvS_Vtx8oDn1M3olbsyDbGLdW0Zhg',
  authDomain: 'testauthproject-2a6bd.firebaseapp.com',
  projectId: 'testauthproject-2a6bd',
  storageBucket: 'testauthproject-2a6bd.appspot.com',
  messagingSenderId: '627185786898',
  appId: '1:627185786898:web:527831e6ce85e8108cf8cb',
  measurementId: 'G-WZ69SC3HQ8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const userName = document.querySelector('.js-modal-username');
const userEmail = document.querySelector('.js-modal-email');
const userPassword = document.querySelector('.js-modal-password');
const authForm = document.querySelector('.js-modal-form');
const signUpBtn = document.querySelector('.js-btn-sign-up');
const signInBtn = document.querySelector('.js-btn-sign-in');
const signOutBtn = document.querySelector('.js-log-out');
const modalBackdrop = document.querySelector('.backdrop');
const loggedUserContainer = document.querySelector('.logged-user');

authForm.addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.reset();
});

signUpBtn.addEventListener('click', userSignUp);
signInBtn.addEventListener('click', userSignIn);
signOutBtn.addEventListener('click', userSignOut);

// function writeUserData(userId, shoppingListBook) {
//   const db = getDatabase(app);
//   set(ref(db, userId), {
//     userId: userId,
//     books: shoppingListBook,
//   });
// }

async function userSignUp() {
  const signUpName = userName.value;
  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then(userCredential => {
      const user = userCredential.user;
      set(ref(database, 'users/' + user.uid), {
        username: signUpName,
      });
      modalBackdrop.classList.add('is-hidden');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-exists') {
        Notiflix.Notify.failure(`Email address ${signUpEmail} already in use.`);
      } else {
        console.log(error.message);
      }
    });
}

async function userSignIn() {
  const usernameInput = userName.value;
  const signInEmail = userEmail.value;
  const signInPassword = userPassword.value;
  await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then(user => {
      console.log(getUserName(user.user), usernameInput);
      if (getUserName(user.user) !== usernameInput) {
        throw new Error('auth/wrong-username');
      }
      modalBackdrop.classList.add('is-hidden');
      checkAuthState();
    })
    .catch(error => {
      if (error.code === 'auth/user-not-found') {
        Notiflix.Notify.failure(
          `User with this email address ${signInEmail} is not found.`
        );
      } else if (error.code === 'auth/wrong-password') {
        Notiflix.Notify.failure(`Wrong password. Please try again.`);
      } else if (error.message === 'auth/wrong-username') {
        Notiflix.Notify.failure(`Wrong username. Please try again.`);
      } else {
        console.log(error.message);
      }
    });
}

async function checkAuthState() {
  const headerNavWrapper = document.querySelector('.header-nav-wrapper');
  const signUpBtnHeader = document.querySelector('.btn-outline-success');
  onAuthStateChanged(auth, user => {
    if (user) {
      const username = getUserName(user);
      console.log(username);
      loggedUserContainer.classList.remove('logged-user-hidden');
      loggedUserContainer.querySelector('.user-name').textContent = username;

      headerNavWrapper.classList.remove('logged-user-hidden');
      signUpBtnHeader.classList.add('logged-user-hidden');
      //   getBooksFromDB(user.uid);
    } else {
      loggedUserContainer.classList.add('logged-user-hidden');
      headerNavWrapper.classList.add('logged-user-hidden');
      signUpBtnHeader.classList.remove('logged-user-hidden');
    }
  });
}

async function userSignOut() {
  await signOut(auth);
}

function getUserName(user) {
  let username;
  const userRef = ref(database, 'users/' + user.uid);
  onValue(userRef, snapshot => {
    username = snapshot.val().username;
    loggedUserContainer.querySelector('.user-name').textContent = username;
  });
  return username;
}
// async function getBooksFromDB(userId) {
//   const dbRef = ref(database);
//   get(child(dbRef, `${userId}`)).then(snapshot => {
//     if (snapshot.exists()) {
//       console.log(JSON.parse(snapshot.val().books));
//     }
//   });
// }

setTimeout(checkAuthState, 1000);
