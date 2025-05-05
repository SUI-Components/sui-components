import {forwardRef, useEffect} from 'react'

import cx from 'classnames'
import PropTypes from 'prop-types'

import {Content as RadixContent} from '@radix-ui/react-dialog'

import {useModalContext} from './hooks/index.js'
import {BASE_CLASS, MODAL_ANIMATIONS, MODAL_SIZES} from './config.js'

const BASE_CLASS_CONTENT = `${BASE_CLASS}-Content`

/** Contains content to be rendered in the open dialog. **/
const Content = forwardRef(
  (
    {
      as: As = 'div',
      className,
      size = MODAL_SIZES.MEDIUM,
      animation = MODAL_ANIMATIONS.FADE,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onInteractOutside,
      forceMount,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const {forceMount: forceMountContext, setAnimation, isMounted, hasAnimation} = useModalContext()
    const forceMountValue = forceMount !== undefined ? forceMount : forceMountContext

    useEffect(() => {
      setAnimation(animation)
    }, [animation])

    if (forceMountValue === false || !isMounted) return null

    return (
      <RadixContent
        forceMount={forceMountValue || hasAnimation}
        asChild={true}
        ref={forwardedRef}
        onOpenAutoFocus={onOpenAutoFocus}
        onCloseAutoFocus={onCloseAutoFocus}
        onEscapeKeyDown={onEscapeKeyDown}
        onPointerDownOutside={onPointerDownOutside}
        onInteractOutside={onInteractOutside}
      >
        <As
          data-sui-component={Content.displayName}
          data-animation={animation}
          className={cx(BASE_CLASS_CONTENT, {[`${BASE_CLASS_CONTENT}--size-${size}`]: size}, className)}
          {...props}
        >
          <div
            className={cx(`${BASE_CLASS_CONTENT}-Container`, {[`${BASE_CLASS_CONTENT}-Container--size-${size}`]: size})}
          >
            {children}
          </div>
        </As>
      </RadixContent>
    )
  }
)

Content.displayName = 'MoleculeModal.Content'

Content.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,

  /** Additional classes */
  className: PropTypes.string,

  /** Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from Modal.Portal. **/
  forceMount: PropTypes.bool,

  /** Event hand,ler called when focus moves into the component after opening. It can be prevented by calling event.preventDefault. **/
  onOpenAutoFocus: PropTypes.func,

  /** Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault. **/
  onCloseAutoFocus: PropTypes.func,

  /** Event handler called when the escape key is down. It can be prevented by calling event.preventDefault. **/
  onEscapeKeyDown: PropTypes.func,

  /** Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault. **/
  onPointerDownOutside: PropTypes.func,

  /** Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault. **/
  onInteractOutside: PropTypes.func,

  /** Size of the modal **/
  size: PropTypes.oneOf(Object.values(MODAL_SIZES)),

  /** Animation to be used when opening the modal **/
  animation: PropTypes.oneOf(Object.values(MODAL_ANIMATIONS)),

  /** The content of the component. **/
  children: PropTypes.node
}

export default Content
