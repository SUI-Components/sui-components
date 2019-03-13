import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MoleculeTab from './components/MoleculeTab'
import withStateActiveTab from './hoc/withStateActiveTab'

const BASE_CLASS = `sui-MoleculeTabs`

const CLASS_SCROLLER = `${BASE_CLASS}-scroller`
const CLASS_CONTENT = `${BASE_CLASS}-content`

const TYPES = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  FULLWIDTH: 'fullWidth'
}

const VARIANTS = {
  HIGHLIGHTED: 'highlighted',
  CLASSIC: 'classic'
}

class MoleculeTabs extends Component {
  get className() {
    const {variant, type} = this.props
    const CLASS_VARIANT = `${BASE_CLASS}--${variant}`
    const CLASS_TYPE = `${BASE_CLASS}--${type}`
    return cx(BASE_CLASS, CLASS_VARIANT, CLASS_TYPE)
  }

  get extendedChildren() {
    const {children, onChange} = this.props // eslint-disable-line
    return React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index, children) => {
        const {children: childrenChild, active} = child.props
        const numTab = index + 1
        if (active) this.activeStepContent = childrenChild

        return React.cloneElement(child, {
          numTab,
          onChange,
          active
        })
      })
  }

  render() {
    const {extendedChildren, activeStepContent, className} = this
    return (
      <div className={className}>
        <ul className={CLASS_SCROLLER}>{extendedChildren}</ul>
        <div className={CLASS_CONTENT}>{activeStepContent}</div>
      </div>
    )
  }
}

MoleculeTabs.displayName = 'MoleculeTabs'

MoleculeTabs.propTypes = {
  /** onChange */
  onChange: PropTypes.func,

  /** variant */
  variant: PropTypes.oneOf(Object.values(VARIANTS)),

  /** type */
  type: PropTypes.oneOf(Object.values(TYPES))
}

MoleculeTabs.defaultProps = {
  variant: VARIANTS.CLASSIC,
  type: TYPES.HORIZONTAL,
  onChange: () => {}
}

export default withStateActiveTab(MoleculeTabs)
export {
  MoleculeTabs,
  MoleculeTab,
  TYPES as moleculeTabsTypes,
  VARIANTS as moleculeTabsVariants
}
