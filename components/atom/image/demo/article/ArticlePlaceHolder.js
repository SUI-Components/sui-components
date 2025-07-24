import {useRef, useState} from 'react'
import useIntersection from 'react-use/lib/useIntersection'
import useThrottleFn from 'react-use/lib/useThrottleFn'

import PropTypes from 'prop-types'

import {Anchor, Article, Bold, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomImage from '../../src/index.js'
import ConnectionViewer from '../ConnectionViewer.js'
import {IMAGES} from '../settings.js'

const ArticlePlaceHolder = ({className}) => {
  const articleRef = useRef()
  const intersection = useIntersection(articleRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })
  const isIntersecting = intersection?.isIntersecting

  const [counter, setCounter] = useState(0)
  const increaseCounter = (value = counter) => setCounter(value + 1)
  useThrottleFn(
    () => {
      if (isIntersecting) {
        increaseCounter()
      }
    },
    300,
    [isIntersecting]
  )
  return (
    <Article className={className}>
      <H2>Placeholder</H2>
      <Paragraph>
        The prop <Code>placeholder</Code> admits the url (string) of an image. this image is blur fully covering the
        area dedicated to the image until this is already loaded. Normally, the value should be a low resolution clone
        (with same aspect-ratio) of the <Code>src</Code> prop to get the focus effect and avoid the flickering effect.
      </Paragraph>
      <div ref={articleRef} style={{height: 300}} className="placeholder-demo">
        {isIntersecting && (
          <AtomImage
            src={IMAGES.RANDOM_IMAGE('placeholder', counter)}
            alt="Nice View"
            placeholder={IMAGES.PLACEHOLDER}
          />
        )}
      </div>
      <Paragraph>Hover the image to see the placeholder image.</Paragraph>
      <Paragraph>–––</Paragraph>
      <Paragraph>
        <Bold>Tip</Bold>: to better understand the behavior change the connection to a lower one (For example 2g). if
        you are using chrome you can find out how to configure it{' '}
        <Anchor href="https://developers.google.com/web/tools/chrome-devtools/network#throttle">here</Anchor>.
      </Paragraph>
      <ConnectionViewer />
    </Article>
  )
}

ArticlePlaceHolder.displayName = 'ArticlePlaceHolder'

ArticlePlaceHolder.propTypes = {
  className: PropTypes.string
}

export default ArticlePlaceHolder
