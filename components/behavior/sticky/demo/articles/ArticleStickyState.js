import {useRef} from 'react'

import PropTypes from 'prop-types'

import {Article, Bold, Box, Code, H2, Paragraph} from '@s-ui/documentation-library'

import BehaviorSticky, {BehaviorStickyProvider} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'
import {CLASS_DEMO_PLACEHOLDER} from '../settings.js'

const ArticleStickyState = ({className}) => {
  const ref = useRef()
  return (
    <Article className={className}>
      <H2>Sticky State</H2>
      <Paragraph>
        The <Code>BehaviorSticky</Code> allow us to know when the component given gets sticky. Using{' '}
        <Code>children</Code> as a <Code>function</Code>, a parameter called <Code>isSticky</Code> is shared with the
        current state. It allows rendering the sticky component with different variants depending on the{' '}
        <Code>isSticky</Code> state.
      </Paragraph>
      <BehaviorStickyProvider>
        <Box className={CLASS_DEMO_PLACEHOLDER} ref={ref} outline style={{overflowY: 'hidden'}}>
          <BehaviorSticky container={ref}>
            {({isSticky}) => (
              <Box outline mode={isSticky && 'dark'}>
                <Bold>{`The element wrapped by a BehaviorSticky is ${!isSticky ? 'not ' : ''}sticky`}.</Bold>
              </Box>
            )}
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

ArticleStickyState.displayName = 'ArticleStickyState'

ArticleStickyState.propTypes = {
  className: PropTypes.string
}

export default ArticleStickyState
