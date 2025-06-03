/* eslint-disable react/prop-types */
import {useRef, useState} from 'react'

import MoleculeSelectPopover, {
  selectPopoverOverlayTypes,
  selectPopoverPlacements,
  selectPopoverShapes,
  selectPopoverSizes
} from 'components/molecule/selectPopover/src/index.js'

import MoleculeCheckboxField from '@s-ui/react-molecule-checkbox-field'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'
import MoleculeSelect from '@s-ui/react-molecule-select'

import CustomContentWrapper from './Custom/CustomContentWrapper.js'
import CustomRenderActions from './Custom/CustomRenderActions.js'
import {IconArrowDown, IconCheck, IconHalfCheck, IconClose} from './Icons/index.js'
import {demoExample} from './config.js'

import './index.scss'

const Demo = () => {
  const [items, setItems] = useState(demoExample)
  const [unconfirmedItems, setUnconfirmedItems] = useState(demoExample)
  const [shape, setShape] = useState(selectPopoverShapes.CIRCULAR)
  const [size, setSize] = useState(selectPopoverSizes.MEDIUM)
  const [placement, setPlacement] = useState(selectPopoverPlacements.RIGHT)
  const [hasEvents, setHasEvents] = useState(false)
  const [isFullWidth, setIsFullWidth] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [actionsAreHidden, setActionsAreHidden] = useState(false)
  const [addCustomButton, setAddCustomButton] = useState(false)
  const [customContentWrapper, setCustomContentWrapper] = useState(false)
  const [renderSelect, setRenderSelect] = useState(false)
  const [overlayType, setOverlayType] = useState(selectPopoverOverlayTypes.NONE)
  const [hasCustomRenderActions, setCustomRenderActions] = useState(false)
  const [hasForceClosePopover, setHasForceClosePopover] = useState(false)
  const [forceClosePopover, setForceClosePopover] = useState(false)
  const [hasRemoveOption, setHasRemoveOption] = useState(false)

  const overlayContentRef = useRef()

  const handleChangeItem = event => {
    const {target} = event

    const newItems = unconfirmedItems.map(item => ({
      ...item,
      checked: item.id === target.id ? !item.checked : item.checked
    }))
    setUnconfirmedItems(newItems)

    if (hasForceClosePopover) {
      setItems(newItems)
      setForceClosePopover(true)
    }
  }

  const handleClose = () => {
    hasEvents && window.alert('Popover closed!')
  }

  const handleOpen = () => {
    hasEvents && window.alert('Popover opened!')

    hasForceClosePopover && setForceClosePopover(false)
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
        <label>Shape</label>
        <MoleculeSelect
          value={shape}
          onChange={(ev, {value}) => setShape(value)}
          placeholder="Select a shape..."
          iconArrowDown={<IconArrowDown />}
        >
          {Object.keys(selectPopoverShapes).map(key => (
            <MoleculeSelectOption key={key} value={selectPopoverShapes[key]}>
              {key}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelect>
        <br />
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
          onChange={(ev, {value}) => {
            setPlacement(value)
          }}
          placeholder="Select a size..."
          iconArrowDown={<IconArrowDown />}
        >
          {Object.keys(selectPopoverPlacements).map(key => (
            <MoleculeSelectOption key={key} value={selectPopoverPlacements[key]}>
              {key}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelect>
        <br />
        <label>Overlay types</label>
        <MoleculeSelect
          value={overlayType}
          onChange={(_, {value}) => {
            setOverlayType(value)
          }}
          placeholder="Select a overlay type..."
          iconArrowDown={<IconArrowDown />}
        >
          {Object.keys(selectPopoverOverlayTypes).map(key => (
            <MoleculeSelectOption key={key} value={selectPopoverOverlayTypes[key]}>
              {key}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelect>
        <br />
        <div>
          <label>
            <input type="checkbox" checked={hasEvents} onChange={ev => setHasEvents(ev.target.checked)} />
            With events (onOpen & onClose)
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={isFullWidth} onChange={ev => setIsFullWidth(ev.target.checked)} />
            Full width
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={actionsAreHidden} onChange={ev => setActionsAreHidden(ev.target.checked)} />
            Actions are hidden
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={addCustomButton} onChange={ev => setAddCustomButton(ev.target.checked)} />
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
            <input type="checkbox" checked={renderSelect} onChange={ev => setRenderSelect(ev.target.checked)} />
            Render select like a button
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={isDisabled} onChange={ev => setIsDisabled(ev.target.checked)} />
            Disabled
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={hasCustomRenderActions}
              onChange={ev => setCustomRenderActions(ev.target.checked)}
            />
            customRenderActions
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={hasForceClosePopover}
              onChange={ev => setHasForceClosePopover(ev.target.checked)}
            />
            Force close popover
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={hasRemoveOption} onChange={ev => setHasRemoveOption(ev.target.checked)} />
            With remove option
          </label>
        </div>

        <h3>Component</h3>
        <MoleculeSelectPopover
          acceptButtonText="Aceptar"
          acceptButtonOptions={{disabled: unconfirmedItems.every(item => !item.checked)}}
          cancelButtonText="Cancelar"
          customButtonText={addCustomButton && 'Borrar'}
          customButtonOptions={{
            design: 'outline',
            negative: false,
            color: 'accent'
          }}
          removeButtonOptions={{
            design: 'flat',
            shape: 'circular',
            size: 'medium',
            rightIcon: IconClose,
            isShown: isSelected,
            negative: false,
            onClick: () => {
              setItems(demoExample)
              setUnconfirmedItems(demoExample)
              setForceClosePopover({})
            }
          }}
          renderContentWrapper={customContentWrapper && CustomContentWrapper}
          renderSelect={renderSelect && <button>Now I'm a button!</button>}
          forceClosePopover={forceClosePopover}
          fullWidth={isFullWidth}
          hideActions={actionsAreHidden}
          iconArrowDown={IconArrowDown}
          id="molecule-select-popover-demo"
          isDisabled={isDisabled}
          isSelected={isSelected}
          onAccept={() => setItems(unconfirmedItems)}
          onCancel={() => setUnconfirmedItems(items)}
          onCustomAction={() => setUnconfirmedItems(items)}
          onClose={handleClose}
          onOpen={handleOpen}
          overlayContentRef={overlayContentRef}
          overlayType={overlayType}
          placement={placement}
          selectText={selectText}
          shape={shape}
          size={size}
          renderActions={hasCustomRenderActions ? <CustomRenderActions /> : undefined}
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
        <div className="demo-overlay-content" ref={overlayContentRef}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae labore numquam aliquam? Neque unde
            excepturi nam labore velit a accusantium alias sunt quos voluptatem vel similique, pariatur fugiat
            voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, incidunt animi a dignissimos aliquid
            voluptas quo quisquam adipisci distinctio accusamus, officiis amet mollitia error, dolore vero similique
            nihil? Corrupti, quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam possimus cumque ut sunt? Quo aperiam id
            magni placeat iusto, quidem corporis enim, iste ad sapiente distinctio dicta, voluptatem minima fuga!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sint ratione architecto iste sapiente
            repudiandae inventore fugit expedita deleniti! Debitis maiores corrupti ducimus id cum veniam distinctio eos
            fuga repellat.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Demo
