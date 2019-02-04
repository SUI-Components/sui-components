import React from 'react'
import PropTypes from 'prop-types'
import {suitClass} from '../helpers'
import cx from 'classnames'

export const HeaderRender = ({header, close}) => (
  <div
    className={cx({
      [suitClass({element: 'no-header'})]: !header,
      [suitClass({element: 'header'})]: !!header
    })}
  >
    {header}
    {close}
  </div>
)

HeaderRender.propTypes = {
  close: PropTypes.node,
  header: PropTypes.node
}
