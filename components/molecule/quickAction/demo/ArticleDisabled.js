import PropTypes from 'prop-types'
import {Article, H2} from '@s-ui/documentation-library'
import MoleculeQuickAction from '../src'

const ArticleDisabled = ({
  className,
  handleOnClick,
  getLeftIcon,
  getRightIcon
}) => {
  return (
    <Article className={className}>
      <H2>Disabled</H2>
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
