import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph
} from '@s-ui/documentation-library'

import AtomBadge, {atomBadgeSizes} from '../src/index.js'

const ArticleSizes = ({className}) => {
  return (
    <Article className={className}>
      <H2>Sizes</H2>
      <div>
        <Paragraph>
          There are three options for <Code>size</Code>
        </Paragraph>
        <Grid cols={2} gutter={10} style={{width: 100}}>
          <Cell>
            <Label>Small</Label>
          </Cell>
          <Cell>
            <AtomBadge label="label" size={atomBadgeSizes.SMALL} />
          </Cell>
          <Cell>
            <Label>Medium</Label>
          </Cell>
          <Cell>
            <AtomBadge label="label" size={atomBadgeSizes.MEDIUM} />
          </Cell>
          <Cell>
            <Label>Large</Label>
          </Cell>
          <Cell>
            <AtomBadge label="label" size={atomBadgeSizes.LARGE} />
          </Cell>
        </Grid>
      </div>
    </Article>
  )
}

ArticleSizes.propTypes = {
  className: PropTypes.string
}

export default ArticleSizes
