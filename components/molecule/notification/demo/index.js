import {useRef} from 'react'
import MoleculeNotification, {
  TYPES,
  VARIATIONS,
  BRDS_SIZE
} from 'components/molecule/notification/src'
import PositionNotification from './PositionNotification'
import {getButtons, logClose, TEXT, Title} from './utils'

const Demo = () => {
  const targetRef = useRef()

  return (
    <div>
      <h1>Notification</h1>
      <h2>Types and variations</h2>
      {Object.values(TYPES).map(type =>
        Object.values(VARIATIONS).map(variation => (
          <div key={type + variation}>
            <Title>
              Type: {type} - Variation: {variation}
            </Title>
            <MoleculeNotification
              autoClose="manual"
              buttons={getButtons(variation)}
              onClose={logClose}
              type={type}
              variation={variation}
            >
              {TEXT}
            </MoleculeNotification>
          </div>
        ))
      )}
      <br />

      <h2>With rounded corners</h2>
      <MoleculeNotification
        autoClose="manual"
        type="info"
        onClose={logClose}
        roundedCorners={BRDS_SIZE.medium}
      >
        <span>
          Lorem ipsum dolor sit amet,{' '}
          <a href="#fistrum">consectetur adipiscing</a> elit. Duis vitae orci
          consectetur ligula vel.
        </span>
      </MoleculeNotification>
      <br />

      <h2>With children content</h2>
      <MoleculeNotification autoClose="manual" type="info" onClose={logClose}>
        <span>
          Lorem ipsum dolor sit amet,{' '}
          <a href="#fistrum">consectetur adipiscing</a> elit. Duis vitae orci
          consectetur ligula vel.
        </span>
      </MoleculeNotification>
      <br />
      <h2>AutoClose</h2>
      <Title>Short</Title>
      <MoleculeNotification buttons={getButtons()} onClose={logClose}>
        {TEXT}
      </MoleculeNotification>
      <Title>Medium</Title>
      <MoleculeNotification
        autoClose="medium"
        buttons={getButtons()}
        onClose={logClose}
      >
        {TEXT}
      </MoleculeNotification>
      <Title>Long</Title>
      <MoleculeNotification
        autoClose="long"
        buttons={getButtons()}
        onClose={logClose}
      >
        {TEXT}
      </MoleculeNotification>
      <br />
      <h2>Positions</h2>
      <table
        width="auto"
        className="sui-StudioTable"
        cellPadding="8"
        cellSpacing="0"
        style={{padding: 15}}
      >
        <tbody>
          <tr>
            <td>
              <Title>Top</Title>
            </td>
            <td>
              <PositionNotification position="top" />
            </td>
          </tr>
          <tr>
            <td>
              <Title>Bottom</Title>
            </td>
            <td>
              <PositionNotification position="bottom" />
            </td>
          </tr>
          <tr>
            <td style={{verticalAlign: 'top', paddingTop: '20px'}}>
              <Title>Relative</Title>
            </td>
            <td>
              <PositionNotification position="relative" />
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Override container with targetRef</h2>
      <div ref={targetRef} />
      <MoleculeNotification
        autoClose="manual"
        targetRef={targetRef}
        overrideContainer
      >
        {TEXT}
      </MoleculeNotification>
      <h2>Override container</h2>
      <MoleculeNotification autoClose="manual" overrideContainer>
        {TEXT}
      </MoleculeNotification>
    </div>
  )
}

export default Demo
