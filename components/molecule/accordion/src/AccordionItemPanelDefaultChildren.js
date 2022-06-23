import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {BASE_CLASS_ITEM_PANEL_CONTENT} from './settings.js'

const AccordionItemPanelDefaultChildren = ({children}) => {
  return (
    <Fragment>
      <div className={BASE_CLASS_ITEM_PANEL_CONTENT}>{children}</div>
    </Fragment>
  )
}

AccordionItemPanelDefaultChildren.displayName =
  'AccordionItemHeaderDefaultChildren'

AccordionItemPanelDefaultChildren.propTypes = {
  children: PropTypes.node
}

export default AccordionItemPanelDefaultChildren
