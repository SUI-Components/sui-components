# MoleculeField

`MoleculeField` is a component that wraps a composition of Label + some input (input, textarea, ...) + Validation Messages. 

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/field/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,field)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-field?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-field)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Afield&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Afield)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-field)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/field/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-field --save
```

## Usage

After importing the component `MoleculeField` like this

```javascript
import MoleculeField from '@s-ui/react-molecule-field'
```

### Basic usage
    
```
  <MoleculeField label="name" name="name">
    <input id="name" type="text"/>
  </MoleculeField>
```

### With Error Message 
```
<MoleculeField label="surname" name="surname" errorText="Error!">
  <input id="surname" type="text"/>
</MoleculeField>
```

### With Success Message 

```
  <MoleculeField label="address" name="address" successText="Success!">
    <input id="address" type="text"/>
  </MoleculeField>
```

### With Alert Message 

```
  <MoleculeField label="address" name="address" alertText="Alert!">
    <input id="address" type="text"/>
  </MoleculeField>
```

### With Help Text

```

<MoleculeField label="country" name="country" helpText="Read the instructions to write proper format">
  <input id="country" type="text"/>
</MoleculeField>
```

### Inline
```
<MoleculeField inline label="city" name="city">
  <input id="city" type="text"/>
</MoleculeField>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/field/demo).**