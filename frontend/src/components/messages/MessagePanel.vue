<template>
  <div class="message-panel">
    <div v-for="message in messages" :key="message.id">
      <div :class="{ 'sent-message': message.senderId === currentUserId }">
        <div class="message-header">
          <span>{{ message.userName }}</span>
          <span v-if="message.available" class="availability-dot"></span>
          <span>{{ formatTime(message.createTime) }}</span>
        </div>
        <div class="message-body">{{ message.text }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    messages: Array as PropType<{ id: string; text: string; senderId: string; createTime: string; userName: string; available: boolean }[]>,
    currentUserId: String,
  },
  methods: {
    formatTime(createTime: string) {
      const date = new Date(createTime);
      return `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    },
  },
});
</script>

<style scoped>
.sent-message {
  background-color: #e0e0e0;
  padding: 5px;
  margin: 5px;
}

.message-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.availability-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  margin-right: 5px;
}
</style>