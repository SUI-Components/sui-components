# MoleculePhoneInput

> Custom input component to handle phone validation. Gives the user a prefix selector and a phone number input. It also handles the phone number validation and the prefix selection.

## Installation

```sh
$ npm install @s-ui/react-molecule-phone-input
```

## Usage

### Basic usage

#### Import package and use the component

```js
import MoleculePhoneInput from '@s-ui/react-molecule-phone-input'

const [phone, setPhone] = useState('')
const icon = <IconArrowDown size="16" />
const prefixes = [
  {value: 'ES', label: 'España', countryCode: '+34'},
  {value: 'FR', label: 'Francia', countryCode: '+33'},
  {value: 'PT', label: 'Portugal', countryCode: '+351'},
  {value: 'AD', label: 'Andorra', countryCode: '+376'}
]

return (
  <MoleculePhoneInput
    value={phone}
    onChange={setPhone}
    dropdownIcon={icon}
    prefixes={prefixes}
  />
)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
@import '~@s-ui/react-molecule-phone-input/lib/index';
```
