<template>
  <div class="section">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2">
              New Restaurant
            </h2>
          </div>
        </div>
        <div class="columns box">
          <div class="column">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input
                  v-model="restaurant.name"
                  class="input"
                  type="text"
                  placeholder="restaurant name"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Slug</label>
              <div class="control">
                <!-- El slug se calcula con una proppiedad calculada, lo "bindeamos" a placeholder -->
                <input class="input" type="text" :placeholder="slug" disabled>
              </div>
            </div>
            <div class="field">
              <label class="label">Image</label>
              <div class="control">
                <!-- La imagen va a ser una URL, así nos ahorramos subirla -->
                <input
                  v-model="restaurant.image"
                  class="input"
                  type="text"
                  placeholder="https://...."
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <input
                  v-model="restaurant.description"
                  class="input"
                  type="text"
                  placeholder="description"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Address</label>
              <div class="control">
                <input
                  v-model="restaurant.address"
                  class="input"
                  type="text"
                  placeholder="address"
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Cities</label>
              <div class="control">
                <div class="select">
                  <select v-model="restaurant.city">
                    <option>Select dropdown</option>
                    <option value="Madrid">
                      Madrid
                    </option>
                    <option value="Barcelona">
                      Barcelona
                    </option>
                    <option value="Valencia">
                      Valencia
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Category</label>
              <div class="control">
                <div class="select">
                  <select v-model="restaurant.category">
                    <option>Select dropdown</option>
                    <option value="brunch">
                      Brunch
                    </option>
                    <option value="burgers">
                      Burgers
                    </option>
                    <option value="mediterranean">
                      Mediterranean
                    </option>
                    <option value="italian">
                      Italian
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Text</label>
              <div class="control">
                <textarea
                  v-model="restaurant.text"
                  class="textarea"
                  type="textarea"
                  rows="10"
                  placeholder="text"
                />
              </div>
            </div>
            <div class="field">
              <div class="control has-text-centered">
                <!-- Volvemos al router Back -->
                <button
                  class="button is-danger"
                  type="button"
                  @click="$router.back()"
                >
                  Cancel
                </button>
                <!-- Procesamos el formulario. Prevent es que nos asegura que no pulsamos varias veces -->
                <button
                  class="button is-link"
                  type="button"
                  @click.prevent="onSubmitButton"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Cargamos Firebase DB
import { db } from '@/plugins/firebase';
export default {
  // Indicamos que esta protegida por este moddleware
  middleware: 'auth',
  // Nuestro modelo de datos
  data () {
    return {
      restaurant: {
        name: null,
        description: null,
        image: null,
        text: null,
        slug: null,
        address: null,
        city: null,
        category: null
      }
    };
  },
  // Propiedades computadas
  computed: {
    // Slug, quita los espacios y pone guiones.
    slug () {
      if (this.restaurant.name) {
        return this.restaurant.name.replace(/ /g, '-');
      } else {
        return null;
      }
    }
  },
  // Observador slug, detecta cada cambio en slug (computado y actualiza el campu slug de nuestro modelo restaurante
  watch: {
    slug () {
      this.restaurant.slug = this.slug;
    }
  },
  // Métodos
  methods: {
    // Evento de submint
    onSubmitButton () {
      // Añadimos a la BD en la colección restaurantes.
      const response = db.collection('restaurants').add(this.restaurant);
      response.then(() => {
        this.$router.back(); // Si todo va bien volvemos.
      });
    }
  }
};
</script>

<style></style>
