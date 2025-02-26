import PropTypes from 'prop-types'

import {Anchor, Article, Box, Code, H1, H2, H4, Paragraph, Separator} from '@s-ui/documentation-library'

import PrimitiveLinkBox, {PrimitiveLinkBoxLink} from '../../src/index.js'

const ArticleDefault = ({className}) => {
  return (
    <Article className={className}>
      <H2 id="default">Default</H2>
      <Paragraph>
        Simply wrapping an entire component in an <Code>a</Code> tag may seem convenient for linking, but it's
        considered un-semantic and incorrect. This is because the component might include other clickable elements like
        tags, timestamps, or buttons.
      </Paragraph>
      <Paragraph>
        This can be solved by wrapping all clickable area in a <Code>PrimitiveLinkBox</Code> component and adding the
        call-to-action element into a <Code>PrimitiveLinkBoxLink</Code>.
      </Paragraph>
      <PrimitiveLinkBox>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 300,
            backgroundImage: 'linear-gradient(40deg, var(--c-primary) 0%, var(--c-accent)',
            boxShadow: '0px 4px 8px 0px color-mix(in srgb, var(--c-gray) 70%, transparent)'
          }}
        >
          <H4 elementType="div" style={{color: 'var(--c-base)'}}>
            Passed Event
          </H4>
          <img src="https://placehold.co/150x85" alt="placeholder" style={{aspectRatio: '16 / 9'}} />
          <H1 elementType="span">
            <PrimitiveLinkBoxLink>
              <Anchor href="#default" style={{color: 'var(--c-base)'}}>
                WWDC
              </Anchor>
            </PrimitiveLinkBoxLink>
          </H1>
          <H2 elementType="div" style={{color: 'var(--c-base)'}}>
            Worldwide Developers Conference
          </H2>
          <Separator />
          <Paragraph style={{color: 'var(--c-base)'}}>22 June 2021</Paragraph>
        </Box>
      </PrimitiveLinkBox>
    </Article>
  )
}
ArticleDefault.displayName = 'ArticleDefault'

ArticleDefault.propTypes = {
  className: PropTypes.string
}

export default ArticleDefault
