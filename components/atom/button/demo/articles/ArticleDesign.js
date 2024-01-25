import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import Button from '../../src/index.js'
import {atomButtonDesignsIterator, flexCenteredStyle} from '../settings.js'

const ArticleDesign = ({className}) => {
  return (
    <Article className={className}>
      <H2>Design</H2>
      <Paragraph>Button can have {Object.values(atomButtonDesignsIterator).length} designs:</Paragraph>
      <UnorderedList>
        {atomButtonDesignsIterator.map(([{key, design}]) => (
          <ListItem key={key}>
            <Code>atomButtonDesign.{key}</Code>: "{design}"
          </ListItem>
        ))}
      </UnorderedList>
      <Grid cols={Object.values(atomButtonDesignsIterator).length} gutter={10}>
        {atomButtonDesignsIterator.map(([{key, design}]) => (
          <Cell key={key}>
            <Grid cols={1} gutter={10}>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Label>{key}</Label>
              </Cell>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Button design={design}>Button</Button>
              </Cell>
            </Grid>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleDesign.displayName = 'ArticleDesign'

ArticleDesign.propTypes = {
  className: PropTypes.string
}

export default ArticleDesign
