/* eslint react/prop-types: 0 */
import React from 'react'

// DEMO components
import ScrollModal from './ScrollModal'
import NoScrollModal from './NoScrollModal'
import NoHeaderModal from './NoHeaderModal'
import WithoutIndentationModal from './WithoutIndentationModal'
import NoFullScreenModal from './NoFullScreenModal'
import NoHeaderNoCloseButtonModal from './NoHeaderNoCloseButtonModal'
import MobileFitContentModal from './MobileFitContentModal'
import ScrollableChildrenModal from './ScrollableChildrenModal'
import WithUrlStateModal from './WithUrlStateModal'

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
      <h1>Modal</h1>
      <h2>Scroll Modal</h2>
      <div style={fieldStyle}>
        <ScrollModal />
      </div>
      <h2>No Scroll Modal</h2>
      <div style={fieldStyle}>
        <NoScrollModal />
      </div>
      <h2>No header Modal</h2>
      <div style={fieldStyle}>
        <NoHeaderModal />
      </div>
      <h2>Without indentation</h2>
      <div style={fieldStyle}>
        <WithoutIndentationModal />
      </div>
      <h2>Modal with max-width</h2>
      <div style={fieldStyle}>
        <NoFullScreenModal />
      </div>
      <h2>No header and no close</h2>
      <div style={fieldStyle}>
        <p>
          In order to add a button in the content to close the modal you need to
          provide a React component with a property named <code>'onClose'</code>
        </p>
        <NoHeaderNoCloseButtonModal />
      </div>
      <h2>Mobile fit content Modal</h2>
      <div style={fieldStyle}>
        <MobileFitContentModal />
      </div>
      <h2>Modal with scrollable children</h2>
      <div style={fieldStyle}>
        <ScrollableChildrenModal />
      </div>
      <h2>Modal with url state</h2>
      <div style={fieldStyle}>
        <p>
          Given a defined hash it will look for url changes in order to open /
          close himself
        </p>
        <WithUrlStateModal />
      </div>
    </div>
  </div>
)

export default Demo
