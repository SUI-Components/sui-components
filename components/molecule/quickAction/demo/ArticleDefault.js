import PropTypes from 'prop-types'
import {Article, H2} from '@s-ui/documentation-library'
import MoleculeQuickAction from '../src'

const ArticleDefault = ({
  className,
  handleOnClick,
  getLeftIcon,
  getRightIcon
}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <MoleculeQuickAction
        onClick={handleOnClick}
        leftIcon={getLeftIcon()}
        rightIcon={getRightIcon()}
      >
        Action
      </MoleculeQuickAction>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
  getLeftIcon: PropTypes.func,
  getRightIcon: PropTypes.func
}

export default ArticleDefault
