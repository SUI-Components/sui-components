/* eslint react/prop-types: 0 */
import React from 'react'

// DEMO components
import ScrollModal from './ScrollModal'
import NoScrollModal from './NoScrollModal'
import NoHeaderModal from './NoHeaderModal'
import NoFullScreenModal from './NoFullScreenModal'
import NoHeaderNoCloseButtonModal from './NoHeaderNoCloseButtonModal'
import MobileFitContentModal from './MobileFitContentModal'
import ScrollableChildrenModal from './ScrollableChildrenModal'

const fieldStyle = {
  border: '1px solid rgb(204, 204, 204)',
  background: 'rgb(255, 255, 255)',
  marginTop: '10px',
  padding: '10px',
  maxWidth: '600px'
}
const containerStyle = {
  padding: '20px'
}

const Demo = () => (
  <>
    <div style={containerStyle}>
      <h1>
        <code>MoleculeModal</code>
      </h1>
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
    </div>
  </>
)

export default Demo
