import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import AtomButton from '../../src/index.js'
import {
  atomButtonColorsIterator,
  atomButtonDesignsIterator,
  atomButtonSocialColorsIterator,
  flexCenteredStyle,
  socialIconsMapper
} from '../settings.js'

const ArticleNegative = ({className}) => {
  return (
    <Article className={className}>
      <H2>Negative Colors and Designs</H2>
      <Paragraph>
        Buttons can also have the <Code>negative</Code> boolean prop for dark backgrounds.
      </Paragraph>
      <Article mode="dark">
        <Grid cols={7} gutter={10}>
          <Cell />
          {atomButtonColorsIterator.map(([{color}], index) => (
            <Cell key={index} style={flexCenteredStyle}>
              <Label>{color}</Label>
            </Cell>
          ))}
          {atomButtonDesignsIterator.map(([{design}], index) => (
            <Fragment key={index}>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Label>{design}</Label>
              </Cell>
              {atomButtonColorsIterator.map(([{color}], index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <AtomButton negative design={design} color={color}>
                    Button
                  </AtomButton>
                </Cell>
              ))}
            </Fragment>
          ))}
        </Grid>
        <br />
        <Grid cols={7} gutter={10}>
          <Cell />
          {atomButtonSocialColorsIterator.map(([{color}], index) => (
            <Cell key={index} style={flexCenteredStyle}>
              <Label>{color}</Label>
            </Cell>
          ))}
          {atomButtonDesignsIterator.map(([{design}], index) => (
            <Fragment key={index}>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Label>{design}</Label>
              </Cell>
              {atomButtonSocialColorsIterator.map(([{color}], index) => (
                <Cell key={index} style={flexCenteredStyle}>
                  <AtomButton negative leftIcon={socialIconsMapper[color]} design={design} color={color}>
                    Button
                  </AtomButton>
                </Cell>
              ))}
            </Fragment>
          ))}
        </Grid>
      </Article>
    </Article>
  )
}

ArticleNegative.displayName = 'ArticleNegative'

ArticleNegative.propTypes = {
  className: PropTypes.string
}

export default ArticleNegative
