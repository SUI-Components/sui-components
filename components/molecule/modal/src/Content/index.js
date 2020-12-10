import {useRef} from 'react'

const MoleculeModalContent = props => {
  const baseClassName = 'sui-MoleculeModalContent'
  const contentRef = useRef()

  const preventScrollIfNeeded = ev => {
    const {clientHeight, scrollHeight} = contentRef.current
    const noScroll = scrollHeight <= clientHeight
    // if (!enableContentScroll && noScroll) ev.preventDefault()
    if (noScroll) ev.preventDefault()
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
      className={baseClassName}
      ref={contentRef}
      onTouchStart={avoidOverscroll}
      onTouchMove={preventScrollIfNeeded}
      {...props}
    />
  )
}

export default MoleculeModalContent
