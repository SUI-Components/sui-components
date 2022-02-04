import {H1, Paragraph, Code} from '@s-ui/documentation-library'

import {CLASS_SECTION} from './settings.js'
import ArticleState from './Articles/ArticleState.js'
import ArticleBounds from './Articles/ArticleBounds.js'
import ArticleLoading from './Articles/ArticleLoading.js'
import ArticleSizes from './Articles/ArticleSizes.js'
import ArticleIcons from './Articles/ArticleIcons.js'
import ArticleDisabled from './Articles/ArticleDisabled.js'

const Demo = () => {
  return (
    <div>
      <H1>Data Counter</H1>
      <Paragraph>
        <Code>MoleculeDataCounter</Code> is an input type number controller we
        can use to increase (+1) or decrease (-1) the value of such input.
      </Paragraph>
      <ArticleState className={CLASS_SECTION} />
      <br />
      <ArticleBounds className={CLASS_SECTION} />
      <br />
      <ArticleLoading className={CLASS_SECTION} />
      <br />
      <ArticleSizes className={CLASS_SECTION} />
      <br />
      <ArticleIcons className={CLASS_SECTION} />
      <br />
      <ArticleDisabled className={CLASS_SECTION} />
      <br />
    </div>
  )
}

export default Demo
