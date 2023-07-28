import {AntDesignIcon, H1, Paragraph} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import ArticleDefault from './ArticleDefault.js'
import ArticleStates from './ArticleStates.js'
import ArticleTypes from './ArticleTypes.js'

export const openIcon = (
  <AtomIcon>
    <AntDesignIcon icon={'AiOutlineDown'} style={{fill: 'currentColor'}} />
  </AtomIcon>
)

export const closeIcon = (
  <AtomIcon>
    <AntDesignIcon icon={'AiOutlineUp'} style={{fill: 'currentColor'}} />
  </AtomIcon>
)

export default () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Phone Input Demo</H1>
      <Paragraph>
        Telephone type input with prefixes in a dropdown.
        <strong>
          PhoneInput checks if the number's prefix matches a landline format and
          formats it accordingly for mobile or landline use.
        </strong>
      </Paragraph>

      <br />
      <ArticleDefault openIcon={openIcon} closeIcon={closeIcon} />
      <br />
      <ArticleTypes openIcon={openIcon} closeIcon={closeIcon} />
      <br />
      <ArticleStates openIcon={openIcon} closeIcon={closeIcon} />
    </div>
  )
}
