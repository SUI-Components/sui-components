import {H1} from '@s-ui/documentation-library'
import ArticleDefault from './ArticleDefault.js'
import ArticleSize from './ArticleSize.js'
import ArticleDisabled from './ArticleDisabled.js'
import {handleOnClick, getLeftIcon, getRightIcon} from './config.js'

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
        <ArticleDisabled
          className={CLASS_SECTION}
          handleOnClick={handleOnClick}
          getLeftIcon={getLeftIcon}
          getRightIcon={getRightIcon}
        />
        <br />
        <ArticleSize
          className={CLASS_SECTION}
          handleOnClick={handleOnClick}
          getLeftIcon={getLeftIcon}
          getRightIcon={getRightIcon}
        />
        <br />
      </div>
    </div>
  )
}
