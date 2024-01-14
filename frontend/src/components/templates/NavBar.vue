<template>
  <header>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="tool-switcher" viewBox="0 0 16 16" @click="toggleToolPanel">
      <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/>
    </svg>
    <div v-if="showToolPanel" class="tool-panel">
      <ul class="tool-list">
        <li @click="selectTool('Tool 1')" class="tool-content">
          <router-link to="/file-manager">
          <img src="/src/components/filemanager/icons/folder.svg" alt="Folder Icon" class="tool-icon" />
          File Manager
          </router-link>
        </li>
        <li @click="selectTool('Tool 2')" class="tool-content">
          <router-link to="/opendata">
          <img src="/src/components/filemanager/icons/opendata.svg" alt="Folder Icon" class="tool-icon" />
          Open Data
          </router-link>
        </li>
        <li @click="selectTool('Tool 3')" class="tool-content">
          <router-link to="/search">
          <img src="/src/components/filemanager/icons/search.svg" alt="Folder Icon" class="tool-icon" />
          Tâches à faire
          </router-link>
        </li>
        <li @click="selectTool('Tool 3')" class="tool-content">
          <router-link to="/messages">
            <img src="/src/components/filemanager/icons/message.svg" alt="Folder Icon" class="tool-icon" />
            Messages
          </router-link>
        </li>
        <li @click="selectTool('Tool 3')" class="tool-content">
          <router-link to="/services">
            <img src="/src/components/filemanager/icons/service.svg" alt="Folder Icon" class="tool-icon" />
            Services
          </router-link>
        </li>
      </ul>
    </div>
  <a href="index.html">
      <img class="logo" src="/src/components/opendata/images/out-4.png" alt="logo">
      <h1>OPENDATA</h1>
  </a>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <!--<li><router-link to="/opendata/explore">Explorer</router-link></li>
      <li><router-link to="/opendata/visualize">Visualiser</router-link></li>
      <li><router-link to="/opendata/contribute">Contribuer</router-link></li>
      <li class="api-button"><router-link to="/opendata/api">API</router-link></li>-->
    </ul>
  </nav>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showToolPanel: false,
      selectedTool: null,
    };
  },
  methods: {
    toggleToolPanel() {
      this.showToolPanel = !this.showToolPanel;
    },
    selectTool(tool) {
      this.selectedTool = tool;
    },
  },
};
</script>

<style scoped lang="scss">
.tool-icon {
  width: 40px;
  height: 40px;
}
.tool-content a {
  display: flex;
  justify-content: center;
  font-weight: 600;
  align-items: center;
  flex-direction: column;
  max-width: 100px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  margin: 5px;
  border-radius: 5px;
  color: black;
  text-align: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  i {
    margin-right: 10px;
  }
}
.tool-panel {
  position: absolute;
  top: 80px;
  left: 10px;
  border-radius: 10px;
  width: 350px;
  height: auto;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px;
  transition: all 0.3s ease 0s;
  z-index: 2;
  
}
.tool-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
}

.tool-list li {
  margin-bottom: 10px;
}
.tool-switcher {
  position: absolute;
  color: #fff;
  left: 20px;
  width: 40px;
  height: auto;
  z-index: 2;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
}
.navbar li, a, button {
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
}

header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #24252A;
    padding: 10px 10%;

    a {
        display: flex;
        align-items: center;
        color: #fff;
        margin-right: auto;
        cursor: pointer;
    }
}
.logo{
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.navbar {
  list-style: none;

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
      display: inline-block;
      padding: 0px 20px;

    a {
      transition: all 0.3s ease 0s;

      &:hover {
          color: #0088a9;
      }
    }
}

button {
    margin-left: 20px;
    padding: 9px 25px;
    background-color: rgba(0,136,169,1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;

    &:hover {
        background-color: rgba(0,136,169,0.8);
    }
  }
}

.api-link button{
    padding: 10px 15px;
    color: black;
    border-radius: 5px;
    cursor: pointer;
}

li.api-button{
  background: #fff;
  padding: 5px 10px 0 5px;
  border-radius: 5px;

  a{
    color: rgb(26, 16, 16);
    font-weight: bold;
  }
}
</style>