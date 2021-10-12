/* eslint-disable no-console */
import AtomHelpText from '@s-ui/react-atom-help-text'
import AtomInput from '@s-ui/react-atom-input'

import {H1, H2, Paragraph, Article, Code} from '@s-ui/documentation-library'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Help text</H1>
      <Paragraph>
        Help Text is a feedback that the system gives users to make them clearly
        understand which information is required
      </Paragraph>
      <Article>
        <H2>Text</H2>
        <Paragraph>
          The prop <Code>text</Code> is used to set the text included in.
        </Paragraph>
        <AtomInput type="text" />
        <AtomHelpText text="hello help text" />
      </Article>
    </div>
  )
}

export default Demo
