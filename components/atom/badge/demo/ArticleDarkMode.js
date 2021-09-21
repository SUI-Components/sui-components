import PropTypes from 'prop-types'
import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomBadge, {atomBadgeDesigns, atomBadgeTypes} from '../src'

const ArticleDarkMode = ({className}) => {
  return (
    <Article mode="dark" className={className}>
      <H2>Dark mode</H2>
      <div>
        <Paragraph>
          There is no <Code>negative</Code> Prop for this component.
        </Paragraph>
        <Paragraph>
          This is how the Badges look like over dark backgrounds.
        </Paragraph>
        <AtomBadge label="success" type={atomBadgeTypes.SUCCESS} />
        <AtomBadge label="error" type={atomBadgeTypes.ERROR} />
        <AtomBadge label="info" type={atomBadgeTypes.INFO} />
        <AtomBadge label="alert" type={atomBadgeTypes.ALERT} />
        <AtomBadge label="new" type={atomBadgeTypes.NEW} />
        <AtomBadge label="neutral" type={atomBadgeTypes.NEUTRAL} />
        <AtomBadge label="primary" type={atomBadgeTypes.PRIMARY} />
        <AtomBadge label="secondary" type={atomBadgeTypes.SECONDARY} />
      </div>
      <Paragraph>___</Paragraph>
      <div>
        <AtomBadge label="success" type={atomBadgeTypes.SUCCESS} transparent />
        <AtomBadge label="error" type={atomBadgeTypes.ERROR} transparent />
        <AtomBadge label="info" type={atomBadgeTypes.INFO} transparent />
        <AtomBadge label="alert" type={atomBadgeTypes.ALERT} transparent />
        <AtomBadge label="new" type={atomBadgeTypes.NEW} transparent />
        <AtomBadge label="neutral" type={atomBadgeTypes.NEUTRAL} transparent />
        <AtomBadge label="primary" type={atomBadgeTypes.PRIMARY} transparent />
        <AtomBadge
          label="secondary"
          type={atomBadgeTypes.SECONDARY}
          transparent
        />
      </div>
      <Paragraph>___</Paragraph>
      <div>
        <AtomBadge
          label="success"
          type={atomBadgeTypes.SUCCESS}
          design={atomBadgeDesigns.SOFT}
        />
        <AtomBadge
          label="error"
          type={atomBadgeTypes.ERROR}
          design={atomBadgeDesigns.SOFT}
        />
        <AtomBadge
          label="info"
          type={atomBadgeTypes.INFO}
          design={atomBadgeDesigns.SOFT}
        />
        <AtomBadge
          label="alert"
          type={atomBadgeTypes.ALERT}
          design={atomBadgeDesigns.SOFT}
        />
        <AtomBadge
          label="new"
          type={atomBadgeTypes.NEW}
          design={atomBadgeDesigns.SOFT}
        />
        <AtomBadge
          label="neutral"
          type={atomBadgeTypes.NEUTRAL}
          design={atomBadgeDesigns.SOFT}
        />
        <AtomBadge
          label="primary"
          type={atomBadgeTypes.PRIMARY}
          design={atomBadgeDesigns.SOFT}
        />
        <AtomBadge
          label="secondary"
          type={atomBadgeTypes.SECONDARY}
          design={atomBadgeDesigns.SOFT}
        />
      </div>
    </Article>
  )
}

ArticleDarkMode.propTypes = {
  className: PropTypes.string
}

export default ArticleDarkMode
