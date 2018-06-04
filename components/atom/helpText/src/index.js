import React from 'react'
import PropTypes from 'prop-types'

const AtomHelpText = ({text}) => (
  <span className="sui-AtomHelpText">{text}</span>
)

AtomHelpText.displayName = 'AtomHelpText'

AtomHelpText.propTypes = {
  text: PropTypes.string.isRequired
}

export default AtomHelpText
