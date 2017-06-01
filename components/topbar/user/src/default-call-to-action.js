import React, {PropTypes} from 'react'

const DefaultCallToAction = ({ text, url, notifications, icon: Icon, linkFactory: Link }) =>
  <div className='sui-TopbarUser-navCTA'>
    <Link href={url} className='sui-TopbarUser-navCTALink' title={text}>
      {Icon && <Icon svgClass='sui-TopbarUser-navCTAIcon' />}
      <span>{text}</span>
      {!!notifications && <span className='sui-TopbarUser-navCTANotifications'>{notifications}</span>}
    </Link>
  </div>

DefaultCallToAction.displayName = 'DefaultCallToAction'

DefaultCallToAction.propTypes = {
  linkFactory: PropTypes.func.isRequired,
  notifications: PropTypes.number,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.func
}

DefaultCallToAction.defaultProps = {
  notifications: 0
}

export default DefaultCallToAction
