import {H1} from '@s-ui/documentation-library'
import ArticleDefault from './ArticleDefault'
import ArticleMedium from './ArticleMedium'
import ArticleLarge from './ArticleLarge'
import ArticleDisabled from './ArticleDisabled'
import {handleOnClick, getLeftIcon, getRightIcon} from './config'
const BASE_CLASS_DEMO = `DemoQuickAction`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export default () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Quick Action</H1>
        <ArticleDefault
          className={CLASS_SECTION}
          handleOnClick={handleOnClick}
          getLeftIcon={getLeftIcon}
          getRightIcon={getRightIcon}
        />
        <br />
        <ArticleMedium
          className={CLASS_SECTION}
          handleOnClick={handleOnClick}
          getLeftIcon={getLeftIcon}
          getRightIcon={getRightIcon}
        />
        <br />
        <ArticleLarge
          className={CLASS_SECTION}
          handleOnClick={handleOnClick}
          getLeftIcon={getLeftIcon}
          getRightIcon={getRightIcon}
        />
        <br />
        <ArticleDisabled
          className={CLASS_SECTION}
          handleOnClick={handleOnClick}
          getLeftIcon={getLeftIcon}
          getRightIcon={getRightIcon}
        />
      </div>
    </div>
  )
}
