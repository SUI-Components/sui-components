import {Fragment, useState} from 'react'

import {
  Article,
  Bold,
  Box,
  Cell,
  Code,
  Grid,
  H2,
  H4,
  Input,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  Strong,
  Text
} from '@s-ui/documentation-library'

import AtomButton, {atomButtonTypes} from '../src/index.js'
import {
  atomButtonColorsIterator,
  atomButtonDesignsIterator,
  CLASS_SECTION,
  flexCenteredStyle,
  stackMap
} from './settings.js'

const TypeDeprecatedArticle = () => {
  const [color, setColor] = useState()
  const [design, setDesign] = useState()
  const handleSubmit = event => {
    event.preventDefault()
    alert('I was submitted!')
  }
  return (
    <Article className={CLASS_SECTION}>
      <H2>TYPES</H2>
      <H4>Correct usage</H4>
      <Paragraph>
        HTML button <Code>type</Code> attribute is used for specifying the behavior of button.
      </Paragraph>
      <Paragraph>
        <Strong>Tip</Strong>: Always specify the type attribute for the button element. Different browsers may use
        different default types for the button element
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        {Object.entries({
          button: 'The button is a clickable button',
          submit: 'The button is a submit button (submits form-data)',
          reset: 'The button is a reset button (resets the form-data to its initial values)'
        }).map(([key, value]) => (
          <Fragment key={key}>
            <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
              <Label>{key}</Label>: <Text>{value}</Text>
            </Cell>
          </Fragment>
        ))}
      </Grid>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Grid cols={3} gutter={[8, 8]}>
          <Cell span={3}>
            <Input fullWidth type="text" id="fname" name="fname" placeholder="first name" />
          </Cell>
          <Cell span={3}>
            <Input fullWidth type="text" id="lname" name="lname" placeholder="Last name" />
          </Cell>
          <Cell>
            <AtomButton fullWidth type="submit">
              Submit
            </AtomButton>
          </Cell>
          <Cell>
            <AtomButton fullWidth type="button">
              Button
            </AtomButton>
          </Cell>
          <Cell>
            <AtomButton fullWidth type="reset">
              Reset
            </AtomButton>
          </Cell>
        </Grid>
      </form>
      <H4 deprecated>Deprecated usage</H4>
      <Paragraph>Type of button: 'primary' (default), 'accent', 'secondary', 'tertiary'</Paragraph>
      <Paragraph>
        This prop should <Bold>NEVER</Bold> be combined with <Code>color</Code> and <Code>design</Code> props. It causes
        unexpected behaviors. This prop is priorized over the 2 others previously mentioned.
      </Paragraph>
      <Grid gutter={[8, 8]} cols={atomButtonTypes.length + 1}>
        {stackMap(
          [undefined, ...atomButtonTypes],
          (type, index) => (
            <Cell key={index}>
              <Label>{`${type}`}</Label>
            </Cell>
          ),
          (type, index) => (
            <Cell key={index}>
              <AtomButton type={type} design={design} color={color}>
                button
              </AtomButton>
            </Cell>
          )
        )}
      </Grid>
      <br />
      <Grid cols={1} gutter={[8, 8]}>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <Label>color</Label>: {`${color || 'undefined'}`}
        </Cell>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <Label>design</Label>: {`${design || 'undefined'}`}
        </Cell>
      </Grid>
      <Paragraph>–––</Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <RadioButtonGroup onChange={(event, value) => setColor(value)}>
            {atomButtonColorsIterator.map(([{color}], index) => (
              <RadioButton key={index} value={color} label={color} />
            ))}
          </RadioButtonGroup>
        </Cell>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <RadioButtonGroup onChange={(event, value) => setDesign(value)}>
            {atomButtonDesignsIterator.map(([{design}], index) => (
              <RadioButton key={index} value={design} label={design} />
            ))}
          </RadioButtonGroup>
        </Cell>
      </Grid>
      <H4>Transition</H4>
      <Box outline style={{width: 500}}>
        <Grid cols={5} gutter={[8, 8]}>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>type</Label>
          </Cell>
          <Cell />
          <Cell />
          <Cell style={flexCenteredStyle}>
            <Label>color</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>design</Label>
          </Cell>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>primary</Label>
          </Cell>
          <Cell>
            <AtomButton type="primary">button</AtomButton>
          </Cell>
          <Cell>
            <AtomButton color="primary" design="solid">
              button
            </AtomButton>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>primary</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>solid</Label>
          </Cell>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>accent</Label>
          </Cell>
          <Cell>
            <AtomButton type="accent">button</AtomButton>
          </Cell>
          <Cell>
            <AtomButton color="accent" design="solid">
              button
            </AtomButton>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>accent</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>solid</Label>
          </Cell>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>secondary</Label>
          </Cell>
          <Cell>
            <AtomButton type="secondary">button</AtomButton>
          </Cell>
          <Cell>
            <AtomButton color="primary" design="outline">
              button
            </AtomButton>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>primary</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>outline</Label>
          </Cell>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>tertiary</Label>
          </Cell>
          <Cell>
            <AtomButton type="tertiary">button</AtomButton>
          </Cell>
          <Cell>
            <AtomButton color="primary" design="flat">
              button
            </AtomButton>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>primary</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>flat</Label>
          </Cell>
        </Grid>
      </Box>
    </Article>
  )
}

export default TypeDeprecatedArticle
