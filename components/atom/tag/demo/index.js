import {Article, H1, Paragraph} from '@s-ui/documentation-library'

import ArticleActionable from './articles/ArticleActionable.js'
import ArticleDesign from './articles/ArticleDesign.js'
import ArticleIcons from './articles/ArticleIcons.js'
import ArticleIsFitted from './articles/ArticleIsFitted.js'
import ArticleSize from './articles/ArticleSize.js'
import ArticleTypes from './articles/ArticleTypes.js'
import {CLASS_SECTION, closeIcon, icon} from './settings.js'

import './index.scss'

export default () => (
  <div className="sui-StudioPreview">
    <H1>Tag</H1>
    <Paragraph>
      We use tags to visually emphasise features of the UI and make recognition
      and interaction easier.
    </Paragraph>
    <ArticleSize className={CLASS_SECTION} />
    <br />
    <ArticleDesign className={CLASS_SECTION} />
    <br />
    <ArticleActionable className={CLASS_SECTION} />
    <br />
    <ArticleIcons className={CLASS_SECTION} />
    <br />
    <Article className={CLASS_SECTION}></Article>
    <br />
    <ArticleTypes className={CLASS_SECTION} icon={icon} closeIcon={closeIcon} />
    <br />
    <ArticleIsFitted className={CLASS_SECTION} icon={icon} />
  </div>
)
