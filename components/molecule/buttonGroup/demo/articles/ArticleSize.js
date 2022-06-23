import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  ListItem,
  Paragraph,
  UnorderedList
} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import MoleculeButtonGroup, {moleculeButtonGroupSizes} from '../../src/index.js'

const ArticleSize = ({className}) => {
  return (
    <Article className={className}>
      <H2>Size</H2>
      <Paragraph>
        There are {Object.values(moleculeButtonGroupSizes).length} different
        designs available for grouping atomButtons. They are provided by
        exported <Code>moleculeButtonGroupSizes</Code> enum:
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeButtonGroupSizes).map(
          ([moleculeButtonGroupSizeKey, moleculeButtonGroupSizeValue]) => (
            <ListItem key={moleculeButtonGroupSizeKey}>
              <Code>{moleculeButtonGroupSizeKey}</Code>:{' '}
              {moleculeButtonGroupSizeValue}
            </ListItem>
          )
        )}
      </UnorderedList>

      <Grid
        gutter={[8, 8]}
        cols={Object.values(moleculeButtonGroupSizes).length}
      >
        {Object.entries(moleculeButtonGroupSizes).map(
          ([moleculeButtonGroupSizeKey, moleculeButtonGroupSizeValue]) => (
            <Cell key={moleculeButtonGroupSizeKey}>
              <Label>{moleculeButtonGroupSizeValue}</Label>
            </Cell>
          )
        )}
        {Object.entries(moleculeButtonGroupSizes).map(
          ([moleculeButtonGroupSizeKey, moleculeButtonGroupSizeValue]) => (
            <Cell key={moleculeButtonGroupSizeKey}>
              <MoleculeButtonGroup size={moleculeButtonGroupSizeValue}>
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

ArticleSize.displayName = 'ArticleSize'

ArticleSize.propTypes = {
  className: PropTypes.string
}

export default ArticleSize
