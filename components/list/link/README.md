# ListLink

> Show a list of links, that could be React Router Links or HTML links. You could show these links also inline or one-per-line style as a list.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-list-link --save
```

## Usage

### Basic usage
```js
import ListLink from '@schibstedspain/sui-list-link'

const listOfLinks = [
  {
    literal: 'Alquiler de pisos en Madrid Capital',
    title: 'Element title',
    target: '_parent',
    url: 'http://fotocasa.es',
    disabled: true,
    customclass: 'sui-Link-disabled'
  },
  {
    literal: 'Comprar pisos',
    title: 'Element title',
    target: '_parent',
    url: 'http://fotocasa.es',
    disabled: true,
    customclass: 'sui-Link-disabled'
  }
]

return (
  <ListLink
    list={listOfLinks}
    displayInline />
  />
)
```

> **Find full description and more examples in the [demo page](#).**
