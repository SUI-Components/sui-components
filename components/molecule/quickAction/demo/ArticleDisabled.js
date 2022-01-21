import PropTypes from 'prop-types'
import {Article, H2, Code, Paragraph} from '@s-ui/documentation-library'

import MoleculeQuickAction from '../src/index.js'

const ArticleDisabled = ({
  className,
  handleOnClick,
  getLeftIcon,
  getRightIcon
}) => {
  return (
    <Article className={className}>
      <H2>Disabled</H2>
      <Paragraph>
        {' '}
        The prop <Code>disabled</Code> is a boolean by default false{' '}
      </Paragraph>
      <MoleculeQuickAction
        onClick={handleOnClick}
        leftIcon={getLeftIcon()}
        rightIcon={getRightIcon()}
        size="large"
        disabled
      >
        Action
      </MoleculeQuickAction>
    </Article>
  )
}

ArticleDisabled.propTypes = {
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
  getLeftIcon: PropTypes.func,
  getRightIcon: PropTypes.func
}

export default ArticleDisabled
