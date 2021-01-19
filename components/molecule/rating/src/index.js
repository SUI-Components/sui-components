import PropTypes from 'prop-types'
import cx from 'classnames'
import {ATOM_ICON_SIZES} from '@s-ui/react-atom-icon'
import Star from './components/Star'
import StarHover from './components/StarHover'

const SIZES = {
  SMALL: ATOM_ICON_SIZES.small,
  MEDIUM: ATOM_ICON_SIZES.medium,
  LARGE: ATOM_ICON_SIZES.large
}

const BASE_CLASS = `sui-MoleculeRating`
const CLASS_CONTAINER_STARS = `${BASE_CLASS}-containerStars`
const CLASS_LABEL = `${BASE_CLASS}-label`
const CLASS_LINK = `${BASE_CLASS}--withLink`
const CLASS_LABEL_LINK = `${CLASS_LABEL}Link`

const MoleculeRating = ({
  iconStar,
  initialRating,
  isHovered = false,
  numStars = 5,
  value,
  ratingValues,
  size = SIZES.SMALL,
  label,
  href,
  target,
  onClick,
  // eslint-disable-next-line react/prop-types
  linkFactory: Link = ({children, ...rest} = {}) => <a {...rest}>{children}</a>,
  ...props
}) => {
  const className = cx(BASE_CLASS, `${BASE_CLASS}--${size}`, {
    [CLASS_LINK]: href
  })

  const labelLink = href ? (
    <Link
      className={CLASS_LABEL_LINK}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener' : undefined}
    >
      {label}
    </Link>
  ) : (
    label
  )

  return (
    <div className={className}>
      <div className={CLASS_CONTAINER_STARS}>
        {!isHovered ? (
          new Array(numStars)
            .fill(0)
            .map((_, index) => (
              <Star
                size={size}
                key={index}
                index={index}
                value={value}
                {...props}
              />
            ))
        ) : (
          <StarHover
            iconStar={iconStar}
            initialRating={initialRating}
            onClick={onClick}
            ratingValues={ratingValues}
            size={size}
          />
        )}
      </div>
      {label && <p className={CLASS_LABEL}>{labelLink}</p>}
    </div>
  )
}

MoleculeRating.displayName = 'MoleculeRating'

MoleculeRating.propTypes = {
  /** Number of Stars */
  numStars: PropTypes.number,

  /** Value of Rating */
  value: PropTypes.number,

  /** Rating value of each Star */
  ratingValues: PropTypes.array,

  /** Label of Rating */
  label: PropTypes.string,

  /** init value assigned to rating */
  initialRating: PropTypes.number,

  /** Prop to get the hovered behavior of the component */
  isHovered: PropTypes.bool,

  /** size */
  size: PropTypes.oneOf(Object.values(SIZES)),

  /** Target to be added on the HTML link */
  target: PropTypes.string,

  /** URL to be added on the HTML link */
  href: PropTypes.string,

  /** Factory used to create navigation links */
  linkFactory: PropTypes.func,

  /** Callback used component hovered */
  onClick: PropTypes.func,

  /** Icon custom to StarHover  */
  iconStar: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
}

export default MoleculeRating
export {SIZES as MoleculeRatingSizes}
