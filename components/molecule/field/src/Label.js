import PropTypes from 'prop-types'

import AtomLabel from '@s-ui/react-atom-label'
import Injector from '@s-ui/react-primitive-injector'

import {CLASS_NODE_LABEL_CONTAINER} from './config.js'

const MoleculeLabel = ({label, name, nodeLabel, ...rest}) => {
  const [Component, props] =
    typeof label === 'string'
      ? [AtomLabel, {text: label, name, ...rest}]
      : [
          Injector,
          {htmlFor: name, children: !label ? nodeLabel : label, ...rest}
        ]
  return (
    <div className={CLASS_NODE_LABEL_CONTAINER}>
      <Component {...props} />
    </div>
  )
}

MoleculeLabel.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  nodeLabel: PropTypes.element
}

export default MoleculeLabel
