import PropTypes from 'prop-types'

import Injector from '@s-ui/react-primitive-injector'

import {CLASS_NODE_LABEL_CONTAINER, getLabeled} from './config.js'

const MoleculeLabel = ({name, children, ...rest}) => {
  return (
    <div className={CLASS_NODE_LABEL_CONTAINER}>
      <Injector htmlFor={name} {...rest}>
        {getLabeled(children)}
      </Injector>
    </div>
  )
}

MoleculeLabel.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node
}

export default MoleculeLabel
