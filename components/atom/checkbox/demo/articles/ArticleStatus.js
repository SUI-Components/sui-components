import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, H3, Label, Paragraph} from '@s-ui/documentation-library'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

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
          }).map(([label, {checked, indeterminate}], index2) => (
            <Fragment key={index2}>
              <Cell style={flexCenteredStyle}>
                <AtomCheckbox
                  id={`status-${status}-checked-${checked}-${index}-${index2}`}
                  checkedIcon={ICONS.AiOutlineCheck}
                  indeterminateIcon={ICONS.AiOutlineLine}
                  aria-label={`status-${status}-checked-${checked}`}
                  {...{...{checked, indeterminate}, ...(status !== '' && {status})}}
                />
                <PrimitiveVisuallyHidden>
                  <Label
                    htmlFor={`status-${status}-checked-${checked}-${index}-${index2}`}
                  >{`status-${status}-checked-${checked}-${index}-${index2}`}</Label>
                </PrimitiveVisuallyHidden>
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
