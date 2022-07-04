/* eslint-disable no-console */
import {Fragment, useState} from 'react'

import AtomCheckbox from 'components/atom/checkbox/src'

import {
  Article,
  Cell,
  Code,
  Grid,
  H1,
  H2,
  H3,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import {
  CHECKBOX_SIZE,
  CHECKBOX_STATUS,
  CLASS_SECTION,
  flexCenteredStyle,
  ICONS
} from './settings.js'

import './index.scss'

const Demo = () => {
  const [state, setStatus] = useState({
    checkedIcon: 'aiOutlineCheck',
    intermediateIcon: 'aiOutlineLine'
  })
  const setState = overrideState => setStatus({...state, ...overrideState})
  const {checkedIcon, intermediateIcon} = state
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className="sui-StudioPreview">
      <H1>Checkbox</H1>
      <Paragraph>
        The Checkbox component is used in forms when a user needs to select
        multiple values from several options.
      </Paragraph>
      <Article className={CLASS_SECTION}>
        <H2>Default</H2>
        <Paragraph>Default style of AtomCheckbox.</Paragraph>
        <br />

        <AtomCheckbox
          id="checkBoxExample"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          checkedIcon={() => ICONS.aiOutlineCheck}
          intermediateIcon={() => ICONS.aiOutlineLine}
        />
      </Article>
      <br />
      <Article className={CLASS_SECTION}>
        <H2>Sizes</H2>
        <Paragraph>
          There are 2 options for <Code>size</Code> medium being the default
          one. To change it to small one has to pass the value{' '}
          <Code>"small"</Code> to the size prop.
        </Paragraph>
        <Grid cols={4} gutter={[10, 10]}>
          <Cell />
          {Object.entries({
            checked: {checked: true},
            intermediate: {intermediate: true},
            unchecked: {checked: false}
          }).map(([label], index2) => (
            <Fragment key={index2}>
              <Cell style={flexCenteredStyle}>
                <Label>{label}</Label>
              </Cell>
            </Fragment>
          ))}

          {CHECKBOX_SIZE.map((size, index) => (
            <Fragment key={index}>
              <Cell
                style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
              >
                <Label>{size || 'UNDEFINED'}</Label>
              </Cell>
              {Object.entries({
                checked: {checked: true},
                intermediate: {intermediate: true},
                unchecked: {checked: false}
              }).map(([label, props], index2) => (
                <Fragment key={index2}>
                  <Cell style={flexCenteredStyle}>
                    <AtomCheckbox
                      id={`${index}-${index2}`}
                      checkedIcon={() => ICONS.aiOutlineCheck}
                      intermediateIcon={() => ICONS.aiOutlineLine}
                      {...{...props}}
                      size={size}
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
                      intermediateIcon={() => ICONS.aiOutlineLine}
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
        <H2>Disabled</H2>
        <Paragraph>
          Checkbox can remain disabled in order avoid its triggering behavior
          <Code>Disabled</Code> boolean prop can give this option.
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
                      intermediateIcon={() => ICONS.aiOutlineLine}
                      disabled
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
        <H2>Status</H2>
        <Paragraph>
          Checkbox has {CHECKBOX_STATUS.length - 1} different values. It can be
          used giving a valid <Code>status</Code> prop to the component.
        </Paragraph>
        <H3>Customized</H3>
        <Grid cols={4} gutter={[10, 10]}>
          <Cell />
          {Object.entries({
            checked: {checked: true},
            intermediate: {intermediate: true},
            unchecked: {checked: false}
          }).map(([label], index2) => (
            <Fragment key={index2}>
              <Cell style={flexCenteredStyle}>
                <Label>{label}</Label>
              </Cell>
            </Fragment>
          ))}
          {CHECKBOX_STATUS.map((status, index) => (
            <Fragment key={index}>
              <Cell
                style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
              >
                <Label>{status || 'UNDEFINED'}</Label>
              </Cell>
              {Object.entries({
                checked: {checked: true},
                intermediate: {intermediate: true},
                unchecked: {checked: false}
              }).map(([label, props], index2) => (
                <Fragment key={index2}>
                  <Cell style={flexCenteredStyle}>
                    <AtomCheckbox
                      id={`${index}-${index2}`}
                      checkedIcon={() => ICONS.aiOutlineCheck}
                      intermediateIcon={() => ICONS.aiOutlineLine}
                      {...{...props}}
                      status={status}
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
        <H2>Custom icons</H2>
        <Paragraph>
          Tick icons can be fully customized using the props unless if the{' '}
          <Code>isNative</Code> flag is activated.
        </Paragraph>
        <Paragraph>
          <Code>checkedIcon</Code>: icon displayed when checkbox status is
          checked.
        </Paragraph>
        <Grid cols={6}>
          <Cell>
            <RadioButtonGroup
              value={checkedIcon}
              fullWidth
              onChange={(event, value) => setState({checkedIcon: value})}
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
          </Cell>
          <Cell style={flexCenteredStyle}>
            <AtomCheckbox
              checkedIcon={() => ICONS[checkedIcon] || null}
              intermediateIcon={() => ICONS[intermediateIcon] || null}
              checked
            />
          </Cell>
        </Grid>
        <Paragraph>
          <Code>intermediateIcon</Code>: icon displayed when checkbox status is
          checked unchecked and <Code>intermediate</Code> prop i true.
        </Paragraph>
        <Grid cols={6}>
          <Cell>
            <RadioButtonGroup
              value={intermediateIcon}
              fullWidth
              onChange={(event, value) => setState({intermediateIcon: value})}
            >
              <RadioButton value="aiOutlineLine" label={ICONS.aiOutlineLine} />
              <RadioButton value="aiOutlineInfo" label={ICONS.aiOutlineInfo} />
              <RadioButton
                value="aiOutlinePause"
                label={ICONS.aiOutlinePause}
              />
              <RadioButton value="aiOutlinePlus" label={ICONS.aiOutlinePlus} />
            </RadioButtonGroup>
          </Cell>
          <Cell style={flexCenteredStyle}>
            <AtomCheckbox
              checkedIcon={() => ICONS[checkedIcon] || null}
              intermediateIcon={() => ICONS[intermediateIcon] || null}
              intermediate
            />
          </Cell>
        </Grid>
      </Article>
    </div>
  )
}

export default Demo
