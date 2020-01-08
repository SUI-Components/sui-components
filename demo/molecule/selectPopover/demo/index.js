import React, {useState} from 'react'
import MoleculeSelectPopover from '../../../../components/molecule/selectPopover/src'
import OrganismNestedCheckboxes from '../../../../components/organism/nestedCheckboxes/src'
import MoleculeCheckboxField from '../../../../components/molecule/checkboxField/src'

import {IconCheck, IconHalfCheck, IconArrowDown} from './Icons'

const demoExample = [
  {id: 'nested-01', label: 'Nested 1', checked: true},
  {id: 'nested-02', label: 'Nested 2', checked: false},
  {id: 'nested-03', label: 'Nested 3', checked: true},
  {id: 'nested-04', label: 'Nested 4', checked: true},
  {id: 'nested-05', label: 'Nested 5', checked: true}
]

const Demo = () => {
  const [items, setItems] = useState(demoExample)

  const handleChangeParent = () => {
    const newItems = items.map(item => ({
      ...item,
      checked: !items.some(({checked}) => checked === true)
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

  const renderItems = ({items, handleChangeItem}) =>
    items.map(item => {
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

  return (
    <>
      <MoleculeSelectPopover
        acceptButtonText="Aceptar"
        cancelButtonText="Cancelar"
        defaultText="Todas las operaciones"
        iconArrowDown={IconArrowDown}
      >
        <div className="demo-content">
          <h3>Tipo de operación</h3>
          <OrganismNestedCheckboxes
            checkedIcon={IconCheck}
            id="nested-1"
            intermediateIcon={IconHalfCheck}
            join
            labelParent="Nested checkboxes"
            onChangeItem={handleChangeItem}
            onChangeParent={handleChangeParent}
          >
            {renderItems({items, handleChangeItem})}
          </OrganismNestedCheckboxes>
        </div>
      </MoleculeSelectPopover>
      <h1>TEST</h1>
    </>
  )
}

export default Demo
