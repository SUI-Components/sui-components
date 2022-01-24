import {useRef, useState} from 'react'
import useIntersection from 'react-use/lib/useIntersection'
import useThrottleFn from 'react-use/lib/useThrottleFn'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import AtomSpinner from '@s-ui/react-atom-spinner'

import AtomImage from '../src/index.js'
import {CLASS_SECTION, IMAGES} from './settings.js'

const SpinnerDemo = () => {
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
    <Article className={CLASS_SECTION}>
      <H2>Spinner Loader</H2>
      <Paragraph>
        AtomImage can show an spinner loader while the image is loading using
        the <Code>spinner</Code> (React.node) prop
      </Paragraph>
      <div ref={articleRef} style={{height: 300}} className="spinner-demo">
        {isIntersecting && (
          <AtomImage
            spinner={<AtomSpinner />}
            src={IMAGES.RANDOM_IMAGE(
              'placeholder',
              isIntersecting ? counter : counter - 1
            )}
            alt="Nice View"
          />
        )}
      </div>
    </Article>
  )
}

export default SpinnerDemo
