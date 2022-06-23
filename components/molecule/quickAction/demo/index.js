import {H1} from '@s-ui/documentation-library'

import {getLeftIcon, getRightIcon, handleOnClick} from './config/index.js'
import ArticleDefault from './ArticleDefault.js'
import ArticleDisabled from './ArticleDisabled.js'
import ArticleSize from './ArticleSize.js'

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
