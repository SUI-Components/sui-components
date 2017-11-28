import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ profilePic }) => <div className='sui-ProfileSidebarcard-topContainerAvatarHalo'>
  <div className='sui-ProfileSidebarcard-topContainerAvatarRadiusWrapper'>
    <img src={profilePic} />
  </div>
</div>

Avatar.propTypes = {
  profilePic: PropTypes.string.isRequired
}

export default Avatar
