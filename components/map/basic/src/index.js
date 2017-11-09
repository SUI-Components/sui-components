import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SearchMap from './leaflet/search-map'
import { tileLayerTypes } from './leaflet/constants'

class MapBasic extends Component {
  constructor (props) {
    super(props)
    this.setMapEventDefinition(props)
  }

  searchMap = undefined
  isHeatmapVisible = false
  isSatelliteView = false

  state = {
    pois: null
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
      tileLayerTypes: this.props.tileLayerTypes,
      zoomable: this.props.zoomable,
      zoomLevel: this.props.zoom
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
      this.searchMap.setView(tileLayerTypes.SATELLITE)
    } else if (!showSatelliteView && this.isSatelliteView) {
      this.isSatelliteView = false
      this.searchMap.setView(tileLayerTypes.NORMAL)
    }
  }

  checkIfHeatMapShouldBeDisplayed (showHeatmap, url) {
    if (showHeatmap && !this.isHeatmapVisible) {
      this.isHeatmapVisible = true
      this.searchMap.showHeatMap(url)
    } else if (!showHeatmap && this.isHeatmapVisible) {
      this.isHeatmapVisible = false
      this.searchMap.removeHeatMap()
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
    this.searchMap.displayPois(pois)
    this.checkIfHeatMapShouldBeDisplayed(showHeatmap, heatMapUrl)
    this.checkWhichViewShouldBeDisplayed(showSatelliteView)
  }

  componentDidMount () {
    this.subscribeToMapEvents()
    this.searchMap = new SearchMap(this.getMapConfig())
    this.props.onMapLoad(this.searchMap.getParamsForRequest())
  }

  render () {
    return (
      <div
        className='re-Wrapper'
        style={{height: '100%'}}
        ref={(ele) => { this.mapDOMInstance = ele }}
        id={this.props.id}
      />
    )
  }
}

MapBasic.propTypes = {
  id: PropTypes.string.isRequired,
  center: PropTypes.array.isRequired,
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
  tileLayerTypes: PropTypes.array.isRequired
}

MapBasic.defaultProps = {
  id: 'map-container',
  tileLayerTypes: [tileLayerTypes.NORMAL],
  zoom: 14,
  zoomable: true
}

MapBasic.displayName = 'MapBasic'

export default MapBasic
