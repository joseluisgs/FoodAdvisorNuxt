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
        <div class="columns is-multiline">
          <RestaurantCard
            v-for="(restaurant, index) in restaurants"
            :key="index"
            :name="restaurant.name"
            :description="restaurant.description"
            :category="restaurant.category"
            :slug="restaurant.slug"
            :likes="restaurant.likes"
            :image="restaurant.image"
            class="restaurant-card"
            @onLikeButton="sumLikes(restaurant)"
          />
        </div>
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
  /* El método asyncData realiza la petición en la parte del servidor, lo que ayuda a mejorar el posicionamiento web (SEO) y libera de carga al cliente.
    De esta forma nos ahorramos hacerlo en el lado del cliente, como hacemos con created aser una pagina de renderizado en el servidor.
    Es decir lo podemos hacer así la petición porque es una página SSR, en ve de desar la página y que el cliente se desacrgue los datos.
    Lo hace els ervidor y renderiza la página con los datos ya */
  async asyncData () {
    try {
      const { data } = await api.getRestaurants();
      return { restaurants: data };
    } catch {
      return { restaurants: [] };
    }
  },
  // Mis datos
  data () {
    return {
      likes: 0,
      banner: false, // Para mostrar el banner. Lo recuperamos a través de un evento
      // Array de restaurantes estatico. Ya no es necesario al hacer el GET
      restaurants: []
    };
  },
  // Una de las mejores formas o momentos para consumir una api es en en el estado created del ciclo de vida del componente.
  // Obtenemos los restaurantes y los asociados a la variable
  /* async created () {
    const response = await api.getRestaurants();
    if (response.status === 200) {
      this.restaurants = response.data;
    }
  }, */
  // Metodos de mi objeto
  methods: {
    // Cuneta los likes e index es elemento de la lista
    async sumLikes (restaurant) {
      const payload = {
        id: restaurant.id,
        data: {
          likes: restaurant.likes + 1
        }
      };
      const response = await api.putSumRestaurantLikes(payload);
      console.log(response);
      if (response.status === 200) {
        restaurant.likes++;
      }
    },

    changeBanner () {
      this.banner = !this.banner; // Lo conttsario :)
    }
  }
};
</script>

<style>
.restaurant-card {
  margin: 10px 10px;
  max-width: 300px;
}
</style>
