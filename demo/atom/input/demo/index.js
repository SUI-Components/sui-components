import AtomInput, {
  inputSizes,
  inputTypes
} from '../../../../components/atom/input/src'
import {useState} from 'react'
import {
  H1,
  H2,
  Paragraph,
  Article,
  Grid,
  Cell,
  Label,
  Code,
  Input
  // RadioButtonGroup,
  // RadioGroup
} from '@s-ui/documentation-library'

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const DefaultDemo = () => (
  <Article>
    <H2>Default</H2>
    <Paragraph>
      By default, the element gets the following look and feel.
    </Paragraph>
    <div>
      <AtomInput />
    </div>
  </Article>
)

const SizeDemo = () => (
  <Article>
    <H2>Size</H2>
    <Paragraph>
      By default, the element gets the following look and feel.
    </Paragraph>
    <Grid gutter={[8, 8]} cols={4}>
      {[['default', undefined], ...Object.entries(inputSizes)].map(
        ([key], index) => (
          <Cell
            style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
            key={index}
          >
            <Label>{key}</Label>
          </Cell>
        )
      )}
      {[['default', undefined], ...Object.entries(inputSizes)].map(
        ([key, value], index) => (
          <Cell style={flexCenteredStyle} key={index}>
            <AtomInput size={value} />
          </Cell>
        )
      )}
    </Grid>
  </Article>
)

const PlaceholderValueAndDefaultValueDemo = () => {
  const [placeholder, setPlaceholder] = useState('placeholder')
  const [value, setValue] = useState(undefined)
  const [defaultValue, setDefaultValue] = useState('default value')
  return (
    <Article>
      <H2>value, defaultValue and placeholder</H2>
      <Paragraph>
        <Code>value</Code>: controlled component.
      </Paragraph>
      <Paragraph>
        <Code>defaultValue</Code>: for uncontrolled component
      </Paragraph>
      <Paragraph>
        <Code>placeholder</Code>: the placeholder for empty component value
        hint.
      </Paragraph>
      <Grid gutter={[8, 8]} cols={3}>
        <Cell>
          <Label fullWidth>placeholder</Label>
        </Cell>
        <Cell>
          <Label fullWidth>defaultValue</Label>
        </Cell>
        <Cell>
          <Label fullWidth>value</Label>
        </Cell>
        <Cell>
          <Input
            fullWidth
            value={placeholder}
            onChange={event => setPlaceholder(event.target.value)}
          />
        </Cell>
        <Cell>
          <Input
            fullWidth
            defaultValue={defaultValue}
            onChange={event => setDefaultValue(event.target.value)}
          />
        </Cell>
        <Cell>
          <Input
            fullWidth
            defaultValue={value}
            onChange={event => setValue(event.target.value)}
          />
        </Cell>
        <Cell span={3}>
          <Label>result:</Label>
        </Cell>
        <Cell span={3}>
          <AtomInput
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={event => setValue(event.target.value)}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

const TypeDemo = () => {
  return (
    <Article>
      <H2>Type</H2>
      <Paragraph>
        AtomInput provides diferent types of usage depending on its{' '}
        <Code>type</Code> value prop.
      </Paragraph>
      <div>
        {[
          ['DATE', {type: inputTypes.DATE, charsSize: 10}],
          [
            'MASK',
            {
              type: inputTypes.MASK,
              mask: 'ES00 0000 0000 00 0000000000',
              placeholder: 'ES00 0000 0000 00 0000000000',
              charsSize: 31
            }
          ],
          [
            'NUMBER',
            {
              type: inputTypes.NUMBER,
              placeholder: 'Number only input',
              charsSize: 10
            }
          ],
          ['PASSWORD', {type: inputTypes.PASSWORD}],
          [
            'SUI_PASSWORD',
            {type: inputTypes.SUI_PASSWORD, placeholder: 'Password Input'}
          ],
          ['TEXT', {type: inputTypes.TEXT}],
          ['TEL', {type: inputTypes.TEL}],
          ['EMAIL', {type: inputTypes.EMAIL}]
        ].map(([key, props], index) => (
          <div key={index}>
            <Label>{key}</Label>: <AtomInput {...props} />
            <br />
            <br />
          </div>
        ))}
      </div>
    </Article>
  )
}

const DisabledReadOnlyDemo = () => {
  return (
    <Article>
      <H2>Disable and ReadOnly</H2>
      <Paragraph>
        Input provides two different modes that blocks the component behavior
        the difference between them is the appearance.
      </Paragraph>
      <Paragraph>
        The developer can disable the component using the <Code>disabled</Code>{' '}
        boolean prop. It can be blocked also using the <Code>readOnly</Code>{' '}
        boolean propm, but it will look like the default input.
      </Paragraph>
      <Grid gutter={[8, 8]} cols={2}>
        <Cell>
          <Label>disabed</Label>
        </Cell>
        <Cell>
          <Label>readOnly</Label>
        </Cell>
        <Cell>
          <AtomInput value="disabled" disabled />
        </Cell>
        <Cell>
          <AtomInput value="readOnly" readOnly />
        </Cell>
      </Grid>
    </Article>
  )
}

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <H1>Input</H1>
      <Paragraph>
        Inputs are the text fields that users fill in with different types of
        information. These include dates, passwords or even short answers. It’s
        a field where users can write alphanumeric texts.
      </Paragraph>
      <DefaultDemo />
      <br />
      <PlaceholderValueAndDefaultValueDemo />
      <br />
      <TypeDemo />
      <br />
      <SizeDemo />
      <br />
      <DisabledReadOnlyDemo />
      <br />
    </div>
  </div>
)

export default Demo
