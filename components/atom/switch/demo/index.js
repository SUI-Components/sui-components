import {Box, H1, H2, Paragraph, Strong} from '@s-ui/documentation-library'

import ArticleA11y from './articles/ArticleA11y.js'
import ArticleColors from './articles/ArticleColors.js'
import ArticleControlledAndUncontrolled from './articles/ArticleControlledAndUncontrolled.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleDesigns from './articles/ArticleDesigns.js'
import ArticleDisabled from './articles/ArticleDisabled.js'
import ArticleFullWidth from './articles/ArticleFullWidth.js'
import ArticleIcons from './articles/ArticleIcons.js'
import ArticleLoading from './articles/ArticleLoading.js'
import ArticleReadOnly from './articles/ArticleReadOnly.js'
import ArticleSizes from './articles/ArticleSizes.js'
import {CLASS_SECTION} from './settings.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Switch</H1>
      <Paragraph>A control that allows the user to toggle between checked and not checked states.</Paragraph>
      <H2>Switches are not checkboxes</H2>
      <Box style={{backgroundColor: 'color-mix(in srgb, #FFFF00 10%, transparent)'}}>
        <Paragraph>
          Switches are used to toggle the state of something between two states <Strong>immediately</Strong>.
        </Paragraph>
        <Paragraph>
          Users expect it to have an immediate effect in the same way, such as enabling dark mode, or subtitles in a
          video. You should never have to press any other buttons in order to apply changes that you’ve already toggled.
        </Paragraph>
      </Box>
      <Paragraph>
        They are NOT used to submit a form or to be part of a group of switches. If you need to submit a form, use a
        checkbox.
      </Paragraph>
      <Paragraph>
        In conclusion, <Strong>switches are used to immediately activate or deactivate</Strong> something and{' '}
        <Strong>checkboxes are used to select or deselect</Strong> something and submit the form.
      </Paragraph>

      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleColors className={CLASS_SECTION} />
      <br />
      <ArticleReadOnly className={CLASS_SECTION} />
      <br />
      <ArticleDisabled className={CLASS_SECTION} />
      <br />
      <ArticleDesigns className={CLASS_SECTION} />
      <br />
      <ArticleSizes className={CLASS_SECTION} />
      <br />
      <ArticleIcons className={CLASS_SECTION} />
      <br />
      <ArticleControlledAndUncontrolled className={CLASS_SECTION} />
      <br />
      <ArticleFullWidth className={CLASS_SECTION} />
      <br />
      <ArticleLoading className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
