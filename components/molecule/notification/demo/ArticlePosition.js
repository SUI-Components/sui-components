import {useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Button,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  ListItem,
  Paragraph,
  UnorderedList
} from '@s-ui/documentation-library'

import MoleculeNotification, {moleculeNotificationPosition} from '../src/index.js'

const ArticlePosition = ({className}) => {
  const [index, setIndex] = useState(0)
  const [positionOpened, setPositionOpened] = useState([])
  return (
    <Article className={className}>
      <H2>Position</H2>
      <Paragraph>position</Paragraph>
      <UnorderedList>
        {Object.entries(moleculeNotificationPosition).map(
          ([moleculeNotificationPositionKey, moleculeNotificationPositionValue]) => (
            <ListItem key={moleculeNotificationPositionKey}>
              <Code>moleculeNotificationPosition.{moleculeNotificationPositionKey}</Code>: '
              {moleculeNotificationPositionValue}'
            </ListItem>
          )
        )}
      </UnorderedList>
      <Grid cols={Object.keys(moleculeNotificationPosition).length} gutter={[8, 8]}>
        <Cell span={Object.keys(moleculeNotificationPosition).length}>
          <Button onClick={() => setIndex(index + 1)}>Reset</Button>
        </Cell>
        {Object.entries(moleculeNotificationPosition).map(
          ([moleculeNotificationPositionKey, moleculeNotificationPositionValue]) => (
            <Cell key={moleculeNotificationPositionKey}>
              <Label>{moleculeNotificationPositionValue}</Label>
            </Cell>
          )
        )}
        {Object.entries(moleculeNotificationPosition).map(
          ([moleculeNotificationPositionKey, moleculeNotificationPositionValue]) => (
            <Cell key={`${moleculeNotificationPositionKey}-${index}`}>
              {!positionOpened.includes(moleculeNotificationPositionKey) && (
                <Button
                  onClick={() =>
                    setPositionOpened([
                      ...[...positionOpened].filter(key => key !== moleculeNotificationPositionKey),
                      moleculeNotificationPositionKey
                    ])
                  }
                >
                  show
                </Button>
              )}
              <MoleculeNotification
                position={moleculeNotificationPositionValue}
                show={positionOpened.includes(moleculeNotificationPositionKey)}
                onClose={() =>
                  setPositionOpened([...positionOpened].filter(key => key !== moleculeNotificationPositionKey))
                }
              >
                {moleculeNotificationPositionValue}
              </MoleculeNotification>
            </Cell>
          )
        )}
      </Grid>
    </Article>
  )
}

ArticlePosition.displayName = 'ArticlePosition'

ArticlePosition.propTypes = {
  className: PropTypes.string
}

export default ArticlePosition
