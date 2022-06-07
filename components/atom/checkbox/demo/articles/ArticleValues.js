import {Fragment} from 'react'
import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import AtomCheckbox from '../../src/index.js'
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
        customized: {isNative: false},
        native: {isNative: true}
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
                  checkedIcon={() => ICONS.aiOutlineCheck}
                  indeterminateIcon={() => ICONS.aiOutlineLine}
                  {...{...props1, ...props2}}
                />
              </Cell>
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
