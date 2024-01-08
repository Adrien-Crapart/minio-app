<template>
  <div class="container">
    <div class="conversation-list">
      <div class="conversation-header">
        <h1>Messages</h1>
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
      <div class="messages-block">      
        <div class="message" v-for="message in messages" :key="message.id">
          <img class="message-profil" :src="message.image" :alt="message.name">
          <div class="user-profil"> 
            <div class="message-header">      
              <div class="name">{{ message.name }}</div>
              <div class="created-at">{{ message.createdAt }}</div>
            </div>
            <div class="message-content">{{ message.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-messages">
      <div class="old-message">
        <h1>Jane Smith</h1>
        <div class="status-circle">
          <p>Disponible</p>
        </div> 
        <div class="profil-interaction">
          <i class="fa-solid fa-ellipsis-v" @click="toggleOptions"></i>
            <div v-show="showOptions" class="profil-options">
            <div class="option" @click="viewProfile">View profile</div>
            <div class="option" @click="deleteConversation">Delete conversation</div>
          </div>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div class="messages-block">      
        <div class="message" v-for="message in conversations" :key="message.id">
          <img class="message-profil" :src="message.image" :alt="message.name">
          <div class="user-profil"> 
            <div class="message-header">      
              <div class="name">{{ message.name }}</div>
              <div class="created-at">{{ message.createdAt }}</div>
              <div class="job-status">{{ message.job }}</div>
            </div>
            <div class="message-content">{{ message.content }}</div>
          </div>
        </div>
      </div>
      <p>John Doe est en train d'écrire...</p>
      <div class="write-message">
        <div class="reaction-bar">
          
          <i class="fa-solid fa-bold"></i>
          <i class="fa-solid fa-italic"></i>
          
          <i class="fa-solid fa-underline"></i>
          <i class="fa-solid fa-font"></i>
          <i class="fa-solid fa-align-left"></i>
          <i class="fa-solid fa-align-justify"></i>
          <i class="fa-solid fa-align-right"></i>
        </div>
        <div class="user-message">       
          <i class="fa-regular fa-image"></i>
          <i class="fa-solid fa-paperclip"></i>
          <input type="text" placeholder="Entrez votre texte ici..."> 
          <i class="fa-solid fa-face-smile"></i>
          <i class="fa-solid fa-microphone"></i>
          <i class="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      availabilities: ["Disponible", "Occupé", "Absent"],
      userAvailabilities: [
        { name: "John Doe", availability: "Disponible" },
        { name: "Jane Smith", availability: "Disponible" }
      ],
      conversations: [
        {
          username: ["Jane Smith"],
          messages: [
            {
              id: 1,
              name: "John Doe",
              createdAt: "2022-01-01 10:00 AM",
              content: "Hello, how are you?",
              image: "https://randomuser.me/api/portraits/men/1.jpg",
              job: "Web Developer"
            },
            {
              id: 2,
              name: "Jane Smith",
              createdAt: "2022-01-01 10:05 AM",
              content: "I'm good, thanks! How about you?",
              image: "https://randomuser.me/api/portraits/women/2.jpg",
              job: "Web Designer",
            },
            {
              id: 3,
              name: "John Doe",
              createdAt: "2022-01-01 10:10 AM",
              content: "I'm good, thanks!",
              image: "https://randomuser.me/api/portraits/men/1.jpg",
              job: "Web Developer",
            },
            {
              id: 4,
              name: "Jane Smith",
              createdAt: "2022-01-01 10:15 AM",
              content: "Good to hear!",
              image: "https://randomuser.me/api/portraits/women/2.jpg",
              job: "Web Designer",

            }
          ],
          },
          {
            username: ["John Doe"],
        }
      ],
      showOptions: false,
    };
  },
  methods: {
    toggleOptions() {
      this.showOptions = !this.showOptions;
    },
    viewProfile(){
      console.log('view profile');
    },
    deleteConversation(){
      console.log('delete conversation');
    }
  }
};
</script>

<style lang="scss" scoped>
.conversation-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  background-color: #99999928;

  &:hover{
    background-color: #ffffff;
    border-radius: 5px;
  }
}
.conversation-info{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user-message{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  background-color: #99999918;

  i{
    font-size: 18px;
    color: #999;
    width: 30px;
    cursor: pointer;
  }
}
.profil-options{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  top: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 10px;
  z-index: 1;

  .option{
    width: 100%;
    padding: 10px;
    cursor: pointer;

    &:hover{
      background-color: #eee;
      border-radius: 5px;
    }
  }
}
.status-circle{
  display: flex;
  align-items: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #05922f;
  margin: 0 30px 0 10px;

  p{
    font-size: 10px;
    color: #fff;
    margin-left:15px;
  }
}

.profil-interaction{
  display: flex;
  flex-direction: row;
  position:fixed;
  right: 50px;

  i{
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    
    &:hover{
      background-color: #f7f7f7b4;
      border-radius: 5px;
    }
  }
}
.old-message{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #99999928;

  i{
    font-size: 18px;
    color: #999;
    width: 30px;
    margin: auto;
    cursor: pointer;

    &.fa-magnifying-glass{
      align-items: center;
      margin-left: 10px;
      color: #fff;
      background-color: #414141;
      border-radius: 5px;
    }
  }
}
.messages-block{
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 80vh;
}
.reaction-bar{
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 0 0 10px 0;
  border-radius: 5px;

  i{
    font-size: 18px;
    color: #fff;
    width: 30px;
    cursor: pointer;
  }
}
.write-message{
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #99999918;

  i{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    font-size: 18px;
    color: #999;
    cursor: pointer;

    &.fa-paper-plane{
      align-items: center;
      margin-left: 10px;
      color: #fff;
      background-color: #007bff;
      padding: 8px 10px 8px 6px;
      border-radius: 5px;
    }

    &:hover{
      background-color: #409afa;
      border-radius: 5px;
    }
  }
}
.chat-messages{
  display: flex;
  flex-direction: column;
  background: #fafafa;
  margin: 10px;
  height: 90vh;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);  
  padding: 20px;

  p{
    font-size: 12px;
    color: #999;
  }

  input {
    background-color: #ffffffbe;
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 80%;
    margin-right: 10px;
  }
}
.message {
  display: flex;
  flex-direction: row;
  margin: 10px;
}
.user-profil{
  display: flex;
  flex-direction: column;
}

.message-profil{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.message-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
}

.job-status{
  margin-left: 10px;
  font-size: 12px;
  color: #0c61ff;
  background-color: #b2d6fd;
  border-radius: 5px;
  padding: 5px;
}

.name {
  font-size: 16px;
}

.created-at {
  margin-left: 10px;
  font-size: 12px;
  color: #999;
}

.message-content {
  margin-top: 5px;
  color: #3a3a3a;
}

.container{
  display: flex;
  flex-direction: row;
}
.conversation-list {
  display: flex;
  flex-direction: column;
  background: #fafafa;
  margin: 10px;
  height: 90vh;
  width: 500px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.conversation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #ddd;

  i{
    font-size: 20px;
    color: #999;
    width: 30px;
    cursor: pointer;
  }

  h1{
    margin: 20px;
    font-size: 18px;
    font-weight: bold;
  }
}

</style>
