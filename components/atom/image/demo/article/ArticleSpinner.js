import {useRef, useState} from 'react'
import useIntersection from 'react-use/lib/useIntersection'
import useThrottleFn from 'react-use/lib/useThrottleFn'

import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import AtomSpinner from '@s-ui/react-atom-spinner'

import AtomImage from '../../src/index.js'
import {IMAGES} from '../settings.js'

const ArticleSpinner = ({className}) => {
  const articleRef = useRef()
  const intersection = useIntersection(articleRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })
  const isIntersecting = intersection?.isIntersecting

  const [counter, setCounter] = useState(0)
  const increaseCounter = (value = counter) => {
    setCounter(value + 1)
  }
  useThrottleFn(
    () => {
      if (isIntersecting) {
        increaseCounter()
      }
    },
    300,
    [isIntersecting, increaseCounter]
  )

  return (
    <Article className={className}>
      <H2>Spinner Loader</H2>
      <Paragraph>
        AtomImage can show an spinner loader while the image is loading using the <Code>spinner</Code> (React.node) prop
      </Paragraph>
      <div ref={articleRef} style={{height: 300}} className="spinner-demo">
        {isIntersecting && (
          <AtomImage
            spinner={<AtomSpinner />}
            src={IMAGES.RANDOM_IMAGE('placeholder', isIntersecting ? counter : counter - 1)}
            alt="Nice View"
          />
        )}
      </div>
    </Article>
  )
}

ArticleSpinner.displayName = 'ArticleSpinner'

ArticleSpinner.propTypes = {
  className: PropTypes.string
}

export default ArticleSpinner
