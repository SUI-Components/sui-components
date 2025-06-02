import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomImage from '../../src/index.js'

const ArticleViewport = ({className}) => {
  const sizes = [360, 540, 480, 640, 720, 960, 1280, 1600, 1920, 2048, 2160, 2560, 3200]
  return (
    <Article className={className}>
      <H2>Responsive Images</H2>
      <Paragraph>
        AtomImage also provides a simple way of displaying an image in its best depending on the device it is being
        viewed from. Use the prop <Code>sources</Code> (array) to configure it.
      </Paragraph>
      <Paragraph>
        For the proper responsive behavior, the array of breakpoint values given to the <Code>source</Code> prop should
        be ordered descendant.
      </Paragraph>
      <div style={{height: 300}} className="viewport-demo">
        <AtomImage
          src="https://via.placeholder.com/50"
          alt=""
          sources={sizes
            .sort((a, b) => a - b)
            .reverse()
            .map(value => ({
              srcSet: `https://via.placeholder.com/${value}x300`,
              media: `(min-width: ${value}px)`
            }))}
        />
      </div>
    </Article>
  )
}

ArticleViewport.displayName = 'ArticleViewport'

ArticleViewport.propTypes = {
  className: PropTypes.string
}

export default ArticleViewport
