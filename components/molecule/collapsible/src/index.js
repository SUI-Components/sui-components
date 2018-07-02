import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-MoleculeCollapsible'
const CONTENT_CLASS = `${BASE_CLASS}-content`
const CONTAINER_BUTTON_CLASS = `${BASE_CLASS}-cotainer`
const BUTTON_CLASS = `${BASE_CLASS}-btn`
const MIN_HEIGHT = 100 // px

class MoleculeCollapsible extends Component {
  state = {
    show: false
  }

  render() {
    const {show} = this.state
    const {
      children,
      height,
      icon,
      showText,
      hideText,
      hasGradient,
      onOpen,
      onClose
    } = this.props
    const wrapperClassName = cx(`${BASE_CLASS}`, {
      [`${BASE_CLASS}-gradient`]: hasGradient
    })

    toggleCollapse = () => {
      if (show) {
        onClose()
      } else {
        onOpen()
      }
    }

    return (
      <div className={wrapperClassName}>
        <div className={CONTENT_CLASS} height={height}>
          {children}
          <div className={CONTAINER_BUTTON_CLASS}>
            <button
              type="button"
              className={BUTTON_CLASS}
              onClick={this.toggleCollapse}
            >
              {show ? hideText : showText}
              <span>{icon}</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

MoleculeCollapsible.displayName = 'MoleculeCollapsible'

MoleculeCollapsible.propTypes = {
  /**
   * Content to collapse
   */
  children: PropTypes.node.isRequired,
  /**
   * Define the min height visible
   */
  height: PropTypes.number,
  /**
   * Icon to be added on the right of the content
   */
  icon: PropTypes.node.isRequired,
  /**
   * Text to show when content is collapsed
   */
  showText: PropTypes.string.isRequired,
  /**
   * Text to show when content is not collapsed
   */
  hideText: PropTypes.string.isRequired,
  /**
   * Activate/deactivate gradient 
   */
  hasGradient: PropTypes.bool,
  /**
   * On open callback
   */
  onOpen: PropTypes.func,
  /**
   * On close callback
   */
  onClose: PropTypes.func
}

MoleculeCollapsible.defaultProps = {
  height: MIN_HEIGHT,
  hasGradient: true
}

export default MoleculeCollapsible