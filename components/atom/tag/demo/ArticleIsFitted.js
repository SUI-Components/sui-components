import {useState} from 'react'
import PropTypes from 'prop-types'
import {Article, H2, Paragraph, Code} from '@s-ui/documentation-library'
import AtomTag, {atomTagDesigns} from 'components/atom/tag/src'

const noop = () => null

const ArticleIsFitted = ({className, icon: iconProp}) => {
  const [disabled] = useState(false)
  const [outlined] = useState(false)
  const [actionable] = useState(false)
  const [icon] = useState(null)
  return (
    <Article className={className}>
      <H2>isFitted</H2>
      <Paragraph>
        <Code>isFitted</Code> boolean prop (default false) is provided to make a
        transition between this and next major version. When it is true, the
        element is margin-border and also padding-less it order to provide te
        element boundings as is.
      </Paragraph>
      <AtomTag
        label="Alert"
        type="alert"
        disabled={disabled}
        design={outlined ? atomTagDesigns.OUTLINE : atomTagDesigns.SOLID}
        icon={icon}
        isFitted
        {...{...(actionable && {onClick: noop})}}
      />

      <AtomTag
        label="Warning"
        type="warning"
        disabled={disabled}
        design={outlined ? atomTagDesigns.OUTLINE : atomTagDesigns.SOLID}
        icon={icon}
        isFitted
        {...{...(actionable && {onClick: noop})}}
      />

      <AtomTag
        label="Special"
        type="special"
        disabled={disabled}
        design={outlined ? atomTagDesigns.OUTLINE : atomTagDesigns.SOLID}
        icon={icon}
        isFitted
        {...{...(actionable && {onClick: noop})}}
      />

      <AtomTag
        label="5 min ago"
        type="date"
        disabled={disabled}
        design={outlined ? atomTagDesigns.OUTLINE : atomTagDesigns.SOLID}
        icon={icon}
        isFitted
        {...{...(actionable && {onClick: noop})}}
      />
    </Article>
  )
}

ArticleIsFitted.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node
}

export default ArticleIsFitted
