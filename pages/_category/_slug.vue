<template>
  <div>
    <div class="container">
      <section class="section">
        <h1 class="title is-1">
          {{ restaurant.name }}
        </h1>
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <nuxt-link to="/">
                Home
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="'/' + $route.params.category" aria-current="page">
                {{ $route.params.category }}
              </nuxt-link>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">{{ restaurant.name }}</a>
            </li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column box">
            <div class="columns">
              <div class="column">
                <img :src="restaurant.image" class="image">
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p>{{ restaurant.description }}</p>
              </div>
              <div class="column has-text-right">
                <div class="button">
                  <span>{{ restaurant.likes }}</span>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <span class="tag">{{ restaurant.city }}</span>
              </div>
              <div class="column has-text-right">
                <span>{{ restaurant.address }}</span>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p>Descripción:</p>
                <p>{{ restaurant.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import api from '@/services/api';
import { db } from '~/plugins/firebase';

export default {

  /* async asyncData ({ params }) {
    try {
      const payload = {
        slug: params.slug
      };
      const { data } = await api.getOneRestaurant(payload);
      return { restaurant: data.shift() };
    } catch (error) {
      console.log({ statusCode: 404, message: 'Restaurant not found' });
    }
  } */
  async asyncData ({ params }) {
    const ref = db.collection('restaurants').where('slug', '==', params.slug);
    let snapshot;
    try {
      snapshot = await ref.get();
    } catch (e) {
      return { restaurant: {} };
    }
    return { restaurant: snapshot.docs.shift().data() };
  },
  // Ejemplo de poner título
  head () {
    return {
      title: 'FoodAdvisorNuxt: ' + this.restaurant.name,
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

<style scoped>
.image {
  width: 100%;
}
</style>
