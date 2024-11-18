# MoleculePhoneInput

> Custom input component to handle phone validation. Gives the user a prefix selector and a phone number input. It also handles the phone number validation and the prefix selection.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/phoneInput/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,phoneInput)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-phone-input?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-phone-input)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AphoneInput&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AphoneInput)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-phone-input)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/phoneInput/LICENSE.md)

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
