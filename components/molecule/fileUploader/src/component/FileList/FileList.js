import {forwardRef, Fragment} from 'react'
import {isFragment} from 'react-is'

import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

import {BASE_CLASS} from './settings.js'

const FileList = forwardRef(
(
{as: As = Fragment, value, status, name, onChange, ...props},
forwardedRef
) => {
  return (
  <As
  {...(!isFragment(<As />) && {className: BASE_CLASS, ref: forwardedRef})}
  >
    <Injector
    status={status}
    name={name}
    value={value}
    onChange={onChange}
    {...props}
    >
      {children}
    </Injector>
  </As>
  )
}
)

FileList.displayName = 'FileList'

FileList.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string
}

export default FileList
