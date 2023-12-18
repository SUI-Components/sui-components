import PropTypes from 'prop-types'

import {
  Article,
  Box,
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

import MoleculeButtonGroup, {moleculeButtonGroupDesigns} from '../../src/index.js'
import ButtonDesignByState from '../ButtonDesignByState.js'

const ArticleDesign = ({className}) => {
  return (
    <Article className={className}>
      <H2>Design and negative</H2>
      <Paragraph>
        There are {Object.values(moleculeButtonGroupDesigns).length} different designs available for grouping
        atomButtons. They are provided by exported <Code>moleculeButtonGroupDesigns</Code> enum:
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeButtonGroupDesigns).map(
          ([moleculeButtonGroupDesignKey, moleculeButtonGroupDesignValue]) => (
            <ListItem key={moleculeButtonGroupDesignKey}>
              <Code>{moleculeButtonGroupDesignKey}</Code>: {moleculeButtonGroupDesignValue}
            </ListItem>
          )
        )}
      </UnorderedList>
      <Paragraph>
        With the <Code>negative</Code> boolean prop we can provide an alternative look an feel for each design (commonly
        used for dark mode or dark backgrounds).
      </Paragraph>
      <Grid cols={[8, 0]}>
        <Cell>
          <Label>light background</Label>
        </Cell>
        <Cell>
          <Box color="#EFEFEF">
            <Grid gutter={[8, 8]} cols={Object.values(moleculeButtonGroupDesigns).length}>
              {Object.entries(moleculeButtonGroupDesigns).map(
                ([moleculeButtonGroupDesignKey, moleculeButtonGroupDesignValue]) => (
                  <Cell key={moleculeButtonGroupDesignKey}>
                    <Label>{moleculeButtonGroupDesignValue}</Label>
                  </Cell>
                )
              )}
              {Object.entries(moleculeButtonGroupDesigns).map(
                ([moleculeButtonGroupDesignKey, moleculeButtonGroupDesignValue]) => (
                  <Cell key={moleculeButtonGroupDesignKey}>
                    <MoleculeButtonGroup design={moleculeButtonGroupDesignValue}>
                      <AtomButton>A</AtomButton>
                      <AtomButton>B</AtomButton>
                      <AtomButton>C</AtomButton>
                    </MoleculeButtonGroup>
                  </Cell>
                )
              )}
              {Object.entries(moleculeButtonGroupDesigns).map(
                ([moleculeButtonGroupDesignKey, moleculeButtonGroupDesignValue]) => (
                  <Cell key={moleculeButtonGroupDesignKey}>
                    <MoleculeButtonGroup design={moleculeButtonGroupDesignValue} negative>
                      <AtomButton>A</AtomButton>
                      <AtomButton>B</AtomButton>
                      <AtomButton>C</AtomButton>
                    </MoleculeButtonGroup>
                  </Cell>
                )
              )}
            </Grid>
          </Box>
        </Cell>
        <Cell>
          <Label>dark background</Label>
        </Cell>
        <Cell>
          <Box mode="dark" color="#222">
            <Grid gutter={[8, 8]} cols={Object.values(moleculeButtonGroupDesigns).length}>
              {Object.entries(moleculeButtonGroupDesigns).map(
                ([moleculeButtonGroupDesignKey, moleculeButtonGroupDesignValue]) => (
                  <Cell key={moleculeButtonGroupDesignKey}>
                    <Label>{moleculeButtonGroupDesignValue}</Label>
                  </Cell>
                )
              )}
              {Object.entries(moleculeButtonGroupDesigns).map(
                ([moleculeButtonGroupDesignKey, moleculeButtonGroupDesignValue]) => (
                  <Cell key={moleculeButtonGroupDesignKey}>
                    <MoleculeButtonGroup design={moleculeButtonGroupDesignValue}>
                      <AtomButton>A</AtomButton>
                      <AtomButton>B</AtomButton>
                      <AtomButton>C</AtomButton>
                    </MoleculeButtonGroup>
                  </Cell>
                )
              )}
              {Object.entries(moleculeButtonGroupDesigns).map(
                ([moleculeButtonGroupDesignKey, moleculeButtonGroupDesignValue]) => (
                  <Cell key={moleculeButtonGroupDesignKey}>
                    <MoleculeButtonGroup design={moleculeButtonGroupDesignValue} negative>
                      <AtomButton>A</AtomButton>
                      <AtomButton>B</AtomButton>
                      <AtomButton>C</AtomButton>
                    </MoleculeButtonGroup>
                  </Cell>
                )
              )}
            </Grid>
          </Box>
        </Cell>
      </Grid>
      <Paragraph>We an also combine different design of buttons on a group</Paragraph>
      <ButtonDesignByState />
    </Article>
  )
}

ArticleDesign.displayName = 'ArticleDesign'

ArticleDesign.propTypes = {
  className: PropTypes.string
}

export default ArticleDesign
