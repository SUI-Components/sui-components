import {forwardRef, Fragment} from 'react'
import {isFragment} from 'react-is'

import PropTypes from 'prop-types'

import {BASE_CLASS} from './settings.js'

const File = forwardRef(
  ({as: As = Fragment, value, status, name, children, onChange, ...props}, forwardedRef) => {
    return (
      <As {...(!isFragment(<As />) && {className: BASE_CLASS})}>
        <data data-status={status} data-name={name} value={value} {...props} >{name}</data>
      </As>
    )
  }
)

File.displayName = 'File'

File.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string
}

export default File
