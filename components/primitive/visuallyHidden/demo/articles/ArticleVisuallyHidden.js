import PropTypes from 'prop-types'

import {AntDesignIcon, Article, Button, H2, Paragraph} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import PrimitiveVisuallyHidden from '../../src/index.js'

const ArticleVisuallyHidden = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        A button without text can be absolutely mysterious for someone using screen reader. They might be announced
        simply as "button". We can solve this problem without compromising on our design. A VisuallyHidden component
        will allow us to place text inside this button that will only be made available to people using screen readers.
      </Paragraph>
      <Button>
        <AtomIcon>
          <AntDesignIcon icon="AiOutlineCheck" style={{color: 'currentColor'}} />
        </AtomIcon>
        <PrimitiveVisuallyHidden>Checkmark</PrimitiveVisuallyHidden>
      </Button>
    </Article>
  )
}

ArticleVisuallyHidden.propTypes = {
  className: PropTypes.string
}

export default ArticleVisuallyHidden
