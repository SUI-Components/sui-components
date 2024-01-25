import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleBehavior from './ArticleBehavior.js'
import ArticleDefault from './ArticleDefault.js'
import ArticleDescription from './ArticleDescription.js'
import ArticleHighLight from './ArticleHighLight.js'
import ArticleLeftAddons from './ArticleLeftAddons.js'
import ArticleTextWrap from './ArticleTextWrap.js'
import {CLASS_DEMO_SECTION} from './config.js'

import './index.scss'

const Demo = () => (
  <div className="sui-StudioPreview">
    <H1>Dropdown Options</H1>
    <Paragraph>
      MoleculeDropdownOption is a component that wraps a composition of checkbox + text. It s used to wrap any
      MoleculeDropdownList option.
    </Paragraph>
    <ArticleDefault className={CLASS_DEMO_SECTION} />
    <br />
    <ArticleBehavior className={CLASS_DEMO_SECTION} />
    <br />
    <ArticleHighLight className={CLASS_DEMO_SECTION} />
    <br />
    <ArticleDescription className={CLASS_DEMO_SECTION} />
    <br />
    <ArticleTextWrap className={CLASS_DEMO_SECTION} />
    <br />
    <ArticleLeftAddons className={CLASS_DEMO_SECTION} />
  </div>
)

export default Demo
