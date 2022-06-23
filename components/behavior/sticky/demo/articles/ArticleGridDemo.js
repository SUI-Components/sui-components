import {useEffect, useMemo, useState} from 'react'

import PropTypes from 'prop-types'

import {
  Article,
  Box,
  Cell,
  Grid,
  H2,
  Paragraph
} from '@s-ui/documentation-library'

import BehaviorSticky, {BehaviorStickyProvider} from '../../src/index.js'
import useRefs from '../hooks/useRefs.js'
import {CLASS_DEMO_BACKGROUND, COLORS, getLoremParagraphs} from '../settings.js'

const loremParagraphs = getLoremParagraphs(Object.values(COLORS).length, 20)

const getElementStyles = (refs = [], index) => {
  if (refs[index] === undefined) return undefined
  return refs.reduce(
    (acc, curr, i) => {
      const {height = 0} = curr.current.getBoundingClientRect()
      if (i < index) {
        acc.marginTop += height
      }
      return acc
    },
    {marginTop: 0, outline: '1px solid #f2f2f2'}
  )
}

const ArticleGridDemo = ({className}) => {
  const [getContainerRef, setContainerRef] = useRefs()
  const [, setBoxRef, getBoxRefs] = useRefs()
  const [, setLength] = useState()
  const length = useMemo(() => getBoxRefs().length, [getBoxRefs().length])
  useEffect(() => {
    setLength(length)
  }, [length])
  return (
    <Article className={className}>
      <H2>Sticky grid demo</H2>
      <Paragraph>
        There are some strategies to stack many sticky elements beside each
        other.
      </Paragraph>
      <BehaviorStickyProvider>
        <Box style={{padding: 0}}>
          <Grid
            gutter={[8, 8]}
            cols={Object.values(COLORS).length}
            className={CLASS_DEMO_BACKGROUND}
          >
            {Object.entries(COLORS).map(([colorKey, colorValue], index) => (
              <Cell
                key={colorKey}
                ref={setContainerRef(index)}
                style={getElementStyles(getBoxRefs(), index)}
              >
                <BehaviorSticky container={getContainerRef(index)}>
                  <Box ref={setBoxRef(index)} color={colorValue}>
                    {loremParagraphs[index]}
                  </Box>
                </BehaviorSticky>
              </Cell>
            ))}
          </Grid>
        </Box>
      </BehaviorStickyProvider>
      <Paragraph>
        When the container referenced element targeted by the Sticky does NOT
        have enough space to contain its children in the viewport it is placed
        to its natural dom position.
      </Paragraph>
    </Article>
  )
}

ArticleGridDemo.displayName = 'ArticleGridDemo'

ArticleGridDemo.propTypes = {className: PropTypes.string}

export default ArticleGridDemo
