<template>
  <div>
    <h2 class="title is-2">
      FoodAdvisor, tu web de restaurantes
    </h2>
    <!--Si no esta suscrito mostramos todo esto -->
    <div v-if="!is_subscribe" class="subcribe">
      <!--Tomamos el campo email -->
      <input v-model="email" type="text" class="input email" placeholder="email...">
      <button class="button is-info" @click="subscribe">
        Suscribirse
      </button>
    </div>
    <div v-else>
      <p>Gracias! Ahora encontrás cada semana una recomendación en tu email.</p>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';
export default {
  // Datos de nuestro componente
  // Métodos
  data () {
    return {
      email: '',
      is_subscribe: false
    };
  },
  methods: {
    // Cuando pulse el botón llamamos a este evento con la PI pasandole los datos. en el payload
    async subscribe () {
      const payload = {
        email: this.email
      };
      const response = await api.postSubcribeUser(payload);
      if (response.status === 201) { // 201 : Created
        this.is_subscribe = true;
      }
    }
  }
};
</script>

<style scoped>
.subcribe{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.email {
 width: 80%;
}
</style>
