/* eslint-disable react/prop-types, no-unused-vars, no-console */

import {forwardRef} from 'react'
import './index.scss'
import {H1, Paragraph, Anchor} from '@s-ui/documentation-library'
import ArticleDefault from './ArticleDefault'
import ArticlePosition from './ArticlePosition'
import ArticleCloseIcon from './ArticleCloseIcon'
import ArticleArrow from './ArticleArrow'
import ArticleRef from './ArticleRef'
import ArticleBehavior from './ArticleBehavior'

const BASE_CLASS_DEMO = `DemoAtomPopover`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Content = forwardRef((props, forwardedRef) => {
  return (
    <div ref={forwardedRef} style={{width: '200px', padding: '8px'}}>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mauris
        ornare, imperdiet nunc a, interdum dolor.
      </span>
    </div>
  )
})

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Popover</H1>
        <Paragraph>
          A popover is a transient view that shows on a content screen when a
          user clicks on a control button or within a defined area. It is
          generally used in big screens (tablet or bigger) and might be avoid
          for mobile devices.
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
        {/*<ArticlePosition className={CLASS_SECTION} content={Content} />*/}
        {/*<br />*/}
        {/*<ArticleCloseIcon className={CLASS_SECTION} content={Content} />*/}
        {/*<br />*/}
        {/*<ArticleArrow className={CLASS_SECTION} content={Content} />*/}
        {/*<br />*/}
        {/*<ArticleBehavior className={CLASS_SECTION} content={Content} />*/}
        {/*<br />*/}
        {/*<ArticleRef className={CLASS_SECTION} content={Content} />*/}
        <br />
      </div>
    </div>
  )
}

export default Demo
