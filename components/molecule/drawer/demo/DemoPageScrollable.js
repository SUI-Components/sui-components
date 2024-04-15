import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Box, H2, H4, Label, Paragraph, RadioButton} from '@s-ui/documentation-library'

import {MoleculeDrawer, moleculeDrawerSizes} from '../src/index.js'

const DemoPageScroll = ({className}) => {
  const [opened, setOpened] = useState(false)
  const drawerRef = useRef()

  return (
    <Article className={className}>
      <H2>Page scroll</H2>
      <Paragraph>The drawer can avoid the page to scroll when is opened</Paragraph>
      <RadioButton label={<Label>OPEN</Label>} checked={opened} onClick={() => setOpened(!opened)} />
      <br />
      <br />
      <Box
        style={{
          backgroundColor: '#f5f5f5',
          padding: 0
        }}
      >
        <div style={{height: '25%', width: '100%'}}>
          <MoleculeDrawer
            isOpen={opened}
            onOpen={(event, {isOpen}) => {
              setOpened(isOpen)
            }}
            onClose={(event, {isOpen}) => {
              setOpened(isOpen)
            }}
            size={moleculeDrawerSizes.M}
            isPageScrollable={false}
            ref={drawerRef}
            closeOnOutsideClick
          >
            <H4>None</H4>
          </MoleculeDrawer>
        </div>
      </Box>
    </Article>
  )
}

DemoPageScroll.propTypes = {
  className: PropTypes.string
}

export default DemoPageScroll
