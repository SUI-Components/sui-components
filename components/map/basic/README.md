# MapBasic

> Description

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-map-basic --save
```

## Usage

### Basic usage
Let's suppose that you wan't a map with an interactive behavior, what properties should I need?

```js
import MapBasic from '@schibstedspain/sui-map-basic'

return (<MapBasic appId={"<HERE APP_ID>"}
                     appCode={"<HERE APP_CODE>"}
                     options={{ zoom: 17, center: {lat: 41.493826, lng: 2.074766} }}
        />)
```

### Interactable maps

And now I want a map interactable you can do that adding the isInteractive flag:

```js
import MapBasic from '@schibstedspain/sui-map-basic'

return (<MapBasic appId={"<HERE APP_ID>"}
                     appCode={"<HERE APP_CODE>"}
                     isInteractive
                     options={{ zoom: 17, center: {lat: 41.493826, lng: 2.074766} }}
        />)
```

### Add Markers

What about put a marker on our map? This case is a bit special because the svg icon definition should be added as a STRING. Sadly this is a HERE map API behavior

```js
import MapBasic from '@schibstedspain/sui-map-basic'

return (<MapBasic appId={"<HERE APP_ID>"}
                     appCode={"<HERE APP_CODE>"}
                     options={{ zoom: 17, center: {lat: 41.493826, lng: 2.074766} }}
                     marker={{
                             genericIcon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"> <rect stroke="white" fill="#1b468d" x="1" y="1" width="22" height="22" /> <text x="12" y="18" font-size="12pt" font-family="Arial" font-weight="bold" text-anchor="middle"  fill="white">H</text> </svg>',
                             elements: [
                               { lat: 41.493826, lng: 2.074766 },
                             ]
                          }}
        />)
```

If you want two markers you can add more elements to your elements array:

```js
   marker={{
             genericIcon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"> <rect stroke="white" fill="#1b468d" x="1" y="1" width="22" height="22" /> <text x="12" y="18" font-size="12pt" font-family="Arial" font-weight="bold" text-anchor="middle"  fill="white">H</text> </svg>',
             elements: [
               { lat: 41.493826, lng: 2.074766 },
               { lat: 41.493826, lng: 2.074766 }
             ]
          }}
```

Even you can add a custom icon by marker
```js
   marker={{
             genericIcon: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"> <rect stroke="white" fill="#1b468d" x="1" y="1" width="22" height="22" /> <text x="12" y="18" font-size="12pt" font-family="Arial" font-weight="bold" text-anchor="middle"  fill="white">H</text> </svg>',
             elements: [
                { lat: 41.493826, lng: 2.074766 },
                { lat: 41.493826, lng: 2.074766, icon: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style="margin:-112px 0 0 -32px" width="136px" height="150px" viewBox="0 0 136 150"><ellipse fill="#000" cx="32" cy="128" rx="36" ry="4"><animate attributeName="cx" from="32" to="32" begin="0s" dur="1.5s" values="96;32;96" keySplines=".6 .1 .8 .1; .1 .8 .1 1" keyTimes="0;0.4;1" calcMode="spline" repeatCount="indefinite"/><animate attributeName="rx" from="36" to="36" begin="0s" dur="1.5s" values="36;10;36" keySplines=".6 .0 .8 .0; .0 .8 .0 1" keyTimes="0;0.4;1" calcMode="spline" repeatCount="indefinite"/><animate attributeName="opacity" from=".2" to=".2"  begin="0s" dur="1.5s" values=".1;.7;.1" keySplines=" .6.0 .8 .0; .0 .8 .0 1" keyTimes=" 0;0.4;1" calcMode="spline" repeatCount="indefinite"/></ellipse><ellipse fill="#1b468d" cx="26" cy="20" rx="16" ry="12"><animate attributeName="cy" from="20" to="20" begin="0s" dur="1.5s" values="20;112;20" keySplines=".6 .1 .8 .1; .1 .8 .1 1" keyTimes=" 0;0.4;1" calcMode="spline" repeatCount="indefinite"/><animate attributeName="ry" from="16" to="16" begin="0s" dur="1.5s" values="16;12;16" keySplines=".6 .0 .8 .0; .0 .8 .0 1" keyTimes="0;0.4;1" calcMode="spline" repeatCount="indefinite"/></ellipse></svg>' }
             ]
          }}
```

### Add circle shapes

You can add circle shapes like 'radar' just creating your component with this property:
```js
<MapBasic
    appId={"DemoAppId01082013GAL"}
    options={{ zoom: 17, center: {lat: 41.493826, lng: 2.074766} }}
    appCode={"AJKnXv84fjrb0KIHawS0Tg"}
    circleShape= {{
            elements: [
              { lat: 41.493826, lng: 2.074766, radius: 100 },
              { lat: 41.494360, lng: 2.075936, radius: 100 }
            ]
    }}
/>
```

If there's not any style definition the here map will throw a radar with a background blue transparent and a border black-blue

You can define your own styles for the whole circles putting the styleGeneric property:`

```js
<MapBasic
    appId={"DemoAppId01082013GAL"}
    options={{ zoom: 17, center: {lat: 41.493826, lng: 2.074766} }}
    appCode={"AJKnXv84fjrb0KIHawS0Tg"}
    circleShape= {{
             styleGeneric: { lineWidth: 10, strokeColor: 'blue' },
             elements: [
               { lat: 41.493826, lng: 2.074766, radius: 100 },
               { lat: 41.494360, lng: 2.075936, radius: 100 }
             ]
    }}
/>
```

And... what about have custom styling on each circle? You can do that putting the style property on the desired element

```js
<MapBasic
    appId={"DemoAppId01082013GAL"}
    options={{ zoom: 17, center: {lat: 41.493826, lng: 2.074766} }}
    appCode={"AJKnXv84fjrb0KIHawS0Tg"}
    circleShape= {{
             styleGeneric: { lineWidth: 10, strokeColor: 'blue' },
             elements: [
               { lat: 41.493826, lng: 2.074766, radius: 100, style: { lineWidth: 30, strokeColor: 'yellow' } },
               { lat: 41.494360, lng: 2.075936, radius: 100 }
             ]
    }}
/>
``

> **Find full description and more examples in the [demo page](#).**