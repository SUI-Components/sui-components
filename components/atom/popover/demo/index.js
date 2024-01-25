/* eslint-disable react/prop-types, no-unused-vars, no-console */

import {Anchor, H1, Paragraph} from '@s-ui/documentation-library'

import ArticleArrow from './articles/ArticleArrow.js'
import ArticleBehavior from './articles/ArticleBehavior.js'
import ArticleCloseIcon from './articles/ArticleCloseIcon.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticlePosition from './articles/ArticlePosition.js'
import ArticleRef from './articles/ArticleRef.js'
import ArticleType from './articles/ArticleType.js'
import Content from './Content.js'
import {CLASS_SECTION} from './settings.js'

import './index.scss'

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Popover</H1>
        <Paragraph>
          A popover is a transient view that shows on a content screen when a user clicks on a control button or within
          a defined area. It is generally used in big screens (tablet or bigger) and might be avoid for mobile devices.
        </Paragraph>
        <Paragraph>
          Popovers subject to the general rules about{' '}
          <Anchor href="http://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/modality/">
            modality
          </Anchor>
          , which renders a temporary context to get user’s attention.
        </Paragraph>
        <ArticleDefault className={CLASS_SECTION} content={Content} />
        <br />
        <ArticlePosition className={CLASS_SECTION} content={Content} />
        <br />
        <ArticleCloseIcon className={CLASS_SECTION} content={Content} />
        <br />
        <ArticleArrow className={CLASS_SECTION} content={Content} />
        <br />
        <ArticleBehavior className={CLASS_SECTION} content={Content} />
        <br />
        <ArticleRef className={CLASS_SECTION} content={Content} />
        <br />
        <ArticleType className={CLASS_SECTION} content={<Content style={{color: 'white'}} />} />
      </div>
    </div>
  )
}

export default Demo
