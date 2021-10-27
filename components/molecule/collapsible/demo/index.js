import {GetIcon} from './config'
import ArticleAlignment from './ArticleAlignment'
import ArticleGradient from './ArticleGradient'
import ArticleTransition from './ArticleTransition'
import ArticleCustomHeight from './ArticleCustomHeight'
import ArticleNoCollapse from './ArticleNoCollapse'

const Demo = () => {
  const icon = GetIcon()
  const showText = 'Show'
  const hideText = 'Hide'
  const height = 70

  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Collapsible</h1>
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
