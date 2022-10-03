import {cloneElement} from 'react'
import {isElement} from 'react-is'

import PropTypes from 'prop-types'

import AtomLabel, {AtomLabelTypes} from '@s-ui/react-atom-label'

import {CLASS_NODE_LABEL_CONTAINER} from './config.js'

const MoleculeLabel = ({
  label,
  nodeLabel,
  type: typeValidationLabel,
  name,
  onClick
}) => {
  const innerLabel = () => {
    if ((label && isElement(label)) || (label === undefined && nodeLabel)) {
      return cloneElement(label === undefined ? nodeLabel : label, {
        type: typeValidationLabel,
        name,
        onClick
      })
    } else if (label) {
      return (
        <AtomLabel
          type={typeValidationLabel}
          name={name}
          text={label}
          onClick={onClick}
        />
      )
    }
    return null
  }
  return <div className={CLASS_NODE_LABEL_CONTAINER}>{innerLabel()}</div>
}

MoleculeLabel.propTypes = {
  label: PropTypes.string,
  nodeLabel: PropTypes.element,
  type: PropTypes.oneOf(Object.values(AtomLabelTypes)),
  name: PropTypes.string,
  onClick: PropTypes.func
}

export default MoleculeLabel
