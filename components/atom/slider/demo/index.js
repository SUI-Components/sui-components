import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleSliderDefault from './ArticleSliderDefault.js'
import ArticleSliderControlledState from './ArticleSliderControlledState.js'
import ArticleSliderDisabled from './ArticleSliderDisabled.js'
import ArticleSliderThreshold from './ArticleSliderThreshold.js'
import ArticleSliderSteps from './ArticleSliderSteps.js'
import ArticleSliderMarks from './ArticleSliderMarks.js'
import ArticleSliderInvertColors from './ArticleSliderInvertColors.js'
import ArticleSliderValueLabel from './ArticleSliderValueLabel.js'
import ArticleSliderHideMarks from './ArticleSliderHideMarks.js'
import ArticleRangeDefault from './ArticleRangeDefault.js'
import ArticleRangeControlledState from './ArticleRangeControlledState.js'
import ArticleRangeSteps from './ArticleRangeSteps.js'
import ArticleRangeMarks from './ArticleRangeMarks.js'
import ArticleRangeInvertColors from './ArticleRangeInvertColors.js'

const BASE_CLASS_DEMO = `DemoAtomSlider`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Slider</H1>
      <Paragraph>
        Component that works as an input that provides a slider a number
      </Paragraph>
      <ArticleSliderDefault className={CLASS_SECTION} />
      <br />
      <ArticleSliderControlledState className={CLASS_SECTION} />
      <br />
      <ArticleSliderDisabled className={CLASS_SECTION} />
      <br />
      <ArticleSliderThreshold className={CLASS_SECTION} />
      <br />
      <ArticleSliderSteps className={CLASS_SECTION} />
      <br />
      <ArticleSliderMarks className={CLASS_SECTION} />
      <br />
      <ArticleSliderInvertColors className={CLASS_SECTION} />
      <br />
      <ArticleSliderValueLabel className={CLASS_SECTION} />
      <br />
      <ArticleSliderHideMarks className={CLASS_SECTION} />
      <H1>Range</H1>
      <Paragraph>
        Component that works as an input that provides a slider a set of two
        numbers (range)
      </Paragraph>
      <ArticleRangeDefault className={CLASS_SECTION} />
      <br />
      <ArticleRangeControlledState className={CLASS_SECTION} />
      <br />
      <ArticleRangeSteps className={CLASS_SECTION} />
      <br />
      <ArticleRangeMarks className={CLASS_SECTION} />
      <br />
      <ArticleRangeInvertColors className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
