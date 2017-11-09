import L from 'leaflet'
import Polygons from './shapes/Polygons'
import { tileLayerTypes } from './constants'

export default class LeafletMap {
  constructor (properties) {
    const { polygons } = properties
    this.mapDOM = document.getElementById(properties.id)
    this.setMapTexts(properties.literals)
    const tileLayerTypes = this.createTileLayers(properties.tileLayerTypes, properties.maxZoom, properties.minZoom)
    const mapOptions = {
      center: [properties.latitude, properties.longitude],
      zoom: properties.zoom,
      layers: [tileLayerTypes[0]]
    }
    this._map = L.map(properties.id, mapOptions)
    this.setZoomControlPosition('bottomleft')
    this.attachPropsToMapInstance(properties)
    this._map.props.tileLayers = tileLayerTypes

    this._tileLayerTypes = this.getTileLayerTypes()
    if (polygons) {
      this.polygons = new Polygons()
      this.polygons.setPolygonsOnMap({map: this._map, polygons})
    }
    this.subscribeToLeafletMapEvents()

    return this
  }

  _appId = 'UtT2lgmGbo0ADCEHlsOo'
  _appCode = 'NekMBEpoxq_MM3jXUUF6Nw'
  _markerType = undefined
  _selectedPoiSelector = 'marker--selected'
  customEvents = {ready: '_ready'}

  HEART_ICON = '&#9829;'
  markerTypeEquivalences = ['minipoi', 'poi', 'label']
  DEFAULT_MARKER_TYPE = 'minipoi'
  _normalViewText = null
  _satelliteViewText = null
  _toConsultText = null
  _visibleLegend = false
  _currentLayer = 'normal.day'
  _layerOfMarkers = undefined
  _map = undefined
  currentMarkerType = undefined
  _tileLayerNormal = null
  _tileLayerSatName = null

  getTileLayerTypes () {
    return tileLayerTypes
  }

  setMapTexts ({ normalViewText, satelliteViewText, toConsultText }) {
    this._normalViewText = normalViewText
    this._satelliteViewText = satelliteViewText
    this._toConsultText = toConsultText
  };

  getBaseMap (value) {
    switch (value) {
      case tileLayerTypes.NORMAL:
        return 'base'
      case tileLayerTypes.SATELLITE:
        return 'aerial'
      default:
        return 'base'
    }
  }

