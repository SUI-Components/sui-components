import React, {useState} from 'react'
import AtomIcon from '../../../../components/atom/icon/src'
import OrganismNestedCheckboxes from '../../../../components/organism/nestedCheckboxes/src'

import './index.scss'

const IconCheck = props => (
  <AtomIcon {...props}>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.77 20.812l-5-5a.5.5 0 0 0-.707.707l5.417 5.417a.5.5 0 0 0 .76-.062L21.99 2.707a.5.5 0 0 0-.813-.583L7.77 20.812z"
        fillRule="nonzero"
      />
    </svg>
  </AtomIcon>
)

const IconHalfCheck = props => (
  <AtomIcon {...props}>
    <svg viewBox="0 0 24 24">
      <path d="M.5 12.5a.5.5 0 010-1h23a.5.5 0 010 1H.5z" />
    </svg>
  </AtomIcon>
)

const IconArrowDown = props => (
  <AtomIcon {...props}>
    <svg viewBox="0 0 24 24">
      <path d="M12.034 16.91L2.83 6.211a.5.5 0 10-.758.653l9.27 10.776a.912.912 0 001.383 0l9.272-10.776a.5.5 0 10-.759-.653l-9.204 10.7z" />
    </svg>
  </AtomIcon>
)

const IconArrowUp = props => (
  <AtomIcon {...props}>
    <svg viewBox="0 0 24 24">
      <path d="M12.034 7.09L2.83 17.789a.5.5 0 11-.758-.653l9.27-10.776a.912.912 0 011.383 0l9.272 10.776a.5.5 0 11-.759.653l-9.204-10.7z" />
    </svg>
  </AtomIcon>
)

const BASE_CLASS_DEMO = `DemoOrganismNestedCheckboxes`

const demoExample = [
  {id: 'nested-01', label: 'Nested 1', checked: true},
  {id: 'nested-02', label: 'Nested 2', checked: false},
  {id: 'nested-03', label: 'Nested 3', checked: true},
  {id: 'nested-04', label: 'Nested 4', checked: true},
  {id: 'nested-05', label: 'Nested 5', checked: true}
]

const Demo = () => {
  const [items, setItems] = useState(demoExample)

  const handleChangeParent = anyItemIsChecked => {
    const newItems = items.map(item => ({
      ...item,
      checked: !anyItemIsChecked
    }))
    setItems(newItems)
  }

  const handleChangeItem = event => {
    const {target} = event

    const newItems = items.map(item => ({
      ...item,
      checked: item.id === target.id ? !item.checked : item.checked
    }))
    setItems(newItems)
  }

  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>Organism NestedCheckboxes</h1>
      <OrganismNestedCheckboxes
        checkedIcon={IconCheck}
        intermediateIcon={IconHalfCheck}
        id="nested-1"
        items={items}
        labelParent="Nested checkboxes"
        onChangeItem={handleChangeItem}
        onChangeParent={handleChangeParent}
      />

      <h2>
        With Join prop | <small>Remove left padding on items</small>
      </h2>
      <OrganismNestedCheckboxes
        checkedIcon={IconCheck}
        intermediateIcon={IconHalfCheck}
        id="nested-2"
        items={items}
        join
        labelParent="Nested checkboxes"
        onChangeItem={handleChangeItem}
        onChangeParent={handleChangeParent}
      />

      <h2>
        With Show/hide items feature | <small>Toggle items visibility</small>
      </h2>
      <OrganismNestedCheckboxes
        checkedIcon={IconCheck}
        intermediateIcon={IconHalfCheck}
        id="nested-3"
        items={items}
        labelParent="Nested checkboxes"
        onChangeItem={handleChangeItem}
        onChangeParent={handleChangeParent}
        defaultItemsVisibility={false}
        showItemsIcon={IconArrowDown}
        hideItemsIcon={IconArrowUp}
      />
    </div>
  )
}

export default Demo
