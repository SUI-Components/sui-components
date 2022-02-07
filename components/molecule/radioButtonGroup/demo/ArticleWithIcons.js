import PropTypes from 'prop-types'

import {H2, Article} from '@s-ui/documentation-library'

import RadioButtonGroupIcons from './components/radioButtonGroupIcons.js'

const ArticleWithIcons = ({className}) => {
  return (
    <Article className={className}>
      <H2>With Icons</H2>
      <RadioButtonGroupIcons />
    </Article>
  )
}
ArticleWithIcons.propTypes = {
  className: PropTypes.string
}

export default ArticleWithIcons
