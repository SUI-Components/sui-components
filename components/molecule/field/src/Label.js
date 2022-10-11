import {isElement} from 'react-is'

import PropTypes from 'prop-types'

import AtomLabel from '@s-ui/react-atom-label'
import Injector from '@s-ui/react-primitive-injector'

import {CLASS_NODE_LABEL_CONTAINER} from './config.js'

const MoleculeLabel = ({label, name, nodeLabel, ...props}) => {
  const innerLabel = () => {
    if ((label && isElement(label)) || (!label && nodeLabel)) {
      const isLabelHTMLElement =
        label?.type === 'label' || nodeLabel?.type === 'label'

      return isLabelHTMLElement ? (
        <Injector {...props} htmlFor={name}>
          {!label ? nodeLabel : label}
        </Injector>
      ) : (
        <AtomLabel
          name={name}
          text={<Injector {...props}>{!label ? nodeLabel : label}</Injector>}
        />
      )
    } else if (label) {
      return <AtomLabel name={name} text={label} {...props} />
    }
    return null
  }
  return <div className={CLASS_NODE_LABEL_CONTAINER}>{innerLabel()}</div>
}

MoleculeLabel.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  nodeLabel: PropTypes.element
}

export default MoleculeLabel
