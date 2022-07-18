# OrganismNestedCheckboxes

This component shows a parent checkbox with children that their controls his own state.

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