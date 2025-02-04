import PropTypes from 'prop-types'

import {Anchor, Article, Box, Code, H2, Paragraph, Strong} from '@s-ui/documentation-library'

const ArticleA11y = ({className}) => {
  return (
    <Article className={className}>
      <H2>
        Accessibility –{' '}
        <Anchor href="https://github.com/SUI-Components/sui-components/blob/master/contributor-docs/Accessibility%20Standards.md">
          <Strong>Guidelines</Strong>
        </Anchor>
      </H2>
      <Box style={{backgroundColor: 'color-mix(in srgb, #00FF00 10%, transparent)'}}>
        <Paragraph>
          ✅ This component has been successfully tested for{' '}
          <Strong>WCAG 2.0 levels A and AA, WCAG 2.1 levels A and AA</Strong> and for common accessibility best
          practices.
        </Paragraph>
      </Box>
      <Paragraph>
        This is useful in certain scenarios as an alternative to traditional labelling with <Code>aria-label</Code> or{' '}
        <Code>aria-labelledby</Code>.
      </Paragraph>
    </Article>
  )
}

ArticleA11y.propTypes = {
  className: PropTypes.string
}

export default ArticleA11y
