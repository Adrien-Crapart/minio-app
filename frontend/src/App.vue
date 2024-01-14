<template>
  <div class="container">
    <!-- <NavBar /> -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/templates/NavBar.vue';
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%; 
}
</style>
