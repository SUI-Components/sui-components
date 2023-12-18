import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import Button from '../../src/index.js'
import {atomButtonAlignmentIterator, flexCenteredStyle} from '../settings.js'

const ArticleAlignment = ({className}) => {
  return (
    <Article className={className}>
      <H2>Alignment</H2>
      <Paragraph>
        Button content alignment, under the prop <Code>alignment</Code> exported from <Code>atomButtonAlignment</Code>
      </Paragraph>
      <Paragraph>Button can have {atomButtonAlignmentIterator.length} alignments:</Paragraph>
      <UnorderedList>
        {atomButtonAlignmentIterator.map(([{key, alignment}]) => (
          <ListItem key={key}>
            <Code>atomButtonAlignment.{key}</Code>: "{alignment}"
          </ListItem>
        ))}
      </UnorderedList>
      <Grid cols={atomButtonAlignmentIterator.length} gutter={[10, 10]}>
        {atomButtonAlignmentIterator.map(([{key, alignment}]) => (
          <Cell key={key}>
            <Grid cols={1} gutter={10}>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Label>{key}</Label>
              </Cell>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Button alignment={alignment} fullWidth>
                  Button
                </Button>
              </Cell>
            </Grid>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleAlignment.displayName = 'ArticleAlignment'

ArticleAlignment.propTypes = {
  className: PropTypes.string
}

export default ArticleAlignment
