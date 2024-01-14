<template>
    <div class="todo-container">
        <div class="row">
            <h2>{{ title }}</h2>
            <i class="fa-solid fa-ellipsis"></i>
        </div>
        <div class="todo-list">
            <ToDoBlock v-for="item in items" :key="item.title"
                :titleTask=item.title 
                :descriptionTask=item.description
                :tagTask=item.tags
                :dateTask=convertDate(item.creationDate)
                :updateTask=item.updateDate
                :profilUsers=item.users
                :shares=item.shares
                :messages=item.messages
            />
            <button class="add-task">
                <p>Add task</p>
                <i class="fa-regular fa-plus"></i>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import ToDoBlock from "@/components/todo/ToDoBlock.vue";

export default {
  props: {
        title: String,
        items: Array,
  },
  methods: {
    convertDate(date: Date) {
      const options = { day: '2-digit', month: 'long', year: 'numeric' };
      return new Date(date).toLocaleDateString('fr-FR', options); 
    },

  },
  components: {
    ToDoBlock,
  },
};
</script>

<style scoped lang="scss">
.todo-container {
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .row{
    margin-bottom: 10px;

    i{
      margin-left: auto;
      cursor: pointer;
    }
  }
}

.todo-list{
  padding: 5px;

  button.add-task{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: #31a4f0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: 1rem;
    cursor: pointer;

    &:hover{
      background-color: #31a4f0c7;
    }
  }
}
</style>