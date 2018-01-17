# CollapsibleComposed

Component to display a section with a title and some nodes, and keep some other nodes hidden until the icon is clicked. Then, clicking again will re-hide the items.

All the content can be initially displayed and it can be disposed inline. Also, callback is provided in case the container needs to perform any action.

## Installation

```sh
$ npm install @schibstedspain/sui-collapsible-composed --save
```

## Usage

### Basic usage
```js
import CollapsibleComposed from '@schibstedspain/sui-collapsible-composed'

const callback = (collapse) => alert('Is collapsing? ' + collapse)

const items = [
  'Item visible 1',
  'Item visible 2'
]

const hiddenItems = [
  'Item hidden 1',
  'Item hidden 2'
]

return (
    <CollapsibleComposed
      label='Title'
      items={items}
      hiddenItems={hiddenItems}
      collapsed={false}
      inline
      onToggle={callback}
    />
)
```
