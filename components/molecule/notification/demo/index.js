import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleAlignItems from './ArticleAlignItems.js'
import ArticleAutoClose from './ArticleAutoClose.js'
import ArticleContainerOverride from './ArticleContainerOverride.js'
import ArticleDefault from './ArticleDefault.js'
import ArticleMobileLeftIcon from './ArticleMobileLeftIcon.js'
import ArticlePosition from './ArticlePosition.js'
import ArticleRoundedCorners from './ArticleRoundedCorners.js'
import ArticleTypeAndVariation from './ArticleTypeAndVariation.js'

const BASE_CLASS_DEMO = `DemoMoleculeNotification`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Notification</H1>
      <Paragraph>
        Notifications offer users information on the system. The content may confirm that an action has been performed
        correctly, warn the user of an error or simply give information on certain circumstances.
      </Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleAutoClose className={CLASS_SECTION} />
      <br />
      <ArticleTypeAndVariation className={CLASS_SECTION} />
      <br />
      <ArticlePosition className={CLASS_SECTION} />
      <br />
      <ArticleRoundedCorners className={CLASS_SECTION} />
      <br />
      <ArticleMobileLeftIcon className={CLASS_SECTION} />
      <br />
      <ArticleContainerOverride className={CLASS_SECTION} />
      <br />
      <ArticleAlignItems className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
