# StickyContent

> Just a wrapper to set a position "fixed" or position "sticky"  (relative until component is out of view when scrolling, and then fixed) to your component.

## Installation

```sh
$ npm install @schibstedspain/sui-sticky-content --save
```

## Usage

### Basic usage
```js
import StickyContent from '@schibstedspain/sui-sticky-content'

return (
  <div>
    <StickyContent
      sticky
      scrollingElement={document.body}
      position='top'>
      <span>Sticky content: when document.body.scrollTop is higher than components top position, this text will be fixed to top.</span>
    </StickyContent>

    <StickyContent
      fixed
      fullWidth
      position='bottom'>
      <span>Fixed content: position will be fixed to bottom</span>
    </StickyContent>
  </div>
)
```


> **Find full description and more examples in the [demo page](../demo).**