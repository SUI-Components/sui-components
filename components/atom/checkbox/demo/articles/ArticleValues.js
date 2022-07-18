import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  H3,
  H4,
  Label,
  Paragraph,
  Separator
} from '@s-ui/documentation-library'

import AtomCheckbox, {atomCheckboxStatus} from '../../src/index.js'
import {flexCenteredStyle, ICONS} from '../settings.js'

const ArticleValues = ({className}) => (
  <Article className={className}>
    <H2>Values</H2>
    <Paragraph>
      checkbox have 3 different possible values combining the prop{' '}
      <Code>checked</Code> and the boolean prop <Code>indeterminate</Code>
    </Paragraph>
    <Paragraph>
      For native checkbox look and feel purposes we have <Code>isNative</Code>{' '}
      boolean prop also.
    </Paragraph>
    <Grid cols={4} gutter={[10, 10]}>
      <Cell span={4}>
        <H3>Default</H3>
        <Separator />
      </Cell>
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
        customized: {
          checkedIcon: ICONS.AiOutlineCheck,
          indeterminateIcon: ICONS.AiOutlineLine
        },
        native: {}
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
                <AtomCheckbox
                  id={`${index1}-${index2}`}
                  {...{...props1, ...props2}}
                />
              </Cell>
            </Fragment>
          ))}
        </Fragment>
      ))}
      <Cell span={4}>
        <H3>Disabled</H3>
        <Separator />
      </Cell>
      {Object.entries({
        customized: {
          checkedIcon: ICONS.AiOutlineCheck,
          indeterminateIcon: ICONS.AiOutlineLine
        },
        native: {}
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
                <AtomCheckbox
                  id={`${index1}-${index2}`}
                  {...{...props1, ...props2}}
                  disabled
                />
              </Cell>
            </Fragment>
          ))}
        </Fragment>
      ))}
      <Cell span={4}>
        <H3>readOnly</H3>
        <Separator />
      </Cell>
      {Object.entries({
        customized: {
          checkedIcon: ICONS.AiOutlineCheck,
          indeterminateIcon: ICONS.AiOutlineLine
        },
        native: {}
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
                <AtomCheckbox
                  id={`${index1}-${index2}`}
                  {...{...props1, ...props2}}
                  readOnly
                />
              </Cell>
            </Fragment>
          ))}
        </Fragment>
      ))}
      <Cell span={4}>
        <H3>Semantic</H3>
        <Separator />
      </Cell>
      {Object.values(atomCheckboxStatus).map((status, index) => (
        <Fragment key={status}>
          <Cell span={4}>
            <H4>{status}</H4>
          </Cell>
          {Object.entries({
            customized: {
              checkedIcon: ICONS.AiOutlineCheck,
              indeterminateIcon: ICONS.AiOutlineLine
            },
            native: {}
          }).map(([label, props1], index1) => (
            <Fragment key={index1}>
              <Cell
                style={{...flexCenteredStyle, justifyContent: 'flex-start'}}
              >
                <Label>{label}</Label>
              </Cell>
              {Object.entries({
                checked: {checked: true},
                indeterminate: {indeterminate: true},
                unchecked: {checked: false}
              }).map(([label, props2], index2) => (
                <Fragment key={index2}>
                  <Cell style={flexCenteredStyle}>
                    <AtomCheckbox
                      id={`${index1}-${index2}`}
                      {...{...props1, ...props2}}
                      status={status}
                    />
                  </Cell>
                </Fragment>
              ))}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Grid>
  </Article>
)

ArticleValues.displayName = 'ArticleValues'

ArticleValues.propTypes = {
  className: PropTypes.string
}

export default ArticleValues
