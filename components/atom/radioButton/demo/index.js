import {
  Article,
  Cell,
  Code,
  Grid,
  H1,
  H2,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import AtomRadioButton from '../src/index.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Radio Button</H1>
      <Paragraph>
        AtomRadioButton is a component that displays an input radio w/ its
        expected behavior
      </Paragraph>
      <Article>
        <H2>Default</H2>
        <Paragraph>
          Radio button must be used like native input radio types. its value is
          declared via <Code>value</Code> prop and the selection is under the{' '}
          <Code>checked</Code> boolean prop.
        </Paragraph>
        <Grid style={{width: 200}} cols={3}>
          <Cell />
          {[{checked: false}, {checked: true}].map(({checked}, index) => (
            <Cell key={index}>
              <Label>{checked.toString()}</Label>
            </Cell>
          ))}
          <Cell>
            <Label>checked</Label>
          </Cell>
          {[{checked: false}, {checked: true}].map(({checked}, index) => (
            <Cell key={index}>
              <AtomRadioButton
                name="basic-favorite-beatle"
                value={`john-${index}`}
                checked={checked}
              />
            </Cell>
          ))}
        </Grid>
      </Article>
      <br />
      <Article>
        <H2>Disable</H2>
        <Paragraph>
          The component can be disabled using the <Code>disabled</Code> boolean
          prop.
        </Paragraph>
        <Grid style={{width: 200}} cols={3}>
          <Cell />
          {[{checked: false}, {checked: true}].map(({checked}, index) => (
            <Cell key={index}>
              <Label>{checked.toString()}</Label>
            </Cell>
          ))}
          <Cell>
            <Label>checked</Label>
          </Cell>
          {[{checked: false}, {checked: true}].map(({checked}, index) => (
            <Cell key={index}>
              <AtomRadioButton
                name="basic-favorite-beatle-1"
                value={`john-${index}`}
                disabled
                checked={checked}
              />
            </Cell>
          ))}
        </Grid>
      </Article>
      <br />
      <Article>
        <H2>isHidden</H2>
        <Paragraph>
          The component can be hidden using the <Code>isHidden</Code> boolean
          prop.
        </Paragraph>
        <Grid style={{width: 200}} cols={3}>
          <Cell />
          {[{checked: false}, {checked: true}].map(({checked}, index) => (
            <Cell key={index}>
              <Label>{checked.toString()}</Label>
            </Cell>
          ))}
          <Cell>
            <Label>checked</Label>
          </Cell>
          {[{checked: false}, {checked: true}].map(({checked}, index) => (
            <Cell key={index}>
              <AtomRadioButton
                name="basic-favorite-beatle-2"
                value={`john-${index}`}
                isHidden
                checked={checked}
              />
            </Cell>
          ))}
        </Grid>
      </Article>
    </div>
  )
}

export default Demo
