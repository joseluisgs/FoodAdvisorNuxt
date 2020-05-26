import { db } from './plugins/firebase';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'FoodAdvisorNuxt, Descubre Restaurantes con NuxtJS y Firebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // Google analytic, solo en el cliente
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules. Los que debes importar.
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // D eesta manera le decimos a Nuxt que genere todas las rutas de antemano.
  generate: {
    async routes () {
      const routesList = [];
      try {
        const data = await db.collection('restaurants').get();
        const docs = await data.docs;
        docs.map((doc) => {
          const category = '/' + doc.data().category;
          routesList.push(category);
          const route = '/' + doc.data().category + '/' + doc.data().slug;
          routesList.push(route);
        });
        return routesList;
      } catch (error) {
        console.log(error);
        return [];
      }
    }
  }
};
