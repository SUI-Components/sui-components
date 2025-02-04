import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleA11y from './articles/ArticleA11y.js'
import ArticleAddonAndIcon from './articles/ArticleAddonAndIcon.js'
import ArticleBorderless from './articles/ArticleBorderless.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleDisabledReadOnly from './articles/ArticleDisabledReadOnly.js'
import ArticleErrorStatus from './articles/ArticleErrorStatus.js'
import ArticleInlineForm from './articles/ArticleInlineForm.js'
import ArticleKeyboardNavigation from './articles/ArticleKeyboardNavigation.js'
import ArticlePlaceholderValueAndDefaultValue from './articles/ArticlePlaceholderValueAndDefaultValue.js'
import ArticleShape from './articles/ArticleShape.js'
import ArticleSize from './articles/ArticleSize.js'
import ArticleState from './articles/ArticleState.js'
import ArticleType from './articles/ArticleType.js'
import {CLASS_SECTION} from './settings.js'

const Demo = () => (
  <div className="sui-StudioPreview">
    <div className="sui-StudioPreview-content sui-StudioDemo-preview">
      <H1>Input</H1>
      <Paragraph>
        Inputs are the text fields that users fill in with different types of information. These include dates,
        passwords or even short answers. It’s a field where users can write alphanumeric texts.
      </Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticlePlaceholderValueAndDefaultValue className={CLASS_SECTION} />
      <br />
      <ArticleType className={CLASS_SECTION} />
      <br />
      <ArticleSize className={CLASS_SECTION} />
      <br />
      <ArticleDisabledReadOnly className={CLASS_SECTION} />
      <br />
      <ArticleAddonAndIcon className={CLASS_SECTION} />
      <br />
      <ArticleBorderless className={CLASS_SECTION} />
      <br />
      <ArticleState className={CLASS_SECTION} />
      <br />
      <ArticleErrorStatus className={CLASS_SECTION} />
      <br />
      <ArticleInlineForm className={CLASS_SECTION} />
      <br />
      <ArticleShape className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
      <br />
      <ArticleKeyboardNavigation className={CLASS_SECTION} />
      <br />
    </div>
  </div>
)

export default Demo
