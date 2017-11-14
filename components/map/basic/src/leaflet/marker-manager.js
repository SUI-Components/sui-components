import L from 'leaflet'
class MarkerManager {
  constructor (mapDOMInstance) {
    this.setMapDOMInstance(mapDOMInstance)
    this.setMarkerDefaults()
    this.HEART_ICON = '&#9829;'
  }

  setMapDOMInstance (mapDOMInstance) {
    this.mapDOM = mapDOMInstance
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

  createMarker (item) {
    const events = [
      { eventName: 'click', eventHandler: (e) => this.isPoiClicked(e) },
      { eventName: 'mouseover', eventHandler: (e) => this.onMouseOver(e) },
      { eventName: 'mouseout', eventHandler: (e) => this.onMouseOut(e) }
    ]
    const {latitude, longitude, isSelected, markerType, propertyInfo} = item
    const marker = L.marker([latitude, longitude], {icon: this.getIconFor({item})})
    marker.propertyInfo = propertyInfo
    marker.markerType = markerType
    marker.isSelected = isSelected
    marker.Id = propertyInfo.propertyId
    marker.latlon = latitude + ',' + longitude
    events.map(event => marker.on(event.eventName, event.eventHandler))
    return marker
  }

  onMouseOver (evt) {
    const { propertyInfo, markerType } = evt.target
    if (markerType === 0) { return }
    const { originalEvent } = evt

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poimouseover',
      detail: { ...propertyInfo, originalEvent }
    })
  }

  onMouseOut (evt) {
    const { markerType } = evt.target
    if (markerType === 0) { return }

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poimouseout'
    })
  }

  isFullAddressVisible (options) {
    return options.propertyInfo !== undefined && options.propertyInfo.IsFullAddressVisible !== undefined && options.propertyInfo.IsFullAddressVisible
  }

  getPriceText (options) {
    let formattedValue

    formattedValue = this.isFavorite(options) ? this.HEART_ICON + ' ' : ''
    formattedValue += this.hasValidPrice(options) ? options.propertyInfo.price + ' &euro;' : this._toConsultText

    return `<span>${formattedValue}</span>`
  }

  isPoiClicked = (evt) => {
    const { propertyInfo, markerType } = evt.target
    if (markerType === 0) { return }

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poiclick',
      detail: { ...propertyInfo, markerType }
    })
  }

  setMarkerDefaults () {
    this._selectedPoiSelector = 'marker--selected'
    this.markerTypeEquivalences = ['minipoi', 'poi', 'label']
    this.DEFAULT_MARKER_TYPE = 'minipoi'
  }

  resetMarkerType (markerType) {
    this._markerType = markerType
  }

  // Coupled FC, should be removed in the future
  isFavorite (options) {
    return options.propertyInfo !== undefined && options.propertyInfo.IsFavorite !== undefined && options.propertyInfo.IsFavorite
  }

  // Coupled FC, should be removed in the future
  hasBeenVisited (options) {
    return false
  }

  // Coupled FC, should be removed in the future
  isPromotion (options) {
    return options.propertyInfo !== undefined && options.propertyInfo.promotionId !== undefined && options.propertyInfo.promotionId > 0
  }

  addIconMarkersToMap ({ icons, map }) {
    icons && icons.forEach((icon) => {
      const iconInstance = L.icon({
        iconUrl: icon.iconUrl,
        iconSize: icon.size,
        iconAnchor: icon.anchor,
        shadowUrl: icon.shadowUrl
      })
      L.marker([icon.lat, icon.lng], {icon: iconInstance}).addTo(map)
    })
  }

  // Coupled FC, should be removed in the future
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

  // Coupled FC, should be removed in the future
  hasValidPrice (options) {
    return options.propertyInfo !== undefined &&
      typeof (options.propertyInfo.price) !== 'undefined' &&
      options.propertyInfo.price !== '' &&
      options.propertyInfo.price !== '0'
  }

  // This
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

    iconClassName = extendedIconClassName + ' ' + (item.isSelected ? ' ' + this._selectedPoiSelector : '')

    return this.getDivIconFor(iconClassName, priceText)
  }

  getDivIconFor (customClasses, priceText) {
    return new L.DivIcon({
      className: customClasses,
      html: priceText,
      iconSize: null
    })
  }

  getInitialIcon () {
    return this.markerTypeEquivalences[this._markerType] || this.DEFAULT_MARKER_TYPE
  }
}

export default MarkerManager
