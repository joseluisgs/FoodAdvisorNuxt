<template>
  <!-- La vista de nuestro componente -->
  <div class="card" style="width:400px;">
    <div class="card-image">
      <figure class="image">
        <!-- La @ como ~son alias para acceder a un directorio -->
        <img :src="image" alt="Pizza Restaurant">
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
              <span class="is-category tag">
                <a :href="category">
                  {{ category }}
                </a>
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
        <a :href="category +'/'+ slug">more info</a>.. <!-- Para cargar dinamicamente debemos tener una página que se llame _slug porque así lo estamos diciendo -->
      </div>
    </div>
  </div>
</template>

<script>
// La lógica de nuestro ccomponente (controlador)
export default {
  /* Las propiedades con variables que podemos inyectar a nuestros componentes. De un Padre a un hijo
  De manera que el componente sea independiente del modelo de datos. */
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    likes: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: ''
    }
  },
  // Objetos datos de nuestro componente, con datos propios y que no hemos recibido a traves de propiedades. Padre-Hijo
  data () {
    return {
      // name: 'Bar Paco',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus neciaculis mauris.',
      // likes: 0
      // category: 'burger',
      // slug: 'restaurant-name' // Comos e llamará el parámetro de la página
    };
  },
  // Objeto funciones de nuestro componente
  methods: {
    sumLikes () {
      // Emitimos un evento. el evento es como podemos comunicar un hijo con su padre. Capturará ese evento y lo procesará
      this.$emit('onLikeButton'); // Se le puede pasar parametros, this.$emit('onLikeButton', parametros);
      // this.likes = this.likes + 1
      // this.likes++;
      console.log(`Desde RestaurantCard. Likes: ${this.likes}`);
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
