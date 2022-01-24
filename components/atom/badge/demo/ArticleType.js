import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomBadge, {atomBadgeTypes} from '../src/index.js'

const ArticleType = ({className}) => {
  return (
    <Article className={className}>
      <H2>Type</H2>
      <div>
        <Paragraph>
          These are the available <Code>types</Code> of badges, which are solid
          by default.
        </Paragraph>
        <AtomBadge label="success" type={atomBadgeTypes.SUCCESS} />
        <AtomBadge label="error" type={atomBadgeTypes.ERROR} />
        <AtomBadge label="info" type={atomBadgeTypes.INFO} />
        <AtomBadge label="alert" type={atomBadgeTypes.ALERT} />
        <AtomBadge label="new" type={atomBadgeTypes.NEW} />
        <AtomBadge label="neutral" type={atomBadgeTypes.NEUTRAL} />
        <AtomBadge label="primary" type={atomBadgeTypes.PRIMARY} />
      </div>
      <Paragraph>___</Paragraph>
      <div>
        <Paragraph>
          Use the Prop <Code>transparent</Code> to remove the background.
        </Paragraph>
        <AtomBadge label="success" type={atomBadgeTypes.SUCCESS} transparent />
        <AtomBadge label="error" type={atomBadgeTypes.ERROR} transparent />
        <AtomBadge label="info" type={atomBadgeTypes.INFO} transparent />
        <AtomBadge label="alert" type={atomBadgeTypes.ALERT} transparent />
        <AtomBadge label="new" type={atomBadgeTypes.NEW} transparent />
        <AtomBadge label="neutral" type={atomBadgeTypes.NEUTRAL} transparent />
        <AtomBadge label="primary" type={atomBadgeTypes.PRIMARY} transparent />
      </div>
    </Article>
  )
}

ArticleType.propTypes = {
  className: PropTypes.string
}

export default ArticleType
