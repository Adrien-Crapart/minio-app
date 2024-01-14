<template>
     <div class="todo-block">
        <div class="row">
            <h3>{{ titleTask }}</h3>
            <i class="fa-solid fa-ellipsis"></i>
        </div>
        <p class="todo-description">{{ descriptionTask }}</p>
        <div class="row">
            <div class="tags-list">
                <div class="tag high" v-for="tag in tagTask" :key="tag">{{ tag }}</div>
            </div>
            <div class="creation-date">
                <i class="fa-regular fa-flag"></i>
                <p>Crée le {{ dateTask }}</p>
            </div>
        </div>
        <div class="row">
            <div class="todo-profil">
                <img :src="user" v-for="user in profilUsers" :key="user">
            </div>
            <div class="user-share">
            <div>
                <i class="fa-solid fa-link"></i>
                <p>{{ shares?.length }}</p>
            </div>
            <div>
                <i class="fa-regular fa-comment"></i>
                <p>{{ messages?.length  }}</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  props: {
        titleTask: String,
        descriptionTask: String,
        tagTask: Array,
        dateTask: Date,
        updateTask: Date,
        profilUsers: Array,
        shares: Array,
        messages: Array,
  },
  methods: {

  },
  components: {

  },
};
</script>

<style scoped lang="scss">
.todo-block {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h3{
    font-size: 1.2rem;
  }

  i{
    margin-left: auto;
    cursor: pointer;
  }

  p.todo-description{
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
  }
}

.tags-list{
  display: flex;
  flex-wrap: wrap;
  .tag{
    border-radius: 5px;
    padding: 2px 15px;
    margin-right: 5px;
    font-size: 0.8rem;

    &.high{
      background-color: #de73ec57;
      color: #d12ce7;
    }
    &.app{
      background-color: #31a3f02d;
      color: #31a4f0;
    }
  }
}
.creation-date{
  display: flex;
  align-items: center;
  margin-right: 10px;

  i{
    margin-right: 5px;
  }
  i, p{
    font-size: 0.8rem;
    color: #666;
  }
}
.todo-profil{
  display: flex;
  margin-top: 10px;

  img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
}
.user-share{
  display: flex;
  margin-left: auto;

  div{
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;

    &:hover{
      background-color: #b9b9b921;
      border-radius: 5px;

      i,p{
        color: #31a4f0;
      }
    }

    p{
      margin-right: 5px;
      font-size: 0.8rem;
      color: #666;
    }
    
    i{
        margin-right: 5px;
    }
  }
}
</style>