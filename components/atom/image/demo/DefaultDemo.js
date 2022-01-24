import {
  Article,
  Bold,
  Code,
  H2,
  ListItem,
  Paragraph,
  UnorderedList
} from '@s-ui/documentation-library'

import AtomImage from '../src/index.js'
import {CLASS_SECTION, IMAGES} from './settings.js'

const DefaultDemo = () => (
  <Article className={CLASS_SECTION}>
    <H2>Default</H2>
    <Paragraph>
      The minimum required props to get a proper AtomImage are:
    </Paragraph>
    <UnorderedList>
      <ListItem>
        <Code>src</Code>: Specifies the path to the image.
      </ListItem>
      <ListItem>
        <Code>alt</Code>: Specifies an alternate text for the image, if the
        image for some reason cannot be displayed.
      </ListItem>
    </UnorderedList>
    <Paragraph>
      <Bold>Note</Bold>: Also, always specify the width and height of an image.
      If width and height are not specified, the page might flicker while the
      image loads.
    </Paragraph>
    <div style={{height: 300}}>
      <AtomImage src={IMAGES.FINAL} alt="Nice View" />
    </div>
  </Article>
)

export default DefaultDemo
