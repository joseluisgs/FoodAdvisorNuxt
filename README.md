# FoodAdvisorNuxt

Web de recomendación de restaurantes con NuxtJS y Firebase y Bulma

## Acerca de

Este proyecto tiene como objetivo crear una web app con NuxtJS, Firebase y apoyándose en Bulma como CSS

## Configuración de Firebase
El el directorio plugis, deberás meter un fichero llamado firebase.js, con la siguiente estructura y datos sacado de dar de alta o crear un proyecto en Firebase

```javascript
// fichero /plugins/firebase.js
// Configuración de FIREBASE
import firebase from 'firebase/app';
import 'firebase/firestore'; // Base de datos
import 'firebase/firebase-auth'; // Sistema de autenticación

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: ',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
// Inicializamos la base de datos de firebase
const db = firebase.firestore();
// Exportamos las variables.
export { db, firebase };

```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Variables de entorno
No olvids meter todas las opciones de configuracion de Firebase como variables de entorno en .env y leerlas. Te recomiendo que veas el mecanismos en [NodeMonRest](https://github.com/joseluisgs/NodeMonRest)

## Autor

- [José Luis González Sánchez](https://twitter.com/joseluisgonsan) ![Twitter](https://img.shields.io/twitter/follow/joseluisgonsan?style=social)

* [GitHub](https://github.com/joseluisgs) ![GitHub](https://img.shields.io/github/followers/joseluisgs?style=social)

Basado en el curso de OpenWebinars de [NuxtJS](https://openwebinars.net/cursos/nuxtjs/)

## Licencia

Este proyecto esta licenciado bajo licencia **MIT**, si desea saber más, visite el fichero [LICENSE](https://github.com/joseluisgs/FoodAdvisorNuxt/blob/master/LICENSE)
