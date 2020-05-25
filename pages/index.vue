<template>
  <div>
    <!--  <h1 class="title is-1">
        FoodAdvisor
      </h1> -->
    <!-- Los Slots nos perminten inyectar código HTML dentro de un componente o podrer injectar un componente dentro de otro componente sin tener que importarlo desde el componente hijo.
      Son muy usados por ejemplo, para crear un tipo de botón, con unos estilos determinados y queramos por ejemplo en un momento dato, renderizar solo un texto, como por ejemplo,
      "Registrate" y en otras ocasiones, un texto y un icono, y en otras un texto un icono y una imagen.
      Si no usaramos los slots, deberiamos hacer estas validaciones con las propiedades y hacer un renderizado condicional con directivas v-if. -->
    <Hero @onChangeBanner="changeBanner">
      <Banner v-if="banner" slot="header" style="width: 790px" />
      <Slogan v-else slot="header" style="width: 790px" />
    </Hero>
    <div class="container">
      <section class="section">
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
  </div>
</template>

<script>
import RestaurantCard from '@/components/RestaurantCard';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import Slogan from '@/components/Slogan';

export default {
  // Retorna una instancia con todos los componente que vamos incorprando
  components: {
    RestaurantCard,
    Hero,
    Banner,
    Slogan
  },
  // Mis datos
  data () {
    return {
      likes: 0,
      banner: false // Para mostrar el banner. Lo recuperamos a través de un evento
    };
  },
  // Metodos de mi objeto
  methods: {
    sumLikes () {
      this.likes++;
      console.log(`Desde Index. Likes: ${this.likes}`);
    },

    changeBanner () {
      this.banner = !this.banner;
    }
  }
};
</script>

<style>
</style>
