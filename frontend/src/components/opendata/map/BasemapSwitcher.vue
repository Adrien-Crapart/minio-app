<template>
  <div class="basemap-switcher">
    <div v-for="basemap in basemaps" :key="basemap.id">
      <div
        @mouseover="showTooltip(basemap.id)"
        @mouseout="hideTooltip(basemap.id)"
        class="image-container"
      >
        <img
          :src="basemap.imageSrc"
          :class="{ active: basemap.visible }"
          @click="switchBasemap(basemap.id)"
        />
        <div class="tooltip" v-if="basemap.showTooltip">{{ basemap.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    basemaps: Array,
  },
  methods: {
    switchBasemap(layerId) {
      this.basemaps.forEach((layer) => {
        layer.visible = layer.id === layerId;
      });
    },
    showTooltip(layerId) {
      this.basemaps.forEach((layer) => {
        layer.showTooltip = layer.id === layerId;
      });
    },
    hideTooltip(layerId) {
      this.basemaps.forEach((layer) => {
        layer.showTooltip = false;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.basemap-switcher {
  position: fixed;
  display: flex;
  gap: 20px;
  padding: 10px;
  background: #e9e7e7;
  border-radius: 10px;
  max-width: 70px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
  bottom: 5px;
  right: 10px;
  z-index: 2;

  &:hover {
    max-width: 100%;
  }

  .image-container {
    position: relative;
  }

  .tooltip {
    position: absolute;
    top: 10px;
    left: -50px;
    transform: translateY(-100%);
    background: #333;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    z-index:3;

    &.active {
      visibility: visible;
    }
  }
}

img {
  cursor: pointer;
  width: 50px;
  border-radius: 10px;
}

img.active {
  border: 2px solid rgb(175, 175, 175);
}
</style>