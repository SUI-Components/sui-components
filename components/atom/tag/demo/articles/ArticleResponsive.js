import AtomTag, {atomTagSizes} from 'components/atom/tag/src/index.js'
import PropTypes from 'prop-types'

import {Article, Code, H2, Paragraph} from '@s-ui/documentation-library'

import {closeIcon, handleClose, icon} from '../settings.js'

const ArticleResponsive = ({className}) => {
  return (
    <Article className={className}>
      <H2>Responsive</H2>
      <Paragraph>
        Use the <Code>responsive</Code> true for make responsive layout. keep
        large size in mobile.
      </Paragraph>
      <div>
        <AtomTag
          closeIcon={closeIcon}
          icon={icon}
          label="Icon & Close Tag"
          onClose={handleClose}
          responsive
          size={atomTagSizes.SMALL}
        />
        <AtomTag
          href="https://sui-components.now.sh/"
          icon={icon}
          iconPlacement="right"
          label="Icon placement right"
          responsive
          target="_blank"
        />
        <AtomTag
          closeIcon={closeIcon}
          icon={icon}
          label="Icon & Close Tag"
          onClose={handleClose}
          responsive
        />
        <AtomTag
          closeIcon={closeIcon}
          icon={icon}
          label="Icon & Close Tag"
          onClose={handleClose}
          responsive
          size={atomTagSizes.LARGE}
        />
      </div>
    </Article>
  )
}

ArticleResponsive.displayName = 'ArticleResponsive'

ArticleResponsive.propTypes = {
  className: PropTypes.string
}

export default ArticleResponsive
