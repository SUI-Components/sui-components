import {forwardRef, useRef} from 'react'

import PropTypes from 'prop-types'
import FileModel from '../../Model/FileModel.js'

import {CLASS_FILE_DEFAULT} from './settings.js'
import {FILE_ACTIONS} from './FileAction/index.js'
import {download} from '../../settings.js'

const DefaultFile = forwardRef(
  ({status, name, value, target, onClick, ...props}, forwardedRef) => {
    const innerRef = useRef()
    return (
      <data
        className={CLASS_FILE_DEFAULT}
        ref={forwardedRef}
        data-status={status}
        data-name={name}
        value={value}
        // onClick={onClick}
        {...props}
      >
        <span>
          <div>{name && `.${name.split('.').at(-1)}`}</div>
        </span>
        <span ref={innerRef}>{name}</span>
        <span>
          <FILE_ACTIONS.Show />
          <FILE_ACTIONS.Download
            onClick={() => download(value, {filename: name, target})}
          />
          {status !== FileModel.STATUS.READY && <FILE_ACTIONS.Recover />}
          <FILE_ACTIONS.Remove />
        </span>
        <span>{status}</span>
      </data>
    )
  }
)

DefaultFile.displayName = 'DefaultFile'
DefaultFile.propTypes = {
  status: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
}

export default DefaultFile
