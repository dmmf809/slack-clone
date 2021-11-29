import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbiE_bFP_BVpfcyC4umi-MVR9cWPkHtBQ',
  authDomain: 'slack-clone-fbaee.firebaseapp.com',
  projectId: 'slack-clone-fbaee',
  storageBucket: 'slack-clone-fbaee.appspot.com',
  messagingSenderId: '262855949796',
  appId: '1:262855949796:web:bb201cd269e275e1755bf1',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//Initialize the db
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
