// https://v3.nuxtjs.org/api/configuration/nuxt.config
// export default defineNuxtConfig({
//   modules: [
//     ["@pinia/nuxt", {
//       autoImports: ["defineStore", "acceptHMRUpdate"],
//     }]
//   ],
//   import: {
//     dirs: ["stores"]
//   },
//   alias: {
//     pinia: "/node_modules/@pinia/nuxt/dist/module.mjs"
//   }
// })

export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt']
})
