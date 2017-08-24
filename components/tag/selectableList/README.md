### TagSelectableList


# @schibstedspain/sui-tag-selectableList
> A React component that show a selectable tag list with optional button "all" for select or unselect all items

## Installation

```sh
npm install @schibstedspain/sui-tag-selectableList --save
```


## Usage

```javascript
import TagSelectableList from '@schibstedspain/sui-tag-selectableList'
```

```html
const tags = [
  {
    label: 'accusantium',
    value: 1
  },
  {
    label: 'et quibusdam',
    value: 2
  }
]

function onChange (values) {
  console.log('onChange', values)
}

const checkIcon = ({ svgClass }) => <svg className={svgClass} viewBox='0 0 64 64'><path d='M21.92,54.91,2.51,33.34a2,2,0,0,1,3-2.68L22.08,49.09,58.59,12.59a2,2,0,0,1,2.83,2.83Z' /></svg>

<TagSelectableList tagsList={tags} onChange={onChange} all="All options" checkIcon={checkIcon} />
```

* `if` parameter "All" is defined, `then show these button
  
