import Polygons from './shapes/Polygons'
import LeafletMap from './leaflet-map'
import { tileLayerTypes } from './constants'

export default class SearchMap {
  _heatMapLayer = undefined
  _heatMapSelected = false
  _layerOfMarkers = undefined
  _map = undefined

  currentMarkerType = undefined

  _defaultInitialZoom = 6
  _defaultLatitude = 40.00237
  _defaultLongitude = -3.99902
  _defaultMaxZoom = 20
  _defaultMinZoom = 6
  _defaultZoomable = true
  _tileLayerNormal = null
  _tileLayerSatName = null

  _selectedPoiId = undefined

  constructor (parameters) {
    const { polygons } = parameters
    const mapOptions = {
      heatMapUrl: parameters.heatMapUrl,
      literals: parameters.literals,
      showHeatmap: parameters.showHeatMap,
      divId: parameters.id,
      latitude: parameters.latitude || this._defaultLatitude,
      longitude: parameters.longitude || this._defaultLongitude,
      maxZoom: parameters.maxZoom || this._defaultMaxZoom,
      minZoom: parameters.minZoom || this._defaultMinZoom,
      tileLayerTypes: parameters.tileLayerTypes.NORMAL || [tileLayerTypes.NORMAL, tileLayerTypes.SATELLITE],
      zoom: parameters.zoomLevel || this._defaultInitialZoom,
      zoomable: parameters.zoomable || this._defaultZoomable
    }

    this.mapDOM = document.getElementById(parameters.id)
    this.leafletMap = new LeafletMap(mapOptions)
    this._tileLayerTypes = this.leafletMap.getTileLayerTypes()
    if (polygons) {
      this.polygons = new Polygons()
      this.polygons.setPolygonsOnMap({map: this.leafletMap._map, polygons})
    }
    this.subscribeToLeafletMapEvents()
  }

