<template>
  <div class="interaction-bar">
    <div class="zoom-bar">
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-plus" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-house" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-minus" /></button>
    </div>      

    <div class="edit-bar">
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-pen" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-ruler" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-share" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-image" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-gear" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-eye" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-eye-slash" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-copy" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-paste" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-vector-square" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></button>
      <button @click="zoomIn"><font-awesome-icon icon="fa-solid fa-table" /></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    zoomIn() {
      this.$emit('zoom-in');
    },
  },
};
</script>

<style scoped lang="scss">
.interaction-bar {
  position: absolute;
  top: 20vh;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;

  & .edit-bar,
  & .zoom-bar{
    display: flex;
    flex-direction: column;
    align-items: center;


    button {
      padding: 5px 10px;
      background-color: #cecece;
      color: #fff;
      
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #acaaaa;
      }

      & font-awesome-icon {
        width: 20px;
        height: 20px;
      }
    }
  }

  
}

</style>