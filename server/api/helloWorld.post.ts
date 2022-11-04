// export default defineEventHandler((event) => {
//   return 'Hello helloWorld'
// })

// export default defineEventHandler((event) => {
//   return {
//     message: "Hello world"
//   }
// })

export default defineEventHandler( async (event) => {
  const body = await readBody(event)
  return {
    // message: getMethod(event) + "Hello world" // Obtenemos el metodo GET o el que recibimos
    // message: getQuery(event) // recibimos los parámetros en objeto, que fueron pasados como parametros en la uri
    // message: "Hello post" 
    message: body
  }
})