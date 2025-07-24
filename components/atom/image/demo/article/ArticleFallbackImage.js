import {useRef, useState} from 'react'
import useIntersection from 'react-use/lib/useIntersection'
import useThrottleFn from 'react-use/lib/useThrottleFn'

import PropTypes from 'prop-types'

import {Article, Code, H2, Label, ListItem, Paragraph, RadioButton, UnorderedList} from '@s-ui/documentation-library'

import AtomImage from '../../src/index.js'
import ImageNotFoundIcon from '../ImageNotFoundIcon.js'
import {defaultErrorText, IMAGES} from '../settings.js'

const ArticleFallbackImage = ({className}) => {
  const articleRef = useRef()
  const intersection = useIntersection(articleRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })
  const isIntersecting = intersection?.isIntersecting

  const [counter, setCounter] = useState(0)
  const [errorIcon, setErrorIcon] = useState(true)
  const [errorText, setErrorText] = useState(true)
  const [errorCounter, setErrorCounter] = useState(0)
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
      <H2>FallBack Image</H2>
      <Paragraph>
        The AtomImage provides a service to customize a fallback response in order to indicate the URL provided as{' '}
        <Code>src</Code> gets an error combining the props:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Code>errorIcon</Code>(React.node): Icon (component) to be displayed in an Error Box when the image cannot be
          loaded.
        </ListItem>
        <ListItem>
          <Code>errorText</Code>(string): Text to be displayed in an Error Box when the image cannot be loaded.
        </ListItem>
      </UnorderedList>
      <Paragraph>
        Both props can be used together: If the component only have one of them defined, it will be vertically centered.
      </Paragraph>
      <RadioButton
        checked={errorIcon}
        label={`errorIcon ${errorIcon ? 'enabled' : 'disabled'}`}
        onClick={() => setErrorIcon(!errorIcon)}
      />{' '}
      <RadioButton
        checked={errorIcon}
        label={`errorText ${errorText ? 'enabled' : 'disabled'}`}
        onClick={() => setErrorText(!errorText)}
      />
      <br />
      <br />
      <div ref={articleRef} style={{height: 300}}>
        {isIntersecting && (
          <AtomImage
            src={IMAGES.BAD}
            alt="Nice View"
            errorIcon={errorIcon && <ImageNotFoundIcon />}
            errorText={errorText && defaultErrorText}
            onError={() => setErrorCounter(errorCounter + 1)}
          />
        )}
      </div>
      <Paragraph>
        The AtomImage component also fires an event customizable under the <Code>onError</Code>(function) handler prop.
      </Paragraph>
      <Paragraph>
        <Label>onError handler counter</Label>: {errorCounter}
      </Paragraph>
    </Article>
  )
}

ArticleFallbackImage.displayName = 'ArticleFallbackImage'

ArticleFallbackImage.propTypes = {
  className: PropTypes.string
}

export default ArticleFallbackImage
