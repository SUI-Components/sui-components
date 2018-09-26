import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import MoleculeCollapsible from '../../../molecule/collapsible/src'

const BASE_CLASS = 'sui-AtomAccordion'

class AtomAccordion extends Component {
  onOpen = () => {
    window.alert('open!')
  }

  render() {
    const children = React.Children.map(
      this.props.children,
      child => {
        return React.cloneElement(child, {
          minHeight: 0,
          withGradient: false,
          withTransition: false,
          onOpen: () => {
            this.onOpen()
          }
        })
      },
      this
    )
    return <div className={BASE_CLASS}>{children}</div>
  }
}

AtomAccordion.displayName = 'AtomAccordion'

AtomAccordion.propTypes = {
  children: (props, propName, componentName) => {
    let childrenList = props[propName]
    let error = null
    let beFalse = false
    React.Children.forEach(childrenList, child => {
      if (beFalse && child.type.prototype instanceof MoleculeCollapsible) {
        error = new Error(`
          ${componentName} children should be of type MoleculeCollapsible.
        `)
      }
    })
    return error
  }
}
// AtomAccordion.defaultProps = {}

export default AtomAccordion
