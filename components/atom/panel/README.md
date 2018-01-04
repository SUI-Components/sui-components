# AtomPanel

> Just a background for your component, can be a color or an image with background/overlay

## Installation

```sh
$ npm install @schibstedspain/sui-atom-panel --save
```

## Usage

### Basic usage
```js
import AtomPanel, {
  atomPanelAlpha,
  atomPanelColors,
  atomPanelHorizontalAlign,
  atomPanelVerticalAlign
} from '@schibstedspain/sui-atom-panel'

return (
  <div>
    <AtomPanel
      alpha={atomPanelAlpha.OVERLAY_D4}
      color={atomPanelColors.CONTRAST}
    >
      {content}
    </AtomPanel>
    <AtomPanel
      src={'https://picsum.photos/250/200'}
      horizontalAlign={atomPanelHorizontalAlign.LEFT}
      verticalAlign={atomPanelVerticalAlign.TOP}
    >
      {content}
    </AtomPanel>
  </div>
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/panel/demo).**
