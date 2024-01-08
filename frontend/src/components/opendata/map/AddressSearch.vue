<template>
  <div class="address-search">
    <div class="searchbar">
      <button @click="toggleSearch">{{ isParcel ? 'Rechercher par lieu' : 'Rechercher par parcelle' }}</button>
      <input v-model="searchQuery" v-if="!isParcel" @input="handleInputChange" placeholder="Rechercher une adresse" />
      <input v-model="searchCity" v-if="isParcel" @input="performCitySearch" placeholder="Commune" />
      <input v-model="searchSection" v-if="isParcel" @input="handleInputChange" placeholder="Section" />
      <input v-model="searchParcel" v-if="isParcel" @input="handleInputChange" placeholder="Parcelle" />
    </div>
    <ul v-if="searchResults.length">
      <li v-for="result in searchResults" :key="result.id" @click="selectAddress(result)">
        {{ result.displayName }}
        <span
          v-if="result.tag === 'Nominatim'"
          :style="{ backgroundColor: '#413eee', padding: '0px 5px 0px 5px', borderRadius: '5px', color: 'white' }"
        >{{ result.tag }}</span>
        <span
          v-if="result.tag === 'Etalab'"
          :style="{ backgroundColor: '#ee3e56', padding: '0px 5px 0px 5px', borderRadius: '5px', color: 'white' }"
        >{{ result.tag }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      searchCity: '',
      searchSection: '',
      searchParcel: '',
      isParcel: false,
    };
  },
  methods: {
    handleInputChange() {
      clearTimeout(this.inputTimeout);

      this.inputTimeout = setTimeout(() => {
        if (this.searchQuery.length >= 5) {
          this.performAddressSearch();
        } else {
          this.searchResults = [];
        }
      }, 500);
    },
    async performCitySearch() {
      if (this.searchCity.length === 2) {
        const response = await axios.get(`https://www.geoportail-urbanisme.gouv.fr/api/grid/municipalities/by-departement?name=${encodeURIComponent(this.searchCity)}`);
        this.searchResults = this.parseCityResponse(response.data);
      } else {
        this.searchResults = [];
      }
    },
    async performAddressSearch() {
      try {
        const apiUrl1 = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(this.searchQuery)}&format=json`;
        const apiUrl2 = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(this.searchQuery)}&limit=10`;

        const [response1, response2] = await Promise.all([
          axios.get(apiUrl1),
          axios.get(apiUrl2),
        ]);

        const nominatimResults = this.parseNominatimResponse(response1.data);
        const dataGouvResults = this.parseDataGouvResponse(response2.data);
        const combinedResults = [
          ...nominatimResults,
          ...dataGouvResults,
        ];
        this.searchResults = combinedResults;
      } catch (error) {
        console.error('Error performing address search:', error);
      }
    },
    parseCityResponse(data) {
      // Parse and format results from the Nominatim API
      return data.municipalities.map(result => ({
        id: String(result.insee),
        displayName: String(result.insee + ' - ' + result.title),
        tag: ''
      }));
    },
    parseNominatimResponse(data) {
      // Parse and format results from the Nominatim API
      return data.map(result => ({
        id: String(result.place_id),
        lat: parseFloat(result.lat),
        lon: parseFloat(result.lon),
        displayName: String(result.display_name),
        type: String(result.type),
        tag: 'Nominatim'
      }));
    },
    parseDataGouvResponse(data) {
      // Parse and format results from the Data Gouv API
      return data.features.map(feature => ({
        id: String(feature.properties.id),
        lat: parseFloat(feature.geometry.coordinates[1]),
        lon: parseFloat(feature.geometry.coordinates[0]),
        displayName: String(feature.properties.label),
        type: String(feature.properties.type),
        tag: 'Etalab'
      }));
    },
    selectAddress(result) {
      this.searchQuery = result.display_name;
      this.searchResults = [];
      let zoomLevel;

      if (result.type === 'administrative' || result.type === 'municipality') {
        zoomLevel = 14;
      }
      if (result.type === 'residential' || result.type === 'street') {
        zoomLevel = 18;
      }
      if (result.type === 'house' || result.type === 'housenumber') {
        zoomLevel = 21;
      }

      this.$emit('address-selected', {
        id: result.id,
        lat: parseFloat(result.lat),
        lon: parseFloat(result.lon),
        displayName: result.display_name,
        zoomLevel: zoomLevel,
      });
    },
    toggleSearch() {
      this.isParcel = !this.isParcel;
    },
  },
};
</script>

<style scoped lang="scss">
.address-search {
  position: absolute;
  padding: 10px;
  width: 50vw;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
  border-radius: 5px;
  right: 6vw;
  top: 1vh;
  z-index: 3;

  & .searchbar {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  button {
    font-size: 12px;
    margin-right: 5px;
  }

  input {
    width: 100%;
    padding: 5px 0 5px 0;
    margin: 5px;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;   
    overflow: auto;

    li {
      cursor: pointer;
      padding: 5px;
      font-size: 12px;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      margin-bottom: 2px;
      line-height: 1.5;
    }  
  }
}
</style>