import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, H3, Label, Paragraph} from '@s-ui/documentation-library'

import AtomCheckbox from '../../src/index.js'
import {flexCenteredStyle, ICONS} from '../settings.js'

const ArticleDisabled = ({className}) => (
  <Article className={className}>
    <H2>Disabled and read-only</H2>
    <Paragraph>
      Checkbox can remain disabled in order avoid its triggering behavior
      <Code>Disabled</Code> boolean prop can give this option.
    </Paragraph>
    <H3>disabled</H3>
    <Paragraph>
      The Boolean disabled attribute, when present, makes the element not mutable, focusable, or even submitted with the
      form. The user can neither edit nor focus on the control, nor its form control descendants.
    </Paragraph>
    <Paragraph>
      If the disabled attribute is specified on a form control, the element and its form control descendants do not
      participate in constraint validation. Often browsers grey out such controls and it won't receive any browsing
      events, like mouse clicks or focus-related ones.
    </Paragraph>
    <Grid cols={4} gutter={[10, 10]}>
      <Cell />
      {Object.entries({
        checked: {checked: true},
        indeterminate: {indeterminate: true},
        unchecked: {checked: false}
      }).map(([label, props], index) => (
        <Fragment key={index}>
          <Cell style={flexCenteredStyle}>
            <Label>{label}</Label>
          </Cell>
        </Fragment>
      ))}
      {Object.entries({
        native: {},
        customized: {
          checkedIcon: ICONS.AiOutlineCheck,
          indeterminateIcon: ICONS.AiOutlineLine,
          uncheckedIcon: ICONS.EmptyIcon
        }
      }).map(([label, props1], index1) => (
        <Fragment key={index1}>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>{label}</Label>
          </Cell>
          {Object.entries({
            checked: {checked: true},
            indeterminate: {indeterminate: true},
            unchecked: {checked: false}
          }).map(([label, props2], index2) => (
            <Fragment key={index2}>
              <Cell style={flexCenteredStyle}>
                <AtomCheckbox id={`${index1}-${index2}`} {...{...props1, ...props2}} disabled />
              </Cell>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Grid>
    <H3>readOnly</H3>
    <Paragraph>
      The Boolean <Code>readOnly</Code> attribute, when present, makes the element not mutable, meaning the user can not
      edit the control.
    </Paragraph>
    <Paragraph>
      The difference between disabled and readonly is that read-only controls can still function and are still
      focusable, whereas disabled controls can not receive focus and are not submitted with the form and generally do
      not function as controls until they are enabled.
    </Paragraph>
    <Grid cols={4} gutter={[10, 10]}>
      <Cell />
      {Object.entries({
        checked: {checked: true},
        indeterminate: {indeterminate: true},
        unchecked: {checked: false}
      }).map(([label, props], index) => (
        <Fragment key={index}>
          <Cell style={flexCenteredStyle}>
            <Label>{label}</Label>
          </Cell>
        </Fragment>
      ))}
      {Object.entries({
        native: {},
        customized: {
          checkedIcon: ICONS.AiOutlineCheck,
          indeterminateIcon: ICONS.AiOutlineLine,
          uncheckedIcon: ICONS.EmptyIcon
        }
      }).map(([label, props1], index1) => (
        <Fragment key={index1}>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>{label}</Label>
          </Cell>
          {Object.entries({
            checked: {checked: true},
            indeterminate: {indeterminate: true},
            unchecked: {checked: false}
          }).map(([label, props2], index2) => (
            <Fragment key={index2}>
              <Cell style={flexCenteredStyle}>
                <AtomCheckbox id={`${index1}-${index2}`} {...{...props1, ...props2}} readOnly />
              </Cell>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Grid>
    <Paragraph>
      Because a read-only field cannot have it's value changed by a user interaction, required does not have any effect
      on inputs with the readonly attribute also specified.
    </Paragraph>
    <Paragraph>The only way to modify dynamically the value of the readonly attribute is through a script.</Paragraph>
  </Article>
)

ArticleDisabled.displayName = 'ArticleDisabled'

ArticleDisabled.propTypes = {
  className: PropTypes.string
}

export default ArticleDisabled
