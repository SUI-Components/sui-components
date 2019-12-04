# MoleculeNotification

> Notifications offer users information on the system. The content may confirm that an action has been performed correctly, warn the user of an error or simply give information on certain circumstances.

## Installation

```sh
$ npm install @s-ui/react-molecule-notification --save
```

### Basic usage
```js
import MoleculeNotification, {BRDS_SIZE} from '@s-ui/react-molecule-notification'

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

// import named export sizes from component as seen above
BRDS_SIZE = {
  extraLarge: 'xl',
  large: 'l',
  medium: 'm',
  small: 's',
  extraSmall: 'xs'
}

return (
  <MoleculeNotification
    type='success'
    autoclose='short'
    buttons={BUTTONS}
    roundedCorners={BRDS_SIZE.medium}
  >
    <p>Lorem fistrum</p>
  </MoleculeNotification>
)
```

## Border Radius usage
- Define a `$bdrs-base` Sass var value in your vertical theme to get 5 different border radius sizes. Then import the `BRDS_SIZE` object to get `extraSmall`, `small`, `medium`, `large` and `extraLarge` sizes in declarative way.


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/notification).**