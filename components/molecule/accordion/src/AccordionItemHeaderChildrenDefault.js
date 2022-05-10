import PropTypes from 'prop-types'

import AccordionItemHeaderIcon from './AccordionItemHeaderIcon.js'
import {
  BASE_CLASS_ITEM_HEADER,
  BASE_CLASS_ITEM_HEADER_ICON
} from './settings.js'

const AccordionItemHeaderChildrenDefault = ({
  children,
  label,
  icon,
  value,
  values,
  disabled,
  animationDuration
}) => (
  <>
    <div className={`${BASE_CLASS_ITEM_HEADER}ButtonContent`}>
      {children === undefined ? label : children}
    </div>
    <div className={`${BASE_CLASS_ITEM_HEADER_ICON}Wrapper`}>
      <AccordionItemHeaderIcon
        isExpanded={values.includes(value)}
        animationDuration={animationDuration}
        disabled={disabled}
      >
        {icon}
      </AccordionItemHeaderIcon>
    </div>
  </>
)

AccordionItemHeaderChildrenDefault.displayName =
  'AccordionItemHeaderChildrenDefault'

AccordionItemHeaderChildrenDefault.propTypes = {
  /** The animation duration in ms **/
  animationDuration: PropTypes.number,
  /** child element **/
  children: PropTypes.node,
  /** element enabled or not **/
  disabled: PropTypes.bool,
  /** The header Icon element **/
  icon: PropTypes.node,
  /** appropriate for the information architecture of the page **/
  label: PropTypes.string.isRequired,
  /** the unique value of the element **/
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** The opened values **/
  values: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
}

export default AccordionItemHeaderChildrenDefault
