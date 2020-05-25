<template>
  <!-- La vista de nuestro componente -->
  <div class="card" style="width:400px;">
    <div class="card-image">
      <figure class="image">
        <img src="~/assets/images/restaurant.jpg" alt="Pizza Restaurant">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <!-- Enlazamos el nombre -->
          <p class="title is-4 restaurant-name">
            {{ name }}
          </p>
          <div class="columns">
            <div class="column">
              <!-- Enlazamos la categoria -->
              <span class="tag">
                {{ category }}
              </span>
            </div>
            <div class="column has-text-right">
              <!-- Evento clic ejecuta la uncion sumLikes-->
              <!-- <button class="button is-info" v-on:click="sumLikes"> -->
              <button class="button is-info" @click="sumLikes">
                <!-- Enlazamos el contenido dela variable likes -->
                {{ likes }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <!-- Enlazamos el contenido de description -->
        {{ description }}
        <!-- Al ir al hiperenlñace vamos a la pagina que se llama como slug -->
        <!-- <a v-bind:href="slug">More info</a>. -->
        <a :href="slug">More info</a>.
      </div>
    </div>
  </div>
</template>

<script>
// La lógica de nuestro ccomponente (controlador)
export default {
  // Objetos datos de nuestro componente
  data () {
    return {
      name: 'Bar Paco',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus neciaculis mauris.',
      likes: 0,
      category: 'burger',
      slug: 'restaurant-name'
    };
  },
  // Objeto funciones de nuestro componente
  methods: {
    sumLikes () {
      // this.likes = this.likes + 1
      this.likes++;
      console.log(this.likes);
    }
  }

};
</script>

<style scoped>
  .restaurant-name {
    font-size: 30px;
    color: #8ae6ff;
  }
</style>
