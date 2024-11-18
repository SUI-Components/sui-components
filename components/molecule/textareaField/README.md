# MoleculeTextareaField

`MoleculeTextareaField` is a component that wraps a composition of Label + Textarea + Validation Messages. 

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/textareaField/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,textareaField)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-textarea-field?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-textarea-field)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AtextareaField&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AtextareaField)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-textarea-field)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/textareaField/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-textarea-field --save
```

## Usage

After importing the component `MoleculeTextareaField` like this

```javascript
import MoleculeTextareaField from '@s-ui/react-molecule-textarea-field'
```

### Basic usage
    
```
  <MoleculeTextareaField
    id="description"
    label="Description"
  />
```

### With initial value
    
```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
  />
```

### With maxChars
    
```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    maxChars={75}
  />
```

### With Error Message 
```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    errorText="All wrong!"
  />
```

### With Success Message 
```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    successText="Everything ok!"
  />
```

### With Alert Message 
```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    alertText="Ok, but's something needs your attention..."
  />
```

### With Help Text

```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    helpText="Enter some description with no less than 20 characters"
  />
```

### Inline
```
  <MoleculeTextareaField
    id="description"
    label="Description"
    value="In some place of La Mancha which name..."
    inline
  />
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/textareaField/demo).**