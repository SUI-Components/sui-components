import {forwardRef} from 'react'
import {isFragment} from 'react-is'

import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'

import {AccordionProvider} from './context/index.js'
import AccordionItem from './AccordionItem.js'
import AccordionItemHeader from './AccordionItemHeader.js'
import AccordionItemHeaderIcon from './AccordionItemHeaderIcon.js'
import AccordionItemPanel from './AccordionItemPanel.js'
import {
  ANIMATION_DURATION,
  BASE_CLASS,
  BEHAVIOR,
  HEADER_ICON_POSITION,
  HEADER_LABEL_WRAPS,
  SPACING
} from './settings.js'

const MoleculeAccordion = forwardRef(
  (
    {
      as: As = 'div',
      values,
      defaultValues = [],
      onChange,
      behavior,
      children,
      animationDuration = ANIMATION_DURATION.NORMAL,
      headerIconExpanded,
      headerIconCollapsed,
      headerLabelWrap = HEADER_LABEL_WRAPS.NO_WRAP,
      headerIconPosition = HEADER_ICON_POSITION.RIGHT,
      maxHeight = 0
    },
    forwardedRef
  ) => {
    return (
      <Poly as={As} {...(!isFragment(<As />) && {ref: forwardedRef, className: BASE_CLASS})}>
        <AccordionProvider
          values={values}
          defaultValues={defaultValues}
          onChange={onChange}
          behavior={behavior}
          animationDuration={animationDuration}
          headerIconExpanded={headerIconExpanded}
          headerIconCollapsed={headerIconCollapsed}
          headerIconPosition={headerIconPosition}
          headerLabelWrap={headerLabelWrap}
          maxHeight={maxHeight}
        >
          {children}
        </AccordionProvider>
      </Poly>
    )
  }
)

MoleculeAccordion.displayName = 'MoleculeAccordion'

MoleculeAccordion.propTypes = {
  /** The elementType of the wrapper **/
  as: PropTypes.elementType,
  /** The animation duration in ms **/
  animationDuration: PropTypes.number,
  /** The change default behavior **/
  behavior: PropTypes.oneOf(Object.values(BEHAVIOR)),
  /** child element **/
  children: PropTypes.node,
  /** The space AccordionItems **/
  gap: PropTypes.oneOf(Object.values(SPACING)),
  /** the max height limit a panel can reach when its expanded **/
  maxHeight: PropTypes.number,
  /** The initial opened values **/
  defaultValues: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  /** The opened values **/
  values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  /** handler fired everytime an item changes its collapsed/expanded state **/
  onChange: PropTypes.func,
  /** The header Icon element expanded **/
  headerIconExpanded: PropTypes.node,
  /** The header Icon element collapsed **/
  headerIconCollapsed: PropTypes.node,
  /** where the icon is header positioned */
  headerIconPosition: PropTypes.oneOf(Object.values(HEADER_ICON_POSITION)),
  /** Defines the wrap behavior of the header label */
  headerLabelWrap: PropTypes.oneOf(Object.values(HEADER_LABEL_WRAPS))
}

export {
  MoleculeAccordion,
  AccordionItem as MoleculeAccordionItem,
  AccordionItemHeader as MoleculeAccordionItemHeader,
  AccordionItemHeaderIcon as MoleculeAccordionItemHeaderIcon,
  AccordionItemPanel as MoleculeAccordionItemPanel,
  BEHAVIOR as moleculeAccordionBehavior,
  ANIMATION_DURATION as moleculeAccordionAnimationDuration,
  HEADER_ICON_POSITION as moleculeAccordionHeaderIconPosition,
  HEADER_LABEL_WRAPS as moleculeAccordionHeaderLabelWraps
}

export default MoleculeAccordion
