<template>
  <div class="container">
    <h1>Todo App</h1>
    <div class="todo-view">
      <ToDoList title="To Do" :items="todos"/>
      <ToDoList title="In progress" :items="todos"/>
      <ToDoList title="Completed" :items="todos"/>
    </div>
  </div>
</template>

<script lang="ts">
import ToDoList from "@/components/todo/ToDoList.vue";

export default {
  data() {
    return {
      title: "",
      items: [] as any[],
      newTodo: '' as string,
      todos: [] as any[]
    };
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      const response = await fetch('http://localhost:3000/tasks');
      this.todos = await response.json();
    },
    async addTodo() {
      if (this.newTodo) {
        const response = await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: this.newTodo,
            completed: false,
          }),
        });
        this.newTodo = '';
        this.fetchTodos();
      }
    },
    async removeTodo(id: number) {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
      });
      this.fetchTodos();
    },
  },
  components: {
    ToDoList
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  margin: 10px;
  background-color: #f3f3f3;
  width: 100%;
  height: 100%;
}

.todo-view {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 5px;
  padding: 10px;
}
</style>
