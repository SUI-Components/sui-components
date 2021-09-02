/* eslint react/prop-types: 0 */
import {H1, H2, Paragraph} from '@s-ui/documentation-library'
import ScrollModal from './ScrollModal'
// import ContentlessModal from './ContentlessModal'
// import SizeModal from './SizeModal'
// import NoScrollModal from './NoScrollModal'
// import NoHeaderModal from './NoHeaderModal'
// import WithoutIndentationModal from './WithoutIndentationModal'
// import NoFullScreenModal from './NoFullScreenModal'
// import NoHeaderNoCloseButtonModal from './NoHeaderNoCloseButtonModal'
// import MobileFitContentModal from './MobileFitContentModal'
// import ScrollableChildrenModal from './ScrollableChildrenModal'
// import WithUrlStateModal from './WithUrlStateModal'
// import WithoutAnimationModal from './WithoutAnimationModal'

const fieldStyle = {
  border: '1px solid rgb(204, 204, 204)',
  background: 'rgb(255, 255, 255)',
  marginTop: '10px',
  padding: '10px',
  maxWidth: '600px'
}

const Demo = () => (
  <div>
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <H1>Modal</H1>
      <Paragraph>dfghjkl</Paragraph>
      <H2>Scroll Modal</H2>
      <div style={fieldStyle}>
        <ScrollModal />
      </div>
    </div>
  </div>
)

export default Demo
