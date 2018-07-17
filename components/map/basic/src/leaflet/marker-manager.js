import L from 'leaflet'

class MarkerManager {
  constructor(mapDOMInstance) {
    this.setMapDOMInstance(mapDOMInstance)
    this.setMarkerDefaults()

    this.HEART_ICON = '&#9829;'
    this.POPUP_WAIT_TIME = 1000
  }

  setMapDOMInstance(mapDOMInstance) {
    this.mapDOM = mapDOMInstance
  }

  dispatchCustomEvent({eventName, detail}) {
    let event

    if (
      this.mapDOM.CustomEvent &&
      typeof this.mapDOM.CustomEvent === 'function'
    ) {
      event = new this.mapDOM.CustomEvent(eventName, {detail})
    } else {
      event = document.createEvent('CustomEvent')
      event.initCustomEvent(eventName, true, true, detail)
    }

    this.mapDOM.dispatchEvent(event)
  }

  createMarker(item, deprecatedLabelNoPrice) {
    const events = [
      {eventName: 'click', eventHandler: e => this.isPoiClicked(e)},
      {eventName: 'mouseover', eventHandler: e => this.onMouseOver(e)},
      {eventName: 'mouseout', eventHandler: e => this.onMouseOut(e)},
      {eventName: 'mousemove', eventHandler: e => this.onMouseMove(e)}
    ]

    const {
      latitude,
      longitude,
      isSelected,
      markerType,
      propertyInfo = {}
    } = item

    const marker = L.marker([latitude, longitude], {
      icon: this.getIconFor({item}, deprecatedLabelNoPrice)
    })
    marker.propertyInfo = propertyInfo
    marker.markerType = markerType
    marker.isSelected = isSelected
    marker.Id = propertyInfo.propertyId
    marker.latlon = latitude + ',' + longitude
    events.map(event => marker.on(event.eventName, event.eventHandler))
    return marker
  }

  onMouseOver(evt) {
    const {propertyInfo, markerType} = evt.target
    if (markerType === 0) {
      return
    }
    const {originalEvent} = evt

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poimouseover',
      detail: {...propertyInfo, originalEvent}
    })
  }

  onMouseMove(evt) {
    const {propertyInfo, markerType} = evt.target
    if (markerType === 0) {
      return
    }
    const {originalEvent} = evt

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poimousemove',
      detail: {...propertyInfo, originalEvent}
    })
  }

  onMouseOut(evt) {
    const {markerType} = evt.target
    if (markerType === 0) {
      return
    }

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poimouseout'
    })
  }

  isFullAddressVisible(options) {
    return (
      options.propertyInfo !== undefined &&
      options.propertyInfo.isFullAddressVisible !== undefined &&
      !!options.propertyInfo.isFullAddressVisible
    )
  }

  // Coupled with FC code, we should remove from here
  getPriceText(options, deprecatedLabelNoPrice) {
    let formattedValue

    formattedValue = this.isFavorite(options) ? this.HEART_ICON + ' ' : ''
    formattedValue += this.hasValidPrice(options)
      ? options.propertyInfo.price
      : deprecatedLabelNoPrice

    return `<span>${formattedValue}</span>`
  }

  isPoiClicked = evt => {
    const {propertyInfo, markerType} = evt.target
    if (markerType === 0) {
      return
    }

    this.dispatchCustomEvent({
      eventName: 'leaflet_map_poiclick',
      detail: {...propertyInfo, markerType}
    })
  }

  setMarkerDefaults() {
    this._selectedPoiSelector = 'marker--selected'
    this.markerTypeEquivalences = ['minipoi', 'poi', 'label']
    this.DEFAULT_MARKER_TYPE = 'minipoi'
  }

  resetMarkerType(markerType) {
    this._markerType = markerType
  }

  // Coupled FC, should be removed in the future
  isFavorite({propertyInfo}) {
    return (
      propertyInfo !== undefined &&
      propertyInfo.IsFavorite !== undefined &&
      propertyInfo.IsFavorite
    )
  }

  // Coupled FC, should be removed in the future
  hasBeenVisited() {
    return false
  }

  // Coupled FC, should be removed in the future
  isPromotion({propertyInfo}) {
    return (
      propertyInfo !== undefined &&
      propertyInfo.promotionId !== undefined &&
      propertyInfo.promotionId > 0
    )
  }

  addIconMarkersToMap({icons = [], map}) {
    icons.forEach(icon => {
      const iconInstance = L.icon({
        iconUrl: icon.iconUrl,
        iconSize: icon.size,
        iconAnchor: icon.anchor,
        shadowUrl: icon.shadowUrl
      })
      const marker = L.marker([icon.lat, icon.lng], {
        icon: iconInstance
      }).addTo(map)

      if (icon.popup) {
        const {content} = icon.popup
        // wait some time in order to get the correct position for the popup
        setTimeout(function() {
          marker.bindPopup(content).openPopup()
        }, this.POPUP_WAIT_TIME)
      }
    })
  }

  // Coupled FC, should be removed in the future
  addClassModifier(iconClassName, options) {
    const classModifiers = {
      '--fav': this.isFavorite,
      '--visited': this.hasBeenVisited,
      '--new': this.isPromotion
    }

    const checkModifier = className => {
      return classModifiers[className](options)
    }

    const modifier = Object.keys(classModifiers).find(checkModifier)
    return modifier ? iconClassName + modifier : ''
  }

  // Coupled FC, should be removed in the future
  hasValidPrice({propertyInfo}) {
    return (
      propertyInfo !== undefined &&
      typeof propertyInfo.price !== 'undefined' &&
      propertyInfo.price !== '' &&
      propertyInfo.price !== '0' &&
      propertyInfo.price !== null &&
      propertyInfo.price !== false
    )
  }

  // FIXME: This should be passed as a prop
  getIconFor({item}, deprecatedLabelNoPrice) {
    let className = this.getInitialIcon()
    let priceText = ''
    let extendedIconClassName = className

    if (className !== this.DEFAULT_MARKER_TYPE) {
      if (className === 'label') {
        priceText = this.getPriceText(item, deprecatedLabelNoPrice)
      }
      extendedIconClassName +=
        ' ' +
        className +
        (this.isFullAddressVisible(item) ? '--dotted' : '--approx')
      extendedIconClassName += ' ' + this.addClassModifier(className, item)
    }

    className =
      extendedIconClassName +
      ' ' +
      (item.isSelected ? ' ' + this._selectedPoiSelector : '')

    return this.getDivIconFor({className, html: priceText})
  }

  getDivIconFor({className, html}) {
    return new L.DivIcon({className, html, iconSize: null})
  }

  getInitialIcon() {
    return (
      this.markerTypeEquivalences[this._markerType] || this.DEFAULT_MARKER_TYPE
    )
  }
}

export default MarkerManager
