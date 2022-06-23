import {useEffect, useMemo, useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Bold,
  Box,
  Code,
  H2,
  Paragraph
} from '@s-ui/documentation-library'

import BehaviorSticky, {BehaviorStickyProvider} from '../../src/index.js'
import useRefs from '../hooks/useRefs.js'
import LoremIpsum from '../LoremIpsum.js'
import {COLORS} from '../settings.js'

const loop = (n, {setRef, getRef, getRefs}, {setStackRef, getStackRefs}) => {
  const recursion = index => {
    const offsetTop = getStackRefs().reduce((acc, curr, i) => {
      if (i < index) {
        const {height = 0} = curr.current.getBoundingClientRect()
        return acc + height
      }
      return acc
    }, 0)
    return (
      <Box
        ref={setRef(index)}
        style={{padding: 0, overflowY: 'hidden', borderWidth: 0}}
      >
        <BehaviorSticky container={getRef(index)} defaultOffsetTop={offsetTop}>
          <Box color={Object.values(COLORS)[index]} ref={setStackRef(index)}>
            <Bold>
              This is an element wrapped by a <Code>BehaviorSticky</Code>{' '}
              component.
            </Bold>
          </Box>
        </BehaviorSticky>
        <Paragraph>
          <LoremIpsum count={10} format="plain" />
        </Paragraph>
        <div style={{height: '30vh'}} />
        {n > index && recursion(index + 1)}
      </Box>
    )
  }
  return recursion(0, {setRef, getRef})
}

const ArticleStacked = ({className}) => {
  const [getRef, setRef, getRefs] = useRefs()
  const [getStackRef, setStackRef, getStackRefs] = useRefs()
  const [, setLength] = useState()
  const length = useMemo(() => getStackRefs().length, [getStackRefs().length])
  useEffect(() => {
    setLength(length)
  }, [length])
  return (
    <Article className={className}>
      <H2>Sticky Stacked</H2>
      <Paragraph>
        There are many options to stack many sticky elements at the top giving
        them a margin-top with the previous accumulated height.
      </Paragraph>
      <BehaviorStickyProvider>
        {loop(
          Object.values(COLORS).length - 1,
          {setRef, getRef, getRefs},
          {getStackRef, setStackRef, getStackRefs}
        )}
      </BehaviorStickyProvider>
    </Article>
  )
}

ArticleStacked.displayName = 'ArticleStacked'

ArticleStacked.propTypes = {
  className: PropTypes.string
}

export default ArticleStacked
