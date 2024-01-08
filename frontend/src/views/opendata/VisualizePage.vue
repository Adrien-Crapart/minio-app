<template>
  <div class="container-content">
    <MapBox/>
    <layer-panel :layers="layers" @toggle-layer="toggleLayer"></layer-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MapBox from '@/components/opendata/map/MapBox.vue';
import LayerPanel from '@/components/opendata/map/LayerPanel.vue';

export default defineComponent({
  components: {
    MapBox,
    LayerPanel
  },
});
</script>

<style scoped lang="scss">
.container-content {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%; 
}
</style>
