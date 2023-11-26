<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/file-manager">Gestion de fichiers</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped lang="scss">
nav {
  background: rgb(113, 114, 113);
  display: flex;
  padding: 15px;
  gap: 20px;

  a {
    color: white;
    list-style-type: none;
    text-decoration: none;
    font-weight: 600;
  }

}
</style>
