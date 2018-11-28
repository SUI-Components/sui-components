import React, {Component} from 'react'
import PropTypes from 'prop-types'
import MoleculeCollapsible from '../../collapsible/src'

const BASE_CLASS = 'sui-MoleculeAccordion'

class MoleculeAccordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childrenStateList: this.getChildrenInitialStateList()
    }
  }

  getChildrenInitialStateList = () => {
    return this.props.children.map(() => true)
  }

  onToggle = id => {
    const childrenNewStateList = this.state.childrenStateList.map(
      (child, index) => {
        return index !== id ? true : !child
      }
    )
    this.setState({
      childrenStateList: [...childrenNewStateList]
    })
  }

  render() {
    const {childrenStateList} = this.state
    const {withTransition, maxHeight, withAutoClose} = this.props
    const children = React.Children.map(
      this.props.children,
      (child, index) => {
        return React.cloneElement(child, {
          ref: `child${index}`,
          minHeight: 0,
          maxHeight: maxHeight,
          withGradient: false,
          withTransition: withTransition,
          isCollapsed: childrenStateList[index],
          withContentHidden: true,
          withAutoClose: withAutoClose,
          onToggle: () => {
            withAutoClose && this.onToggle(index)
          }
        })
      },
      this
    )
    return <div className={BASE_CLASS}>{children}</div>
  }
}

MoleculeAccordion.displayName = 'MoleculeAccordion'

MoleculeAccordion.propTypes = {
  children: (props, propName, componentName) => {
    let childrenList = props[propName]
    let error = null
    React.Children.forEach(childrenList, child => {
      if (!(child.type.prototype instanceof MoleculeCollapsible)) {
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
MoleculeAccordion.defaultProps = {
  maxHeight: 100,
  withAutoClose: true,
  withTransition: true
}

export default MoleculeAccordion
