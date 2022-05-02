import {Fragment} from 'react'
import PropTypes from 'prop-types'
import {
  BASE_CLASS_ITEM_PANEL
} from './settings.js'

const AccordionItemPanelDefaultChildren = ({
  label,
  icon,
  isExpanded,
  values,
  value,
  disabled
}) => {
  return (
    <Fragment>
      <div className={`${BASE_CLASS_ITEM_HEADER_ICON}Wrapper`}>{icon}</div>
    </Fragment>
  )
}

AccordionItemHeaderDefaultChildren.displayName =
  'AccordionItemHeaderDefaultChildren'

AccordionItemHeaderDefaultChildren.propTypes = {}

export default AccordionItemHeaderDefaultChildren
