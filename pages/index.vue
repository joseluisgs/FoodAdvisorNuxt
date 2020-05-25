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
        <!-- <RestaurantCard
          name="Bar Paco"
          description="Descripción del restaurante."
          category="burger"
          slug="bar-paco"
          :likes="likes"
          @onLikeButton="sumLikes"
        /> -->
        <!-- Renderizamos la lista de restaurantes -->
        <RestaurantCard
          v-for="(restaurant, index) in restaurants"
          :key="index"
          :name="restaurant.name"
          :description="restaurant.description"
          :category="restaurant.category"
          :image="restaurant.image"
          :slug="restaurant.slug"
          :likes="restaurant.likes"
          @onLikeButton="sumLikes(index)"
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
import api from '@/services/api'; // Nuestra API

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
      banner: false, // Para mostrar el banner. Lo recuperamos a través de un evento
      // Array de restaurantes estatico. Ya no es necesario al hacer el GET
      restaurants: [
        {
          name: 'Restaurant La Cúpula',
          description: 'Platos mediterráneos y coches antiguos',
          slug: 'la-cupula',
          category: 'Mediterráneos',
          likes: 0
        },
        {
          name: 'Restaurant Singular',
          description: 'Brunch, desayunos y comidas con variada carta mediterránea en un luminoso café de moderno diseño minimalista.',
          slug: 'Singular',
          category: 'Brunch',
          likes: 0
        },
        {
          name: 'Oporto Restaurante',
          description: 'Bacalao, francesinhas y otras recetas de la gastronomía lusa en un coqueto bar decorado con cajas de oporto.',
          slug: 'oporto',
          category: 'Mediterráneos',
          likes: 0
        }
      ]
    };
  },
  // Una de las mejores formas o momentos para consumir una api es en en el estado created del ciclo de vida del componente.
  // Obtenemos los restaurantes y los asociados a la variable
  async created () {
    const response = await api.getRestaurants();
    if (response.status === 200) {
      this.restaurants = response.data;
    }
  },
  // Metodos de mi objeto
  methods: {
    // Cuneta los likes e index es elemento de la lista
    sumLikes (index) {
      this.restaurants[index].likes++;
      console.log(`Desde Index: ${index}. Likes: ${this.restaurants[index].likes}`);
    },

    changeBanner () {
      this.banner = !this.banner; // Lo conttsario :)
    }
  }
};
</script>

<style>
</style>
