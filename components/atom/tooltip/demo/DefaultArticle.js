import {H2, Paragraph, Code, Article, Box} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'
import NewAtomTooltip from '../src/NewAtomTooltip'

const DefaultArticle = className => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>
        The default <Code>AtomTooltip</Code> component
      </Paragraph>

      <Box>
        <Paragraph>
          Lorem ipsum{' '}
          <NewAtomTooltip content="Tooltip content">dolor</NewAtomTooltip> sit
          emmet
        </Paragraph>
      </Box>
    </Article>
  )
}

DefaultArticle.defaultProps = {
  className: PropTypes.string
}

export default DefaultArticle
