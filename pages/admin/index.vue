<template>
  <div>
    <section class="section">
      <div class="columns">
        <div class="column">
          <h2 class="title is-2">
            Resturantes
          </h2>
        </div>
      </div>
      <!-- Creamos una tabla -->
      <div class="table-container">
        <table class="table is-fullwidth is-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>City</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <!-- Por cada restaurante lo recorremos en el for -->
            <tr v-for="(item, index) in restaurants" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.category }}</td>
              <td>{{ item.city }}</td>
              <td>
                <img :src="item.image" alt="Pizza Restaurant" width="200px">
              </td>
              <td>
                <!-- añadimos el botón para editar que redirecciona al elemento con ese id -->
                <nuxt-link class="button" :to="/admin/+item.id">
                  Edit
                </nuxt-link>
                <!-- añadimos el botón para eliminar que se dipsra con este evento, con el id del restaurante -->
                <button class="button is-danger" @click="deleteDocument(item.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
// Importamos la bd
import { db } from '@/plugins/firebase';
export default {
  // Indicamos que esta protegida por este moddleware
  middleware: 'auth',
  // Nuestro modelo de datos
  data () {
    return {
      restaurants: []
    };
  },
  // En el estado created de nuestro componente consultamos la BD firebase
  created () {
    // Nos traemos la lista de oducmentos
    this.getDocuments();
  },
  // Lógica
  methods: {
    // Nos traemos la lista de oducmentos
    getDocuments () {
      this.restaurants = []; // Lo ponemos a nulo porque lo iniciamos con lo que hay en la BD.
      const response = db.collection('restaurants').get();
      response
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const restaurant = {
              id: doc.id,
              ...doc.data() // descompone el documento que nos llega en sus propiedades y las enlaza en el nuevo objeto que estamos creado
            };
            this.restaurants.push(restaurant); // Lo metemos en nuestra variable
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // Evento del botón borrar
    deleteDocument (id) {
      const ref = db.collection('restaurants').doc(id); // Borramos este elemento de la BD
      ref.delete();
      this.getDocuments(); // Una vez borado actualizamos los datos
    }
  }
};
</script>
