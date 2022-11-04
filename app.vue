<script setup>
useHead({
  // title: "My movie site",
  titleTemplate: (titleChunk) => { // De esta forma, definimos un layout para el title
    return titleChunk ? `${ titleChunk } - My movie site` : 'My movie site'
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
