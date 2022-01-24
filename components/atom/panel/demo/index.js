import {H1, H2, Paragraph} from '@s-ui/documentation-library'

import {CLASS_SECTION} from './config.js'
import ArticleAlpha from './PanelAsColor/ArticleAlpha.js'
import ArticleColor from './PanelAsColor/ArticleColor.js'
import ArticleRounded from './PanelAsColor/ArticleRounded.js'
import ArticleElevated from './PanelAsColor/ArticleElevated.js'
import ArticleContainer from './PanelAsColor/ArticleContainer.js'
import ArticleResized from './PanelAsImage/ArticleResized.js'
import ArticleRoundedAsImage from './PanelAsImage/ArticleRounded.js'
import ArticleElevatedAsImage from './PanelAsImage/ArticleElevated.js'
import ArticleHorizontallyCropped from './PanelAsImage/ArticleHorizontallyCropped.js'
import ArticleVerticallyCropped from './PanelAsImage/ArticleVerticallyCropped.js'
import ArticlePlaceholder from './PanelAsImage/ArticlePlaceholder.js'
import ArticleOverlay from './PanelAsImage/ArticleOverlay.js'

export default () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Panel</H1>
        <H2>As Color Panel</H2>
        <Paragraph>
          Just a background for your component, can be a color or an image with
          background/overlay
        </Paragraph>
        <ArticleAlpha className={CLASS_SECTION} />
        <br />
        <ArticleColor className={CLASS_SECTION} />
        <br />
        <ArticleRounded className={CLASS_SECTION} />
        <br />
        <ArticleElevated className={CLASS_SECTION} />
        <br />
        <ArticleContainer className={CLASS_SECTION} />
        <br />
        <H2>As Image Panel</H2>
        <Paragraph>
          Just a background for your component, can be a color or an image with
          background/overlay
        </Paragraph>
        <ArticleResized className={CLASS_SECTION} />
        <br />
        <ArticleRoundedAsImage className={CLASS_SECTION} />
        <br />
        <ArticleElevatedAsImage className={CLASS_SECTION} />
        <br />
        <ArticleHorizontallyCropped className={CLASS_SECTION} />
        <br />
        <ArticleVerticallyCropped className={CLASS_SECTION} />
        <br />
        <ArticleOverlay className={CLASS_SECTION} />
        <br />
        <ArticlePlaceholder className={CLASS_SECTION} />
      </div>
    </div>
  )
}
