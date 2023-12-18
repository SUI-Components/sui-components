import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import Button from '../../src/index.js'
import {atomButtonSocialColorsIterator, flexCenteredStyle} from '../settings.js'

const ArticleSocialColor = ({className}) => {
  return (
    <Article className={className}>
      <H2>Social Network Color</H2>
      <Paragraph>Button can have {atomButtonSocialColorsIterator.length} social network colors:</Paragraph>
      <UnorderedList>
        {atomButtonSocialColorsIterator.map(([{key, color}]) => (
          <ListItem key={key}>
            <Code>atomButtonColor.{key}</Code>: "{color}"
          </ListItem>
        ))}
      </UnorderedList>
      <Grid cols={atomButtonSocialColorsIterator.length} gutter={10}>
        {atomButtonSocialColorsIterator.map(([{key, color}]) => (
          <Cell key={key}>
            <Grid cols={1} gutter={10}>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Label>{key}</Label>
              </Cell>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Button color={color}>Button</Button>
              </Cell>
            </Grid>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleSocialColor.displayName = 'ArticleSocialColor'

ArticleSocialColor.propTypes = {
  className: PropTypes.string
}

export default ArticleSocialColor
