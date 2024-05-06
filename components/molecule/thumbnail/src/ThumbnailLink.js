import PropTypes from 'prop-types'

const ThumbnailLink = ({children, ...rest} = {}) => <a {...rest}>{children}</a>

ThumbnailLink.displayName = 'ThumbnailLink'
ThumbnailLink.propTypes = {
  children: PropTypes.node
}

export default ThumbnailLink
