<template>
    <div class="container">
        <layer-panel :layers="layers" @toggle-layer="toggleLayer"></layer-panel>
        <div id="map" class="map"></div>
        <BasemapSwitcher :basemaps="basemaps" @toggle-layer="toggleLayer"/>
        <!-- <address-search @address-selected="handleAddressSelected"></address-search> -->
        <SearchBarVue />
        <!-- <InteractionBar /> -->
    </div>
</template>

<script>
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { DragRotateAndZoom, Link, defaults as defaultInteractions} from 'ol/interaction.js';
import { ScaleLine, defaults as defaultControls } from 'ol/control.js';
import { createStringXY } from 'ol/coordinate.js';
import MousePosition from 'ol/control/MousePosition.js';
import Overlay from 'ol/Overlay';
import { toStringHDMS } from 'ol/coordinate';
import { click } from 'ol/events/condition';
import { Image as ImageLayer } from 'ol/layer';
import ImageWMS from 'ol/source/ImageWMS';

import LayerPanel from './LayerPanel.vue';
import AddressSearch from './AddressSearch.vue';
import BasemapSwitcher from './BasemapSwitcher.vue'
import SearchBarVue from './SearchBar.vue';

import { layers } from '/src/assets/layers';
import { basemaps } from "/src/assets/basemaps";

export default {
  data() {
    return {
      selectedCoordinates: null,
      map: null,
      mapView: null,
      layers: [...layers],
      basemaps: [...basemaps]
    };
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {

      this.mapView = new View({
        center: fromLonLat([6.062899, 43.411056]),
        zoom: 13,
        maxZoom: 23,
        minZoom: 10
      });

      this.map = new Map({
        target: 'map',
        controls: defaultControls().extend([
          new ScaleLine({
            units: 'metric',
          }),
          new MousePosition({
            coordinateFormat: createStringXY(4),
            projection: 'EPSG:4326',
            target: document.getElementById('mouse-position'),
          })
        ]),
        interactions: defaultInteractions().extend([new DragRotateAndZoom(), new Link()]),
        layers: [
          ...this.basemaps.map(basemap => {
            basemap.layer.setZIndex(1);
            return basemap.layer;
          }),
          ...this.layers.map(layer => {
            layer.layer.setZIndex(2);
            return layer.layer;
          })
        ],
        view: this.mapView
      });

      // Set the initial visibility of layers
      this.basemaps.forEach(layer => {
        layer.layer.setVisible(layer.visible);
      });
      this.layers.forEach(layer => {
        layer.layer.setVisible(layer.visible);
      });

      const popup = new Overlay({
        element: document.getElementById('popup'),
        autoPan: true,
        autoPanAnimation: {
          duration: 250,
        },
      });
      this.map.addOverlay(popup);

      this.map.on('click', (evt) => {
        const viewResolution = this.mapView.getResolution();
        const coordinate = evt.coordinate;

        // Iterate over all layers
        this.map.getLayers().forEach((layer) => {
          if (layer instanceof ImageLayer && layer.getVisible()) {
            const source = layer.getSource();
            if (source instanceof ImageWMS) {
              // Build GetFeatureInfo URL for the clicked coordinate
              const url = source.getGetFeatureInfoUrl(
                coordinate,
                viewResolution,
                'EPSG:4326', // Change to the appropriate projection
                { INFO_FORMAT: 'text/html' } // Request format, could be 'text/plain' or 'application/json' depending on the server
              );

              if (url) {
                // Fetch GetFeatureInfo response and display it in the popup
                fetch(url)
                  .then((response) => response.text())
                  .then((html) => {
                    // Display the response in the popup content
                    document.getElementById('popup-content').innerHTML = html;

                    // Show the popup
                    popup.setPosition(coordinate);
                    popup.getElement().style.display = 'block';
                  });
              }
            }
          }
        });
      });
      
    },
    toggleLayer(layer) {
      layer.layer.setVisible(layer.visible);
    },
    handleAddressSelected(addressInfo) {
      this.selectedCoordinates = addressInfo;  
      this.updateMapView();
    },
    updateMapView() {
      if (this.selectedCoordinates) {  
        this.mapView.setCenter(fromLonLat([this.selectedCoordinates.lon, this.selectedCoordinates.lat]));
        this.mapView.setZoom(this.selectedCoordinates.zoomLevel);
      }
    },
  },
  components: {
    LayerPanel,
    AddressSearch,
    BasemapSwitcher,
    SearchBarVue
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%; 
}
#map {
  display: flex;
  position: relative;
  top: 0;
  left: 350px;
  height: 100%;
  width: 100%;
  z-index: 1;

  &:-webkit-full-screen {
    height: 100%;
    margin: 0;
  }

  &:fullscreen {
    height: 100%;
  }

  .ol-rotate {
    top: 3em;
  }
}
.coordinate-panel {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 3;
  width: 6.5vw;
  height: 3vh;
  background: white;
  padding: 1.5px 2px 1.5px 2px;
  border-radius: 5px;
  left: 23vw;
  bottom: 1.2vh;
  box-shadow: 5px 6px 24px -2px rgba(0,0,0,0.3);
  align-items: left;
  justify-content: left;
  font-size: 10px;
  font-weight: 500;
}
.ol-popup {
  display: none;
  position: absolute;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.ol-popup-closer {
  text-decoration: none;
  position: absolute;
  top: 2px;
  right: 8px;
}

.ol-popup-closer:after {
  content: '✖';
}
</style>