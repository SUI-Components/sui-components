import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleCircleIcons from './articles/ArticleCircleIcons.js'
import ArticleControlledAndUncontrolled from './articles/ArticleControlledAndUncontrolled.js'
import ArticleDisabled from './articles/ArticleDisabled.js'
import ArticleFullWidth from './articles/ArticleFullWidth.js'
import ArticleIsFitted from './articles/ArticleIsFitted.js'
import ArticleLoading from './articles/ArticleLoading.js'
import ArticleSizes from './articles/ArticleSizes.js'
import ArticleState from './articles/ArticleState.js'
import ArticleToggle from './articles/ArticleToggle.js'
import ArticleTypes from './articles/ArticleTypes.js'
import {CLASS_SECTION} from './settings.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Switch</H1>
        <Paragraph>
          The switch is the radio button when there’re only 2 exclusive options. “On/off” is a common and clear example
          for explaining this component. In order to collect the result of this switch there is a callback `onToggle`,
          this callback receives a flag on `true` if select is active. If you're using a `select` type of this
          component, `false` means the first option and `true` the second one. There are two sizes for this component:
          `default` and `large`.
        </Paragraph>
        <ArticleState className={CLASS_SECTION} />
        <br />
        <ArticleSizes className={CLASS_SECTION} />
        <br />
        <ArticleDisabled className={CLASS_SECTION} />
        <br />
        <ArticleTypes className={CLASS_SECTION} />
        <br />
        <ArticleCircleIcons className={CLASS_SECTION} />
        <br />
        <ArticleIsFitted className={CLASS_SECTION} />
        <br />
        <ArticleControlledAndUncontrolled className={CLASS_SECTION} />
        <br />
        <ArticleToggle className={CLASS_SECTION} />
        <br />
        <ArticleFullWidth className={CLASS_SECTION} />
        <br />
        <ArticleLoading className={CLASS_SECTION} />
      </div>
    </div>
  )
}

export default Demo
