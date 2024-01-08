<template>
  <div class="container">
    <DataSearch/>
    <div class="container-content">  
      <DataFilter/>
      <DataWrapper/>
    </div>
    <!-- <DataSearchBar/> -->
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import DataSearchBar from '@/components/opendata/explore/DataSearchBar.vue';
import DataSearch from '@/components/opendata/explore/DataSearch.vue';
import DataFilter from '@/components/opendata/explore/DataFilter.vue';
import DataWrapper from '@/components/opendata/explore/DataWrapper.vue';

export default defineComponent({
  components: {
    // DataSearchBar,
    DataSearch,
    DataFilter,
    DataWrapper
  },
});
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
}
.container-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}
</style>
