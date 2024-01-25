import {useRef, useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Paragraph, RadioButton} from '@s-ui/documentation-library'

import AtomSwitch from '../../src/index.js'
import {flexCenteredStyle} from '../settings.js'

const ArticleToggle = ({className}) => {
  const [uncontrolledValueDemoState, setUncontrolledValueDemoState] = useState(false)
  const [controlledValueDemoState, setControlledValueDemoState] = useState(false)
  const [controlledValueDemoFocusState, setControlledValueDemoFocusState] = useState(false)
  const uncontrolledAtomSwitch = useRef(null)
  const controlledAtomSwitch = useRef(null)
  const onButtonClick = (ref, action, value) => () => {
    ref.current.focus()
    action(value)
  }
  const trigger = (action, value) => () => action(value)
  return (
    <Article className={className}>
      <H2>onToogle</H2>
      <Paragraph>
        AtomSwitch component toggles its value when user fires an event click on its circle element. It provides a{' '}
        <Code>onToggle</Code> prop handler fired when the option is changed
      </Paragraph>
      <Paragraph>
        When the element is focused we can also toggle it with the keyboard pressing the 'enter ⏎' and the 'space bar'
        keys
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
                name="name"
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
                onToggle={trigger(setControlledValueDemoState, !controlledValueDemoState)}
                onFocus={trigger(setControlledValueDemoFocusState, true)}
                onBlur={trigger(setControlledValueDemoFocusState, false)}
                label="Controlled"
                ref={controlledAtomSwitch}
                value={controlledValueDemoState}
                name="name"
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

ArticleToggle.displayName = 'ArticleToggle'

ArticleToggle.propTypes = {
  className: PropTypes.string
}

export default ArticleToggle
