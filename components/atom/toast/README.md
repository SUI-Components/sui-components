# AtomToast

> AtomToast is a component that renders an empty floating box.

## Installation

```sh
$ npm install @s-ui/react-atom-toast --save
```

## Usage

### Basic usage
```js
import AtomToast, {
  atomToastPosistions,
  atomToastAutoCloseTimes,
  atomToastSizes,
  atomToastMargins
} from '@s-ui/react-atom-toast'

return (
  <AtomToast
    position={atomToastPosistions.topRight}
    autoCloseTime={atomToastAutoCloseTimes.short}
    size={atomToastSizes.medium}
    margin={atomToastSizes.large}
  >
    <span>lorem ipsum</span>
  </AtomToast>
)
```


> **Find full description and more examples in the [demo page](#).**