import { firebase } from '@/plugins/firebase';

// El middleware es sencillo, si no está autenicado lo redireccionamos a login.
export default function ({ redirect }) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      return redirect('/login');
    } else {
      console.log(user);
    }
  });
}
