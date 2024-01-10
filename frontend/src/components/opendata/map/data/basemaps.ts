import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS'
import OSM from 'ol/source/OSM'

export const basemaps = [
  {
    id: 1,
    title: 'OSM',
    visible: true,
    type: 'TileLayer',
    legend: '',
    layer_group: 'Fond de cartes',
    layer_order: 1,
    imageSrc: './src/assets/ic_default-1x.png',
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'http://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        params: {
          LAYERS: 'OI.OrthoimageCoverage.HR',
          TILED: true,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 2,
    title: 'OSM',
    visible: true,
    type: 'TileLayer',
    legend: '',
    layer_group: 'Fond de cartes',
    layer_order: 1,
    imageSrc: './src/assets/ic_default-1x.png',
    layer: new TileLayer({ source: new OSM() })
  },
  {
    id: 3,
    title: 'Photo Aérienne',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Fond de cartes',
    layer_order: 2,
    imageSrc: './src/assets/ic_terrain-1x.png',
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/inspire/inspire/r/wms?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'OI.OrthoimageCoverage.HR',
          TILED: true,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 3,
    title: 'IGN',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Fond de cartes',
    layer_order: 3,
    imageSrc: './src/assets/ign.png',
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/ghxp9vajtqbelq0bjzbtsa47/geoportail/r/wms',
        params: {
          LAYERS: 'GEOGRAPHICALGRIDSYSTEMS.MAPS',
          TILED: true,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 4,
    title: 'Photographies aériennes 1950-1965',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Fond de cartes',
    layer_order: 4,
    imageSrc: './src/assets/ortho.jpg',
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/orthohisto/geoportail/r/wms',
        params: {
          LAYERS: 'ORTHOIMAGERY.ORTHOPHOTOS.1950-1965',
          TILED: true,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 5,
    title: 'Photographies aériennes 2000-2005',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Fond de cartes',
    layer_order: 5,
    imageSrc: './src/assets/ortho.jpg',
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/orthohisto/geoportail/r/wms',
        params: {
          LAYERS: '	ORTHOIMAGERY.ORTHOPHOTOS2000-2005',
          TILED: true,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 31,
    title: 'Photographies aériennes 2006-2010',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Fond de cartes',
    layer_order: 6,
    imageSrc: './src/assets/ortho.jpg',
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/orthohisto/geoportail/r/wms',
        params: {
          LAYERS: 'ORTHOIMAGERY.ORTHOPHOTOS2006-2010',
          TILED: true,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 6,
    title: 'Photographies aériennes 2011-2015',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Fond de cartes',
    layer_order: 7,
    imageSrc: './src/assets/ortho.jpg',
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/orthohisto/geoportail/r/wms',
        params: {
          LAYERS: '	ORTHOIMAGERY.ORTHOPHOTOS2011-2015',
          TILED: true,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 7,
    title: 'Photographies aériennes 2020',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Fond de cartes',
    layer_order: 8,
    imageSrc: './src/assets/ortho.jpg',
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/orthohisto/geoportail/r/wms',
        params: {
          LAYERS: 'ORTHOIMAGERY.ORTHOPHOTOS2020',
          TILED: true,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 8,
    title: "Carte de l'état-major",
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Fond de cartes',
    layer_order: 9,
    imageSrc: './src/assets/positron.png',
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/cartes/geoportail/r/wms',
        params: {
          LAYERS: 'GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40',
          TILED: true,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  }
]
