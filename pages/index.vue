<template>
  <div class="container">
    <section class="section">
      <h1 class="title is-1">
        FoodAdvisor
      </h1>
      <RestaurantCard />
    </section>
  </div>
</template>

<script>
import RestaurantCard from '../components/RestaurantCard';
export default {
  // Retorna una instancia con todos los componente que vamos incorprando
  components: {
    RestaurantCard
  }
};
</script>

<style>
</style>
