import L from 'leaflet'

export default class SearchMapPolygons {
  _polygonList = []
  _storedPolygons = {}
  SPAIN_POLYGON_CENTER = {
    latitude: 40.4096,
    longitude: -3.68624
  }
  SPAIN_POLYGON_NAME = 'geom_724_0_0_0_0_0_0_0_0'

  constructor({onPolygonWithBounds}) {
    this.onPolygonWithBounds = onPolygonWithBounds
  }

  removePolygonsFromMap(map) {
    if (this._polygonList.length > 0) {
      this._polygonList.map(polygon => map.removeLayer(polygon))
    }
  }

  highlightFeature(evt) {
    const layer = evt.target

    layer.setStyle({
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7,
      weight: 5
    })

    if (!L.Browser.ie && !L.Browser.opera) {
      layer.bringToFront()
    }
  }

  resetHighlight(evt) {
    if (this._geojson !== null) {
      this._geojson.resetStyle(evt.target)
    }
  }

  zoomIn(evt) {
    const map = evt.target._map
    map.setView(evt.latlng, map.getZoom() + 2)
  }

  onEachFeature(feature, layer) {
    layer.on({
      dblclick: SearchMapPolygons.zoomIn,
      mouseout: SearchMapPolygons.resetHighlight,
      mouseover: SearchMapPolygons.highlightFeature
    })
  }

  printPolygonOnMap({map, polygon}) {
    const params = {
      className: 'scm-map__area',
      onEachFeature: SearchMapPolygons.onEachFeature
    }

    const polygonGeoJSon = L.geoJson(polygon, params)

    this._polygonList.push(polygonGeoJSon)
    polygonGeoJSon.addTo(map)

    const polygonName = polygon.properties.Code

    if (polygonName === this.SPAIN_POLYGON_NAME) {
      const {latitude, longitude} = this.SPAIN_POLYGON_CENTER
      const centerSpain = new L.LatLng(latitude, longitude)
      map.panTo(centerSpain)
    } else {
      const bounds = polygonGeoJSon.getBounds()
      if (bounds.isValid()) {
        this.onPolygonWithBounds({bounds, map})
      }
    }
  }

  setPolygonsOnMap({map, polygons}) {
    this.removePolygonsFromMap(map)

    if (!(polygons instanceof Array)) {
      polygons = [polygons]
    }

    polygons.map(polygon => {
      this.printPolygonOnMap({map, polygon})
    })

    return true
  }
}
