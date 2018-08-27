/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeButtonGroup'

// const SIZES = {
//   LARGE: 'large',
//   MEDIUM: 'medium',
//   SMALL: 'small'
// }

const MoleculeButtonGroup = props => {
  return <div className={BASE_CLASS}>{props.children}</div>
}

MoleculeButtonGroup.displayName = 'MoleculeButtonGroup'

// Remove these comments if you need
// MoleculeButtonGroup.contextTypes = {i18n: PropTypes.object}
// MoleculeButtonGroup.propTypes = {}
// MoleculeButtonGroup.defaultProps = {}

export default MoleculeButtonGroup
