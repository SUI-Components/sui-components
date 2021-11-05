import {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  Code,
  Box,
  H2,
  H4,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  AntDesignIcon
} from '@s-ui/documentation-library'
import {MoleculeDrawer, MoleculeDrawerOverlay} from '../src'

const DemoDefault = ({className}) => {
  const ref = useRef()
  const [isOpen, setIsOpen] = useState()
  const [showOverlay, setShowOverlay] = useState(false)
  const drawerRef = useRef()
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        Drawer works as a controlled component under the <Code>isOpen</Code>{' '}
        boolean prop.
      </Paragraph>
      <Box ref={ref} style={{backgroundColor: '#f5f5f5', height: 500}}>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
          }}
        >
          <RadioButton
            onClick={() => setIsOpen(!isOpen)}
            checked={isOpen}
            label={<AntDesignIcon icon="AiOutlineMenu" />}
          />
        </div>
        <MoleculeDrawerOverlay isVisible={showOverlay && isOpen} />
        <MoleculeDrawer
          isOpen={isOpen}
          target={ref}
          onOpen={(event, {isOpen}) => {
            setIsOpen(isOpen)
          }}
          onClose={(event, {isOpen}) => {
            setIsOpen(isOpen)
          }}
          closeOnOutsideClick
          ref={drawerRef}
        >
          <H4>Drawer Content</H4>
          <RadioButton
            onClick={() => setIsOpen(!isOpen)}
            checked={isOpen}
            label="Close me!"
          />
          <Paragraph>Close me using the button or using ESC 'key'.</Paragraph>
        </MoleculeDrawer>
      </Box>
      <Paragraph>Overlay can also be used to fade the content.</Paragraph>
      <RadioButtonGroup
        value={showOverlay}
        onChange={(ev, value) => {
          setShowOverlay(!value)
        }}
      >
        <RadioButton label="hidden" checked={showOverlay === false} value />
        <RadioButton
          label="shown"
          checked={showOverlay === true}
          value={false}
        />
      </RadioButtonGroup>
      <Paragraph>User can also press 'ESC' key to close the Drawer.</Paragraph>
    </Article>
  )
}

DemoDefault.propTypes = {
  className: PropTypes.string
}

export default DemoDefault
