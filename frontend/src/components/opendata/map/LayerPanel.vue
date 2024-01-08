<template>
  <div class="layer-panel">
    <div class="categories">
      <div class="type">Urbanisme</div>
      <div class="type">Risques</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    layers: Array,
  },
  data() {
    return {
      activeTab: 'couches',
      layerImages: [
        { 'Cadastre': '<i class="fa-solid fa-draw-polygon"></i>' },
        { 'Risques': '<i class="fa-solid fa-fire"></i>' },
        { 'Urbanisme': '<i class="fa-solid fa-building"></i>' },
        { 'Environnement': '<i class="fa-solid fa-tree"></i>' },
        { 'Nuisances': '<i class="fa-solid fa-plane-departure"></i>' },
        { 'Servitudes d\'Utilités Publiques': '<i class="fa-solid fa-building"></i>' }
      ],
    };
  },
  computed: {
    activeLayers() {
      return this.layers.filter((layer) => layer.visible);
    },
    hasActiveLayers() {
      return this.activeLayers.length > 0;
    },
    // layerGroups() {
    //   // Group layers by "layer_group"
    //   const groups = [];
    //   this.layers.forEach((layer) => {
    //     const existingGroup = groups.find((group) => group.name === layer.layer_group);
    //     if (existingGroup) {
    //       existingGroup.layers.push(layer);
    //     } else {
    //       groups.push({
    //         id: groups.length + 1,
    //         name: layer.layer_group,
    //         expanded: true,
    //         layers: [layer]
    //       });
    //     }
    //   });

    //   // Sort layers within each group by "layer_order"
    //   groups.forEach((group) => {
    //     group.layers.sort((a, b) => a.layer_order - b.layer_order);
    //   });

    //   return groups;
    // },
  },
  methods: {
    toggleLayer(layer) {
      this.$emit('toggle-layer', layer);
    },
    changeOpacity(layer) {
      this.$emit('change-opacity', layer);
    },
    getLegendUrl(layer) {
      return layer.legend || '';
    },
    toggleGroupVisibility(groupId) {
      const group = this.layerGroups.find((group) => group.id === groupId);
      if (group) {
        group.expanded = !group.expanded;
      }
    },
  },
});
</script>

<style scoped lang="scss">
.layer-panel {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px;
  width: 100%;
  background-color: #F8F8F8;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2;
  transition: all 0.5s ease;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &:hover{
    &::-webkit-scrollbar-thumb {
      background-color: #555;
      border-radius: 5px;
    }
  }

}

.categories{
  display: flex;
  flex-direction: column;
  width: 15%;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &:hover{
    &::-webkit-scrollbar-thumb {
      background-color: #555;
      border-radius: 5px;
    }
  }

}

.type{
  display: flex;
  flex-direction: row;
  font-weight: 600;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  background-color: #ebebeb;
  border-radius: 10px;
  padding: 10px;
}
</style>