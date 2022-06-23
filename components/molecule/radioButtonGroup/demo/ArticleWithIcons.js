import PropTypes from 'prop-types'

import {Article, H2} from '@s-ui/documentation-library'

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