  createTileLayers (tileLayerTypes, maxZoom, minZoom) {
    let tileLayers = []
    tileLayerTypes.forEach((value, index) => {
      const baseMap = this.getBaseMap(value)
      const tileLayer = L.tileLayer('https://{s}.{base}.maps.api.here.com/maptile/2.1/maptile/{mapID}/' + value + '/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
        app_code: this._appCode,
        app_id: this._appId,
        attribution: 'Map &copy; 1987-2017 <a href="http://developer.here.com">HERE</a>',
        base: baseMap,
        mapID: 'newest',
        maxZoom: maxZoom,
        minZoom: minZoom,
        subdomains: '1234'
      })
      tileLayers[index] = tileLayer
    })
    return tileLayers
  }

  showHeatMap (url) {
    this._heatMapLayer = L.tileLayer(url, {pane: 'overlayPane', opacity: 0.7, zIndex: 1})
    this._heatMapLayer.addTo(this._map)
  }

  removeHeatMap () {
    this._map.removeLayer(this._heatMapLayer)
  }

  getRadioButtonTitle (value) {
    switch (value) {
      case tileLayerTypes.NORMAL:
        return this._normalViewText
      case tileLayerTypes.SATELLITE:
        return this._satelliteViewText
      default:
        return this._normalViewText
    }
  };

  setZoomControlPosition (position) {
    this._map.zoomControl.setPosition(position)
  };

  attachPropsToMapInstance (options) {
    this._map.props = options
  }

  setCenter (options) {
    this.setCenter(L.latLng(parseFloat(options.latitude), parseFloat(options.longitude)))
    options.zoom && this.setZoom(options.zoom)
  }

  getBounds () {
    return {
      northEast: this._map.getBounds().getNorthEast(),
      northWest: this._map.getBounds().getNorthWest(),
      southEast: this._map.getBounds().getSouthEast(),
      southWest: this._map.getBounds().getSouthWest()
    }
  }

  getZoomLevel () {
    return this._map.getZoom()
  }

  getCenter () {
    return {
      latitude: this._map.getCenter().lat,
      longitude: this._map.getCenter().lng
    }
  }

  getCenterWithZoom () {
    let centerWithZoom = this.getCenter()
    centerWithZoom.zoom = this.getZoomLevel()
    return centerWithZoom
  }

  clearLayer (map, layer) {
    layer.clearLayers()
    map.removeLayer(layer)
  }

  getLayers (_layer) {
    return _layer.getLayers()
  }

  resetMarkerType (markerType) {
    this._markerType = markerType
  }

  getInitialIcon () {
    return this.markerTypeEquivalences[this._markerType] || this.DEFAULT_MARKER_TYPE
  }

  hasValidPrice (options) {
    return options.propertyInfo !== undefined &&
      typeof (options.propertyInfo.price) !== 'undefined' &&
      options.propertyInfo.price !== '' &&
      options.propertyInfo.price !== '0'
  }

  isFavorite (options) {
    return options.propertyInfo !== undefined && options.propertyInfo.IsFavorite !== undefined && options.propertyInfo.IsFavorite
  }

  getPriceText (options) {
    let formattedValue

    formattedValue = this.isFavorite(options) ? this.HEART_ICON + ' ' : ''
    formattedValue += this.hasValidPrice(options) ? options.propertyInfo.price + ' &euro;' : this._toConsultText

    return `<span>${formattedValue}</span>`
  }

  isFullAddressVisible (options) {
    return options.propertyInfo !== undefined && options.propertyInfo.IsFullAddressVisible !== undefined && options.propertyInfo.IsFullAddressVisible
  }

  hasBeenVisited (options) {
    return false
  }

  isPromotion (options) {
    return options.propertyInfo !== undefined && options.propertyInfo.promotionId !== undefined && options.propertyInfo.promotionId > 0
  }

  addClassModifier (iconClassName, options) {
    const classModifiers = {
      '--fav': this.isFavorite,
      '--visited': this.hasBeenVisited,
      '--new': this.isPromotion
    }

    const checkModifier = (className) => {
      return classModifiers[className](options)
    }

    const modifier = Object.keys(classModifiers).find(checkModifier)
    return modifier ? iconClassName + modifier : ''
  }

  getDivIconFor (customClasses, priceText) {
    return new L.DivIcon({
      className: customClasses,
      html: priceText,
      iconSize: null
    })
  }

  getIconFor ({item}) {
    let iconClassName = this.getInitialIcon()
    let priceText = ''
    let extendedIconClassName = iconClassName

    if (iconClassName !== this.DEFAULT_MARKER_TYPE) {
      if (iconClassName === 'label') {
        priceText = this.getPriceText(item)
      }
      extendedIconClassName += ' ' + iconClassName + (this.isFullAddressVisible(item) ? '--dotted' : '--approx')
      extendedIconClassName += ' ' + this.addClassModifier(iconClassName, item)
    }

    iconClassName = extendedIconClassName + ' ' +
      (item.isSelected ? ' ' + this._selectedPoiSelector : '')

    return this.getDivIconFor(iconClassName, priceText)
  }

  getLayerGroup (markers) {
    return L.featureGroup(markers)
  }

  getFullLayerGroup () {
    return L.featureGroup()
  }

  addLayer (map, layer) {
    map.addLayer(layer)
  }

  invalidateSize (effect) {
    this._map.invalidateSize(effect)
  }

  setView (viewType) {
    if (viewType === tileLayerTypes.NORMAL && this._currentLayer !== tileLayerTypes.NORMAL) {
      this._map.removeLayer(this._map.props.tileLayers[1])
      this._map.addLayer(this._map.props.tileLayers[0])
      this._currentLayer = viewType
    } else if (viewType === tileLayerTypes.SATELLITE && this._currentLayer !== tileLayerTypes.SATELLITE) {
      this._map.removeLayer(this._map.props.tileLayers[0])
      this._map.addLayer(this._map.props.tileLayers[1])
      this._currentLayer = viewType
    }
  }

  subscribeToLeafletMapEvents () {
    this.dispatchCustomEvent.bind(this.mapDOM)
    this._map.on('load', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_load',
        detail: this.getParamsForRequest()
      })
    })
    this._map.on('click', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_click',
        detail: this.getParamsForRequest()
      })
    })
    this._map.on('dragend', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_dragend',
        detail: this.getParamsForRequest()
      })
    })
    this._map.on('zoomend', e => {
      this.dispatchCustomEvent({
        eventName: 'leaflet_map_zoomend',
        detail: this.getParamsForRequest()
      })
    })
    this._map.on('baselayerchange', e => {
      if (e.name === this._tileLayerNormal) {
        this.dispatchCustomEvent({
          eventName: 'leaflet_map_layer_normal',
          detail: this.getParamsForRequest()
        })
      }
    })
    this._map.on('baselayerchange', e => {
      if (e.name === this._tileLayerSatName) {
        this.dispatchCustomEvent({
          eventName: 'leaflet_map_layer_satellite',
          detail: this.getParamsForRequest()
        })
      }
    })
  }

  getMapBoundingBox () {
    const bounds = this.getBounds()
    return '(' + bounds.northWest.lat + ',' + bounds.northWest.lng + '); ' +
      '(' + bounds.northWest.lat + ',' + bounds.southEast.lng + '); ' +
      '(' + bounds.southEast.lat + ',' + bounds.southEast.lng + '); ' +
      '(' + bounds.southEast.lat + ',' + bounds.northWest.lng + '); ' +
      '(' + bounds.northWest.lat + ',' + bounds.northWest.lng + ')'
  }

  getParamsForRequest () {
    const { zoom, latitude, longitude } = this.getCenterWithZoom(this._map)
    return {
      latitude,
      longitude,
      mapBoundingBox: this.getMapBoundingBox(),
      zoomLevel: zoom
    }
  }

  clearLayerOfMarkers () {
    if (this._layerOfMarkers !== undefined) {
      this.clearLayer(this._map, this._layerOfMarkers)
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

    const {latitude, longitude, isSelected, markerType, propertyInfo} = item
    const marker = L.marker([latitude, longitude], {
      icon: this.getIconFor({item})
    })
    marker.propertyInfo = propertyInfo
    marker.markerType = markerType
    marker.isSelected = isSelected
    if (item.events) {
      const readyEvent = this.customEvents.ready
      item.events.map(event => {
        if (event.eventName === readyEvent) {
          event.eventHandler.apply(this)
        }
        marker.on(event.eventName, event.eventHandler)
      }, marker)
    }

    const { Latitude, Longitude } = item
    marker.Id = item.propertyInfo.propertyId
    marker.latlon = Latitude + ',' + Longitude
    return marker
  }

  addMarkersToLayer (pointsToAdd) {
    let markers = []
    pointsToAdd.forEach(pointToAdd => markers.push(this.createMarker({ item: pointToAdd })))

    if (this._layerOfMarkers === undefined) {
      this._layerOfMarkers = this.getLayerGroup(markers)
    }
    markers.map(marker => { this._layerOfMarkers.addLayer(marker) })

    this.addLayer(this._map, this._layerOfMarkers)
  }

  removeMarkersFromMap (pointsToDelete) {
    if (this._layerOfMarkers === undefined) {
      this._layerOfMarkers = this.getFullLayerGroup()
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
      ? this.getLayers(this._layerOfMarkers)
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
    this.resetMarkerType(markerType)
    this.currentMarkerType = markerType

    // Remove pointsToDelete, and Add pointsToAdd.
    pointsToDelete.length && this.removeMarkersFromMap(pointsToDelete)
    pointsToAdd.length && this.addMarkersToLayer(pointsToAdd)
  }
}
