import React, {PropTypes} from 'react'

const DefaultCallToAction = ({ text, url, notifications, icon: Icon, linkFactory: Link, className }) =>
  <div className={className}>
    <Link href={url} className={`${className}Link`} title={text}>
      {Icon && <Icon svgClass={`${className}Icon`} />}
      <span>{text}</span>
      {!!notifications && <span className={`${className}Notifications`}>{notifications}</span>}
    </Link>
  </div>

DefaultCallToAction.displayName = 'DefaultCallToAction'

DefaultCallToAction.propTypes = {
  linkFactory: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  notifications: PropTypes.number,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.func
}

DefaultCallToAction.defaultProps = {
  notifications: 0
}

export default DefaultCallToAction
