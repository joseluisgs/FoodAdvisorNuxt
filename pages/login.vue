<template>
  <div class="box column is-4 is-offset-4 box-login">
    <div class="columns">
      <div class="column has-text-centered">
        <img src="@/static/logo.png">
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-left">
        <input v-model="email" class="input" type="text" placeholder="email">
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-left">
        <input v-model="password" class="input" type="text" placeholder="contraseña">
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <!-- Volvemos -->
        <nuxt-link to="/" class="button is-danger">
          Cancelar
        </nuxt-link>
        <!--  Vamos al evento onLogin -->
        <button class="button is-primary" @click="onLogin">
          Login
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// Importamos firebase
import { firebase } from '@/plugins/firebase';
export default {
  layout: 'login',
  data () {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    // Nos conectamos al servicio de identificación
    onLogin () {
      const response = firebase.auth().signInWithEmailAndPassword(this.email, this.password);
      response.then((data) => {
        this.$router.push('admin'); // Vamos a la ruta /admin
      });
    }
  }
};
</script>
