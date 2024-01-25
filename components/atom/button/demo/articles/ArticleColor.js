import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import Button from '../../src/index.js'
import {atomButtonColorsIterator, flexCenteredStyle} from '../settings.js'

const ArticleColor = ({className}) => {
  return (
    <Article className={className}>
      <H2>Color</H2>
      <Paragraph>Button can have {atomButtonColorsIterator.length} colors:</Paragraph>
      <UnorderedList>
        {atomButtonColorsIterator.map(([{key, color}]) => (
          <ListItem key={key}>
            <Code>atomButtonColor.{key}</Code>: "{color}"
          </ListItem>
        ))}
      </UnorderedList>
      <Grid cols={atomButtonColorsIterator.length} gutter={10}>
        {atomButtonColorsIterator.map(([{key, color}]) => (
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

ArticleColor.displayName = 'ArticleColor'

ArticleColor.propTypes = {
  className: PropTypes.string
}

export default ArticleColor
