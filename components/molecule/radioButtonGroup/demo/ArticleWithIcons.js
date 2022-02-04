import PropTypes from 'prop-types'
import {H2} from '@s-ui/documentation-library'
import RadioButtonGroupIcons from './components/radioButtonGroupIcons.js'
const ArticleWithIcos = ({className}) => {
  return (
    <div className={className}>
      <H2>With Icons</H2>
      <RadioButtonGroupIcons />
    </div>
  )
}
ArticleWithIcos.propTypes = {
  className: PropTypes.string
}

export default ArticleWithIcos
