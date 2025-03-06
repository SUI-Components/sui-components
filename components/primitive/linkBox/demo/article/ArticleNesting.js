import PropTypes from 'prop-types'

import {Anchor, Article, Box, Code, H1, H2, H4, Paragraph, Separator} from '@s-ui/documentation-library'
import AtomTag, {atomTagColors, atomTagDesigns, atomTagSizes} from '@s-ui/react-atom-tag/src'
import {calendarIcon, eyeIcon} from '@s-ui/react-atom-tag-demo/settings'

import PrimitiveLinkBox, {PrimitiveLinkBoxLink, PrimitiveLinkBoxRaised} from '../../src/index.js'

const ArticleNesting = ({className}) => {
  return (
    <Article className={className}>
      <H2 id="nesting">Nesting</H2>
      <Paragraph>
        If your linkbox contains interactive elements inside of it, wrap them with a <Code>PrimitiveLinkBoxRaised</Code>
        . It will raise their z-index to stay above the main action of you<Code>PrimitiveLinkBoxRaised</Code>.
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
          <div style={{position: 'relative', width: '100%', aspectRatio: '16 / 9'}}>
            <img src="https://placehold.co/150x85" alt="placeholder" style={{aspectRatio: '16 / 9', width: '100%'}} />
            <PrimitiveLinkBoxRaised>
              <AtomTag
                style={{position: 'absolute', bottom: 8, right: 8}}
                label="category"
                size={atomTagSizes.XSMALL}
                design={atomTagDesigns.TINTED}
                color={atomTagColors.PRIMARY}
                onClick={() => console.log('go to category')}
              />
            </PrimitiveLinkBoxRaised>
          </div>
          <H1 elementType="span">
            <PrimitiveLinkBoxLink>
              <Anchor href="#nesting" style={{color: 'var(--c-base)'}}>
                WWDC
              </Anchor>
            </PrimitiveLinkBoxLink>
          </H1>
          <H2 elementTypeas="div" style={{color: 'var(--c-base)'}}>
            Worldwide Developers Conference
          </H2>
          <Separator />
          <Paragraph style={{color: 'var(--c-base)'}}>22 June 2021</Paragraph>
          <div style={{display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16}}>
            <PrimitiveLinkBoxRaised>
              <AtomTag
                label="Add to iCal"
                icon={calendarIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.SURFACE}
                onClick={() => console.log('Add to iCal')}
              />
            </PrimitiveLinkBoxRaised>
            <PrimitiveLinkBoxRaised>
              <AtomTag
                label="Join the meet"
                icon={eyeIcon}
                design={atomTagDesigns.OUTLINE}
                color={atomTagColors.SURFACE}
                onClick={() => console.log('Join the meet')}
              />
            </PrimitiveLinkBoxRaised>
          </div>
        </Box>
      </PrimitiveLinkBox>
    </Article>
  )
}
ArticleNesting.displayName = 'ArticleNesting'

ArticleNesting.propTypes = {
  className: PropTypes.string
}

export default ArticleNesting
