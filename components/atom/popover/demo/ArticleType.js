import AtomPopover from 'components/atom/popover/src/index.js'
import PropTypes from 'prop-types'

import {Article, Button, H2, Paragraph} from '@s-ui/documentation-library'

const ArticleType = ({className, content: Content}) => {
  return (
    <Article className={className} style={{display: 'flex', alignItems: 'end'}}>
      <div>
        <H2>Custom Types</H2>
        <Paragraph>
          You can even define some other extra types defining your own vertical
          custom types and looping this defined keys through scss.
        </Paragraph>
      </div>

      <AtomPopover type="dark" isVisible content={Content} hideArrow={false}>
        <Button
          onClick={() => {}}
          outline
          style={{
            display: 'inline-block',
            margin: '0 auto',
            height: 'fit-content'
          }}
        >
          Target
        </Button>
      </AtomPopover>
    </Article>
  )
}

ArticleType.propTypes = {
  className: PropTypes.string,
  content: PropTypes.elementType
}

export default ArticleType
