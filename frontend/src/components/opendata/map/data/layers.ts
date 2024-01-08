import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS'
import WMTS from 'ol/source/WMTS.js'
import WMTSTileGrid from 'ol/tilegrid/WMTS.js'
import OSM from 'ol/source/OSM'
import { get as getProjection } from 'ol/proj.js'
import { getTopLeft, getWidth } from 'ol/extent.js'

const projection = getProjection('EPSG:900913')
const projectionExtent = projection.getExtent()
const size = getWidth(projectionExtent) / 256
const resolutions = new Array(19)
const matrixIds = new Array(19)
for (let z = 0; z < 19; ++z) {
  // generate resolutions and matrixIds arrays for this WMTS
  resolutions[z] = size / Math.pow(2, z)
  matrixIds[z] = 'EPSG:900913:' + z
}

export const layers = [
  {
    id: 2,
    title: 'Parcelles',
    visible: true,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Cadastre',
    layer_order: 1,
    layer: new TileLayer({
      opacity: 0.6,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/parcellaire/geoportail/r/wms?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'CADASTRALPARCELS.PARCELLAIRE_EXPRESS',
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
    title: 'Radon',
    visible: false,
    type: 'TileWMS',
    legend:
      'https://mapsref.brgm.fr/wxs/georisques/risques?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=RADON_COMMUNE&format=image/png&STYLE=default',
    layer_group: 'Risques',
    layer_order: 1,
    layer: new TileLayer({
      opacity: 0.6,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'RADON_COMMUNE',
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
    title: 'Séisme',
    visible: false,
    type: 'TileWMS',
    legend:
      'https://mapsref.brgm.fr/wxs/georisques/risques?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=risq_zonage_sismique&format=image/png&STYLE=default',
    layer_group: 'Risques',
    layer_order: 2,
    layer: new TileLayer({
      opacity: 0.6,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'risq_zonage_sismique',
          TILED: false,
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
    title: 'Obligations de débrouissaillement',
    visible: false,
    type: 'TileWMS',
    legend:
      'https://mapsref.brgm.fr/wxs/georisques/risques?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=ZONAGE_OLD&format=image/png&STYLE=default',
    layer_group: 'Risques',
    layer_order: 3,
    layer: new TileLayer({
      opacity: 0.6,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'ZONAGE_OLD',
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
    title: 'Argiles',
    visible: false,
    type: 'TileWMS',
    legend:
      'https://mapsref.brgm.fr/wxs/georisques/risques?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=ALEARG&format=image/png&STYLE=default',
    layer_group: 'Risques',
    layer_order: 4,
    layer: new TileLayer({
      opacity: 0.6,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'ALEARG',
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
    title: 'Canalisation de transports de matières dangereuses',
    visible: false,
    type: 'TileWMS',
    legend:
      'https://mapsref.brgm.fr/wxs/georisques/risques?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=CANALISATIONS&format=image/png&STYLE=default',
    layer_group: 'Risques',
    layer_order: 5,
    layer: new TileLayer({
      opacity: 0.6,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'CANALISATIONS',
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
    id: 9,
    title: 'Zonage',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Urbanisme',
    layer_order: 1,
    layer: new TileLayer({
      opacity: 0.3,
      source: new TileWMS({
        url: 'https://wxs-gpu.mongeoportail.ign.fr/externe/i9ytmrb6tgtq5yfek781ntqi/wms/v?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'du,psmv',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 10,
    title: 'SUP',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Urbanisme',
    layer_order: 2,
    layer: new TileLayer({
      opacity: 0.6,
      source: new TileWMS({
        url: 'https://wxs-gpu.mongeoportail.ign.fr/externe/i9ytmrb6tgtq5yfek781ntqi/wms/v?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'sup',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 11,
    title: 'SCOT',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Urbanisme',
    layer_order: 3,
    layer: new TileLayer({
      opacity: 0.6,
      source: new TileWMS({
        url: 'https://wxs-gpu.mongeoportail.ign.fr/externe/i9ytmrb6tgtq5yfek781ntqi/wms/v?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'scot',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 12,
    title: 'Prescription',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Urbanisme',
    layer_order: 4,
    layer: new TileLayer({
      opacity: 0.6,
      source: new TileWMS({
        url: 'https://wxs-gpu.mongeoportail.ign.fr/externe/i9ytmrb6tgtq5yfek781ntqi/wms/v?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'prescription,prescription_psmv',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 13,
    title: 'Information',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Urbanisme',
    layer_order: 5,
    layer: new TileLayer({
      opacity: 0.6,
      source: new TileWMS({
        url: 'https://wxs-gpu.mongeoportail.ign.fr/externe/i9ytmrb6tgtq5yfek781ntqi/wms/v?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'info,info_psmv',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 15,
    title: 'Parcs nationaux',
    visible: false,
    type: 'TileWMS',
    legend:
      'https://wxs.ign.fr/environnement/geoportail/r/wms?version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=PROTECTEDAREAS.PN&format=image/png&STYLE=default',
    layer_group: 'Environnement',
    layer_order: 1,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/environnement/geoportail/r/wms',
        params: {
          LAYERS: 'PROTECTEDAREAS.PN',
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
    id: 16,
    title: 'Parcs naturels régionaux',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 2,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/environnement/geoportail/r/wms',
        params: {
          LAYERS: 'PROTECTEDAREAS.PNR',
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
    id: 17,
    title: "Zones naturelles d'intérêt écologique faunistique et floristique de type 1",
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 3,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/environnement/geoportail/r/wms',
        params: {
          LAYERS: 'PROTECTEDAREAS.ZNIEFF1',
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
    id: 18,
    title: "Zones naturelles d'intérêt écologique faunistique et floristique de type 2",
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 4,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/environnement/geoportail/r/wms',
        params: {
          LAYERS: 'PROTECTEDAREAS.ZNIEFF2',
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
    id: 19,
    title: 'Forêts publiques',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 5,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/environnement/geoportail/r/wms',
        params: {
          LAYERS: 'FORETS.PUBLIQUES',
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
    id: 20,
    title: 'Mesures compensatoires des atteintes à la biodiversité',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 6,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/environnement/geoportail/v/wms',
        params: {
          LAYERS: 'MESURES_COMPENSATOIRES',
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
    id: 21,
    title: 'Bâtiments',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Cadastre',
    layer_order: 2,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/topographie/geoportail/v/wms',
        params: {
          LAYERS: 'BDTOPO-GEOPO-BATI_WLD_WGS84G',
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
    id: 22,
    title: 'Hydrographie',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Cadastre',
    layer_order: 3,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/topographie/geoportail/v/wms',
        params: {
          LAYERS: 'BDTOPO-GEOPO-HYDROGRAPHIE_WLD_WGS84G',
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
    id: 23,
    title: 'Réseau routier',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Cadastre',
    layer_order: 4,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/topographie/geoportail/v/wms',
        params: {
          LAYERS: 'BDTOPO-GEOPO-RESEAU_ROUTIER_WLD_WGS84G',
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
    id: 24,
    title: 'Voies ferrées',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Cadastre',
    layer_order: 5,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/topographie/geoportail/v/wms',
        params: {
          LAYERS: 'BDTOPO-GEOPO-TRANSPORT_VOIES_FERREES_WLD_WGS84G',
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
    id: 25,
    title: 'Végétation',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Cadastre',
    layer_order: 6,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/topographie/geoportail/v/wms',
        params: {
          LAYERS: 'BDTOPO-GEOPO-VEGETATION_WLD_WGS84G',
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
    id: 26,
    title: "PEB (Plans d'exposition aux bruits)",
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Nuisances',
    layer_order: 1,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/transports/geoportail/v/wms',
        params: {
          LAYERS: 'DGAC-PEB_BDD_FXX_WM_WMS',
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
    id: 27,
    title: 'PGS (Plans de gêne sonore)',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Nuisances',
    layer_order: 2,
    layer: new TileLayer({
      opacity: 0.5,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/transports/geoportail/v/wms',
        params: {
          LAYERS: 'DGAC-PGS_BDD_FXX_WM_WMS',
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
    id: 34,
    title: 'Corine Land Cover 2018',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 7,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/clc/geoportail/r/wms',
        params: {
          LAYERS: 'LANDCOVER.CLC18',
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
    id: 35,
    title: 'Lieux nommés',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Cadastre',
    layer_order: 7,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/cartovecto/geoportail/v/wms',
        params: {
          LAYERS: 'BDCARTO-LIEUX_NOMMES_WLD_WGS84G',
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
    id: 36,
    title: 'Contours IRIS',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Cadastre',
    layer_order: 8,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/cartovecto/geoportail/v/wms',
        params: {
          LAYERS: 'STATISTICALUNITS.IRIS',
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
    id: 37,
    title: 'Courbes de niveau',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 8,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/altimetrie/geoportail/r/wms',
        params: {
          LAYERS: 'ELEVATION.CONTOUR.LINE',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 38,
    title: 'Registre Parcellaire Graphique (RPG / cultures)',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 9,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/agriculture/geoportail/r/wms',
        params: {
          LAYERS: 'LANDUSE.AGRICULTURE.LATEST',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 39,
    title: 'Base Adresse Nationale',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Cadastre',
    layer_order: 9,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/adresse/geoportail/v/wms',
        params: {
          LAYERS: 'BAN.DATA.GOUV',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 40,
    title: 'Limites administratives',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Cadastre',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://wxs.ign.fr/administratif/geoportail/r/wms',
        params: {
          LAYERS: 'LIMITES_ADMINISTRATIVES_EXPRESS.LATEST',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 41,
    title: 'Lotissements Dep 83',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Urbanisme',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://remocra.sapeurspompiers-var.fr/remocra/geoserver/remocra/wms',
        params: {
          LAYERS: 'remocra:HABITAT',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 42,
    title: 'TRI Dep 83',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://remocra.sapeurspompiers-var.fr/remocra/geoserver/remocra/wms',
        params: {
          LAYERS: 'remocra:tri_hauteur',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 43,
    title: 'PPRIF Dep 83',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://remocra.sapeurspompiers-var.fr/remocra/geoserver/remocra/wms',
        params: {
          LAYERS: 'remocra:RISQUE_FEUX',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 44,
    title: 'Zones potentiellement inondables Dep 83',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://remocra.sapeurspompiers-var.fr/remocra/geoserver/remocra/wms',
        params: {
          LAYERS: 'remocra:AZI',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 45,
    title: 'Aléa feux de forêt Dep 83',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://remocra.sapeurspompiers-var.fr/remocra/geoserver/remocra/wms',
        params: {
          LAYERS: 'remocra:alea_ff',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 46,
    title: 'Aléa de submersion marine Dep 83',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://remocra.sapeurspompiers-var.fr/remocra/geoserver/remocra/wms',
        params: {
          LAYERS: 'remocra:alea_submersion',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 47,
    title: 'PPRI Dep 83',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://remocra.sapeurspompiers-var.fr/remocra/geoserver/remocra/wms',
        params: {
          LAYERS: 'remocra:alea_submersion',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 48,
    title: 'PPRT Dep 83',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://remocra.sapeurspompiers-var.fr/remocra/geoserver/remocra/wms',
        params: {
          LAYERS: 'remocra:pprt',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 49,
    title: 'Arrêté de protection de biotope',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:38',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 50,
    title: 'Réserve intégrale de parc national',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:35',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 51,
    title: 'Parc National, zone coeur',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:34',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 52,
    title: "Parc National, aire d'adhésion",
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:33',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 53,
    title: 'Arrêté de protection de biotope',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:38',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 54,
    title: 'Arrêté de protection de géotope',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:46',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 55,
    title: 'Arrêté de protection des habitats naturels',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:43',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 56,
    title: 'Réserve biologique dirigée',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:23',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 57,
    title: 'Réserve biologique intégrale',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:24',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 58,
    title: 'Espace naturel sensible (en construction)',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:47',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 59,
    title: "Bien inscrit sur la liste du patrimoine mondial de l'UNESCO",
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:71',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 60,
    title: 'Géoparc mondial UNESCO',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:02',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 61,
    title: 'Zone humide protégée par la convention de Ramsar',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:72',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 62,
    title: 'Natura 2000 : Site inscrit au titre de la Directive Habitats (ZSC, SIC, PSIC)',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:62',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 63,
    title: 'Natura 2000 : Site inscrit au titre de la Directive Oiseaux (ZPS)',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:61',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 64,
    title: "Terrain acquis (ou assimilé) par un Conservatoire d'espaces naturels",
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:15',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 65,
    title: 'Terrain acquis par le Conservatoire du Littoral',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:11',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 66,
    title: 'Parc naturel régional',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Environnement',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new WMTS({
        url: 'https://inpn.mnhn.fr/viewer-carto/espaces/geoserver/gwc/service/wmts',
        layer: 'viewer:80',
        matrixSet: 'EPSG:900913',
        format: 'image/png',
        projection: projection,
        tileGrid: new WMTSTileGrid({
          origin: getTopLeft(projectionExtent),
          resolutions: resolutions,
          matrixIds: matrixIds
        }),
        wrapX: true
      })
    })
  },
  {
    id: 67,
    title: 'Installations industrielles',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'INSTALLATIONS_CLASSEES_SIMPLIFIE',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 68,
    title: 'Mouvement de terrain',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'MVT_LOCALISEE',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 69,
    title: 'Sites et sols (potentiellement pollués)',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'BASIAS_LOCALISE',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 70,
    title: 'Réseaux et canalisations',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: "Servitudes d'Utilités Publiques",
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'CANALISATIONS',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 71,
    title: 'Plans de prévention des risques',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS:
            'CANALISATIONS,PPRT_RISQIND,PPRN_SEISME,PPRN_AVALANCHE,PPRN_FEU,PPRN_MVT,PPRN_TSD,PPRN_CAV,PPRN_SUBMAR,PPRN_INOND,PPRT_COMMUNE_RISQIND,PPRN_COMMUNE_RISQAVAL,PPRN_COMMUNE_RISQATMO,PPRN_COMMUNE_RISQFEU,PPRN_COMMUNE_RISQSEIS,PPRN_COMMUNE_RISQVOLC,PPRN_COMMUNE_RISQTASD,PPRN_COMMUNE_RISQCAV,PPRN_COMMUNE_RISQMVT,PPRN_COMMUNE_RISQSUBM,PPRN_COMMUNE_RISQINOND',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 72,
    title: 'Inondation',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS:
            'REMNAPPE_FIAB,MASQ_AFFLEUR,MASQ_EAIP,MASQ_BDLISA,INOND_02_01,INOND_02_04,INOND_02_02,INOND_03_04,INOND_03_03,INOND_03_02,INOND_03_01,INOND_01_04,INOND_01_02,INOND_01_01,LIMITETRI,SOUSTINOND,SURALEA,OUVPROTEC',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 73,
    title: 'Cavités',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'CAVITE_COMMUNE,CAVITE_LOCALISEE',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 74,
    title: 'Avalanches',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 10,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'https://mapsref.brgm.fr/wxs/georisques/risques?SERVICE=WMS&VERSION=1.3.0',
        params: {
          LAYERS: 'CLPA_interpretation,CLPA_temoignage,CLPA_limite_enquete',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  },
  {
    id: 75,
    title: 'PPR 82',
    visible: false,
    type: 'TileWMS',
    legend: '',
    layer_group: 'Risques',
    layer_order: 11,
    layer: new TileLayer({
      opacity: 1,
      source: new TileWMS({
        url: 'http://carto.geo-ide.application.developpement-durable.gouv.fr/1223/19_01_3891.map',
        params: {
          LAYERS: 'N_DOCUMENT_PPRN_20090008_S_082',
          TILED: false,
          FORMAT: 'image/png'
        },
        serverType: 'geoserver',
        visible: true,
        transition: 0
      })
    })
  }
]
