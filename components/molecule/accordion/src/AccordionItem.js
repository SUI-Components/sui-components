import {forwardRef, Fragment} from 'react'
import {isFragment} from 'react-is'

import cx from 'classnames'
import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'

import {
  MoleculeAccordionItemHeader as AccordionItemHeader,
  MoleculeAccordionItemPanel as AccordionItemPanel
} from './index.js'
import {BASE_CLASS_ITEM, HEADER_ICON_POSITION, HEADER_LABEL_WRAPS} from './settings.js'

const AccordionItem = forwardRef(
  (
    {
      as: As = Fragment,
      headerAs,
      headerLevel,
      panelAs,
      id,
      header,
      children,
      headerIcon,
      headerIconPosition,
      headerLabelWrap,
      disabled,
      isExpanded,
      value,
      label,
      onClick,
      content,
      maxHeight,
      ...props
    },
    forwardedRef
  ) => {
    const headerId = `header-${id === undefined ? value : id}`
    const panelId = `panel-${id === undefined ? value : id}`
    return (
      <Poly
        as={As}
        {...(!isFragment(<As />) && {
          ref: forwardedRef,
          className: cx(BASE_CLASS_ITEM)
        })}
      >
        <AccordionItemHeader
          as={headerAs}
          level={headerLevel}
          disabled={disabled}
          id={headerId}
          panelId={panelId}
          value={value}
          icon={headerIcon}
          iconPosition={headerIconPosition}
          label={label}
          labelWrap={headerLabelWrap}
          onClick={onClick}
        >
          {header}
        </AccordionItemHeader>
        <AccordionItemPanel
          as={panelAs}
          id={panelId}
          headerId={headerId}
          isExpanded={isExpanded}
          disabled={disabled}
          value={value}
          content={content}
          maxHeight={maxHeight}
          {...props}
        >
          {children}
        </AccordionItemPanel>
      </Poly>
    )
  }
)

AccordionItem.displayName = 'AccordionItem'

AccordionItem.propTypes = {
  /** The elementType of the wrapper **/
  as: PropTypes.elementType,
  /** The elementType of the button header wrapper **/
  headerAs: PropTypes.elementType,
  /** the heading level **/
  headerLevel: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', 1, 2, 3, 4, 5, 6]),
  /** The elementType of the panel **/
  panelAs: PropTypes.elementType,
  /** child element **/
  children: PropTypes.node,
  /** panel inner content **/
  content: PropTypes.node,
  /** element enabled or not **/
  disabled: PropTypes.bool,
  /** unique identifier **/
  id: PropTypes.string,
  /** header button inner content */
  header: PropTypes.node,
  /** The header Icon element **/
  headerIcon: PropTypes.node,
  /** where the icon is header positioned */
  headerIconPosition: PropTypes.oneOf(Object.values(HEADER_ICON_POSITION)),
  /** Defines the wrap behavior of the header label */
  headerLabelWrap: PropTypes.oneOf(Object.values(HEADER_LABEL_WRAPS)),
  /** controlled expanded accordion item behavior */
  isExpanded: PropTypes.bool,
  /** a required string indicating the content **/
  label: PropTypes.string.isRequired,
  /** the max height limit a panel can reach when its expanded **/
  maxHeight: PropTypes.number,
  /** the unique value of the element **/
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** header clicking handler **/
  onClick: PropTypes.func
}

export default AccordionItem
