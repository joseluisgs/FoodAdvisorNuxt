<template>
  <div>
    <div class="columns">
      <div class="column has-text-centered">
        <p>Esta es la página privada</p>
        <nuxt-link to="/" class="button is-info">
          Home
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/plugins/firebase';
export default {
  created () {
    console.log(db);
  }
};
</script>
