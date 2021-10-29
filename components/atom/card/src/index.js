import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomCard'
const CLASS_MEDIA = `${BASE_CLASS}-media`
const CLASS_INFO = `${BASE_CLASS}-info`

const CLASS_VERTICAL = `${BASE_CLASS}--vertical`
const CLASS_RESPONSIVE = `${BASE_CLASS}--responsive`
const CLASS_HIGHLIGHT = `${BASE_CLASS}--highlight`
const CLASS_LINK = `${BASE_CLASS}-link`

const BORDER_RADIUS = {
  S: 's',
  M: 'm',
  L: 'l'
}

const ELEVATION = {
  S: 's',
  M: 'm',
  L: 'l'
}

const AtomCard = ({
  media: Media,
  content: Content,
  vertical,
  responsive,
  rounded,
  elevation,
  highlight,
  href,
  onClick,
  tabIndex
}) => {
  const redirectToHref = () => {
    if (href) window.open(href, '_blank')
  }

  const redirectOnEnter = e => {
    if (e.key === 'Enter') redirectToHref()
  }

  const isVertical = vertical && !responsive

  const classNames = cx(
    BASE_CLASS,
    isVertical && CLASS_VERTICAL,
    responsive && CLASS_RESPONSIVE,
    highlight && CLASS_HIGHLIGHT,
    href && CLASS_LINK,
    onClick && CLASS_LINK,
    rounded && `${BASE_CLASS}--rounded-${rounded}`,
    elevation && `${BASE_CLASS}--elevation-${elevation}`
  )

  return (
    <div
      className={classNames}
      tabIndex={tabIndex}
      role="button"
      onClick={onClick ?? redirectToHref}
      onKeyDown={redirectOnEnter}
    >
      {Media && (
        <div className={CLASS_MEDIA}>
          <Media />
        </div>
      )}

      <div className={CLASS_INFO}>{Content && <Content />}</div>
    </div>
  )
}

AtomCard.displayName = 'AtomCard'

AtomCard.propTypes = {
  /** HTML (component) to be displayed on the left/right side. It's an optional component */
  media: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** HTML (component) to be displayed on the other side */
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** true for vertical layout */
  vertical: PropTypes.bool,

  /** true for make responsive layout */
  responsive: PropTypes.bool,

  /** Specify the border-radius of the card  */
  rounded: PropTypes.oneOf(Object.values(BORDER_RADIUS)),

  /** Specify the box-shadow of the card  */
  elevation: PropTypes.oneOf(Object.values(ELEVATION)),

  /** true for highlight mode */
  highlight: PropTypes.bool,

  /** url target of the card */
  href: PropTypes.string,

  /** tab order */
  tabIndex: PropTypes.string,

  /**  */
  onClick: PropTypes.func
}

export default AtomCard
export {BORDER_RADIUS as atomCardRounded, ELEVATION as atomCardElevation}
