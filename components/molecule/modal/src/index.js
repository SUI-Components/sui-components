import {MODAL_SIZES} from './config.js'

import Root from './Modal.Root.js'
import Trigger from './Modal.Trigger.js'
import Portal from './Modal.Portal.js'
import Content from './Modal.Content.js'
import Header from './Modal.Header.js'
import Title from './Modal.Title.js'
import Description from './Modal.Description.js'
import Body from './Modal.Body.js'
import Footer from './Modal.Footer.js'
import Overlay from './Modal.Overlay.js'

export const Modal = {
  Trigger,
  Portal,
  Content,
  Header,
  Title,
  Description,
  Body,
  Footer,
  Overlay
}

const MoleculeModal = Root

MoleculeModal.displayName = 'MoleculeModal.Root'

MoleculeModal.Trigger = Trigger
MoleculeModal.Portal = Portal
MoleculeModal.Content = Content
MoleculeModal.Header = Header
MoleculeModal.Title = Title
MoleculeModal.Description = Description
MoleculeModal.Body = Body
MoleculeModal.Footer = Footer
MoleculeModal.Overlay = Overlay

export default MoleculeModal

export {MODAL_SIZES as moleculeModalSizes}
