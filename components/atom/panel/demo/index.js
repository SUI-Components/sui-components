import ArticleAlpha from './PanelAsColor/ArticleAlpha'
import ArticleColor from './PanelAsColor/ArticleColor'
import ArticleRounded from './PanelAsColor/ArticleRounded'
import ArticleElevated from './PanelAsColor/ArticleElevated'
import ArticleContainer from './PanelAsColor/ArticleContainer'
import ArticleResized from './PanelAsImage/ArticleResized'
import ArticleRoundedAsImage from './PanelAsImage/ArticleRounded'
import ArticleElevatedAsImage from './PanelAsImage/ArticleElevated'
import ArticleHorizontallyCropped from './PanelAsImage/ArticleHorizontallyCropped'
import ArticleVerticallyCropped from './PanelAsImage/ArticleVerticallyCropped'
import ArticlePlaceholder from './PanelAsImage/ArticlePlaceholder'
import ArticleOverlay from './PanelAsImage/ArticleOverlay'
import {H1, H2, Paragraph} from '@s-ui/documentation-library'
const BASE_CLASS_DEMO = `DemoAtomPanel`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

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
