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
import { authElements } from './authElements';

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

authElements.authForm.addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.reset();
});

authElements.signUpBtn.addEventListener('click', userSignUp);
authElements.signInBtn.addEventListener('click', userSignIn);
authElements.signOutBtn.addEventListener('click', userSignOut);

async function userSignUp() {
  const signUpName = authElements.userName.value;
  const signUpEmail = authElements.userEmail.value;
  const signUpPassword = authElements.userPassword.value;
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
      } else if (error.code === 'auth/email-already-in-use') {
        Notiflix.Notify.failure(`Email address ${signUpEmail} already in use.`);
      } else {
        console.log(error.message);
      }
    });
}

async function userSignIn() {
  const usernameInput = authElements.userName.value;
  const signInEmail = authElements.userEmail.value;
  const signInPassword = authElements.userPassword.value;
  await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then(user => {
      console.log(getUserName(user.user), usernameInput);
      if (getUserName(user.user) !== usernameInput) {
        throw new Error('auth/wrong-username');
      }
      authElements.modalBackdrop.classList.add('is-hidden');
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
  await onAuthStateChanged(auth, user => {
    if (user) {
      const username = getUserName(user);
      authElements.loggedUserContainer.classList.remove('logged-user-hidden');
      authElements.loggedUserContainer.querySelector('.user-name').textContent =
        username;

      headerNavWrapper.classList.remove('logged-user-hidden');
      signUpBtnHeader.classList.add('logged-user-hidden');
    } else {
      authElements.loggedUserContainer.classList.add('logged-user-hidden');
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
    authElements.loggedUserContainer.querySelector('.user-name').textContent =
      username;
  });
  return username;
}

setTimeout(checkAuthState, 1000);
