// Configuración de FIREBASE
import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
// Inicializamos la base de datos
const db = firebase.firestore();
export { db };
