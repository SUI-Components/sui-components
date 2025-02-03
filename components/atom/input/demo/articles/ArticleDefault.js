import PropTypes from 'prop-types'

import {Article, H2, Paragraph} from '@s-ui/documentation-library'
import AtomLabel from '@s-ui/react-atom-label/lib'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomInput from '../../src/index.js'

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>By default, the element gets the following look and feel.</Paragraph>
      <PrimitiveVisuallyHidden>
        <AtomLabel htmlFor="default" text="Label for default input" />
      </PrimitiveVisuallyHidden>
      <div>
        <AtomInput id="default" />
      </div>
    </Article>
  )
}

ArticleDefault.propTypes = {
  className: PropTypes.node
}

export default ArticleDefault
