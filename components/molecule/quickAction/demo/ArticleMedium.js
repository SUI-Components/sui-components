import PropTypes from 'prop-types'
import {Article, H2} from '@s-ui/documentation-library'
import MoleculeQuickAction from '../src'

const ArticleMedium = ({
  className,
  handleOnClick,
  getLeftIcon,
  getRightIcon
}) => {
  return (
    <Article className={className}>
      <H2>Medium</H2>
      <MoleculeQuickAction
        onClick={handleOnClick}
        leftIcon={getLeftIcon()}
        rightIcon={getRightIcon()}
        size="medium"
      >
        Action
      </MoleculeQuickAction>
    </Article>
  )
}

ArticleMedium.propTypes = {
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
  getLeftIcon: PropTypes.func,
  getRightIcon: PropTypes.func
}

export default ArticleMedium
