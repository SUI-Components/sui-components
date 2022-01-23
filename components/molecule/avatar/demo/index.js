/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './ArticleDefault.js'
import ArticleLoading from './ArticleLoading.js'
import ArticleSize from './ArticleSize.js'
import ArticleName from './ArticleName.js'
import ArticleImage from './ArticleImage.js'
import ArticleBadge from './ArticleBadge.js'
import ArticleRef from './ArticleRef.js'

import './index.scss'

const BASE_CLASS_DEMO = `DemoMoleculeAvatar`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Avatar</H1>
      <Paragraph>
        The Avatar component is the representation of a user.
      </Paragraph>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleImage className={CLASS_SECTION} />
      <br />
      <ArticleLoading className={CLASS_SECTION} />
      <br />
      <ArticleSize className={CLASS_SECTION} />
      <br />
      <ArticleName className={CLASS_SECTION} />
      <br />
      <ArticleRef className={CLASS_SECTION} />
      <br />
      <H1>Avatar.Badge</H1>
      <Paragraph>
        Badge generates a small badge to its parent's avatar.
      </Paragraph>
      <ArticleBadge className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
