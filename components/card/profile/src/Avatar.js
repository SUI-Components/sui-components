import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ profilePic }) => <div className='sui-CardProfile-avatarHalo'>
  <div className='sui-CardProfile-avatarRadius'>
    <img className='sui-CardProfile-avatarImage' src={profilePic} />
  </div>
</div>

Avatar.propTypes = {
  profilePic: PropTypes.string.isRequired
}

export default Avatar
