import {
  H1,
  Paragraph,
  UnorderedList,
  ListItem,
  Code,
  Anchor,
  Label,
  Button
} from '@s-ui/documentation-library'
import {useState, useRef} from 'react'
import {
  MoleculeDrawer,
  moleculeDrawerPlacements,
  moleculeDrawerSizes
} from '../src'
import DemoDefault from './DemoDefault'
import DemoPlacement from './DemoPlacement'
import DemoSize from './DemoSize'
import DemoAnimationDuration from './DemoAnimationDuration'

import '../src/index.scss'

const BASE_CLASS_DEMO = `DemoMoleculeDrawer`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  const [isOpen, setIsOpen] = useState()
  const drawerRef = useRef()
  return (
    <>
      <MoleculeDrawer
        placement={moleculeDrawerPlacements.BOTTOM}
        size={moleculeDrawerSizes.M}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnOutsideClick
        ref={drawerRef}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          animi. Odit magni iure eum nam dolorem. Provident dignissimos
          assumenda, facilis, aperiam fuga amet rem officia iste doloremque,
          nisi voluptate odio.
        </Paragraph>
      </MoleculeDrawer>
      <div className="sui-StudioPreview">
        <H1>MoleculeDrawer</H1>
        <Button onClick={() => setIsOpen(true)}>OPEN</Button>
        <Paragraph>
          Navigation drawers provide access to destinations in your app. It uses
          the compound component technique providing the{' '}
          <Code>MoleculeDrawer</Code> and the <Code>MoleculeDrawerOverlay</Code>{' '}
          under the{' '}
          <Anchor href="https://www.npmjs.com/package/@s-ui/react-molecule-drawer">
            @s-ui/react-molecule-drawer
          </Anchor>{' '}
          npm package.
        </Paragraph>
        <UnorderedList>
          <ListItem>
            <Label>MoleculeDrawer</Label>: panel that is typically overlaid on
            top of a page and slides in from the side. It contains a set of
            information or actions. Since the user can interact with the Drawer
            without leaving the current page, tasks can be achieved more
            efficiently within the same context. (also called Sidebar)
          </ListItem>
          <ListItem>
            <Label>MoleculeDrawerOverlay</Label> Element provided to cover
            (fade) the sidebar content to the background.
          </ListItem>
        </UnorderedList>
        <DemoDefault className={CLASS_SECTION} />
        <br />
        <DemoPlacement className={CLASS_SECTION} />
        <br />
        <DemoSize className={CLASS_SECTION} />
        <br />
        <DemoAnimationDuration className={CLASS_SECTION} />
      </div>
    </>
  )
}

export default Demo
