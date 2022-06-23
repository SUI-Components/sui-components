import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Bold,
  Box,
  Cell,
  Code,
  Grid,
  H2,
  H4,
  Label,
  ListItem,
  Paragraph,
  RadioButton,
  UnorderedList
} from '@s-ui/documentation-library'

import {MoleculeDrawer, moleculeDrawerSizes} from '../src/index.js'

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const DemoSize = ({className}) => {
  const autoRef = useRef()
  const mRef = useRef()
  const fillRef = useRef()

  const [autoState, setAutoState] = useState(true)
  const [mState, setMState] = useState(true)
  const [fillState, setFillState] = useState(true)

  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        A client can configure {Object.values(moleculeDrawerSizes).length}{' '}
        different sizes:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Bold>Auto</Bold>:(default) sets the width or height dependent to its
          inner content.
        </ListItem>
        <ListItem>
          <Bold>M</Bold>: sets the width or height configurable under the{' '}
          <Code>$w-molecule-drawer</Code> SCSS token.
        </ListItem>
        <ListItem>
          <Bold>FILL</Bold>: sets a full-viewport drawer.
        </ListItem>
      </UnorderedList>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell style={flexCenteredStyle}>
          <RadioButton
            value={moleculeDrawerSizes.AUTO}
            label={<Label>auto</Label>}
            checked={autoState}
            onClick={() => {
              setAutoState(!autoState)
            }}
          />
        </Cell>
        <Cell style={flexCenteredStyle}>
          <RadioButton
            value={moleculeDrawerSizes.M}
            label={<Label>m</Label>}
            checked={mState}
            onClick={() => {
              setMState(!mState)
            }}
          />
        </Cell>
        <Cell style={flexCenteredStyle}>
          <RadioButton
            value={moleculeDrawerSizes.FILL}
            label={<Label>fill</Label>}
            checked={fillState}
            onClick={() => {
              setFillState(!fillState)
            }}
          />
        </Cell>
      </Grid>
      <br />
      <Box
        style={{
          backgroundColor: '#f5f5f5',
          height: 500,
          padding: 0
        }}
      >
        <div ref={autoRef} style={{height: '33.3%', width: '100%'}}>
          <div style={{textAlign: 'right', padding: 8}}>
            <H4>Auto Content</H4>
            <Paragraph>
              Sets the width or height dependent to its inner content. (default)
            </Paragraph>
          </div>
          <MoleculeDrawer
            isOpen={autoState}
            target={autoRef}
            onOpen={(event, {isOpen}) => {
              setAutoState(isOpen)
            }}
            onClose={(event, {isOpen}) => {
              setAutoState(isOpen)
            }}
            size={moleculeDrawerSizes.AUTO}
          >
            <H4>auto</H4>
          </MoleculeDrawer>
        </div>
        <div ref={mRef} style={{height: '33.3%', width: '100%'}}>
          <div style={{textAlign: 'right', padding: 8}}>
            <H4>M Content</H4>
            <Paragraph>
              sets the width or height configurable under the{' '}
              <Code>$w-molecule-drawer</Code> SCSS token
            </Paragraph>
          </div>
          <MoleculeDrawer
            isOpen={mState}
            target={mRef}
            onOpen={(event, {isOpen}) => {
              setMState(isOpen)
            }}
            onClose={(event, {isOpen}) => {
              setMState(isOpen)
            }}
            size={moleculeDrawerSizes.M}
          >
            <H4>M</H4>
          </MoleculeDrawer>
        </div>
        <div ref={fillRef} style={{height: '33.3%', width: '100%'}}>
          <div style={{textAlign: 'right', padding: 8}}>
            <H4>Fill Content</H4>
            <Paragraph>sets a full-viewport drawer</Paragraph>
          </div>
          <MoleculeDrawer
            isOpen={fillState}
            target={fillRef}
            onOpen={(event, {isOpen}) => {
              setFillState(isOpen)
            }}
            onClose={(event, {isOpen}) => {
              setFillState(isOpen)
            }}
            size={moleculeDrawerSizes.FILL}
          >
            <H4>Fill</H4>
          </MoleculeDrawer>
        </div>
      </Box>
    </Article>
  )
}

DemoSize.propTypes = {
  className: PropTypes.string
}

export default DemoSize
