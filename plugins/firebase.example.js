// Configuración de FIREBASE
import firebase from 'firebase/app';
import 'firebase/firestore'; // Base de datos
import 'firebase/firebase-auth'; // Sistema de autenticación

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
// Exportamos las variables.
export { db, firebase };
