import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import AtomInput from '@s-ui/react-atom-input'

import AtomHelpText from '../src/index.js'

const InputDemo = () => (
  <Article>
    <H2>Text</H2>
    <Paragraph>
      The prop <Code>text</Code> is used to set the text included in.
    </Paragraph>
    <AtomInput type="text" />
    <AtomHelpText text="Add something here to help your users" />
  </Article>
)

export default InputDemo
