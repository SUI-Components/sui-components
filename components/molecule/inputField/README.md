# MoleculeInputField

`MoleculeInputField` is a component that wraps a composition of Label + Textarea + Validation Messages. 

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/inputField/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,inputField)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-input-field?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-input-field)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AinputField&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AinputField)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-input-field)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/inputField/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-input-field --save
```

## Usage

After importing the component `MoleculeInputField` like this

```javascript
import MoleculeInputField from '@s-ui/react-molecule-input-field'
```

### Basic usage
    
```javascript
  <MoleculeInputField
    id="second"
    placeholder="Medium Input"
    leftAddon="http://"
    rightAddon="@schibsted.com"
    label="Description"
    value="In some place of La Mancha which name..."
  />
```

### With `successText`
    
```javascript
  <MoleculeInputField
    id="description2"
    label="Description"
    value="In some place of La Mancha which name..."
    successText="Everything ok!"
  />
```

### With `errorText`
    
```javascript
  <MoleculeInputField
    id="notes"
    label="Notes"
    errorText="All wrong!"
  />
```

### With `alertText`

```javascript
  <MoleculeInputField
    id="notes"
    label="Notes"
    alertText="All wrong!"
  />

```

### With `helpText`

```javascript
  <MoleculeInputField
    id="description-inline2"
    label="Description"
    helpText="Tu descripción en Latin"
    value="Lorem ipsum dolor sit amet"
  />
```

### Inline

```javascript
  <MoleculeInputField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    inline
  />
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/inputField/demo).**
