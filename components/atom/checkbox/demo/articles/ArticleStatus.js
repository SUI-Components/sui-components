import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, H3, Label, Paragraph} from '@s-ui/documentation-library'

import AtomCheckbox from '../../src/index.js'
import {CHECKBOX_STATUS, flexCenteredStyle, ICONS} from '../settings.js'

const ArticleStatus = ({className}) => (
  <Article className={className}>
    <H2>Status</H2>
    <Paragraph>
      Checkbox has {CHECKBOX_STATUS.length - 1} different values. It can be used giving a valid <Code>status</Code> prop
      to the component.
    </Paragraph>
    <H3>Customized</H3>
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
      {CHECKBOX_STATUS.map((status, index) => (
        <Fragment key={index}>
          <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
            <Label>{status || 'UNDEFINED'}</Label>
          </Cell>
          {Object.entries({
            checked: {checked: true},
            indeterminate: {indeterminate: true},
            unchecked: {checked: false}
          }).map(([label, props], index2) => (
            <Fragment key={index2}>
              <Cell style={flexCenteredStyle}>
                <AtomCheckbox
                  id={`${index}-${index2}`}
                  checkedIcon={ICONS.AiOutlineCheck}
                  indeterminateIcon={ICONS.AiOutlineLine}
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
)

ArticleStatus.displayName = 'ArticleStatus'
ArticleStatus.propTypes = {
  className: PropTypes.string
}

export default ArticleStatus
