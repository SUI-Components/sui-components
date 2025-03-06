import PropTypes from 'prop-types'

import {Article, H2, Label, Paragraph} from '@s-ui/documentation-library'
import PrimitiveVisuallyHidden from '@s-ui/react-primitive-visually-hidden'

import AtomSwitch from '../../src/index.js'

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>The default switch is a simple switch with no additional props.</Paragraph>
      <AtomSwitch id="default-switch-id" name="default-switch-name" />
      <PrimitiveVisuallyHidden>
        <Label htmlFor="default-switch-id">Default switch</Label>
      </PrimitiveVisuallyHidden>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