  subscribeToLeafletMapEvents () {
    this.dispatchCustomEvent.bind(this.mapDOM)
    this.leafletMap._map.on('load', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_load',
        detail: this.getParamsForRequest()
      })
    })
    this.leafletMap._map.on('click', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_click',
        detail: this.getParamsForRequest()
      })
    })
    this.leafletMap._map.on('dragend', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_dragend',
        detail: this.getParamsForRequest()
      })
    })
    this.leafletMap._map.on('zoomend', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_zoomend',
        detail: this.getParamsForRequest()
      })
    })
    this.leafletMap._map.on('baselayerchange', e => {
      if (e.name === this._tileLayerNormal) {
        this.dispatchCustomEvent({
          eventName: 'leaflet_map_layer_normal',
          detail: this.getParamsForRequest()
        })
      }
    })
    this.leafletMap._map.on('baselayerchange', e => {
      if (e.name === this._tileLayerSatName) {
        this.dispatchCustomEvent({
          eventName: 'leaflet_map_layer_satellite',
          detail: this.getParamsForRequest()
        })
      }
    })
  }

  getMapBoundingBox () {
    const bounds = this.leafletMap.getBounds()
    return '(' + bounds.northWest.lat + ',' + bounds.northWest.lng + '); ' +
      '(' + bounds.northWest.lat + ',' + bounds.southEast.lng + '); ' +
      '(' + bounds.southEast.lat + ',' + bounds.southEast.lng + '); ' +
      '(' + bounds.southEast.lat + ',' + bounds.northWest.lng + '); ' +
      '(' + bounds.northWest.lat + ',' + bounds.northWest.lng + ')'
  }

  getParamsForRequest () {
    const { zoom, latitude, longitude } = this.leafletMap.getCenterWithZoom(this._map)
    return {
      latitude,
      longitude,
      mapBoundingBox: this.getMapBoundingBox(),
      zoomLevel: zoom
    }
  }

  clearLayerOfMarkers () {
    if (this._layerOfMarkers !== undefined) {
      this.leafletMap.clearLayer(this.leafletMap._map, this._layerOfMarkers)
    }
  }

  // Returns the elements in arrayToCompare that are not present in the arrayOrigin
  getPositiveDiffOfArraysOfPoints (arrayOrigin, arrayToCompare) {
    return arrayOrigin.reduce((accumulate, originalArrayPoint) => {
      !arrayToCompare.some(comparedArrayPoint => {
        return comparedArrayPoint.Id === originalArrayPoint.Id &&
               comparedArrayPoint.isSelected === originalArrayPoint.isSelected
      }) && accumulate.push(originalArrayPoint)
      return accumulate
    }, [])
  }

  dispatchCustomEvent ({ eventName, detail }) {
    let event

    if (this.mapDOM.CustomEvent && typeof this.mapDOM.CustomEvent === 'function') {
      event = new this.mapDOM.CustomEvent(eventName, { detail })
    } else {
      event = document.createEvent('CustomEvent')
      event.initCustomEvent(eventName, true, true, detail)
    }

    this.mapDOM.dispatchEvent(event)
  }

  isPoiClicked = (evt) => {
    const { propertyInfo, markerType } = evt.target
    if (markerType === 0) { return }

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poiclick',
      detail: { ...propertyInfo, markerType }
    })
  }

  onMouseOver = evt => {
    const { propertyInfo, markerType } = evt.target
    if (markerType === 0) { return }
    const { originalEvent } = evt

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poimouseover',
      detail: { ...propertyInfo, originalEvent }
    })
  }

  onMouseOut = evt => {
    const { markerType } = evt.target
    if (markerType === 0) { return }

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poimouseout'
    })
  }

  createMarker ({ item }) {
    item.events = [{
      eventName: 'click',
      eventHandler: this.isPoiClicked
    }, {
      eventName: 'mouseover',
      eventHandler: this.onMouseOver
    }, {
      eventName: 'mouseout',
      eventHandler: this.onMouseOut
    }]

    var marker = this.leafletMap.createMarker({ item })

    const { Latitude, Longitude } = item
    marker.Id = item.propertyInfo.propertyId
    marker.latlon = Latitude + ',' + Longitude
    return marker
  }

  addMarkersToLayer (pointsToAdd) {
    let markers = []
    pointsToAdd.forEach(pointToAdd => markers.push(this.createMarker({ item: pointToAdd })))

    if (this._layerOfMarkers === undefined) {
      this._layerOfMarkers = this.leafletMap.getLayerGroup(markers)
    }
    markers.map(marker => { this._layerOfMarkers.addLayer(marker) })

    this.leafletMap.addLayer(this.leafletMap._map, this._layerOfMarkers)
  }

  removeMarkersFromMap (pointsToDelete) {
    if (this._layerOfMarkers === undefined) {
      this._layerOfMarkers = this.leafletMap.getFullLayerGroup()
    }

    this._layerOfMarkers.eachLayer(layer => {
      const found = pointsToDelete.find(pointToDelete => layer.Id === pointToDelete.Id)

      if (found) { this._layerOfMarkers.removeLayer(layer) }
    })
  }

  getSelectedPoiId (pois) {
    let selectedPoiId
    pois.map(poi => {
      if (poi.isSelected) {
        selectedPoiId = poi.Id
      }
    })
    return selectedPoiId
  }

  displayPois (pois) {
    // Empty POIS, clean and exit.
    if (pois.length === 0) {
      this.clearLayerOfMarkers()
      return
    }

    // Get new Marker Type by checking one new POI.
    const { markerType } = pois[0]

    // If we render a new type of Marker, then we need to clear all Markers.
    if (markerType !== this.currentMarkerType) {
      this.clearLayerOfMarkers()
    }

    // Get current array of map Markers.
    const currentMarkers = this._layerOfMarkers
      ? this.leafletMap.getLayers(this._layerOfMarkers)
      : []

    // To prevent repaint all POIs that are already visible, get the news to Add and the ones to be Removed.
    const pointsToAdd = this.getPositiveDiffOfArraysOfPoints(pois, currentMarkers)
    const pointsToDelete = this.getPositiveDiffOfArraysOfPoints(currentMarkers, pois)

    // Keep the current lat/lng of a POI that is going to be repaint due to selection with a new random lat/lng.
    // In order to prevent that POIs change its lat/lon for de-clusterized properties.
    // markerType > 0 means that POIs are clickable, so they can be selected, and for instance, repaint.
    pointsToDelete.length && markerType > 0 && pointsToAdd.forEach(pointToAdd => {
      const pointToRefresh = pointsToDelete.find(pointToDelete => pointToDelete.Id === pointToAdd.Id)

      if (pointToRefresh) {
        pointToAdd.latitude = pointToRefresh._latlng.lat
        pointToAdd.longitude = pointToRefresh._latlng.lng
      }
    })

    // Set new markerType (0, 1, 2).
    this.leafletMap.resetMarkerType(markerType)
    this.currentMarkerType = markerType

    // Remove pointsToDelete, and Add pointsToAdd.
    pointsToDelete.length && this.removeMarkersFromMap(pointsToDelete)
    pointsToAdd.length && this.addMarkersToLayer(pointsToAdd)
  }

  showHeatMap (url) {
    this.leafletMap.showHeatMap({ url, map: this._map })
  }

  removeHeatMap () {
    this.leafletMap.removeHeatMap({ map: this._map })
  }

  setView (viewType) {
    this.leafletMap.setView({ viewType, map: this._map })
  }
}
