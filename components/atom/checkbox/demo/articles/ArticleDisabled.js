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

const ArticleDisabled = ({className}) => (
  <Article className={className}>
    <H2>Disabled</H2>
    <Paragraph>
      Checkbox can remain disabled in order avoid its triggering behavior
      <Code>Disabled</Code> boolean prop can give this option.
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
)

ArticleDisabled.displayName = 'ArticleDisabled'

ArticleDisabled.propTypes = {
  className: PropTypes.string
}

export default ArticleDisabled
