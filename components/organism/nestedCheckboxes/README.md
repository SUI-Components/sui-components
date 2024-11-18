# OrganismNestedCheckboxes

This component shows a parent checkbox with children that their controls his own state.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/organism/nestedCheckboxes/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,organism,nestedCheckboxes)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-organism-nested-checkboxes?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-organism-nested-checkboxes)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AnestedCheckboxes&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AnestedCheckboxes)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-organism-nested-checkboxes)](https://github.com/SUI-Components/sui-components/blob/main/components/organism/nestedCheckboxes/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-organism-nested-checkboxes
```

## Usage

### Basic usage
```js
import OrganismNestedCheckboxes from '@s-ui/react-organism-nested-checkboxes'
import MoleculeCheckboxField from '@s-ui/react-molecule-checkboxField'

const data = [
  {id: 'nested-01', label: 'Nested 1', checked: true},
  {id: 'nested-02', label: 'Nested 2', checked: true},
  {id: 'nested-03', label: 'Nested 3', checked: true},
  {id: 'nested-04', label: 'Nested 4', checked: false},
  {id: 'nested-05', label: 'Nested 5', checked: false}
]

<OrganismNestedCheckboxes
  fullCheckedStyledIcon={IconCheck}
  halfCheckedStyledIcon={IconHalfCheck}
  id="nested"
  labelParent="Nested checkboxes"
  onChangeItem={handleChangeItem}
  onChangeParent={handleChangeParent}
>
 {
   data.map(item => {
      const {id: childId, checked} = item

      return (
        <MoleculeCheckboxField
          key={childId}
          id={childId}
          checked={checked}
          checkedIcon={IconCheck}
          intermediateIcon={IconHalfCheck}
          onChange={handleChangeItem}
          {...item}
        />
      )
    })
  }
</OrganismNestedCheckboxes>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/organism/nestedCheckboxes/demo).**