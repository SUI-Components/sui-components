import React, {PropTypes} from 'react'

const DefaultCallToAction = ({ text, url, icon: Icon, linkFactory: Link }) =>
  <div className='sui-TopbarUser-navCTA'>
    <Link href={url} className='sui-TopbarUser-navCTALink' title={text}>
      {Icon && <Icon svgClass='sui-TopbarUser-navCTAIcon' />}
      <span>{text}</span>
    </Link>
  </div>

DefaultCallToAction.displayName = 'DefaultCallToAction'

DefaultCallToAction.propTypes = {
  linkFactory: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.func
}

export default DefaultCallToAction
