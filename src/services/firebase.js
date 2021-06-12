import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAmjolCteYK1wzadXpNyJ-2ROlP33SLyP4',
  authDomain: 'gpwstockwallet.firebaseapp.com',
  databaseURL: 'https://gpwstockwallet-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'gpwstockwallet',
  storageBucket: 'gpwstockwallet.appspot.com',
  messagingSenderId: '288000291557',
  appId: '1:288000291557:web:7268b69b8a70f016d29a0c',
  measurementId: 'G-SWT5BLFLNT',
};
const app = firebase.initializeApp(firebaseConfig);

export const authFirebase = app.auth();

export default app;
