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

import MoleculeNotification, {moleculeNotificationAutoClose} from '../src/index.js'

const ArticleAutoClose = ({className}) => {
  const [index, setIndex] = useState(0)
  return (
    <Article className={className}>
      <H2>Auto-Close</H2>
      <Paragraph>
        The component provides an <Code>autoClose</Code> (enum) prop in order to set the desired autoclose behavior. The
        options can be selected using the <Code>moleculeNotificationAutoClose</Code> enum.
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeNotificationAutoClose).map(
          ([moleculeNotificationAutoCloseKey, moleculeNotificationAutoCloseValue]) => (
            <ListItem key={moleculeNotificationAutoCloseKey}>
              <Code>moleculeNotificationAutoClose.{moleculeNotificationAutoCloseKey}</Code>: '
              {moleculeNotificationAutoCloseValue}'
            </ListItem>
          )
        )}
      </UnorderedList>
      <Grid cols={4} gutter={[8, 8]}>
        <Cell span={4}>
          <Button onClick={() => setIndex(index + 1)}>Reset</Button>
        </Cell>
        {Object.entries(moleculeNotificationAutoClose).map(
          ([moleculeNotificationAutoCloseKey, moleculeNotificationAutoCloseValue]) => (
            <Cell key={moleculeNotificationAutoCloseKey}>
              <Label>{moleculeNotificationAutoCloseValue}</Label>
            </Cell>
          )
        )}
        {Object.entries(moleculeNotificationAutoClose).map(
          ([moleculeNotificationAutoCloseKey, moleculeNotificationAutoCloseValue]) => (
            <Cell key={`${moleculeNotificationAutoCloseKey}-${index}`}>
              <MoleculeNotification autoClose={moleculeNotificationAutoCloseValue}>
                {moleculeNotificationAutoCloseValue}
              </MoleculeNotification>
            </Cell>
          )
        )}
      </Grid>
    </Article>
  )
}

ArticleAutoClose.displayName = 'ArticleAutoClose'

ArticleAutoClose.propTypes = {
  className: PropTypes.string
}

export default ArticleAutoClose
