import {forwardRef, Fragment, useEffect} from 'react'
import {isFragment} from 'react-is'

import PropTypes from 'prop-types'

import useMountedState from '@s-ui/react-hooks/lib/useMountedState'

import Injector from '@s-ui/react-primitive-injector'
import FileModel from '../../Model/FileModel.js'

import {BASE_CLASS, trigger} from './settings.js'
import DefaultFile from './DefaultFile.js'

const File = forwardRef(
  (
    {
      as: As = Fragment,
      value,
      status,
      name,
      children = <DefaultFile />,
      onUpdate,
      onCreate,
      onDelete,
      ...props
    },
    forwardedRef
  ) => {
    const getIsMounted = useMountedState()

    useEffect(() => {
      const isMounted = getIsMounted()
      isMounted
        ? trigger(onCreate)({value, status, name})
        : trigger(onUpdate)({value, status, name})
      return () => trigger(onDelete)({value, status, name})
    }, [value, status, name])

    return (
      <As
        {...(!isFragment(<As />) && {className: BASE_CLASS, ref: forwardedRef})}
      >
        <Injector status={status} name={name} value={value} {...props}>
          {children}
        </Injector>
      </As>
    )
  }
)

File.displayName = 'File'

File.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.oneOf(Object.values(FileModel.STATUS)),
  children: PropTypes.node
}

export default File
