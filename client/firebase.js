// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAr3z4ZoR9TGATj5hBcbOH83iMKEZWwVXE',
  authDomain: 'reinforcement-241e0.firebaseapp.com',
  projectId: 'reinforcement-241e0',
  storageBucket: 'reinforcement-241e0.appspot.com',
  messagingSenderId: '233068291130',
  appId: '1:233068291130:web:cd010239c2748e51964103',
  measurementId: 'G-HNK7F1ZNWT',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = (setUser) => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      return result.user;
    })
    .catch((error) => {
      return error;
    });
};
