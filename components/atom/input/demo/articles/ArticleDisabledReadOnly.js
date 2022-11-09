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

import AtomInput from '../../src/index.js'

const ArticleDisabledReadOnly = ({className}) => {
  return (
    <Article className={className}>
      <H2>Disable and ReadOnly</H2>
      <Paragraph>
        Input provides two different modes that blocks the component behavior
        the difference between them is the appearance.
      </Paragraph>
      <Paragraph>
        The developer can disable the component using the <Code>disabled</Code>{' '}
        boolean prop. It can be blocked also using the <Code>readOnly</Code>{' '}
        boolean propm, but it will look like the default input.
      </Paragraph>
      <Grid gutter={[8, 8]} cols={2}>
        <Cell>
          <Label>disabed</Label>
        </Cell>
        <Cell>
          <Label>readOnly</Label>
        </Cell>
        <Cell>
          <AtomInput value="disabled" disabled />
        </Cell>
        <Cell>
          <AtomInput value="readOnly" readOnly />
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleDisabledReadOnly.propTypes = {
  className: PropTypes.string
}

ArticleDisabledReadOnly.displayName = 'ArticleDisabledReadOnly'

export default ArticleDisabledReadOnly
