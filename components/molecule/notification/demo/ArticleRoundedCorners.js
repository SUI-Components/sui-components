import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  ListItem,
  Paragraph,
  UnorderedList
} from '@s-ui/documentation-library'

import MoleculeNotification, {
  moleculeNotificationBorderSizes
} from '../src/index.js'

const ArticleRoundedCorners = ({className}) => {
  return (
    <Article className={className}>
      <H2>Rounded corners</H2>
      <Paragraph>
        The Notification borders can be rounded using the{' '}
        <Code>roundedBorders</Code> (enum) prop
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeNotificationBorderSizes).map(
          ([
            moleculeNotificationRoundedCornerKey,
            moleculeNotificationRoundedCornerValue
          ]) => (
            <ListItem key={moleculeNotificationRoundedCornerKey}>
              <Code>
                moleculeNotificationBorderSizes.
                {moleculeNotificationRoundedCornerKey}
              </Code>
              : '{moleculeNotificationRoundedCornerValue}'
            </ListItem>
          )
        )}
      </UnorderedList>
      <Grid
        gutter={[8, 8]}
        cols={Object.keys(moleculeNotificationBorderSizes).length + 1}
      >
        {[
          ['undefined', undefined],
          ...Object.entries(moleculeNotificationBorderSizes)
        ].map(
          ([
            moleculeNotificationRoundedCornerKey,
            moleculeNotificationRoundedCornerValue
          ]) => (
            <Cell key={moleculeNotificationRoundedCornerKey}>
              <MoleculeNotification
                autoClose="manual"
                roundedCorners={moleculeNotificationRoundedCornerValue}
              >
                {`${moleculeNotificationRoundedCornerValue}`}
              </MoleculeNotification>
            </Cell>
          )
        )}
      </Grid>
    </Article>
  )
}

ArticleRoundedCorners.displayName = 'ArticleRoundedCorners'

ArticleRoundedCorners.propTypes = {
  className: PropTypes.string
}

export default ArticleRoundedCorners
