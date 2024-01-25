import AtomTag from 'components/atom/tag/src/index.js'
import PropTypes from 'prop-types'

import {Article, Bold, Code, H2, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'

import {closeIcon, handleClose, icon} from '../settings.js'

const ArticleIcons = ({className}) => {
  return (
    <Article className={className}>
      <H2>Icons</H2>
      <Paragraph>
        Tags can include an action icon (generally a close icon). This icon will always be located to the right of
        content. You can add use the <Code>icon</Code> and <Code>closeIcon</Code> to added a icon.
      </Paragraph>
      <div>
        <AtomTag icon={icon} iconPlacement="left" label="Icon placement left" />
        <AtomTag closeIcon={closeIcon} icon={icon} label="Icon & Close Tag" />
        <AtomTag
          href="https://sui-components.now.sh/"
          icon={icon}
          iconPlacement="right"
          label="Icon placement right"
          target="_blank"
        />
      </div>
      <UnorderedList>
        <ListItem>
          <Bold>Icons are optional</Bold> and can be placed either on the right or the left side, but never on both at
          the same time.
        </ListItem>
        <ListItem>
          Only actionable tags can have <Code>iconPlacement="right"</Code>.
        </ListItem>
      </UnorderedList>
      <Paragraph>–––––</Paragraph>
      <Paragraph>
        You can use a handler through the property with prop <Code>onClose</Code> to add event handler.
      </Paragraph>
      <AtomTag closeIcon={closeIcon} label="Close Tag" value="Close Tag" onClose={handleClose} responsive />
    </Article>
  )
}

ArticleIcons.displayName = 'ArticleIcons'

ArticleIcons.propTypes = {
  className: PropTypes.string
}

export default ArticleIcons
