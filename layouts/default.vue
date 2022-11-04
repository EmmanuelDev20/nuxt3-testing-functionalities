<script setup>
import { useUser } from '~~/stores/User';

const user = useUser()
// const isLoggedIn = useIsLoggedIn()
</script>

<template>
  <div>
    <nav style="display: flex; gap: 10px;">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/movies">Movies</NuxtLink>
        <NuxtLink to="https://vueschool.io">Vue School</NuxtLink>
        <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
        <a v-else href="#" @click.prevent="user.isLoggedIn = false">Logout</a>
      </nav>
    <slot></slot>
  </div>
</template>