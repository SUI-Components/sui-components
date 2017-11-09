import L from 'leaflet'
import { tileLayerTypes } from './constants'

export default class LeafletMap {
  constructor (properties) {
    this.setMapTexts(properties.literals)
    const tileLayerTypes = this.createTileLayers(properties.tileLayerTypes, properties.maxZoom, properties.minZoom)
    const mapOptions = {
      center: [properties.latitude, properties.longitude],
      zoom: properties.zoom,
      layers: [tileLayerTypes[0]]
    }
    this._map = L.map(properties.divId, mapOptions)
    this.setZoomControlPosition('bottomleft')
    this.attachPropsToMapInstance(properties)
    this._map.props.tileLayers = tileLayerTypes
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

  getTileLayerTypes() {
    return tileLayerTypes
  }

  setMapTexts({ normalViewText, satelliteViewText, toConsultText }) {
    this._normalViewText = normalViewText
    this._satelliteViewText = satelliteViewText
    this._toConsultText = toConsultText
  };

  getBaseMap(value) {
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

  showHeatMap({url, map}) {
    this._heatMapLayer = L.tileLayer(url, {pane: 'overlayPane', opacity: 0.7, zIndex: 1})
    this._heatMapLayer.addTo(map)
  }

  removeHeatMap({map}) {
    map.removeLayer(this._heatMapLayer)
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

  attachPropsToMapInstance(options) {
    this._map.props = options
  }

  setCenter (options) {
    this.setCenter(L.latLng(parseFloat(options.latitude), parseFloat(options.longitude)))
    zoom && this.setZoom(options.zoom)
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

  getCenterWithZoom() {
    let centerWithZoom = this.getCenter()
    centerWithZoom.zoom = this.getZoomLevel()
    return centerWithZoom
  }

  clearLayer(map, layer) {
    layer.clearLayers()
    map.removeLayer(layer)
  }

  getLayers(_layer) {
    return _layer.getLayers()
  }

  resetMarkerType(markerType) {
    this._markerType = markerType
  }

  getInitialIcon() {
    return this.markerTypeEquivalences[this._markerType] || this.DEFAULT_MARKER_TYPE
  }

  hasValidPrice(options) {
    return options.propertyInfo !== undefined &&
      typeof (options.propertyInfo.price) !== 'undefined' &&
      options.propertyInfo.price !== '' &&
      options.propertyInfo.price !== '0'
  }

  isFavorite(options) {
    return options.propertyInfo !== undefined && options.propertyInfo.IsFavorite !== undefined && options.propertyInfo.IsFavorite
  }

  getPriceText(options) {
    let formattedValue

    formattedValue = this.isFavorite(options) ? this.HEART_ICON + ' ' : ''
    formattedValue += this.hasValidPrice(options) ? options.propertyInfo.price + ' &euro;' : this._toConsultText

    return `<span>${formattedValue}</span>`
  }

  isFullAddressVisible(options) {
    return options.propertyInfo !== undefined && options.propertyInfo.IsFullAddressVisible !== undefined && options.propertyInfo.IsFullAddressVisible
  }

  hasBeenVisited(options) {
    return false
  }

  isPromotion(options) {
    return options.propertyInfo !== undefined && options.propertyInfo.promotionId !== undefined && options.propertyInfo.promotionId > 0
  }

  addClassModifier(iconClassName, options) {
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

  getDivIconFor(customClasses, priceText) {
    return new L.DivIcon({
      className: customClasses,
      html: priceText,
      iconSize: null
    })
  }

  getIconFor({item}) {
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

  createMarker({item}) {
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
    return marker
  }

  getLayerGroup(markers) {
    return L.featureGroup(markers)
  }

  getFullLayerGroup() {
    return L.featureGroup()
  }

  addLayer(map, layer) {
    map.addLayer(layer)
  }

  invalidateSize (effect) {
    this._map.invalidateSize(effect)
  }

  setView ({ viewType }) {
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
}
