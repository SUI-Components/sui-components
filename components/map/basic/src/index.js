import React, {Component} from 'react'
import PropTypes from 'prop-types'
import LeafletMap from './leaflet/leaflet-map'
import { mapViewModes } from './leaflet/constants'

class MapBasic extends Component {
  constructor (props) {
    super(props)
    this.setMapEventDefinition(props)
    this.mapInstance = undefined
    this.isHeatmapVisible = false
    this.isSatelliteView = false
  }

  setMapEventDefinition () {
    this.mapEventList = [
      {
        name: 'leaflet_map_click',
        handleFunction: (evt) => this.props.onMapClick && this.props.onMapClick(evt.detail)
      },
      {
        name: 'leaflet_map_dragend',
        handleFunction: (evt) => this.props.onMapDragEnd && this.props.onMapDragEnd(evt.detail)
      },
      {
        name: 'leaflet_map_loaded',
        handleFunction: (evt) => this.props.onMapLoad && this.props.onMapLoad(evt.detail)
      },
      {
        name: 'leaflet_map_zoomend',
        handleFunction: (evt) => this.props.onMapZoomEnd && this.props.onMapZoomEnd(evt.detail)
      },
      {
        name: 'leaflet_map_layer_normal',
        handleFunction: (evt) => this.props.onNormalView && this.props.onNormalView(evt.detail)
      },
      {
        name: 'leaflet_map_poiclick',
        handleFunction: (evt) => this.props.onPoiClick && this.props.onPoiClick(evt.detail)
      },
      {
        name: 'leaflet_map_poimouseout',
        handleFunction: () => this.props.onPoiMouseOut && this.props.onPoiMouseOut()
      },
      {
        name: 'leaflet_map_poimouseover',
        handleFunction: (evt) => this.props.onPoiMouseOver && this.props.onPoiMouseOver(evt.detail)
      },
      {
        name: 'leaflet_map_layer_satellite',
        handleFunction: (evt) => this.props.onSatelliteView && this.props.onSatelliteView(evt.detail)
      }
    ]
  }

  getMapConfig () {
    return {
      id: this.props.id,
      heatMapUrl: this.props.heatMapUrl,
      latitude: this.props.center[0],
      longitude: this.props.center[1],
      literals: this.props.literals,
      maxZoom: this.props.maxZoom,
      minZoom: this.props.minZoom,
      polygons: this.props.polygons,
      showHeatmap: this.props.showHeatmap,
      showSatelliteView: this.props.showSatelliteView,
      mapViewModes: this.props.mapViewModes,
      defaultMapViewMode: this.props.defaultMapViewMode,
      zoomable: this.props.zoomable,
      zoomControlPosition: this.props.zoomControlPosition,
      zoom: this.props.zoom,
      appId: this.props.appId,
      appCode: this.props.appCode
    }
  }

  subscribeToMapEvents () {
    this.mapEventList.forEach(mapEvent => this.mapDOMInstance.addEventListener(mapEvent.name, mapEvent.handleFunction))
  }

  unsubscribeFromMapEvents () {
    this.mapEventList.forEach(mapEvent => this.mapDOMInstance.removeEventListener(mapEvent.name, mapEvent.handleFunction))
  }

  checkWhichViewShouldBeDisplayed (showSatelliteView) {
    if (showSatelliteView && !this.isSatelliteView) {
      this.isSatelliteView = true
      this.mapInstance.setView(mapViewModes.SATELLITE)
    } else if (!showSatelliteView && this.isSatelliteView) {
      this.isSatelliteView = false
      this.mapInstance.setView(mapViewModes.NORMAL)
    }
  }

  checkIfHeatMapShouldBeDisplayed (showHeatmap, url) {
    if (showHeatmap && !this.isHeatmapVisible) {
      this.isHeatmapVisible = true
      this.mapInstance.showHeatMap(url)
    } else if (!showHeatmap && this.isHeatmapVisible) {
      this.isHeatmapVisible = false
      this.mapInstance.removeHeatMapLayer()
    }
  }

  componentWillUnmount () {
    this.unsubscribeFromMapEvents()
  }

  shouldComponentUpdate () {
    // The component itself have no changes. All changes are managed through leaflet maps api.
    return false
  }

  componentWillReceiveProps (nextProps) {
    const {heatMapUrl, pois, showHeatmap, showSatelliteView} = nextProps
    this.mapInstance.displayPois(pois)
    this.checkIfHeatMapShouldBeDisplayed(showHeatmap, heatMapUrl)
    this.checkWhichViewShouldBeDisplayed(showSatelliteView)
  }

  componentDidMount () {
    this.subscribeToMapEvents()
    this.mapInstance = new LeafletMap(this.getMapConfig())
  }

  render () {
    return (
      <div
        className='re-Wrapper'
        style={this.props.height && { height: this.props.height }}
        ref={(ele) => { this.mapDOMInstance = ele }}
        id={this.props.id}
      />
    )
  }
}

MapBasic.propTypes = {
  id: PropTypes.string.isRequired,
  center: PropTypes.array.isRequired,
  appId: PropTypes.string.isRequired,
  appCode: PropTypes.string.isRequired,
  heatMapUrl: PropTypes.string,
  literals: PropTypes.object,
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
  onMapClick: PropTypes.func,
  onMapDragEnd: PropTypes.func,
  onMapLoad: PropTypes.func,
  onMapZoomEnd: PropTypes.func,
  onNormalView: PropTypes.func,
  onPoiClick: PropTypes.func,
  onPoiMouseOut: PropTypes.func,
  onPoiMouseOver: PropTypes.func,
  onSatelliteView: PropTypes.func,
  pois: PropTypes.array,
  polygons: PropTypes.object,
  showHeatmap: PropTypes.bool,
  showSatelliteView: PropTypes.bool,
  tap: PropTypes.bool,
  zoom: PropTypes.number,
  zoomable: PropTypes.bool,
  zoomControlPosition: PropTypes.string,
  mapViewModes: PropTypes.array.isRequired,
  defaultMapViewMode: PropTypes.number,
  height : PropTypes.string
}

MapBasic.defaultProps = {
  id: 'map-container',
  center: [40.00237, -3.99902],
  maxZoom: 20,
  minZoom: 6,
  mapViewModes: [mapViewModes.NORMAL, mapViewModes.SATELLITE],
  defaultMapViewMode: 0,
  zoom: 14,
  zoomControlPosition: 'bottomleft',
  zoomable: true
}

MapBasic.displayName = 'MapBasic'

export default MapBasic
