import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import MoleculeButtonGroup from '../../src/index.js'

const ArticleVertical = ({className}) => {
  return (
    <Article className={className}>
      <H2>Vertical</H2>
      <Paragraph>Vertical layout for Buttons</Paragraph>
      <Grid gutter={[8, 8]} cols={2}>
        <Cell>
          <MoleculeButtonGroup isVertical spaced>
            <AtomButton>A</AtomButton>
            <AtomButton>B</AtomButton>
            <AtomButton>C</AtomButton>
          </MoleculeButtonGroup>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleVertical.displayName = 'ArticleVertical'

ArticleVertical.propTypes = {
  className: PropTypes.string
}

export default ArticleVertical
