import {Fragment, useState} from 'react'

import {
  Article,
  Cell,
  Code,
  Grid,
  H1,
  H2,
  Input,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  Strong,
  Text
} from '@s-ui/documentation-library'
import AtomActionButton, {
  atomActionButtonColors,
  atomActionButtonSizes
} from '@s-ui/react-atom-action-button'

import ActionButtonCatalog from './ActionButtonCatalog.js'
import {
  CLASS_SECTION,
  flexCenteredStyle,
  handleSubmit,
  icon
} from './settings.js'

const Demo = () => {
  const [state, setState] = useState({content: 'button', link: false})
  return (
    <div className="sui-StudioPreview">
      <H1>ActionButton</H1>
      <Paragraph>Icon used as a button which fires an action</Paragraph>
      <Article className={CLASS_SECTION}>
        <H2>Colours</H2>
        <div>
          <Paragraph>
            These are the available <Code>color</Code> of action buttons, which
            are <Code>{atomActionButtonColors.PRIMARY}</Code> by default.
          </Paragraph>
          <ActionButtonCatalog icon={icon} />
        </div>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Sizes</H2>
        <Paragraph>Size of the icon</Paragraph>
        <div>
          <Paragraph>
            We define 3 diferent sizes for action button exported as{' '}
            <Code>atomActionButtonSizes</Code>
          </Paragraph>
          <Grid cols={3} gutter="10" style={{width: 600}}>
            <Cell style={flexCenteredStyle}>
              <Label>SMALL</Label>
            </Cell>
            <Cell style={flexCenteredStyle}>
              <Label>MEDIUM</Label>
            </Cell>
            <Cell style={flexCenteredStyle}>
              <Label>LARGE</Label>
            </Cell>
            <Cell style={flexCenteredStyle}>
              <AtomActionButton icon={icon} size={atomActionButtonSizes.SMALL}>
                Button
              </AtomActionButton>
            </Cell>
            <Cell style={flexCenteredStyle}>
              <AtomActionButton icon={icon} size={atomActionButtonSizes.MEDIUM}>
                Button
              </AtomActionButton>
            </Cell>
            <Cell style={flexCenteredStyle}>
              <AtomActionButton icon={icon} size={atomActionButtonSizes.LARGE}>
                Button
              </AtomActionButton>
            </Cell>
          </Grid>
        </div>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Link buttons</H2>
        <Paragraph>
          ActionButtons can also be used as anchor elements to redirect to a
          different url once clicking on them. This can be done by adding the{' '}
          <Code>link</Code> boolean prop combined with the href prop for the
          destination url.
        </Paragraph>
        <div>
          <Grid cols={4} gutter="10" style={{width: 600}}>
            <Cell style={flexCenteredStyle}>
              <AtomActionButton
                link
                title="button link"
                target="_blank"
                href="http://www.google.com"
                icon={icon}
              >
                Button link
              </AtomActionButton>
            </Cell>
            <Cell style={flexCenteredStyle}>
              <AtomActionButton
                link
                href="http://www.google.com"
                icon={icon}
                style="outline"
                title="button link"
              >
                Button link
              </AtomActionButton>
            </Cell>
            <Cell style={flexCenteredStyle}>
              <AtomActionButton
                link
                href="http://www.google.com"
                icon={icon}
                title="button link"
                style="flat"
              >
                Button link
              </AtomActionButton>
            </Cell>
            <Cell style={flexCenteredStyle}>
              <AtomActionButton
                link
                href="http://www.google.com"
                icon={icon}
                title="button link"
                style="flat"
                disabled
              >
                Button link disabled
              </AtomActionButton>
            </Cell>
          </Grid>
        </div>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Types</H2>
        <Paragraph>
          HTML button <Code>type</Code> attribute is used for specifying the
          behavior of button.
        </Paragraph>
        <Paragraph>
          <Strong>Tip</Strong>: Always specify the type attribute for the button
          element. Different browsers may use different default types for the
          button element
        </Paragraph>
        <Grid cols={1} gutter={[8, 8]}>
          {Object.entries({
            button: 'The button is a clickable button',
            submit: 'The button is a submit button (submits form-data)'
          }).map(([key, value]) => (
            <Fragment key={key}>
              <Cell
                style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
              >
                <Label>{key}</Label>: <Text>{value}</Text>
              </Cell>
            </Fragment>
          ))}
        </Grid>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <Grid cols={2} gutter={[8, 8]} style={{width: 200}}>
            <Cell span={2}>
              <Input
                fullWidth
                type="text"
                id="fname"
                name="fname"
                placeholder="first name"
              />
            </Cell>
            <Cell span={2}>
              <Input
                fullWidth
                type="text"
                id="lname"
                name="lname"
                placeholder="Last name"
              />
            </Cell>
            <Cell>
              <AtomActionButton icon={icon} type="submit">
                Submit
              </AtomActionButton>
            </Cell>
            <Cell>
              <AtomActionButton icon={icon} type="button">
                Button
              </AtomActionButton>
            </Cell>
          </Grid>
        </form>
      </Article>
      <br />
      <Article className={CLASS_SECTION} mode="light">
        <H2>Other extra button boolean props</H2>
        <Paragraph>
          <Code>disabled</Code>: button is not trigerable.
        </Paragraph>
        <Paragraph>
          <Code>focused</Code>: button status activated.
        </Paragraph>
        <Grid cols={2} gutter={10}>
          <Cell
            style={{
              ...flexCenteredStyle,
              justifyContent: 'flex-start',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <Label>boolean props</Label>
            <RadioButtonGroup
              onChange={(event, value) => {
                const newState = {
                  ...state,
                  disabled: undefined,
                  focused: undefined
                }
                switch (value) {
                  case 'disabled':
                    setState({...newState, disabled: true})
                    break
                  case 'focused':
                    setState({...newState, focused: true})
                    break
                  default:
                    setState({...newState})
                    break
                }
              }}
            >
              <RadioButton value="disabled" label="disabled" />
              <RadioButton value="focused" label="focused" />
            </RadioButtonGroup>
          </Cell>
        </Grid>
        <ActionButtonCatalog icon={icon} {...state} />
      </Article>
      <br />
      <br />
    </div>
  )
}
export default Demo
