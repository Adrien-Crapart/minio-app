<template>
  <ChatWindow />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChatWindow from "@/components/messages/ChatWindow.vue";

export default defineComponent({
  components: {
    ChatWindow
  },
});
</script>

<style></style>
