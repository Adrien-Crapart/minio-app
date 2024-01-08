<template>
  <div class="conversation-panel">
    <div v-for="user in users" :key="user.id" @click="selectUser(user.id)">
      <span>{{ user.name }}</span>
      <span v-if="user.available" class="availability-dot"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    users: Array as PropType<{ id: string; name: string; available: boolean }[]>,
    selectUser: Function,
  },
});
</script>

<style scoped>
.availability-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  margin-left: 5px;
}
</style>