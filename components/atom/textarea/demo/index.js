import PropTypes from 'prop-types'
import {
  Article,
  Code,
  Emphasis,
  H1,
  H2,
  H3,
  Paragraph
} from '@s-ui/documentation-library'

import TextArea from '../src'

const Demo = ({children}) => {
  return <div style={{width: '100%', padding: 20}}>{children}</div>
}

Demo.propTypes = {
  children: PropTypes.node
}

const DemoWrapper = ({children}) => {
  return <div style={{display: 'flex', flexWrap: 'wrap'}}>{children}</div>
}

DemoWrapper.propTypes = {
  children: PropTypes.node
}

export default () => {
  return (
    <div>
      <H1>Text-area</H1>
      <Paragraph>
        The Textarea component allows you to easily create multi-line text
        inputs. AtomTextarea is a component that wraps a textarea displaying the
        text passed in the `value` prop
      </Paragraph>
      <DemoWrapper>
        <Demo>
          <Article>
            <H2>Basic Usage</H2>
            <Paragraph>
              <Code>Short</Code> <Emphasis>size</Emphasis> by default
            </Paragraph>
            <TextArea
              name="textarea-1"
              value="Saul Bass on failure: Failure is built into creativity"
              onChange={console.log}
            />
          </Article>
          <br />
          <Article>
            <H2>Long size</H2>
            <TextArea
              name="textarea-2"
              value="Saul Bass on failure: Failure is built into creativity"
              size="long"
              onChange={console.log}
            />
          </Article>
          <br />
          <Article>
            <H2>Disabled</H2>
            <TextArea
              name="textarea-3"
              value="Saul Bass on failure: Failure is built into creativity"
              onChange={console.log}
              disabled
            />
          </Article>
          <br />
          <Article>
            <H2>Placeholder</H2>
            <TextArea
              name="textarea-4"
              placeholder="Write something cool here..."
              onChange={console.log}
              state="success"
            />
          </Article>
          <br />
          <Article>
            <H2>States</H2>
            <H3>Success</H3>
            <TextArea
              name="textarea-1"
              placeholder="Write something cool here..."
              onChange={console.log}
              state="success"
            />
            <H3>Error</H3>
            <TextArea
              name="textarea-1"
              placeholder="Write something cool here..."
              onChange={console.log}
              state="error"
            />
            <H3>Alert</H3>
            <TextArea
              name="textarea-1"
              placeholder="Write something cool here..."
              onChange={console.log}
              state="alert"
            />
          </Article>
        </Demo>
      </DemoWrapper>
    </div>
  )
}
