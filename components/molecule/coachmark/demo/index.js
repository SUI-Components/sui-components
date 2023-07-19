import {Article, H1, H2, Paragraph} from '@s-ui/documentation-library'

import ArticleDefaultTooltipVariants from './ArticleDefaultTooltipVariants.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Coachmark</H1>
        <Paragraph>
          Wrapper of the react joyride library to make tours within the apps.
        </Paragraph>

        <Article className={`molecule-coachmark-section`}>
          <H2>Props</H2>
          <Paragraph>
            All the props received by the coachmark component are the same
            accepted by the react joyride library,{' '}
            <a href="https://docs.react-joyride.com/" target="_blank">
              please refer to the original documentation to get more details
            </a>
          </Paragraph>
        </Article>

        <ArticleDefaultTooltipVariants />
      </div>
    </div>
  )
}

export default Demo
