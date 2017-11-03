import React, {Component} from 'react'
import PropTypes from 'prop-types'

class MapBasic extends Component {
  constructor (props) {
    super(props)
    this.map = this._createMapObject()
    this._initLibraryInjection(props.libraries, props.appId, props.appCode)
    this._initStylesInjection(props.styles)
  }

  _createMapObject () {
    return {
      instance: null,
      behavior: null,
      ui: null,
      platform: null,
      defaultLayers: null
    }
  }

  _initStylesInjection (styles) {
    const currentStylesLoaded = Array.from(document.querySelectorAll('link')).map(style => style.href)
    const stylesLength = styles.length
    const styleUrl = styles.shift()

    if (!currentStylesLoaded.includes(styleUrl) && stylesLength) {
      const link = document.createElement('link')
      link.href = styleUrl
      link.rel = 'stylesheet'
      link.type = 'text/css'
      document.body.appendChild(link)
    }
  }

  _initLibraryInjection (libraries, appId, appCode) {
    const currentLibrariesLoaded = Array.from(document.querySelectorAll('script')).map((library) => library.src)
    const libraryLength = libraries.length
    const libraryUrl = libraries.shift()

    if (!currentLibrariesLoaded.includes(libraryUrl) && libraryLength) {
      const script = document.createElement('script')
      script.src = libraryUrl
      script.onload = () => this._initLibraryInjection(libraries, appId, appCode)
      document.body.appendChild(script)
    } else if (!libraryLength) {
      this._initHerePlatform(appId, appCode)
    } else {
      this._initLibraryInjection(libraries, appId, appCode)
    }
  }

  _initHerePlatform (appId, appCode) {
    this.map.platform = new window.H.service.Platform({
      app_id: appId,
      app_code: appCode,
      useCIT: true,
      useHTTPS: true
    })
    this.map.defaultLayers = this.map.platform.createDefaultLayers()
    this._renderHereMap()
  }

  _renderHereMap () {
    if (this._buildMapInstance()) {
      this.props.isInteractive && this._makeInteractive()
      this.props.isInteractive && this._createMapUIComponents()
      this.props.marker && this._buildMarkers()
      this.props.circleShape && this._buildCircleShape()
    }
  }

  _buildMarkers () {
// Create an icon object, an object with geographic coordinates and a marker:
    const generalIcon = new window.H.map.DomIcon(this.props.marker.genericIcon)
    this.props.marker.elements.forEach(element => {
      const icon = element.icon ? new window.H.map.DomIcon(element.icon) : generalIcon
      this.map.instance.addObject(new window.H.map.DomMarker({ lat: element.lat, lng: element.lng }, { icon: icon }))
    })
  }

  _buildCircleShape () {
    this.props.circleShape.elements.forEach(element => {
      this.map.instance.addObject(
        new window.H.map.Circle({lat: element.lat, lng: element.lng},
        element.radius,
        { style: element.style || this.props.circleShape.styleGeneric })
      )
    })
  }

  _buildMapInstance () {
    const DOMElementToBeFilled = document.getElementById('sui-here-map')

    if (DOMElementToBeFilled) {
      this.map.instance = new window.H.Map(
        DOMElementToBeFilled,
        this.map.defaultLayers.normal.map,
        {...this.props.options}
      )
    }

    return this.map.instance
  }

  _createMapUIComponents () {
    this.map.ui = window.H.ui.UI.createDefault(this.map.instance, this.map.defaultLayers)
  }

  _makeInteractive () {
    this.map.behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(this.map.instance))
  }

  componentDidMount () {
    if (window.H && !this.map.instance) {
      this._renderHereMap()
    }
  }

  render () {
    return (
      <div id='sui-here-map' className='sui-MapBasic' />
    )
  }
}

MapBasic.displayName = 'MapBasic'

MapBasic.propTypes = {
  /**
   * An array with the link of the HERE libraries that we would like to load. By default is gonna load core, service, ui and mapevents. Useful if there are cdn or version changes
   */
  libraries: PropTypes.array,
  /**
   * An array of the here styles that we desire to load.
   */
  styles: PropTypes.array,
  /**
   * An object with the definition of our map. All options of here maps are allowed, for example
   * { zoom: <number>, center: { lat: number, lng: number} }
   */
  options: PropTypes.object.isRequired,
  /**
   * Our appid token, provided by HERE maps
   */
  appId: PropTypes.string.isRequired,
  /**
   * Our appCode token, provided by HERE maps
   */
  appCode: PropTypes.string.isRequired,
  /**
   * If is a interactable map (drag, zoom)... With this enabled the UI will be automatically loaded
   */
  isInteractive: PropTypes.bool,
  /**
   * An object with the definiton of our markers. The icons could be a PLAIN STRING SVG definition or a path to an svg or image.
   * Accepts an array of positions to position multiple markers on the map asswell as a custom icon on each marker position.
   * If no icon is provided on each element the component will fallback to the genericIcon.
   */
  marker: PropTypes.shape({
    /**
     * A STRING DEFINITION of an SVG or a relative path to a file
     */
    genericIcon: PropTypes.string.isRequired,
    elements: PropTypes.arrayOf(React.PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      icon: PropTypes.string
    }))
  }),
  /**
   * An object with the definition of our 'radar' circle.
   * The style could be generic (applied to all the radars on the map) or custom by each element.
   * The element accept a lattitude a longitude a radius and a custom styling prop.
   * If no styling prop is provided on the element component will fallback to styleGeneric.
   */
  circleShape: PropTypes.shape({
    styleGeneric: PropTypes.shape({
      strokeColor: PropTypes.string,
      fillColor: PropTypes.string,
      lineWidth: PropTypes.number,
      lineCap: PropTypes.string,
      lineJoin: PropTypes.string
    }),
    elements: PropTypes.arrayOf(React.PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      radius: PropTypes.number.isRequired,
      style: PropTypes.shape({
        strokeColor: PropTypes.string,
        fillColor: PropTypes.string,
        lineWidth: PropTypes.number,
        lineCap: PropTypes.string,
        lineJoin: PropTypes.string
      })
    }))
  })
}

MapBasic.defaultProps = {
  libraries: ['http://js.api.here.com/v3/3.0/mapsjs-core.js', 'http://js.api.here.com/v3/3.0/mapsjs-service.js', 'https://js.cit.api.here.com/v3/3.0/mapsjs-ui.js', 'https://js.cit.api.here.com/v3/3.0/mapsjs-mapevents.js'],
  styles: ['https://js.cit.api.here.com/v3/3.0/mapsjs-ui.css']
}

export default MapBasic
