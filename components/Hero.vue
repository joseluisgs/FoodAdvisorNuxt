<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <!-- Como queremos cambiar el baner cuando pulse un botón mandamos el evento. Podemos hacerlo aquí sin crear el script-->
      <button class="button is-info" @click="$emit('onChangeBanner')">
        Cambiar banner
      </button>
      <slot name="header" />
    </div>
  </section>
</template>

<style scoped>
.container-slot {
  background-color: red;
}
</style>
