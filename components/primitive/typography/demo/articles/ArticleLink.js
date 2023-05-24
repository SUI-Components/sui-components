import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'
import PrimitiveTypography from '../../src/index.js'

const ArticleLink = ({className, lorem}) => {
  const [firstLorem, linkLorem, lastLorem] = lorem
    .split(' ')
    .reduce(
      (acc, val, i, arr) => {
        const index = Math.sign(i - Math.trunc(arr.length / 2)) + 1
        acc[index].push(val)
        return acc
      },
      [[], [], []]
    )
    .map(value => value.join(' '))
  return (
    <Article className={className}>
      <H2>isLinked</H2>
      <Paragraph>
        In case of pretending to add a linked text inside a block you can simply
        declare this block as an <Code>as="a"</Code> and a <Code>isLinked</Code>{' '}
        true value to the <Code>PrimitiveTypography</Code> surrounding wrapper.
      </Paragraph>
      <PrimitiveTypography>
        {firstLorem}{' '}
        <PrimitiveTypography as="a" href="#" isLinked>
          {linkLorem}
        </PrimitiveTypography>{' '}
        {lastLorem}
      </PrimitiveTypography>
    </Article>
  )
}

ArticleLink.propTypes = {
  className: PropTypes.string,
  lorem: PropTypes.node
}

export default ArticleLink
