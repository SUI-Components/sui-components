import {useRef} from 'react'

import PropTypes from 'prop-types'

import {Article, Bold, Box, Code, H2, H4, Paragraph} from '@s-ui/documentation-library'

import {BehaviorStickyProvider, BehaviorStickyScrollUp} from '../../src/index.js'
import LoremIpsum from '../LoremIpsum.js'
import {CLASS_DEMO_PLACEHOLDER} from '../settings.js'

const ArticleScrollUp = ({className}) => {
  const ref = useRef()
  return (
    <Article className={className}>
      <H2>ScrollUp</H2>
      <Paragraph>The BehaviorStickyScrollUp is only top stacked when the viewport triggered is scrolled up.</Paragraph>
      <BehaviorStickyProvider>
        <Box className={CLASS_DEMO_PLACEHOLDER} ref={ref} outline style={{overflowY: 'hidden'}}>
          <BehaviorStickyScrollUp container={ref}>
            <Box outline mode="dark">
              <Bold>
                This is an element wrapped by a <Code>BehaviorStickyScrollUp</Code> component.
              </Bold>
            </Box>
          </BehaviorStickyScrollUp>
          <H4>Scroll up to check the behavior</H4>
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

ArticleScrollUp.displayName = 'ArticleScrollUp'

ArticleScrollUp.propTypes = {
  className: PropTypes.string
}

export default ArticleScrollUp
