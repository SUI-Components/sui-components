import {forwardRef} from 'react'
import useScrollInfo from 'react-element-scroll-hook'

import cx from 'classnames'
import PropTypes from 'prop-types'

import useMergeRefs from '@s-ui/react-hooks/lib/useMergeRefs'

import {BASE_CLASS} from './config.js'

const BASE_CLASS_BODY = `${BASE_CLASS}-ScrollArea`

/** The header content of the modal. **/
const ScrollArea = forwardRef(({as: As = 'div', className, isInset = true, children, ...props}, forwardedRef) => {
  const [scrollInfo, innerRef] = useScrollInfo()
  const ref = useMergeRefs(forwardedRef, innerRef)
  const hasScroll = scrollInfo?.x?.className !== 'no-scroll-x' || scrollInfo?.y?.className !== 'no-scroll-y'
  return (
    <As
      data-sui-component={ScrollArea.displayName}
      className={cx(`${BASE_CLASS_BODY}-Wrapper`, {[`${BASE_CLASS_BODY}-Wrapper-is-inset`]: isInset})}
    >
      <div
        data-scroll-x={scrollInfo?.x?.className}
        data-scroll-y={scrollInfo?.y?.className}
        tabIndex={hasScroll ? 0 : undefined}
        {...props}
        ref={ref}
        className={cx(BASE_CLASS_BODY, className)}
      >
        {children}
      </div>
    </As>
  )
})

ScrollArea.displayName = 'MoleculeModal.ScrollArea'

ScrollArea.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /** Additional classes */
  className: PropTypes.string,

  /** The component is inset, margin-less and padding-less */
  isInset: PropTypes.bool,

  /** The content of the modal body */
  children: PropTypes.node
}

export default ScrollArea
