# MapBasic

> Description
A map component inspired and rebuilded form Fotocasa map component. Includes, polygons, poi's, markers and different layer views.

## Installation

```sh
$ npm install @schibstedspain/sui-map-basic --save
```

## Usage

### Basic usage
Let's suppose that you wan't a map with an interactive behavior, what properties should you need?

```js
import MapBasic from '@schibstedspain/sui-map-basic'

return (<MapBasic
        appId="<HERE APP_ID>"
        appCode="<HERE APP_CODE>"
        id="test-map"
        height="100%"
        center={[41.493743, 2.075211]}
        zoom={17}
/>)
```

### NON interactable maps

By default, all the maps have the 'draggable' leaflet flag setted to true. But what about if I want to disable it? Just pass isInteractable={false}

```js
import MapBasic from '@schibstedspain/sui-map-basic'

return (<MapBasic
        appId="<HERE APP_ID>"
        appCode="<HERE APP_CODE>"
        isInteractable={false}
        center={[41.493743, 2.075211]}
        zoom={17}
        />)
```

### Add Markers

What about put a marker on our map?

Markers are setted as "icons" prop. Icons is an array composed by:
    - Path to the image (local or not)
    - Size(width, height) array.
    - Anchor. This is the amount of pixels that will be deleted from the top or left of our image [0, 27] means margin-left: 0, margin-top: -27px
    - lat
    - long

```js
import MapBasic from '@schibstedspain/sui-map-basic'

return (<MapBasic
        appId={"<HERE APP_ID>"}
        appCode={"<HERE APP_CODE>"}
        icons={[
            {
                iconUrl: 'http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png',
                size: [18],
                anchor: [0, 27],
                lat: 41.568782,
                lng: 2.026029
             }
        ]}
/>)
```

If you want two markers you can add more elements to your icons array:

```js
   icons={[
               {
                   iconUrl: 'http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png',
                   size: [18],
                   anchor: [0, 27],
                   lat: 41.568782,
                   lng: 2.026029
                },
                {
                   iconUrl: 'http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png',
                   size: [18],
                   anchor: [0, 27],
                   lat: 41.568782,
                   lng: 2.026029
                }
   ]}
```

### Usage with Points of interest

If you wan't to add 'points of interest' to your map you could pass it as a pois array. This feature is attached to FC and need to be modified to be more generic.

```js
    pois=[
    {[{"latitude":"42.67967","longitude":"-2.9674","hasPopup":false,"xitiTag":false,"propertyInfo":{"IsFavorite":false,"IsFullAddressVisible":false,"purchaseTypeId":2,"bti":0,"contact":"","highlighted":"false","on":0,"price":"","promotionId":"0","propertyId":"144830788"},"markerType":0,"isSelected":false,"Id":"144830788"}]}
    ]
```