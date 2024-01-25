import {useRef} from 'react'

import PropTypes from 'prop-types'

import {Article, Bold, Box, Code, H2, Paragraph} from '@s-ui/documentation-library'

import BehaviorSticky, {BehaviorStickyProvider} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'
import {CLASS_DEMO_PLACEHOLDER} from '../settings.js'

const ArticleDefault = ({className}) => {
  const ref = useRef()
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The <Code>BehaviorSticky</Code> component MUST have a <Code>BehaviorStickyProvider</Code> component ascending
        parent element wrapping itself. The provider can wrap multiple Sticky elements into.
      </Paragraph>
      <Paragraph>
        The sticky component have a <Code>container</Code> prop which does not need to be provided (NOT required). This
        prop (in case of providing it) is the ref of the container viewport's observing element. By default it will be
        targeting the body as a reference.
      </Paragraph>
      <Paragraph>
        When the user scrolls down, if the sticky wrapped component reaches the top of the viewport it will be kept at
        the top of it (the viewport) until the container prop element referenced abandons the viewport or does NOT have
        enough space to contain it top stacked.
      </Paragraph>
      <BehaviorStickyProvider>
        <Box className={CLASS_DEMO_PLACEHOLDER} ref={ref} outline style={{overflowY: 'hidden'}}>
          <BehaviorSticky container={ref}>
            <Box outline mode="dark">
              <Bold>
                This is an element wrapped by a <Code>BehaviorSticky</Code> component.
              </Bold>
            </Box>
          </BehaviorSticky>
          <Paragraph>
            <LoremIpsum count={10} format="plain" />
          </Paragraph>
          <Paragraph>
            <LoremIpsum count={10} format="plain" />
          </Paragraph>
          <Paragraph>
            <LoremIpsum count={10} format="plain" />
          </Paragraph>
        </Box>
      </BehaviorStickyProvider>
    </Article>
  )
}

ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
