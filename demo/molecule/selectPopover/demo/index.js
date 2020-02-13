import React, {useState} from 'react'
import OrganismNestedCheckboxes from '../../../../components/organism/nestedCheckboxes/src/'
import MoleculeCheckboxField from '../../../../components/molecule/checkboxField/src/'
import MoleculeSelectPopover, {
  selectPopoverSizes
} from '../../../../components/molecule/selectPopover/src/'
import {IconCheck, IconHalfCheck, IconArrowDown} from './Icons'

import './index.scss'

const demoExample = [
  {id: 'nested-01', label: 'Compra', checked: false},
  {id: 'nested-02', label: 'Alquiler', checked: false},
  {id: 'nested-03', label: 'Alquiler con opción a compra', checked: false}
]

const Demo = () => {
  const [items, setItems] = useState(demoExample)
  const [unconfirmedItems, setUnconfirmedItems] = useState(demoExample)

  const handleChangeParent = () => {
    const newItems = unconfirmedItems.map(item => ({
      ...item,
      checked: !unconfirmedItems.some(({checked}) => checked === true)
    }))
    setUnconfirmedItems(newItems)
  }

  const handleChangeItem = event => {
    const {target} = event

    const newItems = unconfirmedItems.map(item => ({
      ...item,
      checked: item.id === target.id ? !item.checked : item.checked
    }))
    setUnconfirmedItems(newItems)
  }

  const renderItems = () =>
    unconfirmedItems.map(item => {
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

  const checkedItems = items.filter(item => item.checked)
  const isSelected = checkedItems.length > 0
  const itemsText = checkedItems.map(item => item.label).join(', ')
  const selectText = isSelected ? itemsText : 'Todas las operaciones'

  const renderSelectPopover = size => (
    <MoleculeSelectPopover
      acceptButtonText="Aceptar"
      cancelButtonText="Cancelar"
      iconArrowDown={IconArrowDown}
      isSelected={isSelected}
      onAccept={() => setItems(unconfirmedItems)}
      onCancel={() => setUnconfirmedItems(items)}
      selectText={selectText}
      size={size}
    >
      <div className="demo-content">
        <h3>Tipo de operación</h3>
        <OrganismNestedCheckboxes
          checkedIcon={IconCheck}
          id="nested-1"
          intermediateIcon={IconHalfCheck}
          join
          labelParent="Todas las operaciones"
          onChangeParent={handleChangeParent}
        >
          {renderItems()}
        </OrganismNestedCheckboxes>
      </div>
    </MoleculeSelectPopover>
  )

  return (
    <div className="demo-container">
      <h3>Size M (default)</h3>
      {renderSelectPopover(selectPopoverSizes.MEDIUM)}

      <h3>Size S</h3>
      {renderSelectPopover(selectPopoverSizes.SMALL)}

      <h3>Size XS</h3>
      {renderSelectPopover(selectPopoverSizes.XSMALL)}
    </div>
  )
}

export default Demo
