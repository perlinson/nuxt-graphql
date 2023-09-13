// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-graphql-client'],

  'graphql-client': {
    codegen: {
      avoidOptionals: true,
    },
  },

  runtimeConfig: {
    public: {
      GQL_HOST: 'http://q3515i3031.zicp.fun:1337/graphql',
    },
  },
});
