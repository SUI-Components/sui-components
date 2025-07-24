import {Bold, H1, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import ArticleA11y from './articles/ArticleA11y.js'
import ArticleAPI from './articles/ArticleAPI.js'
import ArticleControlled from './articles/ArticleControlled.js'
import ArticleDefault from './articles/ArticleDefault.js'
import ArticleEffect from './articles/ArticleEffect.js'
import ArticleForm from './articles/ArticleForm.js'
import ArticleInset from './articles/ArticleInset.js'
import ArticleKeyboardNavigation from './articles/ArticleKeyboardNavigation.js'
import ArticleSize from './articles/ArticleSize.js'
import ArticleURLState from './articles/ArticleURLState.js'
import {CLASS_SECTION} from './config.js'

const Demo = () => {
  return (
    <div className="sui-StudioPreview DemoMoleculeModal">
      <H1>Modal</H1>
      <Paragraph>
        Modal windows focus users' attention to inform them about a specific interaction. They may require users to make
        a decision or warn them when an error may have very significant consequences.
      </Paragraph>
      <Paragraph>
        Its important to differentiate between modal and alert-modal components. The first one is used to inform users
        about a specific interaction, while the second one is used to inform users about an error that may have very
        significant consequences.
      </Paragraph>
      <UnorderedList>
        <ListItem>
          <Bold>Modal</Bold>: A <Bold>general-purpose</Bold> popup component. It can contain <Bold>any</Bold> custom
          content — forms, text, images, buttons, whatever you want. It’s meant to <Bold>hold a conversation</Bold> with
          the user: present information, ask for input, etc. Think of it like a <Bold>blank canvas</Bold> for any modal
          window.
        </ListItem>
        <ListItem>
          <Bold>AlertModal</Bold>: A <Bold>specific kind</Bold> of dialog used for <Bold>critical actions</Bold> that
          interrupt the user — like confirming deletion, discarding changes, logging out, etc. It{' '}
          <Bold>demands a response</Bold>
          (Confirm/Cancel) and is designed to be more <Bold>urgent and accessible</Bold>.
        </ListItem>
      </UnorderedList>
      <ArticleDefault className={CLASS_SECTION} />
      <br />
      <ArticleControlled className={CLASS_SECTION} />
      <br />
      <ArticleSize className={CLASS_SECTION} />
      <br />
      <ArticleInset className={CLASS_SECTION} />
      <br />
      <ArticleEffect className={CLASS_SECTION} />
      <br />
      <ArticleForm className={CLASS_SECTION} />
      <br />
      <ArticleURLState className={CLASS_SECTION} />
      <br />
      <ArticleAPI className={CLASS_SECTION} />
      <br />
      <ArticleA11y className={CLASS_SECTION} />
      <br />
      <ArticleKeyboardNavigation className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
