# MoleculeNotification

> Notifications offer users information on the system. The content may confirm that an action has been performed correctly, warn the user of an error or simply give information on certain circumstances.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/notification/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,notification)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-notification?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-notification)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Anotification&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Anotification)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-notification)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/notification/LICENSE.md)

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