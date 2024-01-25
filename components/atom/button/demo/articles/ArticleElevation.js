import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import Button from '../../src/index.js'
import {atomButtonElevationsIterator, flexCenteredStyle} from '../settings.js'

const ArticleElevation = ({className}) => {
  return (
    <Article className={className}>
      <H2>Elevation</H2>
      <Paragraph>
        Use <Code>elevation</Code> prop to display a shadow around the button. If it's not set no shadow will be shown.
      </Paragraph>
      <Paragraph>Button can have {atomButtonElevationsIterator.length} elevations:</Paragraph>
      <UnorderedList>
        {atomButtonElevationsIterator.map(([{key, elevation}]) => (
          <ListItem key={key}>
            <Code>atomButtonElevation.{key}</Code>: "{elevation}"
          </ListItem>
        ))}
      </UnorderedList>
      <Grid cols={atomButtonElevationsIterator.length} gutter={10}>
        {atomButtonElevationsIterator.map(([{key, elevation}]) => (
          <Cell key={key}>
            <Grid cols={1} gutter={10}>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Label>{key}</Label>
              </Cell>
              <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
                <Button elevation={elevation}>Button</Button>
              </Cell>
            </Grid>
          </Cell>
        ))}
      </Grid>
    </Article>
  )
}

ArticleElevation.displayName = 'ArticleElevation'

ArticleElevation.propTypes = {
  className: PropTypes.string
}

export default ArticleElevation
