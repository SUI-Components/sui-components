import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import AtomCheckbox from '../../src/index.js'
import {CHECKBOX_SIZE, flexCenteredStyle, ICONS} from '../settings.js'

const ArticleSizes = ({className}) => (
  <Article className={className}>
    <H2>Sizes</H2>
    <Paragraph>
      There are 2 options for <Code>size</Code> medium being the default one. To change it to small one has to pass the
      value <Code>"small"</Code> to the size prop.
    </Paragraph>
    <Grid cols={4} gutter={[10, 10]}>
      <Cell />
      {Object.entries({
        checked: {checked: true},
        indeterminate: {indeterminate: true},
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
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>{size || 'UNDEFINED'}</Label>
          </Cell>
          {Object.entries({
            checked: {checked: true},
            indeterminate: {indeterminate: true},
            unchecked: {checked: false}
          }).map(([label, {checked: propChecked, indeterminate: propIndeterminate}], index2) => (
            <Fragment key={index2}>
              <Cell style={flexCenteredStyle}>
                <AtomCheckbox
                  id={`${index}-${index2}`}
                  checkedIcon={ICONS.AiOutlineCheck}
                  indeterminateIcon={ICONS.AiOutlineLine}
                  checked={propChecked}
                  indeterminate={propIndeterminate}
                  size={size}
                />
              </Cell>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Grid>
  </Article>
)

ArticleSizes.displayName = 'ArticleSizes'
ArticleSizes.propTypes = {
  className: PropTypes.string
}

export default ArticleSizes
