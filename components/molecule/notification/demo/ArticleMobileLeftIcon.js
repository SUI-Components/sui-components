import PropTypes from 'prop-types'

import {
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Paragraph
} from '@s-ui/documentation-library'

import MoleculeNotification from '../src/index.js'

const ArticleMobileLeftIcon = ({className}) => {
  return (
    <Article className={className}>
      <H2>Mobile Left Icon</H2>
      <Paragraph>
        By default, the left icon is hidden in small devices. Anyways, if user
        wants to keep it on that view, it can be forced using{' '}
        <Code>showLeftIconMobile</Code> (boolean) prop to true.
      </Paragraph>
      <Grid gutter={[8, 8]} cols={1}>
        <Cell>
          <MoleculeNotification autoClose="manual" showLeftIconMobile>
            showLeftIconMobile = true
          </MoleculeNotification>
        </Cell>
        <Cell>
          <MoleculeNotification autoClose="manual" showLeftIconMobile={false}>
            showLeftIconMobile = false
          </MoleculeNotification>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleMobileLeftIcon.displayName = 'ArticleMobileLeftIcon'

ArticleMobileLeftIcon.propTypes = {
  className: PropTypes.string
}

export default ArticleMobileLeftIcon
