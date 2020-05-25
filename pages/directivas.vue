<template>
  <p>Hola {{ mensaje }}</p>
</template>

<script>
export default {
  // La función data nos sirve para enlazar los datos de la logica en las vistas. Devuelve los elementso que rendirezaremos con {{}}
  data () {
    return {
      mensaje: 'datos datos'
    };
  }
};
</script>

<style scoped>

</style>
