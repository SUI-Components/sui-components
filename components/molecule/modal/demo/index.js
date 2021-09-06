/* eslint react/prop-types: 0 */
import {H1, Paragraph} from '@s-ui/documentation-library'
import ArticleDefault from './ArticleDefault'
import ArticleSize from './ArticleSize'
import ArticleCloseIcon from './ArticleCloseIcon'

// import ScrollModal from './ScrollModal'
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

const BASE_CLASS_DEMO = `DemoMoleculeModal`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const fieldStyle = {
  border: '1px solid rgb(204, 204, 204)',
  background: 'rgb(255, 255, 255)',
  marginTop: '10px',
  padding: '10px',
  maxWidth: '600px'
}

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <H1>Modal</H1>
      <Paragraph>
        Modal windows focus users' attention to inform them about a specific
        interaction. They may require users to make a decision or warn them when
        an error may have very significant consequences.
      </Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleSize className={CLASS_SECTION} />
      <br />
      <ArticleCloseIcon className={CLASS_SECTION} />
      <br />
      <H1 id="MoleculeModalWithAnimation">MoleculeModalWithAnimation</H1>
      <H1 id="MoleculeModalWithoutAnimation">MoleculeModalWithoutAnimation</H1>
      <H1 id="MoleculeModalWithURLState">MoleculeModalWithURLState</H1>
      {/*<h2>Scroll Modal</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <ScrollModal />*/}
      {/*</div>*/}
      {/*<h2>WithoutAnimationModal</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <WithoutAnimationModal />*/}
      {/*</div>*/}
      {/*<h2>No Scroll Modal</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <NoScrollModal />*/}
      {/*</div>*/}
      {/*<h2>No header Modal</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <NoHeaderModal />*/}
      {/*</div>*/}
      {/*<h2>Without indentation</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <WithoutIndentationModal />*/}
      {/*</div>*/}
      {/*<h2>Modal with max-width</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <NoFullScreenModal />*/}
      {/*</div>*/}
      {/*<h2>No header and no close</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <p>*/}
      {/*    In order to add a button in the content to close the modal you need to*/}
      {/*    provide a React component with a property named <code>'onClose'</code>*/}
      {/*  </p>*/}
      {/*  <NoHeaderNoCloseButtonModal />*/}
      {/*</div>*/}
      {/*<h2>Mobile fit content Modal</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <MobileFitContentModal />*/}
      {/*</div>*/}
      {/*<h2>Modal with scrollable children</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <ScrollableChildrenModal />*/}
      {/*</div>*/}
      {/*<h2>Modal with url state</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <p>*/}
      {/*    Given a defined hash it will look for url changes in order to open /*/}
      {/*    close himself*/}
      {/*  </p>*/}
      {/*  <WithUrlStateModal />*/}
      {/*</div>*/}
      {/*<h2>Contentless Modal</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <ContentlessModal />*/}
      {/*</div>*/}
      {/*<h2>Size Modal</h2>*/}
      {/*<div style={fieldStyle}>*/}
      {/*  <SizeModal />*/}
      {/*</div>*/}
    </div>
  </div>
)

export default Demo
