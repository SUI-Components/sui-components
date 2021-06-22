import {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  Box,
  H2,
  Paragraph,
  RadioButton,
  Label,
  H4
} from '@s-ui/documentation-library'
import {
  moleculeDrawerAnimationDuration,
  moleculeDrawerSizes,
  MoleculeDrawer
} from '../src'

const DemoAnimationDuration = ({className}) => {
  const noneRef = useRef()
  const fastRef = useRef()
  const normalRef = useRef()
  const slowRef = useRef()

  const [opened, setOpened] = useState(false)

  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        A client can configure{' '}
        {Object.values(moleculeDrawerAnimationDuration).length} different sizes:
      </Paragraph>
      <RadioButton
        value={moleculeDrawerSizes.AUTO}
        label={<Label>OPEN</Label>}
        checked={opened}
        onClick={() => setOpened(!opened)}
      />
      <br />
      <br />
      <Box
        style={{
          backgroundColor: '#f5f5f5',
          height: 500,
          padding: 0
        }}
      >
        <div ref={noneRef} style={{height: '25%', width: '100%'}}>
          <div style={{textAlign: 'right', padding: 8}}>
            <H4>None Animation Duration</H4>
            <Paragraph>0 ms</Paragraph>
          </div>
          <MoleculeDrawer
            isOpen={opened}
            target={noneRef}
            onOpen={(event, {isOpen}) => {
              setOpened(isOpen)
            }}
            onClose={(event, {isOpen}) => {
              setOpened(isOpen)
            }}
            size={moleculeDrawerSizes.FILL}
            animationDuration={moleculeDrawerAnimationDuration.NONE}
          >
            <H4>None</H4>
          </MoleculeDrawer>
        </div>
        <div ref={fastRef} style={{height: '25%', width: '100%'}}>
          <div style={{textAlign: 'right', padding: 8}}>
            <H4>Fast Animation Duration</H4>
            <Paragraph>100 ms</Paragraph>
          </div>
          <MoleculeDrawer
            isOpen={opened}
            target={fastRef}
            onOpen={(event, {isOpen}) => {
              setOpened(isOpen)
            }}
            onClose={(event, {isOpen}) => {
              setOpened(isOpen)
            }}
            size={moleculeDrawerSizes.FILL}
            animationDuration={moleculeDrawerAnimationDuration.FAST}
          >
            <H4>Fast</H4>
          </MoleculeDrawer>
        </div>
        <div ref={normalRef} style={{height: '25%', width: '100%'}}>
          <div style={{textAlign: 'right', padding: 8}}>
            <H4>Normal Animation Duration</H4>
            <Paragraph>300 ms</Paragraph>
          </div>
          <MoleculeDrawer
            isOpen={opened}
            target={normalRef}
            onOpen={(event, {isOpen}) => {
              setOpened(isOpen)
            }}
            onClose={(event, {isOpen}) => {
              setOpened(isOpen)
            }}
            size={moleculeDrawerSizes.FILL}
            animationDuration={moleculeDrawerAnimationDuration.NORMAL}
          >
            <H4>Normal</H4>
          </MoleculeDrawer>
        </div>
        <div ref={slowRef} style={{height: '25%', width: '100%'}}>
          <div style={{textAlign: 'right', padding: 8}}>
            <H4>Slow Animation Duration</H4>
            <Paragraph>500 ms</Paragraph>
          </div>
          <MoleculeDrawer
            isOpen={opened}
            target={slowRef}
            onOpen={(event, {isOpen}) => {
              setOpened(isOpen)
            }}
            onClose={(event, {isOpen}) => {
              setOpened(isOpen)
            }}
            size={moleculeDrawerSizes.FILL}
            animationDuration={moleculeDrawerAnimationDuration.SLOW}
          >
            <H4>Slow</H4>
          </MoleculeDrawer>
        </div>
      </Box>
    </Article>
  )
}

DemoAnimationDuration.propTypes = {
  className: PropTypes.string
}

export default DemoAnimationDuration
