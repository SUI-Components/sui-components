import L from 'leaflet'
import {mapViewModes, mapViewNames} from './constants'

export default class LayerManager {
  constructor(id) {
    this._currentLayer = 'normal.day'
    this.layers = {}
  }

  createMapLayers({mapViewModes, maxZoom, minZoom, appId, appCode, id}) {
    let tileLayers = []
    mapViewModes.forEach((value, index) => {
      const baseMapView = this.getBaseMapView(value)
      const tileLayer = L.tileLayer(
        'https://{s}.{base}.maps.api.here.com/maptile/2.1/maptile/{mapVersion}/' +
          value +
          '/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}',
        {
          app_code: appCode,
          app_id: appId,
          attribution:
            'Map &copy; 1987-2017 <a href="http://developer.here.com">HERE</a>',
          base: baseMapView,
          mapVersion: 'newest',
          maxZoom: maxZoom,
          minZoom: minZoom,
          subdomains: '1234'
        }
      )
      tileLayers[index] = tileLayer
    })

    this.layers.map = tileLayers
  }

  getLayerGroup(layer) {
    return L.featureGroup(layer)
  }

  addChangeViewController(properties, map) {
    const controllers = {}
    this.layers.map.forEach((layer, index) => {
      controllers[mapViewNames[index]] = layer
    })
    properties.enableViewMenu && L.control.layers(controllers).addTo(map)
  }

  addLayersToGroup(layers, groupName) {
    !this.layers[groupName] &&
      (this.layers[groupName] = this.getLayerGroup(layers))
    layers.map(layer => {
      this.layers[groupName].addLayer(layer)
    })
  }

  removeLayersFromGroup(layersToDelete, groupName) {
    !this.layers[groupName] && (this.layers.markers = this.getFullLayerGroup())
    this.layers[groupName].eachLayer(layer => {
      const found = layersToDelete.find(
        pointToDelete => layer.Id === pointToDelete.Id
      )
      found && this.layers.markers.removeLayer(layer)
    })
  }

  getBaseMapView(value) {
    return value === mapViewModes.SATELLITE ? 'aerial' : 'base'
  }

  addHeatMapLayer(url, map) {
    this.layers.heatMap = L.tileLayer(url, {
      pane: 'overlayPane',
      opacity: 0.7,
      zIndex: 1
    })
    this.layers.heatMap.addTo(map)
  }

  getLayers(layer) {
    return layer ? layer.getLayers() : []
  }
}
