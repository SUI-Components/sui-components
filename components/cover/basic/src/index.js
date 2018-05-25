import PropTypes from 'prop-types'
import React, {Component} from 'react'
import cx from 'classnames'
import Button from '@schibstedspain/sui-atom-button'

const baseClass = 'sui-CoverBasic'
class CoverBasic extends Component {
  // Custom css class are attached when component is clickable, has gradiend and background image.
  coverBasicClassNames = cx(
    baseClass,
    {[`${baseClass}--gradient`]: this.props.gradient},
    {[`${baseClass}--bgImage`]: this.props.src},
    {'is-clickable': !!this.props.handleClick}
  )

  _buildButtons = () => {
    const {buttons} = this.props
    const executeCallback = (e, callback) => {
      e.stopPropagation()
      callback(e)
    }

    return buttons.map(({icon: Icon, label, handleClick}, index) => {
      return (
        <div className={`${baseClass}-button`} key={index}>
          <Button
            type="tertiary"
            leftIcon={Icon && <Icon className={`${baseClass}-buttonIcon`} />}
            onClick={e => executeCallback(e, handleClick)}
          >
            {label}
          </Button>
        </div>
      )
    })
  }

  buttons = this._buildButtons()

  render() {
    const {src, height} = this.props
    const backgroundImage = `url(${src})`
    const styles = {backgroundImage, height}

    return (
      <div
        className={this.coverBasicClassNames}
        onClick={this.props.handleClick}
        style={styles}
      >
        {this.props.children && (
          <div className={`${baseClass}-children`}>{this.props.children}</div>
        )}
        {this.buttons.length > 0 && (
          <div className={`${baseClass}-buttonList`}>{this.buttons}</div>
        )}
      </div>
    )
  }
}

CoverBasic.displayName = 'CoverBasic'

CoverBasic.propTypes = {
  /**
   * Children will be displayed.
   */
  children: PropTypes.node,
  /**
   * Image source.
   */
  src: PropTypes.string.isRequired,
  /**
   * Header height.
   */
  height: PropTypes.number,
  /**
   * If true, adds a linear gradient layer over the image.
   */
  gradient: PropTypes.bool,
  /**
   * Handles click over the whole image.
   */
  handleClick: PropTypes.func,
  /**
   * List of objects with label, svg and handleClick properties.
   * Each object defines a button.
   */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Text to display.
       */
      label: PropTypes.string.isRequired,
      /**
       * Button behaviour.
       */
      handleClick: PropTypes.func.isRequired,
      /**
       * Icon to display on the left of the text.
       */
      icon: PropTypes.func
    })
  )
}

CoverBasic.defaultProps = {
  buttons: [],
  gradient: false
}

export default CoverBasic
