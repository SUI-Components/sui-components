import {MODAL_SIZES} from './config.js'

import Root from './Modal.Root.js'
import OpenTrigger from './Modal.OpenTrigger.js'
import CloseTrigger from './Modal.CloseTrigger.js'
import Portal from './Modal.Portal.js'
import Content from './Modal.Content.js'
import Header from './Modal.Header.js'
import Title from './Modal.Title.js'
import Description from './Modal.Description.js'
import Body from './Modal.Body.js'
import Footer from './Modal.Footer.js'
import Overlay from './Modal.Overlay.js'
import CloseIconButton from './Modal.CloseIconButton.js'

export {
  Root as Modal,
  Root,
  OpenTrigger,
  CloseTrigger,
  Portal,
  Content,
  Header,
  Title,
  Description,
  Body,
  Footer,
  Overlay,
  CloseIconButton
}

const MoleculeModal = Root

MoleculeModal.displayName = 'MoleculeModal.Root'

MoleculeModal.OpenTrigger = OpenTrigger
MoleculeModal.CloseTrigger = CloseTrigger
MoleculeModal.Portal = Portal
MoleculeModal.Content = Content
MoleculeModal.Header = Header
MoleculeModal.Title = Title
MoleculeModal.Description = Description
MoleculeModal.Body = Body
MoleculeModal.Footer = Footer
MoleculeModal.Overlay = Overlay
MoleculeModal.CloseIconButton = CloseIconButton

export default MoleculeModal

export {MODAL_SIZES as moleculeModalSizes}
