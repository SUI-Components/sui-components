# AtomImagePanel

> An image panel is a container with an image on its background.

## Installation

```sh
$ npm install @schibstedspain/sui-atom-image-panel --save
```

## Usage

### Basic usage
```js
import AtomImagePanel, { atomImagePanelHorizontalAlign } from '@schibstedspain/sui-atom-image-panel'

return (
  <AtomImagePanel src={'some image url'} horizontalAlign={atomImagePanelHorizontalAlign.LEFT} placeholderColor='#ccc'>
    {content}
  </AtomImagePanel>
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/imagePanel/demo).**
