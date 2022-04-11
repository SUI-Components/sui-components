import PropTypes from 'prop-types'

import {Article, H2, Paragraph, Button} from '@s-ui/documentation-library'

import AtomPopover from 'components/atom/popover/src/index.js'

const ArticleType = ({className, content: Content}) => {
  return (
    <Article className={className} style={{display: 'flex', alignItems: 'end'}}>
      <div>
        <H2>Type</H2>
        <Paragraph>
          The type of the popover could be custom or select the dark mode
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
