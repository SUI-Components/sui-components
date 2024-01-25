import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import MoleculeButtonGroup, {moleculeButtonGroupSpaced} from '../../src/index.js'

const ArticleSpaced = ({className}) => {
  return (
    <Article className={className}>
      <H2>Spaced</H2>
      <Paragraph>
        There are {Object.values(moleculeButtonGroupSpaced).length} types of spacing between items. They are provided by
        exported <Code>moleculeButtonGroupSpaced</Code> enum:
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeButtonGroupSpaced).map(([moleculeButtonGroupSizeKey, moleculeButtonGroupSizeValue]) => (
          <ListItem key={moleculeButtonGroupSizeKey}>
            <Code>{moleculeButtonGroupSizeKey}</Code>: {moleculeButtonGroupSizeValue}
          </ListItem>
        ))}
      </UnorderedList>
      <Grid gutter={[8, 8]} cols={Object.values(moleculeButtonGroupSpaced).length}>
        {Object.entries(moleculeButtonGroupSpaced).map(
          ([moleculeButtonGroupSpacedKey, moleculeButtonGroupSpacedValue]) => (
            <Cell key={moleculeButtonGroupSpacedKey}>
              <Label>Spaced {moleculeButtonGroupSpacedValue}</Label>
            </Cell>
          )
        )}
        {Object.entries(moleculeButtonGroupSpaced).map(
          ([moleculeButtonGroupSpacedKey, moleculeButtonGroupSpacedValue]) => (
            <Cell key={moleculeButtonGroupSpacedKey}>
              <MoleculeButtonGroup spaced={moleculeButtonGroupSpacedValue}>
                <AtomButton>A</AtomButton>
                <AtomButton>B</AtomButton>
                <AtomButton>C</AtomButton>
              </MoleculeButtonGroup>
            </Cell>
          )
        )}
      </Grid>
    </Article>
  )
}

ArticleSpaced.displayName = 'ArticleSize'

ArticleSpaced.propTypes = {
  className: PropTypes.string
}

export default ArticleSpaced
