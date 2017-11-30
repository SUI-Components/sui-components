import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ profilePic }) => <div className='sui-CardProfile-topContainerAvatarHalo'>
  <div className='sui-CardProfile-topContainerAvatarRadiusWrapper'>
    <img src={profilePic} />
  </div>
</div>

Avatar.propTypes = {
  profilePic: PropTypes.string.isRequired
}

export default Avatar
