import cx from 'classnames'
import PropTypes from 'prop-types'

import Poly from '@s-ui/react-primitive-polymorphic-element'

import AccordionItemHeaderIcon from './AccordionItemHeaderIcon.js'
import {BASE_CLASS_ITEM_HEADER, BASE_CLASS_ITEM_HEADER_ICON, HEADER_LABEL_WRAPS} from './settings.js'

const AccordionItemHeaderChildrenDefault = ({
  as = 'div',
  label,
  labelWrap,
  icon,
  value,
  values,
  disabled,
  animationDuration
}) => (
  <Poly as={as} className={cx(`${BASE_CLASS_ITEM_HEADER}ButtonContainer`)}>
    <div
      className={cx(`${BASE_CLASS_ITEM_HEADER}ButtonContent`, `${BASE_CLASS_ITEM_HEADER}ButtonContent--${labelWrap}`)}
    >
      {label}
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
  </Poly>
)

AccordionItemHeaderChildrenDefault.displayName = 'AccordionItemHeaderChildrenDefault'

AccordionItemHeaderChildrenDefault.propTypes = {
  /** The elementType of the wrapper **/
  as: PropTypes.elementType,
  /** The animation duration in ms **/
  animationDuration: PropTypes.number,
  /** element enabled or not **/
  disabled: PropTypes.bool,
  /** The header Icon element **/
  icon: PropTypes.node,
  /** appropriate for the information architecture of the page **/
  label: PropTypes.string.isRequired,
  /** Defines the wrap behavior of the header label */
  labelWrap: PropTypes.oneOf(Object.values(HEADER_LABEL_WRAPS)),
  /** the unique value of the element **/
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** The opened values **/
  values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
}

export default AccordionItemHeaderChildrenDefault
