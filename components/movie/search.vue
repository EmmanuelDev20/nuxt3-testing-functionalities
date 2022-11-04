<script setup>
const query = ref("batman");
const movies = ref([]);
async function search() {
  const { Search } = await $fetch(
    `http://www.omdbapi.com/?apikey=76ba4fe6&s=${query.value}`
  );
  movies.value = Search;
}
search();
</script>

<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query" />
      <button>Search</button>
    </form>
    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.Title" />
          <p>{{ movie.Title }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>


<!-- http://www.omdbapi.com/?i=tt3896198&apikey=76ba4fe6 -->