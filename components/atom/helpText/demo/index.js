/* eslint-disable no-console */

import {H1, Paragraph} from '@s-ui/documentation-library'

import InputDemo from './InputDemo.js'
import TextareaDemo from './TextareaDemo.js'
import CheckboxDemo from './CheckboxDemo.js'

import './index.scss'

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
