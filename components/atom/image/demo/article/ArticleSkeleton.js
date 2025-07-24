import {useRef, useState} from 'react'
import useIntersection from 'react-use/lib/useIntersection'
import useThrottleFn from 'react-use/lib/useThrottleFn'

import PropTypes from 'prop-types'

import {Anchor, Article, Bold, Code, H2, Label, Paragraph, RadioButton} from '@s-ui/documentation-library'

import AtomImage from '../../src/index.js'
import ConnectionViewer from '../ConnectionViewer.js'
import {IMAGES} from '../settings.js'

const ArticleSkeleton = ({className}) => {
  const articleRef = useRef()
  const intersection = useIntersection(articleRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })
  const isIntersecting = intersection?.isIntersecting
  const [counter, setCounter] = useState(0)
  const [isPlaceholder, setPlaceHolder] = useState(false)
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
      <H2>Skeleton</H2>
      <Paragraph>
        The prop <Code>skeleton</Code> admits the url (string) of an image. this image is <Label>NOT</Label> blur but
        fully contained in the area dedicated to the image until this is already loaded.
      </Paragraph>
      <div ref={articleRef} style={{height: 300}} className="skeleton-demo">
        {isIntersecting && (
          <AtomImage
            src={IMAGES.RANDOM_IMAGE('skeleton', counter)}
            alt="Nice View"
            skeleton={IMAGES.SKELETON}
            {...(isPlaceholder && {placeholder: IMAGES.PLACEHOLDER})}
          />
        )}
      </div>
      <Paragraph>Hover the image to see the skeleton image.</Paragraph>
      <Paragraph>–––</Paragraph>
      <Paragraph>
        <Bold>Tip</Bold>: to better understand the behavior change the connection to a lower one (For example 2g). if
        you are using chrome you can find out how to configure it{' '}
        <Anchor href="https://developers.google.com/web/tools/chrome-devtools/network#throttle">here</Anchor>.
      </Paragraph>
      <ConnectionViewer />
      <Paragraph>–––</Paragraph>
      <Paragraph>
        <Bold>Disclaimer</Bold>: In case of combining <Code>skeleton</Code> and <Code>placeholder</Code> props it will
        collide becoming placeholder the most relevant.
      </Paragraph>
      <Paragraph>Check the behavior by pressing:</Paragraph>
      <Label>Placeholder</Label>:{' '}
      <RadioButton
        value={isPlaceholder}
        label={isPlaceholder ? 'enabled' : 'disabled'}
        onClick={() => setPlaceHolder(!isPlaceholder)}
      />
    </Article>
  )
}

ArticleSkeleton.displayName = 'ArticleSkeleton'

ArticleSkeleton.propTypes = {
  className: PropTypes.string
}

export default ArticleSkeleton
