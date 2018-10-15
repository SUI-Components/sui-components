import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MoleculeCollapsible from '../../../molecule/collapsible/src'

const BASE_CLASS = 'sui-AtomAccordion'

class AtomAccordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  onOpen = () => {
    this.setState({collapsed: false})
  }

  render() {
    const {collapsed} = this.state
    const {withTransition, maxHeight} = this.props
    const children = React.Children.map(
      this.props.children,
      (child, index) => {
        return React.cloneElement(child, {
          ref: `child${index}`,
          minHeight: 0,
          maxHeight: maxHeight,
          withGradient: false,
          withTransition: withTransition,
          isCollapsed: collapsed,
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
  },
  /**
   * Define the max height visible
   */
  maxHeight: PropTypes.number,
  /**
   * Activate/deactivate autoclose
   */
  withAutoClose: PropTypes.bool,
  /**
   * Activate/deactivate transition
   */
  withTransition: PropTypes.bool
}
AtomAccordion.defaultProps = {
  maxHeight: 100,
  withAutoClose: true,
  withTransition: true
}

export default AtomAccordion
