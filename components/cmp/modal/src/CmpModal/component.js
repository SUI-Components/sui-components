import React from 'react'
import PropTypes from 'prop-types'

import {CLASS} from '../settings'

export const CmpModal = ({logo}) => (
  <div className={CLASS}>
    <div className={`${CLASS}-content`}>
      <header className={`${CLASS}-header`}>
        <img
          alt="Schibsted Spain logo"
          className={`${CLASS}-logo`}
          src={logo}
        />
      </header>
    </div>
  </div>
)

CmpModal.propTypes = {
  logo: PropTypes.string
}
