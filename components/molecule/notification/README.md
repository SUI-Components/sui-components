# MoleculeNotification

> Description

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-molecule-notification --save
```

## Usage

### Basic usage
```js
import MoleculeNotification from '@schibstedspain/sui-molecule-notification'

const BUTTONS = [
  {
    type: 'secondary',
    children: 'Secondary',
    negative: true
  },
  {
    type: 'primary',
    children: 'Primary',
    negative: true
  }
]

return (
  <MoleculeNotification 
    text='Lorem fistrum'
    type='success'
    buttons={BUTTONS} 
  />
)
```


> **Find full description and more examples in the [demo page](#).**