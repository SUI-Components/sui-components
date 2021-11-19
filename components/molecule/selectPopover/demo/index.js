/* eslint-disable react/prop-types */
import {useState} from 'react'
import IconClose from '@s-ui/react-icons/lib/Close'
import MoleculeModal from '@s-ui/react-molecule-modal'
import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'
import MoleculeCheckboxField from 'components/molecule/checkboxField/src/'
import MoleculeSelectPopover, {
  selectPopoverSizes,
  selectPopoverPlacements
} from 'components/molecule/selectPopover/src/'
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
  const [size, setSize] = useState(selectPopoverSizes.MEDIUM)
  const [placement, setPlacement] = useState(selectPopoverPlacements.RIGHT)
  const [hasEvents, setHasEvents] = useState(false)
  const [isFullWidth, setIsFullWidth] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [actionsAreHidden, setActionsAreHidden] = useState(false)
  const [addCustomButton, setAddCustomButton] = useState(false)
  const [customContentWrapper, setCustomContentWrapper] = useState(false)

  const handleChangeItem = event => {
    const {target} = event

    const newItems = unconfirmedItems.map(item => ({
      ...item,
      checked: item.id === target.id ? !item.checked : item.checked
    }))
    setUnconfirmedItems(newItems)
  }

  const handleClose = () => {
    hasEvents && window.alert('Popover closed!')
  }

  const handleOpen = () => {
    hasEvents && window.alert('Popover opened!')
  }

  const renderContentWrapper = ({actions, content, isOpen, setIsOpen}) => {
    const handleClose = () => setIsOpen(false)

    return (
      <MoleculeModal
        fitWindow
        iconClose={<IconClose size="medium" />}
        isContentless
        isOpen={isOpen}
        onClose={handleClose}
      >
        <MoleculeModal.Content withoutIndentation>
          {content}
        </MoleculeModal.Content>
        {!actionsAreHidden && (
          <MoleculeModal.Footer>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              {actions}
            </div>
          </MoleculeModal.Footer>
        )}
      </MoleculeModal>
    )
  }

  const checkedItems = items.filter(item => item.checked)
  const isSelected = checkedItems.length > 0
  const itemsText = checkedItems.map(item => item.label).join(', ')
  const selectText = isSelected ? itemsText : 'Todas las operaciones'

  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Select Popover</h1>
        <h3>Props</h3>
        <label>Size</label>
        <MoleculeSelect
          value={size}
          onChange={(ev, {value}) => setSize(value)}
          placeholder="Select a size..."
          iconArrowDown={<IconArrowDown />}
        >
          {Object.keys(selectPopoverSizes).map(key => (
            <MoleculeSelectOption key={key} value={selectPopoverSizes[key]}>
              {key}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelect>
        <br />
        <label>Placements</label>
        <MoleculeSelect
          value={placement}
          onChange={(ev, {value}) => setPlacement(value)}
          placeholder="Select a size..."
          iconArrowDown={<IconArrowDown />}
        >
          {Object.keys(selectPopoverPlacements).map(key => (
            <MoleculeSelectOption
              key={key}
              value={selectPopoverPlacements[key]}
            >
              {key}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelect>
        <br />
        <div>
          <label>
            <input
              type="checkbox"
              checked={hasEvents}
              onChange={ev => setHasEvents(ev.target.checked)}
            />
            With events (onOpen & onClose)
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isFullWidth}
              onChange={ev => setIsFullWidth(ev.target.checked)}
            />
            Full width
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={actionsAreHidden}
              onChange={ev => setActionsAreHidden(ev.target.checked)}
            />
            Actions are hidden
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={addCustomButton}
              onChange={ev => setAddCustomButton(ev.target.checked)}
            />
            Add custom button
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={customContentWrapper}
              onChange={ev => setCustomContentWrapper(ev.target.checked)}
            />
            Custom content wrapper as a modal
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isDisabled}
              onChange={ev => setIsDisabled(ev.target.checked)}
            />
            Disabled
          </label>
        </div>

        <h3>Component</h3>
        <MoleculeSelectPopover
          acceptButtonText="Aceptar"
          cancelButtonText="Cancelar"
          customButtonText={addCustomButton && 'Borrar'}
          customButtonOptions={{
            design: 'outline',
            negative: false,
            color: 'accent'
          }}
          renderContentWrapper={customContentWrapper && renderContentWrapper}
          fullWidth={isFullWidth}
          hideActions={actionsAreHidden}
          iconArrowDown={IconArrowDown}
          isDisabled={isDisabled}
          isSelected={isSelected}
          onAccept={() => setItems(unconfirmedItems)}
          onCancel={() => setUnconfirmedItems(items)}
          onCustomAction={() => setUnconfirmedItems(items)}
          onClose={handleClose}
          onOpen={handleOpen}
          placement={placement}
          selectText={selectText}
          size={size}
        >
          <div className="demo-content">
            <h3>Tipo de operación</h3>
            <div className="demo-content-options">
              {unconfirmedItems.map(item => {
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
              })}
            </div>
          </div>
        </MoleculeSelectPopover>
      </div>
    </div>
  )
}

export default Demo
