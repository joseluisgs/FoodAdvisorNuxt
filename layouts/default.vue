<template>
  <div>
    <!-- Mostramos la cabecera -->
    <Header />
    <nuxt />
  </div>
</template>
<script>
// Nos traemos la cabecera como componente
import Header from '@/layouts/Header';
export default {
  components: {
    Header
  }
};
</script>
<style>
</style>
