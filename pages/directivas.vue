<template>
  <section style="margin-left: 100px">
    <p>Hola {{ mensaje }}</p>
    <!-- La directiva v-show, muestra u oculta el elemento en HTML según un valor boleado de verdadero o falso que se le puede pasar como variable. Se ve en el DOM-->
    <p v-show="true">
      Mostrar Parrafo
    </p>
    <!-- La directiva v-if nos va a permitir modificar el renderizado de elementos dentro de nuestro DOM en base a unas condiciones o variables. Por ejemplo: -->
    <p v-if="0 < num">
      Mostrar parrafo v-if
    </p>
    <p v-else>
      Mostrar parrafo v-else
    </p>
    <!-- La directiva v-for nos permite renderizar arrays o colecciones. Su sintaxis es muy sencilla y podemos aplicarla directamente en el elemento que queramos repetir o aplicar el blucle. -->
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
    <!-- Esta directiva nos permite asociar una entrada por parte del usuario, con nuestra variable del modelo de datos. Veremos que se asocia de forma reactiva -->
    <p>Nombre:</p>
    <input v-model="name">
    <p>Estás escribiendo: {{ name }}</p>
    <!-- llamamos a esta propiedad calculada -->
    <p>Tu nombre invertido: {{ nameReverser }}</p>
    <!-- Utilizamos watcher para ir observando variables y disparar acciones si ocurre lo que queremos sobre ella. -->
    <span v-if="error.length != 0" class="tag is-warning">
      {{ error }}
    </span>
    <section>
      <!-- La directiva v-on o simplemente @ nos permite “escuchar” eventos que ocurran dentro nuestro DOM.Como por ejemplo el evento click en un botón. Se programan dentro de methods -->
      <!-- <button v-on:click="pulsado">Pulsa</button> -->
      <button class="button is-info" @click="pulsado">
        Pulsa
      </button>
    </section>
  </section>
</template>

<script>
export default {
  // La función data nos sirve para enlazar los datos de la logica en las vistas. Devuelve los elementso que rendirezaremos con {{}}
  // Es decir devuelve un objeto de datos
  data () {
    return {
      mensaje: 'datos datos',
      num: 5,
      items: [1, 2, 3, 4, 5],
      name: '',
      error: ''
    };
  },
  /* Las computed properties son sencillamente funciones que se comportan dentro de un componente como una propiedad.
  Esta caracteristica nos ayuda a generar datos reactivos sin tener que estar llamando a funciones o realizando calculos antes de renderizar las propiedades en html. */
  computed: {
    nameReverser () {
      return this.name.split('').reverse().join('');
    }
  },
  /* Son observadores que se activan cuando el valor de una propiedad de modifica. De esta manera podemos actuar de una manera si pasa algo sobre dicha propiedad
  Para crear un watcher debemos hacerlo mediante la propiedad watcher de vuejs y dentro escribir el observador con el mismo nombre de la propiedad que queremos que escuche. */
  watch: {
    name () {
      if (this.name.length > 5) {
        this.error = 'Nombre demasiado largo';
      } else {
        this.error = '';
      }
    }
  },
  // Métodos que ejecuta nuestra lógica (por ejemplo eventos).
  // Es decir, devuelve un objeto de funciones
  methods: {
    pulsado () {
      console.log(`Botón pulsado: ${this.name}`);
    }
  }
};
</script>

<style scoped>

</style>
