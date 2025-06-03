import PropTypes from 'prop-types'

import {Article, Bold, Code, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import AtomImage, {DECODING, FETCHPRIORITY, LOADING} from '../../src/index.js'
import {IMAGES} from '../settings.js'

const ArticleLazyImage = ({className}) => (
  <Article className={className}>
    <H2>Loading Lazy Image</H2>
    <Paragraph>
      Attributes to optimize image that is a{' '}
      <a href="https://web.dev/lcp" target="_blank">
        LCP
      </a>{' '}
      element, usually the first image in the viewport.
    </Paragraph>
    <UnorderedList>
      <ListItem>
        <Code>src</Code>: Specifies the path to the image.
      </ListItem>
      <ListItem>
        <Code>alt</Code>: Specifies an alternate text for the image, if the image for some reason cannot be displayed.
      </ListItem>
      <ListItem>
        <Code>decoding</Code>: Provides an image decoding hint to the browser, `auto`, `async`, `sync`.
      </ListItem>
      <ListItem>
        <Code>fetchpriority</Code>: Provides a hint of the relative priority to use when fetching the image, `auto`,
        `high`, `low`.
      </ListItem>
      <ListItem>
        <Code>loading</Code>: Indicates how the browser should load the image, `eager`, `eager`.
      </ListItem>
    </UnorderedList>
    <Paragraph>
      <Bold>Note</Bold>: Also, always specify the width and height of an image. If width and height are not specified,
      the page might flicker while the image loads.
    </Paragraph>
    <div style={{height: 300}}>
      <AtomImage
        src={IMAGES.FINAL}
        alt="Optimized image for LCP"
        decoding={DECODING.async}
        fetchpriority={FETCHPRIORITY.low}
        loading={LOADING.lazy}
      />
    </div>
  </Article>
)

ArticleLazyImage.displayName = 'ArticleLazyImage'

ArticleLazyImage.propTypes = {
  className: PropTypes.string
}

export default ArticleLazyImage
