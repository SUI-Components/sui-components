import {useState} from 'react'
import MoleculeDrawer from '../../../../components/molecule/drawer/src'

import {
  H1,
  H2,
  Box,
  Paragraph,
  Article,
  Button,
  ButtonGroup,
  Grid,
  Cell
} from '@s-ui/documentation-library'

const BASE_CLASS_DEMO = `DemoMoleculeDrawer`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState('m')
  const [velocity, setVelocity] = useState('fast')
  const [placement, setPlacement] = useState('left')

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
              <ButtonGroup>
                {['left', 'right', 'bottom', 'top'].map(placementOption => (
                  <Button
                    key={placementOption}
                    outline={placement === placementOption}
                    onClick={() => {
                      setPlacement(placementOption)
                    }}
                  >
                    {placementOption}
                  </Button>
                ))}
              </ButtonGroup>
            </Cell>
          </Grid>
        </Box>
        <Button
          onClick={() => {
            setIsOpen(true)
          }}
        >
          OPEN
        </Button>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Sizes</H2>
        <Paragraph>
          A client can configure 2 different sizes, medium or fullscreen.
        </Paragraph>
        <Box>
          <Grid align="center">
            <Cell>
              <ButtonGroup>
                {['m', 'fullscreen'].map(sizeOption => (
                  <Button
                    key={sizeOption}
                    outline={size === sizeOption}
                    onClick={() => {
                      setSize(sizeOption)
                    }}
                  >
                    {sizeOption}
                  </Button>
                ))}
              </ButtonGroup>
            </Cell>
          </Grid>
        </Box>
        <Button
          onClick={() => {
            setIsOpen(true)
          }}
        >
          OPEN
        </Button>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Animation Speeds</H2>
        <Paragraph>
          A client can configure 2 different animation speed, slow or fast.
        </Paragraph>
        <Box>
          <Grid align="center">
            <Cell>
              <ButtonGroup
                onChange={value => {
                  setVelocity(value)
                }}
              >
                {['slow', 'fast'].map(velocityOption => (
                  <Button
                    key={velocityOption}
                    outline={velocity === velocityOption}
                    onClick={() => {
                      setVelocity(velocityOption)
                    }}
                  >
                    {velocityOption}
                  </Button>
                ))}
              </ButtonGroup>
            </Cell>
          </Grid>
        </Box>
        <Button
          onClick={() => {
            setIsOpen(true)
          }}
        >
          OPEN
        </Button>
      </Article>
      <MoleculeDrawer
        key={placement}
        isOpen={isOpen}
        placement={placement}
        size={size}
        velocity={velocity}
        onClose={() => setIsOpen(false)}
      >
        <H2>MoleculeDrawer</H2>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Paragraph>This is the content of the drawer</Paragraph>
        <Button onClick={() => alert('button inside drawer clicked')}>
          Click me
        </Button>
      </MoleculeDrawer>
    </div>
  )
}

export default Demo
