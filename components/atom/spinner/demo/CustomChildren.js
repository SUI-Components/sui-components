/* eslint-disable react/prop-types */
import cx from 'classnames'

import {atomSpinnerOverlayTypes, atomSpinnerTypes} from '../src/index.js'

const CustomChildren = ({children, loader, overlayType, type}) => {
  const textClassName = cx('demo-AtomSpinner-children', {
    'demo-AtomSpinner-children--dark':
      overlayType === atomSpinnerOverlayTypes.DARK,
    'demo-AtomSpinner-children--fullPage': type === atomSpinnerTypes.FULL
  })

  return (
    <>
      <div className="demo-AtomSpinner-loaderContainer">{loader}</div>
      <div className={textClassName}>{children}</div>
    </>
  )
}

export default CustomChildren
