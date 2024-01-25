import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import AtomBadge, {atomBadgeTypes} from '../src/index.js'

const ArticleIsFitted = ({className}) => {
  return (
    <Article className={className}>
      <H2>isFitted</H2>
      <div>
        <Paragraph>
          <Code>isFitted</Code> boolean prop (default false) is provided to make a transition between this and next
          major version. When it is true, the element is margin-border and also padding-less it order to provide te
          element boundings as is.
        </Paragraph>
        <AtomBadge label="success" type={atomBadgeTypes.SUCCESS} isFitted />
        <AtomBadge label="error" type={atomBadgeTypes.ERROR} isFitted />
        <AtomBadge label="info" type={atomBadgeTypes.INFO} isFitted />
        <AtomBadge label="alert" type={atomBadgeTypes.ALERT} isFitted />
        <AtomBadge label="new" type={atomBadgeTypes.NEW} isFitted />
        <AtomBadge label="neutral" type={atomBadgeTypes.NEUTRAL} isFitted />
        <AtomBadge label="primary" type={atomBadgeTypes.PRIMARY} isFitted />
      </div>
    </Article>
  )
}

ArticleIsFitted.propTypes = {
  className: PropTypes.string
}

export default ArticleIsFitted
