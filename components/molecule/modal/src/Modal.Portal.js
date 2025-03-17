import PropTypes from 'prop-types'
import {Portal as RadixPortal} from '@radix-ui/react-dialog'

/** When used, portals your overlay and content parts into the body. **/
const Portal = ({forceMount, container, ...props}) => {
  return <RadixPortal forceMount={forceMount} container={container} {...props} />
}

Portal.displayName = 'MoleculeModal.Portal'

Portal.propTypes = {
  /** Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by Dialog.Overlay and Dialog.Content. **/
  forceMount: PropTypes.bool,
  /** Specify a container element to portal the content into. **/
  container: PropTypes.any
}

export default Portal
