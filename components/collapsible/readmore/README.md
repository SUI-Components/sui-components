# CollapsibleReadmore

> Just a simple collapsible read more component, which allows truncating the wrapped content with a height in pixels higher than the value provided in prop `maxHeight`.
It also adds an ellipsis (with customisable text and icon) at the bottom, which allows to expand/collapse the content wrapped.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-collapsible-readmore --save
```

## Usage

### Basic usage
```js
import CollapsibleReadmore from '@schibstedspain/sui-collapsible-readmore'

return (
  const ellipsisTextsToDisplay = {
    collapsed: 'leer más', expanded: 'leer menos'
  }

  const handleClick = ({ collapsed }) => {
    console.log('Is content collapsed', collapsed)
  }

  <CollapsibleReadmore
    ellipsisText={ellipsisTextsToDisplay}
    gradient
    maxHeight={125}
    onEllipsisClick={handleClick}
  />
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/collapsible/readmore).**

