import {isElement} from 'react-is'

import PropTypes from 'prop-types'

import AtomLabel from '@s-ui/react-atom-label'
import Injector from '@s-ui/react-primitive-injector'

import {CLASS_NODE_LABEL_CONTAINER} from './config.js'

const MoleculeLabel = ({label, nodeLabel, ...props}) => {
  const innerLabel = () => {
    if ((label && isElement(label)) || (label === undefined && nodeLabel)) {
      return (
        <Injector {...props}>
          {label === undefined ? nodeLabel : label}
        </Injector>
      )
    } else if (label) {
      return <AtomLabel text={label} {...props} />
    }
    return null
  }
  return <div className={CLASS_NODE_LABEL_CONTAINER}>{innerLabel()}</div>
}

MoleculeLabel.propTypes = {
  label: PropTypes.string,
  nodeLabel: PropTypes.element
}

export default MoleculeLabel
