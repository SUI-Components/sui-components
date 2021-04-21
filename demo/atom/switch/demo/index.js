import {useState, useRef} from 'react'
import {
  H1,
  H2,
  Button,
  Paragraph,
  Article,
  Code,
  Grid,
  Cell,
  Label,
  Small,
  RadioButton
} from '@s-ui/documentation-library'

import AtomSwitch, {
  atomSwitchSizes,
  atomSwitchTypes
} from '../../../../components/atom/switch/src'

const BASE_CLASS_DEMO = `DemoAtomSwitch`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const StateArticle = () => (
  <Article className={CLASS_SECTION}>
    <H2>State</H2>
    <Paragraph>
      We can distinguish between 2 different toogle states using the{' '}
      <Code>value</Code> boolean prop given.
    </Paragraph>
    <Grid cols={3} style={{width: 400}}>
      {[
        ['value', {...flexCenteredStyle, justifyContent: 'flex-start'}],
        ['true', flexCenteredStyle],
        ['false', flexCenteredStyle]
      ].map(([key, style], index) => (
        <Cell key={index} style={style}>
          <Label>{key}</Label>
        </Cell>
      ))}
      <Cell />
      {[{value: true}, {value: false}].map((props, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <AtomSwitch {...props} />
        </Cell>
      ))}
    </Grid>
  </Article>
)

const SizesArticle = () => (
  <Article className={CLASS_SECTION}>
    <H2>Sizes</H2>
    <Paragraph>
      We offer 2 different <Code>size</Code> types under the{' '}
      <Code>atomSwitchSizes</Code> exported variable: default and large
    </Paragraph>
    <Grid cols={2} style={{width: 400}}>
      {Object.values(atomSwitchSizes).map((size, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <Label>{size}</Label>
        </Cell>
      ))}
      {Object.values(atomSwitchSizes).map((size, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <AtomSwitch size={size} />
        </Cell>
      ))}
    </Grid>
  </Article>
)

const DisabledArticle = () => (
  <Article className={CLASS_SECTION}>
    <H2>Disabled</H2>
    <Paragraph>
      This prop is available to get a blocked status component
    </Paragraph>
    <Grid cols={3} style={{width: 400}}>
      {[
        ['value', {...flexCenteredStyle, justifyContent: 'flex-start'}],
        ['true', flexCenteredStyle],
        ['false', flexCenteredStyle]
      ].map(([key, style], index) => (
        <Cell key={index} style={style}>
          <Label>{key}</Label>
        </Cell>
      ))}
      <Cell />
      {[{value: true}, {value: false}].map((props, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <AtomSwitch disabled {...props} />
        </Cell>
      ))}
    </Grid>
  </Article>
)

const TypesArticle = () => (
  <Article className={CLASS_SECTION}>
    <H2>Types</H2>
    <Paragraph>
      This package gives 3 different <Code>type</Code> values provided under the{' '}
      <Code>atomSwitchTypes</Code> exported variable
    </Paragraph>
    <Grid cols={3}>
      {Object.values(atomSwitchTypes).map((type, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <Label>{type.toString()}</Label>
        </Cell>
      ))}
      {Object.values(atomSwitchTypes).map((type, index) => (
        <Cell key={index} style={flexCenteredStyle}>
          <AtomSwitch
            labelLeft="labelLeft"
            labelRight="labelRight"
            label={<Small>label</Small>}
            name="name"
            type={type}
          />
        </Cell>
      ))}
    </Grid>
  </Article>
)

const ControlledAndUncontrolledArticle = () => {
  const [state, setState] = useState(false)
  const toogle = () => setState(!state)
  return (
    <Article className={CLASS_SECTION}>
      <H2>initialValue and value</H2>
      <Paragraph>
        Use <Code>initialValue</Code> and <Code>value</Code> for uncontrolled
        and controlled component accordingly.
      </Paragraph>
      <Paragraph>
        Controlled components are anchored to its value given as prop, and its
        key handlers for toggling will not be available
      </Paragraph>
      <Grid cols={5} gutter={[10, 10]}>
        <Cell />
        <Cell span={2} style={flexCenteredStyle}>
          <Label>value</Label>
        </Cell>
        <Cell span={2} style={flexCenteredStyle}>
          <Label>initialValue</Label>
        </Cell>
        <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
          <Label>Mounted value</Label>
        </Cell>
        {['value', 'initialValue'].map((_, j) =>
          [true, false].map((value, i) => (
            <Cell key={`${i}-${j}`} style={flexCenteredStyle}>
              <Label>{value.toString()}</Label>
            </Cell>
          ))
        )}
        <Cell style={{...flexCenteredStyle, alignItems: 'flex-end'}}>
          <Button onClick={toogle} fullWidth>
            Toogle
          </Button>
        </Cell>
        {['value', 'initialValue'].map((key, j) =>
          [true, false].map((value, i) => (
            <Cell key={`${i}-${j}`} style={flexCenteredStyle}>
              <AtomSwitch
                label=""
                name={`${i}-${j}`}
                {...{[key]: i % 2 ? state : !state}}
              />
            </Cell>
          ))
        )}
      </Grid>
    </Article>
  )
}

