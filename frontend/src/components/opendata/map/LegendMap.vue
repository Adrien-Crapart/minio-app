<template>
    <div class="legend-container">
        <h2>Legende</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {

    };
  }
});
</script>

<style lang="scss" scoped>
.legend-container{
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 930px;
    height: 20vh;
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.747);
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    padding: 10px;
}

h2{
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
}
</style>