import {Paragraph} from '@s-ui/documentation-library'

import {GetIcon} from './config/index.js'
import ArticleAlignment from './ArticleAlignment.js'
import ArticleButtonTextAlignment from './ArticleButtonTextAlignment.js'
import ArticleControlled from './ArticleControlled.js'
import ArticleCustomHeight from './ArticleCustomHeight.js'
import ArticleGradient from './ArticleGradient.js'
import ArticleNoCollapse from './ArticleNoCollapse.js'
import ArticleTransition from './ArticleTransition.js'
import ArticleUncontrolled from './ArticleUncontrolled.js'

const Demo = () => {
  const icon = GetIcon()
  const showText = 'Show'
  const hideText = 'Hide'
  const height = 70

  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Collapsible</h1>
        <Paragraph>
          The collapsible component allows the user to expand or collapse content. We use this component to lightweight
          the content of a page or section.
        </Paragraph>
        <ArticleUncontrolled icon={icon} showText={showText} hideText={hideText} />
        <br />
        <br />
        <ArticleControlled icon={icon} showText={showText} hideText={hideText} />
        <br />
        <br />
        <ArticleAlignment icon={icon} showText={showText} hideText={hideText} />
        <br />
        <br />
        <ArticleButtonTextAlignment icon={icon} showText={showText} hideText={hideText} />
        <br />
        <br />
        <ArticleGradient icon={icon} showText={showText} hideText={hideText} />
        <br />
        <br />
        <ArticleTransition icon={icon} showText={showText} hideText={hideText} />
        <br />
        <br />
        <ArticleCustomHeight icon={icon} showText={showText} hideText={hideText} height={height} />
        <br />
        <br />
        <ArticleNoCollapse icon={icon} showText={showText} hideText={hideText} />
      </div>
    </div>
  )
}

Demo.propTypes = {}

export default Demo
