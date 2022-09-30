import {isElement} from 'react-is'

import PropTypes from 'prop-types'

import AtomLabel, {AtomLabelTypes} from '@s-ui/react-atom-label'
import Injector from '@s-ui/react-primitive-injector'

import {CLASS_NODE_LABEL_CONTAINER} from './config.js'

const MoleculeLabel = ({
  label,
  nodeLabel,
  type: typeValidationLabel,
  name,
  onClick
}) => {
  const innerLabel = () => {
    const baseProps = {
      type: typeValidationLabel,
      name,
      onClick
    }

    if (label) {
      const [Component, providedProps] = isElement(label)
        ? [props => <Injector {...props}>{label}</Injector>, baseProps]
        : [AtomLabel, {...baseProps, text: label}]

      return <Component {...providedProps} />
    } else if (nodeLabel) {
      return <Injector {...baseProps}>{nodeLabel}</Injector>
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
