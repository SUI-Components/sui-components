import {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {
  Article,
  H2,
  H4,
  Paragraph,
  RadioButton,
  Code,
  Cell,
  Grid,
  Box,
  AntDesignIcon
} from '@s-ui/documentation-library'
import MoleculeDrawer, {
  MoleculeDrawerOverlay,
  moleculeDrawerPlacements
} from '../src'

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const DemoPlacement = ({className}) => {
  const topRef = useRef()
  const leftRef = useRef()
  const rightRef = useRef()
  const bottomRef = useRef()
  const bodyRef = useRef()

  const [isOpenTop, setIsOpenTop] = useState(false)
  const [isOpenLeft, setIsOpenLeft] = useState(false)
  const [isOpenRight, setIsOpenRight] = useState(false)
  const [isOpenBottom, setIsOpenBottom] = useState(false)

  const [isOpenOverlay, setIsOpenOverlay] = useState(false)

  // const openDrawer = setter => () => setter(true)
  const closeDrawer = setter => () => setter(false)
  const toggleDrawer = (setter, value) => () => {
    setter(!value)
  }

  return (
    <Article className={className}>
      <H2>Placement</H2>
      <Paragraph>
        A client can configure where the drawer will be placed in the screen
        (left, bottom, right, top) configuring the <Code>placement</Code> prop.
      </Paragraph>
      <Box
        style={{
          backgroundColor: '#F5F5F5',
          height: 500,
          display: 'flex',
          placeContent: 'stretch',
          padding: 0
        }}
        ref={bodyRef}
      >
        <Grid cols={5} gutter={[8, 8]} style={{width: '100%'}}>
          <Cell />
          <Cell span={3} ref={topRef}>
            <MoleculeDrawer
              isOpen={isOpenTop}
              placement={moleculeDrawerPlacements.TOP}
              onClose={closeDrawer(setIsOpenTop)}
              target={topRef}
            >
              <Box>
                <H4>Drawer Top</H4>
              </Box>
            </MoleculeDrawer>
          </Cell>
          <Cell />
          <Cell ref={leftRef}>
            <MoleculeDrawer
              isOpen={isOpenLeft}
              placement={moleculeDrawerPlacements.LEFT}
              onClose={closeDrawer(setIsOpenLeft)}
              target={leftRef}
            >
              <Box>
                <H4>Drawer Left</H4>
              </Box>
            </MoleculeDrawer>
          </Cell>
          <Cell span={3}>
            <Box
              style={{
                ...flexCenteredStyle,
                height: '100%',
                boxSizing: 'border-box'
              }}
            >
              <Grid cols={3} gutter={[8, 8]}>
                <Cell />
                <Cell style={flexCenteredStyle}>
                  <RadioButton
                    onClick={toggleDrawer(setIsOpenTop, isOpenTop)}
                    label={<AntDesignIcon icon="AiFillCaretDown" />}
                    checked={isOpenTop}
                  />
                </Cell>
                <Cell />
                <Cell style={flexCenteredStyle}>
                  <RadioButton
                    onClick={toggleDrawer(setIsOpenLeft, isOpenLeft)}
                    label={<AntDesignIcon icon="AiFillCaretRight" />}
                    checked={isOpenLeft}
                  />
                </Cell>
                <Cell style={flexCenteredStyle}>
                  <RadioButton
                    onClick={() => {
                      const value =
                        isOpenTop && isOpenLeft && isOpenRight && isOpenBottom
                      setIsOpenTop(!value)
                      setIsOpenLeft(!value)
                      setIsOpenRight(!value)
                      setIsOpenBottom(!value)
                    }}
                    label={<AntDesignIcon icon="AiTwotoneAppstore" />}
                    value
                    checked={
                      isOpenTop && isOpenLeft && isOpenRight && isOpenBottom
                    }
                  />
                </Cell>
                <Cell style={flexCenteredStyle}>
                  <RadioButton
                    onClick={toggleDrawer(setIsOpenRight, isOpenRight)}
                    label={<AntDesignIcon icon="AiFillCaretLeft" />}
                    checked={isOpenRight}
                  />
                </Cell>
                <Cell />
                <Cell style={flexCenteredStyle}>
                  <RadioButton
                    onClick={toggleDrawer(setIsOpenBottom, isOpenBottom)}
                    label={<AntDesignIcon icon="AiFillCaretUp" />}
                    checked={isOpenBottom}
                  />
                </Cell>
                <Cell />
              </Grid>
            </Box>
          </Cell>
          <Cell ref={rightRef}>
            <MoleculeDrawer
              isOpen={isOpenRight}
              placement={moleculeDrawerPlacements.RIGHT}
              onClose={closeDrawer(setIsOpenRight)}
              target={rightRef}
            >
              <Box>
                <H4>Drawer Right</H4>
              </Box>
            </MoleculeDrawer>
          </Cell>
          <Cell />
          <Cell span={3} ref={bottomRef}>
            <MoleculeDrawer
              isOpen={isOpenBottom}
              placement={moleculeDrawerPlacements.BOTTOM}
              onClose={closeDrawer(setIsOpenBottom)}
              target={bottomRef}
            >
              <Box>
                <H4>Drawer Bottom</H4>
              </Box>
            </MoleculeDrawer>
          </Cell>
          <Cell />
          <MoleculeDrawerOverlay
            target={bodyRef}
            isVisible={
              isOpenOverlay &&
              (isOpenTop || isOpenLeft || isOpenRight || isOpenBottom)
            }
            style={flexCenteredStyle}
          >
            <Paragraph style={{color: 'white'}}>
              Press 'Esc' key to close the Overlay.
            </Paragraph>
          </MoleculeDrawerOverlay>
        </Grid>
      </Box>
      <br />
      <br />
      <Paragraph>User can set the overlay:</Paragraph>
      <RadioButton
        onClick={() => setIsOpenOverlay(!isOpenOverlay)}
        label="overlay"
        checked={isOpenOverlay}
      />
      <Paragraph>–––</Paragraph>
      <Paragraph>User can also combine multiple drawers per page.</Paragraph>
    </Article>
  )
}

DemoPlacement.propTypes = {
  className: PropTypes.string
}

export default DemoPlacement
