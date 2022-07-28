import AtomTag, {atomTagDesigns} from 'components/atom/tag/src/index.js'
import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import {icon} from '../settings.js'

const ArticleActionable = ({className}) => {
  return (
    <Article className={className}>
      <H2>Actionable</H2>
      <Paragraph>
        Actionable tags can be used as an anchor. Same as <Code>{'<a>'}</Code>{' '}
        to define an interactivity with the component.
      </Paragraph>
      <AtomTag label="Navigation Tag" onClick={() => window.alert('click!')} />
      <AtomTag
        href="https://sui-components.now.sh/"
        label="Anchor Tag"
        target="_blank"
      />
      <AtomTag
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="right"
        label="Icon placement right"
        target="_blank"
      />
      <AtomTag
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="left"
        label="Icon placement left"
        target="_blank"
      />
      <Paragraph>–––––</Paragraph>
      <Paragraph>
        With <Code>outline</Code> design.
      </Paragraph>
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        label="Navigation Tag"
        onClick={() => window.alert('click!')}
      />
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        href="https://sui-components.now.sh/"
        label="Anchor Tag"
        target="_blank"
      />
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="right"
        label="Icon placement right"
        target="_blank"
      />
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="left"
        label="Icon placement left"
        target="_blank"
      />
      <Paragraph>–––––</Paragraph>
      <Paragraph>
        With <Code>disabled</Code> prop.
      </Paragraph>
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        label="Navigation Tag"
        onClick={() => window.alert('click!')}
        disabled
      />
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        href="https://sui-components.now.sh/"
        label="Anchor Tag"
        target="_blank"
        disabled
      />
      <AtomTag
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="right"
        label="Icon placement right"
        target="_blank"
        disabled
      />
      <AtomTag
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="left"
        label="Icon placement left"
        target="_blank"
        disabled
      />
      <Paragraph>
        With <Code>readOnly</Code> prop.
      </Paragraph>
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        label="Navigation Tag"
        onClick={() => window.alert('click!')}
        readOnly
      />
      <AtomTag
        design={atomTagDesigns.OUTLINE}
        href="https://sui-components.now.sh/"
        label="Anchor Tag"
        target="_blank"
        readOnly
      />
      <AtomTag
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="right"
        label="Icon placement right"
        target="_blank"
        readOnly
      />
      <AtomTag
        href="https://sui-components.now.sh/"
        icon={icon}
        iconPlacement="left"
        label="Icon placement left"
        target="_blank"
        readOnly
      />
      <Paragraph>–––––</Paragraph>
      <H2>With Value prop</H2>
      <Paragraph>
        Use the <Code>value</Code> prop if the tag represents a value and want
        it to be returned on the onClick handler
      </Paragraph>
      <div>
        <AtomTag
          label="With Value"
          value="test"
          onClick={(_, {value, ...args}) => {
            console.log({value, ...args}) // eslint-disable-line
          }}
        />
      </div>
    </Article>
  )
}

ArticleActionable.displayName = 'ArticleActionable'

ArticleActionable.propTypes = {
  className: PropTypes.string
}

export default ArticleActionable
