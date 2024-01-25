import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import MoleculeNotification, {moleculeNotificationAlignItems} from '../src/index.js'

const ArticleAlignItems = ({className}) => {
  return (
    <Article className={className}>
      <H2>Align Items</H2>
      <Paragraph>
        Items in the notification can be vertically aligned with the <Code>alignItems</Code> (enum) prop
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeNotificationAlignItems).map(
          ([moleculeNotificationAlignItemsKey, moleculeNotificationAlignItemsValue]) => (
            <ListItem key={moleculeNotificationAlignItemsKey}>
              <Code>
                moleculeNotificationAlignItems.
                {moleculeNotificationAlignItemsKey}
              </Code>
              : '{moleculeNotificationAlignItemsValue}'
            </ListItem>
          )
        )}
      </UnorderedList>
      <Grid gutter={[8, 8]} cols={Object.keys(moleculeNotificationAlignItems).length + 1}>
        {[['undefined', undefined], ...Object.entries(moleculeNotificationAlignItems)].map(
          ([moleculeNotificationAlignItemsKey, moleculeNotificationAlignItemsValue]) => (
            <Cell key={moleculeNotificationAlignItemsKey}>
              <MoleculeNotification autoClose="manual" alignItems={moleculeNotificationAlignItemsValue}>
                {`${moleculeNotificationAlignItemsValue}`}
              </MoleculeNotification>
            </Cell>
          )
        )}
      </Grid>
    </Article>
  )
}

ArticleAlignItems.displayName = 'ArticleAlignItems'

ArticleAlignItems.propTypes = {
  className: PropTypes.string
}

export default ArticleAlignItems
