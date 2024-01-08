<template>
  <div class="messages-view">
    <ConversationPanel :users="users" :selectUser="selectUser" />
    <MessagePanel :messages="currentMessages" :currentUserId="currentUserId" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import ConversationPanel from '@/components/messages/ConversationPanel.vue';
import MessagePanel from '@/components/messages/MessagePanel.vue';
import { users, messages } from '@/mockData.ts';

export default defineComponent({
  components: {
    ConversationPanel,
    MessagePanel,
  },
  data() {
    return {
      users,
      currentUserId: null as string | null,
    };
  },
  computed: {
    currentMessages() {
      return this.currentUserId ? messages[this.currentUserId] : [];
    },
  },
  methods: {
    selectUser(userId: string) {
      this.currentUserId = userId;
    },
  },
  mounted() {
  this.$socket.emit('join', this.currentUserId);
  this.$socket.on('message', (message) => {
    if (message.senderId === this.currentUserId) {
      this.messages.push(message);
    }
  });
},
});
</script>

<style scoped>
/* Add your styles here */
</style>