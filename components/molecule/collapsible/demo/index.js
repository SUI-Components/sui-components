import {GetIcon} from './config'
import ArticleAlignment from './ArticleAlignment'
import ArticleGradient from './ArticleGradient'
import ArticleTransition from './ArticleTransition'
import ArticleCustomHeight from './ArticleCustomHeight'
import ArticleNoCollapse from './ArticleNoCollapse'
import {Paragraph} from '@s-ui/documentation-library'

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
          The collapsible component allows the user to expand or collapse
          content. We use this component to lightweight the content of a page or
          section.
        </Paragraph>
        <ArticleAlignment icon={icon} showText={showText} hideText={hideText} />
        <br />
        <br />
        <ArticleGradient icon={icon} showText={showText} hideText={hideText} />
        <br />
        <br />
        <ArticleTransition
          icon={icon}
          showText={showText}
          hideText={hideText}
        />
        <br />
        <br />
        <ArticleCustomHeight
          icon={icon}
          showText={showText}
          hideText={hideText}
          height={height}
        />
        <br />
        <br />
        <ArticleNoCollapse
          icon={icon}
          showText={showText}
          hideText={hideText}
        />
      </div>
    </div>
  )
}

Demo.propTypes = {}

export default Demo
