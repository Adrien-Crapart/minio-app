<template>
  <div class="layer-panel">
    <div class="selector-tabs">
      <div class="tab" :class="{ active: activeTab === 'couches' }" @click="activeTab = 'couches'"><i class="fa-solid fa-layer-group"></i>Couches</div>
      <div class="tab" :class="{ active: activeTab === 'legendes' }" @click="activeTab = 'legendes'"><i class="fa-brands fa-elementor"></i>Légendes</div>
      <div class="tab" :class="{ active: activeTab === 'parametres' }" @click="activeTab = 'parametres'"><i class="fa-solid fa-sliders"></i>Paramètres</div>
      <div class="horizontal-rule"></div>
    </div>
    
    <div v-if="activeTab === 'couches'">
      <div class="wrap-collapsible" v-for="group in layerGroups" :key="group.id">
        <input :id="'collapsible-' + group.id" class="toggle" type="checkbox">
        <label :for="'collapsible-' + group.id" class="lbl-toggle"> 
          <div class="title-group">{{ group.name }}</div>
          <span>{{ group.layers.length }}</span>
          <i :class="{'fas fa-chevron-right': !group.expanded, 'fas fa-chevron-down': group.expanded}"></i>
          <button class="filter-group"><i class="fa-solid fa-filter"></i></button>
        </label>
        <div class="collapsible-content">
          <div class="content-inner">
            <div v-for="layer in group.layers" :key="layer.id" class="layer-block">
              <label>
                <input type="checkbox" v-model="layer.visible" @change="toggleLayer(layer)" />
                {{ layer.title }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'legendes'">
      <div class="sticky-legend" v-if="hasActiveLayers">
        <ul>
          <li v-for="layer in activeLayers" :key="layer.id">
            <div class="legend-block" v-if="getLegendUrl(layer) !== ''">
              <p>{{ layer.title }}</p>
              <img :src="getLegendUrl(layer)" alt="legend" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="activeTab === 'parametres'"></div>
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
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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
  .toggle { 
    display:none ; 
  } 
}

.lbl-toggle { 
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 16px;
  padding: 5px 10px 5px 10px; 
  border: 1.5px solid #96949448;
  color: #414141; 
  background: #fff!important; 
  cursor: pointer; 
  border-radius: 7px; 
  transition: all 0.25s ease-out; 

  &:hover,
  &:focus,
  &:focus-visible {
    color: #1d44c5; 
    outline: 4px auto -webkit-focus-ring-color;
  }

  &::before { 
    display: inline-block; 
    border-top: 5px solid transparent; 
    border-bottom: 5px solid transparent; 
    border-left: 5px solid currentColor; 
    vertical-align: middle; 
    margin-right: .7rem; 
    transform: translateY(-2px); 
    transition: transform .2s ease-out; 
  } 

  i{
    margin-left: auto;
  }

  span {
    font-size: 12px;
    margin-left: 10px;
    background-color: #87b8f3!important;
    color: #fff;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
  }

  .title-group{
    max-width: 210px;
  }
}  
.toggle:checked+.lbl-toggle i::before { 
  transform: rotate(90deg) translateX(-3px); 
}
.collapsible-content { 
  max-height: 0px; 
  overflow: hidden; 
  transition: max-height .25s ease-in-out; 
  margin: 10px 0 10px 0;
  background: #fff!important;
  border-radius: 7px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &:hover{
    &::-webkit-scrollbar-thumb {
      background-color: #555;
      border-radius: 5px;
    }
  }

  .content-inner { 
    padding: 10px 0px 10px 0px; 
  }

  .layer-block{
    display: flex;
    align-items: center;
    text-align: left;
    vertical-align: middle;
    font-size: 14px;
    color: black;
    border-radius: 5px;
    padding: 5px;
    vertical-align: middle;
    margin: 0 0 0 5px;

    &:hover{
      background: #EAF3FE!important;
      color: rgb(58, 140, 235);
      font-weight: 500;
    }
  }
} 
.toggle:checked + .lbl-toggle + .collapsible-content { 
  max-height: 500px; 
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1.5px solid #96949448;
} 

.icon-theme{
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.selector-tabs {
  display: flex;
  justify-content: space-between;
  background-color: #EDEDED;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
}

.tab {
  display: flex;
  font-size: 14px;
  cursor: pointer;
  padding: 10px;
  color: #8a8888;
  transition: all 0.2s ease;
  position: relative;

  i {
    margin-right: 5px;
  }

  &.active {
    border-radius: 5px;
    color: #000;
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #000;
    }
  }
}

.horizontal-rule{
  border-top: 1px solid #96949448;
  margin: 0 10px 0 0;
}

.filter-group{
  background: #ebe9e9!important;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-left: 10px;
  color: #4d4d4d;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover{
    background: #EAF3FE!important;
  }
}
</style>