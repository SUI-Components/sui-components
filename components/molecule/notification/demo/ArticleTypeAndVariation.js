import {Fragment} from 'react'

import MoleculeNotification, {
  moleculeNotificationTypes,
  moleculeNotificationVariations
} from 'components/molecule/notification/src/index.js'
import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import {getButtons} from './utils.js'

const ArticleTypeAndVariation = ({className}) => {
  return (
    <Article className={className}>
      <H2>Type and Variation</H2>
      <Paragraph>
        Notification admits the combination of <Code>type</Code> and <Code>variation</Code> (enum) props.
      </Paragraph>
      <Grid cols={Object.keys(moleculeNotificationVariations).length + 1} gutter={[8, 8]}>
        {Object.entries(moleculeNotificationTypes).map(
          ([moleculeNotificationTypeKey, moleculeNotificationTypeValue]) => (
            <Fragment key={moleculeNotificationTypeKey}>
              <Cell>
                <Label>{moleculeNotificationTypeValue}</Label>
              </Cell>
              {Object.entries(moleculeNotificationVariations).map(
                ([moleculeNotificationVariationKey, moleculeNotificationVariationValue]) => (
                  <Cell key={moleculeNotificationVariationKey}>
                    <MoleculeNotification
                      autoClose="manual"
                      type={moleculeNotificationTypeValue}
                      variation={moleculeNotificationVariationValue}
                      buttons={getButtons(moleculeNotificationVariationValue, moleculeNotificationTypeValue)}
                    >
                      type: {moleculeNotificationTypeValue}
                      <br />
                      variation: {moleculeNotificationVariationValue}
                    </MoleculeNotification>
                  </Cell>
                )
              )}
            </Fragment>
          )
        )}
      </Grid>
      <Paragraph>The package provides both enums:</Paragraph>
      <Code>moleculeNotificationTypes</Code>
      <UnorderedList>
        {Object.entries(moleculeNotificationTypes).map(
          ([moleculeNotificationTypeKey, moleculeNotificationTypeValue]) => (
            <ListItem key={moleculeNotificationTypeKey}>
              <Code>moleculeNotificationTypes.{moleculeNotificationTypeKey}</Code>: '{moleculeNotificationTypeValue}'
            </ListItem>
          )
        )}
      </UnorderedList>
      <Code>moleculeNotificationVariations</Code>
      <UnorderedList>
        {Object.entries(moleculeNotificationVariations).map(
          ([moleculeNotificationVariationKey, moleculeNotificationVariationValue]) => (
            <ListItem key={moleculeNotificationVariationKey}>
              <Code>
                moleculeNotificationVariations.
                {moleculeNotificationVariationKey}
              </Code>
              : '{moleculeNotificationVariationValue}'
            </ListItem>
          )
        )}
      </UnorderedList>
    </Article>
  )
}

ArticleTypeAndVariation.displayName = 'ArticleTypeAndVariation'
ArticleTypeAndVariation.propTypes = {
  className: PropTypes.string
}

export default ArticleTypeAndVariation
