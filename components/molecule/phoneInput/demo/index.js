import {AntDesignIcon, H1, Paragraph} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import ArticleDefault from './ArticleDefault.js'
import ArticleStates from './ArticleStates.js'
import ArticleTypes from './ArticleTypes.js'

export const icon = (
  <AtomIcon>
    <AntDesignIcon icon={'AiOutlineDown'} style={{fill: 'currentColor'}} />
  </AtomIcon>
)

export default () => {
  return (
    <div className="sui-StudioPreview">
      <H1>Phone Input Demo</H1>
      <Paragraph>Telephone type input with prefixes in a dropdown.</Paragraph>
      <br />
      <ArticleDefault icon={<AtomIcon />} />
      <br />
      <ArticleTypes icon={<AtomIcon />} />
      <br />
      <ArticleStates icon={<AtomIcon />} />
    </div>
  )
}
