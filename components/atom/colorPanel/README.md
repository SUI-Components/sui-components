# AtomColorPanel

> A color panel is a container with a color on its background.

## Installation

```sh
$ npm install @schibstedspain/sui-atom-color-panel --save
```

## Usage

### Basic usage
```js
import AtomColorPanel, { atomColorPanelTypes } from '@schibstedspain/sui-atom-color-panel'

return (
  <AtomColorPanel type={atomColorPanelTypes.CORPORATE} alpha={atomColorPanelTypes.OVERLAY_D4}>
    {content}
  </AtomColorPanel>
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/colorPanel/demo).**
