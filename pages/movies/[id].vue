<script setup>
const route = useRoute();

const { data } = await useFetch(`http://www.omdbapi.com/?apikey=76ba4fe6&i=${route.params.id}`, {
  pick: ["Plot", "Title", "Poster"], // This one do the same as transform
  key: `/movies/${route.params.id}`,
  // onResponse({request, response}) {
  //   if(response.data.Error !== "Incorrect IMDb ID.") {
  //     showError({ statusCode: 404, statusMessage: "Page not Found" })
  //   }
  // }
})

useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` }
  ]
})
// // // // const { data } = useAsyncData(
// // // //   `/movies/${route.params.id}`,
// // // //   () => {
// // // //     return $fetch(
// // // //       `http://www.omdbapi.com/?apikey=76ba4fe6&i=${route.params.id}`
// // // //     );
// // // //   },
// // // //   {
// // // //     // pick: ["Plot", "Title"], // This one do the same as transform
// // // //     transform(data) {
// // // //       return {
// // // //         Plot: data.Plot,
// // // //         Title: data.Title
// // // //       }
// // // //     },
// // // //   }
// // // // );
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>