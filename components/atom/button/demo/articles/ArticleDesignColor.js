import {Fragment} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'

import AtomButton from '../../src/index.js'
import {
  atomButtonColorsIterator,
  atomButtonDesignsIterator,
  atomButtonSocialColorsIterator,
  flexCenteredStyle
} from '../settings.js'

const ArticleDesignColor = ({className}) => {
  return (
    <Article className={className}>
      <H2>Colors and Designs</H2>
      <Paragraph>
        These are the available <Code>color</Code> types of button, which are solid by default for each{' '}
        <Code>design</Code>.
      </Paragraph>
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
                <AtomButton design={design} color={color}>
                  Button
                </AtomButton>
              </Cell>
            ))}
          </Fragment>
        ))}
      </Grid>
      <Paragraph>All the designs can also get social network color intents</Paragraph>
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
                <AtomButton design={design} color={color}>
                  Button
                </AtomButton>
              </Cell>
            ))}
          </Fragment>
        ))}
      </Grid>
    </Article>
  )
}

ArticleDesignColor.displayName = 'ArticleDesignColor'

ArticleDesignColor.propTypes = {
  className: PropTypes.string
}

export default ArticleDesignColor
