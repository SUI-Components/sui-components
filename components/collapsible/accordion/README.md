# CollapsibleAccordion

> Description

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-collapsible-accordion --save
```

## Usage

### Basic usage
```js
import CollapsibleAccordion from '@schibstedspain/sui-collapsible-accordion'



const items = [
  {
    label: 'Item 1',
    content: 'Content item 1',
    collapsed: true
  },
  {
    label: 'Item 3',
    content: 'Content item 3',
    collapsed: true
  },
  {
    label: 'Item 3',
    content: 'Content item 3',
    collapsed: true
  }
]

return (<CollapsibleAccordion items={items} preserveState={true} />)
```


> **Find full description and more examples in the [demo page](#).**
