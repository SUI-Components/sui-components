import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import Button from '../../src/index.js'
import {atomButtonSizesIterator, flexCenteredStyle} from '../settings.js'

const ArticleSize = ({className}) => {
  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>Button can have {atomButtonSizesIterator.length} extra sizes:</Paragraph>
      <UnorderedList>
        {atomButtonSizesIterator.map(([{key, size}]) => (
          <ListItem key={key}>
            <Code>atomButtonSizes.{key}</Code>: "{size}"
          </ListItem>
        ))}
        <ListItem>undefined: equivalent to a medium size</ListItem>
      </UnorderedList>
      <Grid cols={atomButtonSizesIterator.length} gutter={10}>
        {atomButtonSizesIterator.map(([{key, size}]) => (
          <Cell key={key}>
            <Grid cols={1} gutter={10}>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Label>{key}</Label>
              </Cell>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Button size={size}>Button</Button>
              </Cell>
            </Grid>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleSize.displayName = 'ArticleSize'

ArticleSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSize
