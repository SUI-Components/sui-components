/* eslint-disable no-console */
import {useState, Fragment} from 'react'
import AtomCheckbox from '../../../../components/atom/checkbox/src'
import AtomIcon from '@s-ui/react-atom-icon'
import {
  AntDesignIcon,
  H1,
  H2,
  Paragraph,
  Article,
  RadioButtonGroup,
  RadioButton,
  Code,
  Grid,
  Cell,
  Label,
  UnorderedList,
  ListItem
} from '@s-ui/documentation-library'

import './index.scss'

const BASE_CLASS_DEMO = `DemoAtomCheckbox`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const ICONS = {
  aiOutlineCheck: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlineCheck" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlineClose: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlineClose" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlineLine: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlineLine" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlineInfo: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlineInfo" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlinePause: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlinePause" style={{color: 'currentColor'}} />
    </AtomIcon>
  ),
  aiOutlinePlus: (
    <AtomIcon>
      <AntDesignIcon icon="AiOutlinePlus" style={{color: 'currentColor'}} />
    </AtomIcon>
  )
}

const IconHalfCheck = props => (
  <AtomIcon {...props}>
    <svg viewBox="0 0 24 24">
      <path d="M.5 12.5a.5.5 0 010-1h23a.5.5 0 010 1H.5z" />
    </svg>
  </AtomIcon>
)

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const Demo = () => {
  const [state, setStatus] = useState({
    isNative: false,
    disabled: false,
    checkedIcon: 'aiOutlineCheck',
    intermediateIcon: 'aiOutlineLine'
  })
  const setState = overrideState => setStatus({...state, ...overrideState})
  const {isNative, disabled, checkedIcon, intermediateIcon} = state

  return (
    <div className="sui-StudioPreview">
      <H1>Checkbox</H1>
      <Paragraph>
        The Checkbox component is used in forms when a user needs to select
        multiple values from several options.
      </Paragraph>
      <Article className={CLASS_SECTION}>
        <H2>Values</H2>
        <Paragraph>
          checkbox have 3 different possible values combining the prop{' '}
          <Code>checked</Code> and the boolean prop <Code>intermediate</Code>
        </Paragraph>
        <Paragraph>
          For native checkbox look and feel purposes we have{' '}
          <Code>isNative</Code> boolean prop also.
        </Paragraph>
        <Grid cols={4} gutter={[10, 10]}>
          <Cell />
          {Object.entries({
            checked: {checked: true},
            intermediate: {intermediate: true},
            unchecked: {checked: false}
          }).map(([label, props], index) => (
            <Fragment key={index}>
              <Cell style={flexCenteredStyle}>
                <Label>{label}</Label>
              </Cell>
            </Fragment>
          ))}
          {Object.entries({
            customized: {isNative: false},
            native: {isNative: true}
          }).map(([label, props1], index1) => (
            <Fragment key={index1}>
              <Cell
                style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
              >
                <Label>{label}</Label>
              </Cell>
              {Object.entries({
                checked: {checked: true},
                intermediate: {intermediate: true},
                unchecked: {checked: false}
              }).map(([label, props2], index2) => (
                <Fragment key={index2}>
                  <Cell style={flexCenteredStyle}>
                    <AtomCheckbox
                      id={`${index1}-${index2}`}
                      checkedIcon={() => ICONS.aiOutlineCheck}
                      intermediateIcon={IconHalfCheck}
                      {...{...props1, ...props2}}
                    />
                  </Cell>
                </Fragment>
              ))}
            </Fragment>
          ))}
        </Grid>
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Other extra props</H2>
        <UnorderedList>
          <ListItem>
            <Code>disabled</Code>: for disabling the checkbox usages.
          </ListItem>
        </UnorderedList>
        Tick icons can be fully customized using the props:
        <UnorderedList>
          <ListItem>
            <Code>checkedIcon</Code>: icon displayed when checkbox status is
            checked
          </ListItem>
          <ListItem>
            <Code>intermediateIcon</Code>: icon displayed when checkbox status
            is checked unchecked and <Code>intermediate</Code> prop i true
          </ListItem>
        </UnorderedList>
        <Grid cols={7} gutter={[10, 10]}>
          {Object.entries({
            checked: {checked: true},
            intermediate: {intermediate: true},
            unchecked: {checked: false}
          }).map(([label, props], index) => (
            <Fragment key={index}>
              <Cell style={flexCenteredStyle}>
                <Label>{label}</Label>
              </Cell>
            </Fragment>
          ))}
          <Cell style={flexCenteredStyle}>
            <Label>disabled</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>isNative</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>{!isNative && 'checkedIcon'}</Label>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <Label>{!isNative && 'intermediateIcon'}</Label>
          </Cell>
        </Grid>
        <Grid cols={7} gutter={[10, 10]}>
          {Object.entries({
            checked: {checked: true},
            intermediate: {intermediate: true},
            unchecked: {checked: false}
          }).map(([label, props2], index2) => (
            <Fragment key={index2}>
              <Cell style={flexCenteredStyle}>
                <AtomCheckbox
                  id={index2}
                  checkedIcon={() => ICONS[checkedIcon] || null}
                  intermediateIcon={() => ICONS[intermediateIcon] || null}
                  isNative={isNative}
                  disabled={disabled}
                  {...{...props2}}
                />
              </Cell>
            </Fragment>
          ))}
          <Cell style={flexCenteredStyle}>
            <RadioButton
              fullWidth
              value="disabled"
              label={disabled.toString()}
              onClick={(_, value) => setState({disabled: value === 'disabled'})}
            />
          </Cell>
          <Cell style={flexCenteredStyle}>
            <RadioButton
              fullWidth
              value="native"
              label={isNative.toString()}
              onClick={(_, value) => setState({isNative: value === 'native'})}
            />
          </Cell>
          <Cell>
            {!isNative && (
              <RadioButtonGroup
                value={checkedIcon}
                fullWidth
                onChange={value => setState({checkedIcon: value})}
              >
                <RadioButton
                  value="aiOutlineCheck"
                  label={ICONS.aiOutlineCheck}
                />
                <RadioButton
                  value="aiOutlineClose"
                  label={ICONS.aiOutlineClose}
                />
              </RadioButtonGroup>
            )}
          </Cell>
          <Cell>
            {!isNative && (
              <RadioButtonGroup
                value={intermediateIcon}
                fullWidth
                onChange={value => setState({intermediateIcon: value})}
              >
                <RadioButton
                  value="aiOutlineLine"
                  label={ICONS.aiOutlineLine}
                />
                <RadioButton
                  value="aiOutlineInfo"
                  label={ICONS.aiOutlineInfo}
                />
                <RadioButton
                  value="aiOutlinePause"
                  label={ICONS.aiOutlinePause}
                />
                <RadioButton
                  value="aiOutlinePlus"
                  label={ICONS.aiOutlinePlus}
                />
              </RadioButtonGroup>
            )}
          </Cell>
        </Grid>
      </Article>
    </div>
  )
}

export default Demo
