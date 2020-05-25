<template>
  <div class="container">
    <section class="section">
      <h1 class="title is-1">
        FoodAdvisor
      </h1>
      <!-- <RestaurantCard /> Sin propiedades o con datos por defecto-->
      <!-- Con propiedades o datos pasados de Padre a Hijo. Inicamos el objeto -->
      <!-- La comunicación Hijo padre a través de eventos el padre cada vez que se hace click en el hijo a través del evento de comunicación que es onLikeButton, en el hijo se emite ($emit) -->
      <RestaurantCard
        name="Bar Paco"
        description="Descripción del restaurante."
        category="burger"
        slug="bar-paco"
        :likes="likes"
        @onLikeButton="sumLikes"
      />
    </section>
  </div>
</template>

<script>
import RestaurantCard from '../components/RestaurantCard';
export default {
  // Retorna una instancia con todos los componente que vamos incorprando
  components: {
    RestaurantCard
  },
  // Mis datos
  data () {
    return {
      likes: 0
    };
  },
  // Metodos de mi objeto
  methods: {
    sumLikes () {
      this.likes++;
      console.log(`Desde Index. Likes: ${this.likes}`);
    }
  }
};
</script>

<style>
</style>
