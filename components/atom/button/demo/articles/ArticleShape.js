import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import Button from '../../src/index.js'
import {atomButtonShapesIterator, flexCenteredStyle} from '../settings.js'

const ArticleShape = ({className}) => {
  return (
    <Article className={className}>
      <H2>Shape</H2>
      <Paragraph>
        Use <Code>shape</Code> prop to modify the border radius of the component.
      </Paragraph>
      <Paragraph>Button can have {atomButtonShapesIterator.length} shapes:</Paragraph>
      <UnorderedList>
        {atomButtonShapesIterator.map(([{key, shape}]) => (
          <ListItem key={key}>
            <Code>atomButtonShape.{key}</Code>: "{shape}"
          </ListItem>
        ))}
      </UnorderedList>
      <Grid cols={atomButtonShapesIterator.length} gutter={10}>
        {atomButtonShapesIterator.map(([{key, shape}]) => (
          <Cell key={key}>
            <Grid cols={1} gutter={10}>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Label>{key}</Label>
              </Cell>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Button shape={shape}>Button</Button>
              </Cell>
            </Grid>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleShape.displayName = 'ArticleShape'

ArticleShape.propTypes = {
  className: PropTypes.string
}

export default ArticleShape
