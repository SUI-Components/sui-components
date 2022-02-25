import {cloneElement} from 'react'
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
    if (label) {
      return (
        <AtomLabel
          type={typeValidationLabel}
          name={name}
          text={label}
          onClick={onClick}
        />
      )
    } else if (nodeLabel) {
      return cloneElement(nodeLabel, {
        type: typeValidationLabel,
        name,
        onClick
      })
    }
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
