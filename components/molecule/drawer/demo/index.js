import {useState} from 'react'
import MoleculeDrawer, {
  MoleculeDrawerOverlay,
  moleculeDrawerSizes,
  moleculeDrawerAnimationDuration
} from '../../../../components/molecule/drawer/src'
import '../src/index.scss'

import {
  H1,
  H2,
  Box,
  Paragraph,
  Article,
  Button,
  RadioButton,
  RadioButtonGroup,
  Grid,
  Cell,
  UnorderedList,
  ListItem,
  Bold,
  Code
} from '@s-ui/documentation-library'
import {moleculeDrawerPlacements} from '../lib'

const BASE_CLASS_DEMO = `DemoMoleculeDrawer`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState(moleculeDrawerSizes.AUTO)
  const [animationDuration, setAnimationDuration] = useState(
    moleculeDrawerAnimationDuration.FAST
  )
  const [placement, setPlacement] = useState(moleculeDrawerPlacements.LEFT)

  const openDrawer = () => setIsOpen(true)
  const closeDrawer = () => setIsOpen(false)

  return (
    <div className="sui-StudioPreview">
      <H1>MoleculeDrawer</H1>
      <Paragraph>
        Drawers can toggle open or closed. Closed by default, the drawer opens
        above all other content. The Drawer can be cancelled by clicking the
        overlay or pressing the Esc key.
      </Paragraph>
      <Article className={CLASS_SECTION}>
        <H2>Placement</H2>
        <Paragraph>
          A client can configure where the drawer will be placed in the screen
          (left, bottom, right, top).
        </Paragraph>
        <Box>
          <Grid align="center">
            <Cell>
              <RadioButtonGroup
                onChange={(event, value) => setPlacement(value)}
                value={placement}
              >
                {['left', 'right', 'bottom', 'top'].map(placementOption => (
                  <RadioButton
                    key={placementOption}
                    value={placementOption}
                    label={placementOption}
                  />
                ))}
              </RadioButtonGroup>
            </Cell>
          </Grid>
        </Box>
        <Button onClick={openDrawer}>OPEN</Button>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Sizes</H2>
        <Paragraph>
          A client can configure {Object.values(moleculeDrawerSizes).length}{' '}
          different sizes:
        </Paragraph>
        <UnorderedList>
          <ListItem>
            <Bold>Auto</Bold>:(default) sets the width or height dependent to
            its inner content.
          </ListItem>
          <ListItem>
            <Bold>M</Bold>: sets the width or height configurable under the{' '}
            <Code>$w-molecule-drawer</Code> SCSS token.
          </ListItem>
          <ListItem>
            <Bold>FILL</Bold>: sets a full-viewport drawer.
          </ListItem>
        </UnorderedList>
        <Box>
          <Grid align="center">
            <Cell>
              <RadioButtonGroup
                onChange={(event, value) => setSize(value)}
                value={size}
              >
                {Object.values(moleculeDrawerSizes).map(sizeOption => (
                  <RadioButton
                    key={sizeOption}
                    value={sizeOption}
                    label={sizeOption}
                  />
                ))}
              </RadioButtonGroup>
            </Cell>
          </Grid>
        </Box>
        <Button onClick={openDrawer}>OPEN</Button>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Animation Speeds</H2>
        <Paragraph>
          A client can configure 4 different animation speed: none,fast, normal
          or slow.
        </Paragraph>
        <Box>
          <Grid align="center">
            <Cell>
              <RadioButtonGroup
                onChange={(event, value) => setAnimationDuration(value)}
                value={animationDuration}
              >
                {Object.values(moleculeDrawerAnimationDuration).map(
                  animationDurationOption => (
                    <RadioButton
                      key={animationDurationOption}
                      value={animationDurationOption}
                      label={animationDurationOption}
                    />
                  )
                )}
              </RadioButtonGroup>
            </Cell>
          </Grid>
        </Box>
        <Button onClick={openDrawer}>OPEN</Button>
      </Article>
      {isOpen && size !== 'fullscreen' && (
        <MoleculeDrawerOverlay onClick={closeDrawer} />
      )}
      <MoleculeDrawer
        key={placement}
        isOpen={isOpen}
        placement={placement}
        size={size}
        animationDuration={animationDuration}
        onClose={closeDrawer}
      >
        <Box outline>
          <H2>Drawer</H2>
          <Button onClick={closeDrawer}>Close</Button>
          <Paragraph>
            This is the
            <br />
            content of the
            <br />
            drawer
          </Paragraph>

          <Button onClick={() => alert('button inside drawer clicked')}>
            Click me
          </Button>
        </Box>
      </MoleculeDrawer>
    </div>
  )
}

export default Demo
