<template>
  <div class="container">
    <section class="section">
      <h1 class="title is-1">
        {{ $route.params.category }}
      </h1>
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">{{ $route.params.category }}</a>
          </li>
        </ul>
      </nav>
      <div class="container">
        <section class="section">
          <div class="columns">
            <RestaurantCard
              v-for="(restaurant, index) in restaurants"
              :key="index"
              :name="restaurant.name"
              :description="restaurant.description"
              :slug="restaurant.slug"
              :category="restaurant.category"
              :likes="restaurant.likes"
              :image="restaurant.image"
              class="restaurant-card"
            />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import RestaurantCard from '@/components/RestaurantCard';
// import api from '@/services/api';
import { db } from '@/plugins/firebase';

export default {
  components: {
    RestaurantCard
  },
  data () {
    return {
      restaurants: []
    };
  },
  // async asyncData ({ params }) {
  //   try {
  //     /* petición getRestaurantsByCategory() */
  //     const payload = {
  //       category: params.category
  //     };
  //     const { data } = await api.getRestaurantsByCategory(payload);
  //     return { restaurants: data };
  //   } catch (error) {
  //     console.log({ statusCode: 404, message: 'Category not found' });
  //   }
  // }
  // ahora con async y await. Mira el where. Sy quiueres hacerlo en el AsyncData por ejemplo mira el _slung.vue
  async created () {
    await db
      .collection('restaurants')
      .where('category', '==', this.$route.params.category)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.restaurants.push(doc.data());
        });
      });
  },
  // Ejemplo de poner título
  head () {
    return {
      title: 'FoodAdvisorNuxt: ' + this.$route.params.category,
      meta: [
        { hid: 'description', name: 'description', content: 'Las mejores ofertas en tu restaurantes con NuxtJS y  Firebase' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    };
  }
};
</script>
<style>
.restaurant-card {
  margin: 10px 20px;
  min-width: 300px;
}
</style>
