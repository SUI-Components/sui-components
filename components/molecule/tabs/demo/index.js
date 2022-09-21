import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleActiveTabs from './Articles/ArticleActiveTabs.js'
import ArticleDefault from './Articles/ArticleDefault.js'
import ArticleIconsCounters from './Articles/ArticleIconsCounters.js'
import ArticleType from './Articles/ArticleType.js'
import ArticleVariant from './Articles/ArticleVariant.js'
import {CLASS_DEMO_SECTION} from './config.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Tabs</H1>
      <Paragraph>
        Basic component for tabs allowing versions with or without icons and
        classic or highlighted variants
      </Paragraph>
      <ArticleDefault className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleActiveTabs className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleType className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleVariant className={CLASS_DEMO_SECTION} />
      <br />
      <ArticleIconsCounters className={CLASS_DEMO_SECTION} />
    </div>
  )
}

export default Demo
