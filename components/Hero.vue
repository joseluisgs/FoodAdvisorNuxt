<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <!-- <button class="button is-info" @click="$emit('onShowBanner')">
        ShowBanner
      </button> -->
      <slot class="container" name="header" />
    </div>
  </section>
</template>
