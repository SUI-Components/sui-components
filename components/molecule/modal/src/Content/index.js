import {useRef} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

const MoleculeModalContent = ({
  className: classNameProp,
  enableContentScroll,
  withoutIndentation,
  isOverflowVisible,
  ...others
}) => {
  const baseClassName = 'sui-MoleculeModalContent'
  const contentRef = useRef()
  const className = cx(baseClassName, {
    [`${baseClassName}--without-indentation`]: withoutIndentation,
    [`${baseClassName}--visible-overflow`]: isOverflowVisible
  })

  const preventScrollIfNeeded = ev => {
    const {clientHeight, scrollHeight} = contentRef.current
    const noScroll = scrollHeight <= clientHeight
    if (!enableContentScroll && noScroll) ev.preventDefault()
  }

  const avoidOverscroll = () => {
    const {offsetHeight, scrollTop, scrollHeight} = contentRef.current
    const currentScroll = scrollTop + offsetHeight

    if (scrollTop === 0) {
      contentRef.current.scrollTop = 1
    } else if (currentScroll >= scrollHeight) {
      contentRef.current.scrollTop = scrollTop - 1
    }
  }

  return (
    <div
      className={className}
      ref={contentRef}
      onTouchStart={avoidOverscroll}
      onTouchMove={preventScrollIfNeeded}
      {...others}
    />
  )
}

MoleculeModalContent.propTypes = {
  className: PropTypes.string,
  enableContentScroll: PropTypes.bool,
  withoutIndentation: PropTypes.bool,
  isOverflowVisible: PropTypes.bool
}

export default MoleculeModalContent
