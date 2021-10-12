/* eslint-disable no-console */
import {useState} from 'react'
import AtomHelpText from '@s-ui/react-atom-help-text'
import AtomInput from '@s-ui/react-atom-input'
import AtomTextarea from '@s-ui/react-atom-textarea'
import AtomCheckbox from '@s-ui/react-atom-checkbox'
import AtomLabel from '@s-ui/react-atom-label'

import {H1, H2, Paragraph, Article, Code} from '@s-ui/documentation-library'

import './index.scss'

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

const TextareaDemo = () => (
  <Article>
    <H2>Text-area</H2>
    <AtomTextarea placeholder="Write something cool here..." />
    <AtomHelpText text="Additional information for your textarea input" />
  </Article>
)

const CheckboxDemo = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Article>
      <H2>Checkbox</H2>
      <AtomCheckbox
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <AtomLabel text="An important decision" inline="left" />
      <AtomHelpText text="Write here why the user should check this" />
    </Article>
  )
}

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Help text</H1>
      <Paragraph>
        Help Text is a feedback that the system gives users to make them clearly
        understand which information is required
      </Paragraph>
      <InputDemo />
      <br />
      <TextareaDemo />
      <br />
      <CheckboxDemo />
    </div>
  )
}

export default Demo
