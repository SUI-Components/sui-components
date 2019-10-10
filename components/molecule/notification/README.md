# MoleculeNotification

> Notifications offer users information on the system. The content may confirm that an action has been performed correctly, warn the user of an error or simply give information on certain circumstances.

## Installation

```sh
$ npm install @s-ui/react-molecule-notification --save
```

## Usage
- Yo can set the amount of `border-radius` for the rounded version (square always to 0, rounded always to 50%) assigning a value to its Sass var:
```scss
$bdrs-notification: 50%;
```

### Basic usage
```js
import MoleculeNotification from '@s-ui/react-molecule-notification'

// sui-atom-button
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
    type='success'
    autoclose='short'
    buttons={BUTTONS}
    roundedCorners
  >
    <p>Lorem fistrum</p>
  </MoleculeNotification>
)
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/notification).**