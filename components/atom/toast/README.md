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
  atomToastPositions,
  atomToastAutoCloseTimes
} from '@s-ui/react-atom-toast';

return (
  <AtomToast
    position={atomToastPositions.topRight}
    autoCloseTime={atomToastAutoCloseTimes.short}
  >
    <span>lorem ipsum</span>
  </AtomToast>
);
```

> **Find full description and more examples in the [demo page](#).**