const ToogleArticle = () => {
  const [uncontrolledValueDemoState, setUncontrolledValueDemoState] = useState(
    false
  )
  const [controlledValueDemoState, setControlledValueDemoState] = useState(
    false
  )
  const [
    controlledValueDemoFocusState,
    setControlledValueDemoFocusState
  ] = useState(false)
  const uncontrolledAtomSwitch = useRef(null)
  const controlledAtomSwitch = useRef(null)
  const onButtonClick = (ref, action, value) => () => {
    ref.current.focus()
    action(value)
  }
  const trigger = (action, value) => () => action(value)
  return (
    <Article className={CLASS_SECTION}>
      <H2>onToogle</H2>
      <Paragraph>
        AtomSwitch component toggles its value when user fires an event click on
        its circle element. It provides a <Code>onToggle</Code> prop handler
        fired when the option is changed
      </Paragraph>
      <Paragraph>
        When the element is focused we can also toggle it with the keyboard
        pressing the 'enter ⏎' and the 'space bar' keys
      </Paragraph>
      <Grid cols={2}>
        <Cell>
          <Grid cols={2} gutter={[10, 10]} style={{width: 300}}>
            <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
              <AtomSwitch
                onFocus={trigger(setUncontrolledValueDemoState, true)}
                onBlur={trigger(setUncontrolledValueDemoState, false)}
                label="Uncontrolled"
                ref={uncontrolledAtomSwitch}
              />
            </Cell>
            <Cell style={{...flexCenteredStyle, alignItems: 'flex-end'}}>
              <RadioButton
                fullWidth
                onClick={onButtonClick(
                  uncontrolledAtomSwitch,
                  setUncontrolledValueDemoState,
                  !uncontrolledValueDemoState
                )}
                value="focus"
                label="Focus"
                checked={uncontrolledValueDemoState}
              />
            </Cell>
          </Grid>
        </Cell>
        <Cell>
          <Grid cols={3} gutter={[10, 10]} style={{width: 300}}>
            <Cell
              style={{
                ...flexCenteredStyle,
                justifyContent: 'flex-start',
                alignItems: 'flex-end'
              }}
            >
              <RadioButton
                fullWidth
                onClick={() => {
                  console.log('click!!!') // eslint-disable-line
                  setControlledValueDemoState(!controlledValueDemoState)
                }}
                value="enable"
                label={controlledValueDemoState ? 'On' : 'Off'}
                checked={controlledValueDemoState}
              />
            </Cell>
            <Cell style={{...flexCenteredStyle}}>
              <AtomSwitch
                onToggle={trigger(
                  setControlledValueDemoState,
                  !controlledValueDemoState
                )}
                onFocus={trigger(setControlledValueDemoFocusState, true)}
                onBlur={trigger(setControlledValueDemoFocusState, false)}
                label="Controlled"
                ref={controlledAtomSwitch}
                value={controlledValueDemoState}
              />
            </Cell>
            <Cell style={{...flexCenteredStyle, alignItems: 'flex-end'}}>
              <RadioButton
                fullWidth
                onClick={onButtonClick(
                  controlledAtomSwitch,
                  setControlledValueDemoFocusState,
                  !controlledValueDemoFocusState
                )}
                value="focus"
                label="Focus"
                checked={controlledValueDemoFocusState}
              />
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Article>
  )
}

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Switch</H1>
        <Paragraph>
          The switch is the radio button when there’re only 2 exclusive options.
          “On/off” is a common and clear example for explaining this component.
          In order to collect the result of this switch there is a callback
          `onToggle`, this callback receives a flag on `true` if select is
          active. If you're using a `select` type of this component, `false`
          means the first option and `true` the second one. There are two sizes
          for this component: `default` and `large`.
        </Paragraph>
        <StateArticle />
        <br />
        <SizesArticle />
        <br />
        <DisabledArticle />
        <br />
        <TypesArticle />
        <br />
        <ControlledAndUncontrolledArticle />
        <br />
        <ToogleArticle />
        <br />
      </div>
    </div>
  )
}

export default Demo
