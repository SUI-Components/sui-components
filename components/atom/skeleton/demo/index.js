/* eslint-disable react/prop-types, no-unused-vars, no-console */

import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './ArticleDefault'
import ArticleAnimation from './ArticleAnimation'
import ArticleSize from './ArticleSize'
import ArticleVariant from './ArticleVariant'
import ArticleCount from './ArticleCount'

import './index.scss'

const BASE_CLASS_DEMO = `DemoAtomSkeleton`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Skeleton</H1>
        <Paragraph>
          Skeleton is used to display the loading state of a component while
          avoiding layout shift.
        </Paragraph>
        <ArticleDefault className={CLASS_SECTION} />
        <br />
        <ArticleVariant className={CLASS_SECTION} />
        <br />
        <ArticleSize className={CLASS_SECTION} />
        <br />
        <ArticleAnimation className={CLASS_SECTION} />
        <br />
        <ArticleCount className={CLASS_SECTION} />
        <br />
      </div>
    </div>
  )
}

export default Demo
