import {H1} from '@s-ui/documentation-library'
import {CLASS_SECTION} from './settings.js'
import ArticleDefault from './ArticleDefault.js'
import ArticleHelpText from './ArticleHelpText.js'
import ArticleStatus from './ArticleStatus.js'

const Demo = () => (
  <div className="sui-StudioPreview">
    <H1>Radio-button Field</H1>
    <ArticleDefault className={CLASS_SECTION} />
    <br />
    <ArticleHelpText className={CLASS_SECTION} />
    <br />
    <ArticleStatus className={CLASS_SECTION} />
  </div>
)

export default Demo
