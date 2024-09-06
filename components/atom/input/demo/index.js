import {useState} from 'react'

import AtomInput, {inputShapes, inputSizes, inputStates, inputTypes} from 'components/atom/input/src/index.js'

import {
  Anchor,
  AntDesignIcon,
  Article,
  Box,
  Button,
  Cell,
  Code,
  Grid,
  H1,
  H2,
  H3,
  H4,
  Input,
  Label,
  ListItem,
  Paragraph,
  RadioButton,
  RadioButtonGroup,
  UnorderedList
} from '@s-ui/documentation-library'

import {flexCenteredStyle, stackMap} from './settings.js'

const DefaultDemo = () => (
  <Article>
    <H2>Default</H2>
    <Paragraph>By default, the element gets the following look and feel.</Paragraph>
    <div>
      <AtomInput />
    </div>
  </Article>
)

const SizeDemo = () => (
  <Article>
    <H2>Size</H2>
    <Paragraph>
      The element gets {Object.values(inputSizes).length} different size configurations using its <Code>size</Code>{' '}
      prop.
    </Paragraph>
    <Grid gutter={[8, 8]} cols={Object.values(inputSizes).length + 1}>
      {[['default', undefined], ...Object.entries(inputSizes)].map(([key], index) => (
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}} key={index}>
          <Label>{key}</Label>
        </Cell>
      ))}
      {[['default', undefined], ...Object.entries(inputSizes)].map(([key, value], index) => (
        <Cell style={flexCenteredStyle} key={index}>
          <AtomInput size={value} />
        </Cell>
      ))}
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
        <Code>placeholder</Code>: the placeholder for empty component value hint.
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
          <Input fullWidth value={placeholder} onChange={event => setPlaceholder(event.target.value)} />
        </Cell>
        <Cell>
          <Input fullWidth defaultValue={defaultValue} onChange={event => setDefaultValue(event.target.value)} />
        </Cell>
        <Cell>
          <Input fullWidth defaultValue={value} onChange={event => setValue(event.target.value)} />
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
        AtomInput provides diferent types of usage depending on its <Code>type</Code> value prop.
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        {[
          [
            'TEXT',
            {type: inputTypes.TEXT},
            {
              description: 'Elements of type text create basic single-line text fields'
            }
          ],
          [
            'DATE',
            {type: inputTypes.DATE, charsSize: 10},
            {
              description:
                'Create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface. The resulting value includes the year, month, and day, but not the time. The time and datetime-local input types support time and date+time input.'
            }
          ],
          [
            'MASK',
            {
              type: inputTypes.MASK,
              mask: {mask: 'ES00 0000 0000 00 0000000000'},
              placeholder: 'ES00 0000 0000 00 0000000000',
              charsSize: 31,
              value: 'ES1234567890123456789012'
            },
            {
              description: (
                <>
                  Let the user define its own mask for custom purposes. More info at{' '}
                  <Anchor href="http://shorturl.at/foBF1">http://shorturl.at/foBF1</Anchor>
                </>
              )
            }
          ],
          [
            'MASK WITH RIGHT ICON',
            {
              type: inputTypes.MASK,
              mask: {mask: Number},
              placeholder: 'ES00 0000 0000 00 0000000000',
              charsSize: 31,
              value: '100000',
              rightIcon: '€',
              radix: ',',
              thousandsSeparator: '.',
              mapToRadix: ['.']
            },
            {
              description: (
                <>
                  Let the user define its own mask for custom purposes. More info at{' '}
                  <Anchor href="http://shorturl.at/foBF1">http://shorturl.at/foBF1</Anchor>
                </>
              )
            }
          ],
          [
            'NUMBER',
            {
              type: inputTypes.NUMBER,
              placeholder: 'Number only input',
              charsSize: 10
            },
            {
              description: (
                <>
                  A control for entering a number. Displays a spinner and adds default validation when supported.
                  Displays a numeric keypad in some devices with dynamic keypads. Arrows for number inputs are not shown
                  due to: <Anchor href="http://shorturl.at/tR149">http://shorturl.at/tR149</Anchor>
                </>
              )
            }
          ],
          [
            'PASSWORD',
            {type: inputTypes.PASSWORD, placeholder: 'Password Input'},
            {
              description: 'A single-line text field whose value is obscured. Will alert user if site is not secure'
            }
          ],
          [
            'SUI_PASSWORD',
            {type: inputTypes.SUI_PASSWORD, placeholder: 'Password Input'},
            {
              description: 'Like password but whith a show button for value displaying state'
            }
          ],
          [
            'TEL',
            {type: inputTypes.TEL},
            {
              description:
                'A control for entering a telephone number. Displays a telephone keypad in some devices with dynamic keypads.'
            }
          ],
          [
            'EMAIL',
            {type: inputTypes.EMAIL},
            {
              description:
                'A field for editing an email address. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.'
            }
          ]
        ].map(([key, props, {description} = {}], index) => (
          <Cell key={index}>
            <H4>{key}</H4>
            <AtomInput {...props} />
            <Paragraph>{description}</Paragraph>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

const DisabledReadOnlyDemo = () => {
  return (
    <Article>
      <H2>Disable and ReadOnly</H2>
      <Paragraph>
        Input provides two different modes that blocks the component behavior the difference between them is the
        appearance.
      </Paragraph>
      <Paragraph>
        The developer can disable the component using the <Code>disabled</Code> boolean prop. It can be blocked also
        using the <Code>readOnly</Code> boolean propm, but it will look like the default input.
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

const AddonAndIconDemo = () => {
  const [state, setState] = useState({})
  const {icon, iconValue, rightAddon, leftAddon} = state
  const setStatus = (newState = {}) => setState({...state, ...newState})
  const valueIcon = iconValue ? <AntDesignIcon icon={iconValue} style={{color: 'currentColor'}} /> : null
  return (
    <Article>
      <H2>Addon and Icon</H2>
      <Paragraph>Input offers the possibility to add icons and contents on its left or right positions</Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>leftAddon</Code> and <Code>rightAddon</Code>: use it as a label for the input field
        </ListItem>
        <ListItem>
          <Code>leftIcon</Code> and <Code>rightIcon</Code>: use it as a valid symbol for the field
        </ListItem>
      </UnorderedList>
      <Paragraph>This field props can be combined all together.</Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell span={2}>
          <AtomInput
            leftIcon={icon === 'leftIcon' ? valueIcon : undefined}
            rightIcon={icon === 'rightIcon' ? valueIcon : undefined}
            leftAddon={leftAddon}
            rightAddon={rightAddon}
          />
        </Cell>
        <Cell>
          <RadioButtonGroup
            onChange={(event, value) => {
              setStatus({icon: value})
            }}
            fullWidth
          >
            <RadioButton value="leftIcon" label="leftIcon" />
            <RadioButton value="rightIcon" label="rightIcon" />
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <RadioButtonGroup
            onChange={(event, value) =>
              setStatus({
                iconValue: value
              })
            }
            fullWidth
          >
            <RadioButton
              value="AiFillFire"
              label={<AntDesignIcon icon="AiFillFire" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiOutlineSketch"
              label={<AntDesignIcon icon="AiOutlineSketch" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiOutlineInfoCircle"
              label={<AntDesignIcon icon="AiOutlineInfoCircle" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiTwotoneSkin"
              label={<AntDesignIcon icon="AiTwotoneSkin" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiOutlineExclamationCircle"
              label={<AntDesignIcon icon="AiOutlineExclamationCircle" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiOutlineCar"
              label={<AntDesignIcon icon="AiOutlineCar" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiOutlineAppstore"
              label={<AntDesignIcon icon="AiOutlineAppstore" style={{color: 'currentColor'}} />}
            />
            <RadioButton
              value="AiFillTrophy"
              label={<AntDesignIcon icon="AiFillTrophy" style={{color: 'currentColor'}} />}
            />
          </RadioButtonGroup>
        </Cell>
        <Cell>
          <Input
            fullWidth
            placeholder="leftAddon text"
            onChange={event => setStatus({leftAddon: event.target.value})}
          />
        </Cell>
        <Cell>
          <Input
            fullWidth
            placeholder="rightAddon text"
            onChange={event => setStatus({rightAddon: event.target.value})}
          />
        </Cell>
      </Grid>
    </Article>
  )
}

const BorderlessDemo = () => {
  const [border, setBorder] = useState(true)
  const [mode, setMode] = useState('light')
  return (
    <Article>
      <H2>No border</H2>
      <Paragraph>
        The border of the input can be removed using the boolean prop <Code>noBorder</Code>
      </Paragraph>
      <Grid cols={2} gutter={[8, 8]}>
        <Cell>
          <RadioButton fullWidth value={border} label="hide border" onClick={(event, value) => setBorder(!value)} />
        </Cell>
        <Cell>
          <RadioButton
            fullWidth
            value={mode}
            label="set dark"
            onClick={(event, value) => setMode(value ? 'dark' : 'light')}
          />
        </Cell>
        <Cell span={2}>
          <Box mode={mode}>
            <AtomInput placeholder="click to interact" noBorder={!border} />
          </Box>
        </Cell>
      </Grid>
    </Article>
  )
}

const StateDemo = () => {
  return (
    <Article>
      <H2>State</H2>
      <Paragraph>
        Input has {Object.values(inputStates).length} different values. It can be used giving a valid <Code>state</Code>{' '}
        prop to the component.
      </Paragraph>
      <Grid cols={Object.values(inputStates).length + 1} gutter={[8, 8]}>
        {stackMap(
          [['undefined', undefined], ...Object.entries(inputStates)],
          ([key], index) => (
            <Label key={index}>{key}</Label>
          ),
          ([key, value], index) => (
            <AtomInput key={index} state={value} />
          )
        )}
      </Grid>
    </Article>
  )
}

const ErrorStatusDemo = () => {
  return (
    <Article>
      <H2>Error State</H2>
      <Paragraph>
        Input can show its error mode using the boolean prop <Code>errorStatus</Code>
      </Paragraph>
      <Grid cols={3} gutter={[8, 8]}>
        <Cell>
          <Label>true</Label>
        </Cell>
        <Cell>
          <Label>undefined</Label>
        </Cell>
        <Cell>
          <Label>false</Label>
        </Cell>
        <Cell>
          <AtomInput errorState />
        </Cell>
        <Cell>
          <AtomInput errorState={undefined} />
        </Cell>
        <Cell>
          <AtomInput errorState={false} />
        </Cell>
      </Grid>
    </Article>
  )
}

const InlineFormDemo = () => (
  <Article>
    <H2 deprecated>Inline Form</H2>
    <H3>Deprecated</H3>
    <Paragraph>
      Input have its own way of provide a submision using the <Code>button</Code> prop, you can pass a React node.
    </Paragraph>
    <AtomInput button={<Button>Send</Button>} />
  </Article>
)

const ShapeDemo = () => (
  <Article>
    <H2>Shape</H2>
    <Paragraph>
      The border radius of the input can be set using the <Code>shape</Code> property.
    </Paragraph>
    <Grid cols={Object.values(inputShapes).length + 1} gutter={[8, 8]}>
      {Object.entries({default: undefined, ...inputShapes}).map(([key]) => (
        <Cell key={key}>
          <Label>{`${key}`}</Label>
        </Cell>
      ))}
      {Object.entries({default: undefined, ...inputShapes}).map(([key, value]) => (
        <Cell key={key}>
          <AtomInput shape={value} />
        </Cell>
      ))}
    </Grid>
    <Paragraph>In even preserves its own shaping combined with addons and sizes also.</Paragraph>
    <Grid cols={Object.values(inputShapes).length + 1 + 1} gutter={[8, 8]}>
      <Cell />
      {Object.entries({default: undefined, ...inputShapes}).map(([key]) => (
        <Cell key={key}>
          <Label>{`${key}`}</Label>
        </Cell>
      ))}
      {Object.entries({default: undefined, ...inputSizes}).map(([sizeKey, sizeValue]) => (
        <>
          <Cell key={sizeKey}>
            <Label>{`${sizeKey}`}</Label>
          </Cell>
          {Object.entries({default: undefined, ...inputShapes}).map(([shapeKey, shapeValue]) => (
            <Cell key={`${shapeKey}-${sizeKey}`}>
              <AtomInput
                shape={shapeValue}
                size={sizeValue}
                leftAddon={<span>left</span>}
                rightAddon={<span>right</span>}
              />
            </Cell>
          ))}
        </>
      ))}
    </Grid>
  </Article>
)

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <H1>Input</H1>
      <Paragraph>
        Inputs are the text fields that users fill in with different types of information. These include dates,
        passwords or even short answers. It’s a field where users can write alphanumeric texts.
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
      <AddonAndIconDemo />
      <br />
      <BorderlessDemo />
      <br />
      <StateDemo />
      <br />
      <ErrorStatusDemo />
      <br />
      <InlineFormDemo />
      <br />
      <ShapeDemo />
      <br />
    </div>
  </div>
)

export default Demo
