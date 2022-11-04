export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggedIn = false
  if(!userIsLoggedIn) {
    // return abortNavigation("You're not allowed to visit /admin") // We can
    // return navigateTo({name: "login"})
    // return navigateTo({path: "/login"})
    return navigateTo("/login")
  }
})