import PropTypes from 'prop-types'
import React, { Component } from 'react'
import cx from 'classnames'
import Button from '@schibstedspain/sui-atom-button'

const baseClass = 'sui-CoverBasic'
class CoverBasic extends Component {
  // Custom css class are attached when component is clickable, has gradiend and background image.
  coverBasicClassNames = cx(baseClass,
    {[`${baseClass}--gradient`]: this.props.gradient},
    {[`${baseClass}--bgImage`]: this.props.src}
  )

  buildButtons = () => {
    return this.props.buttons.map(({ icon: Icon, label, handleClick }, index) => {
      // Build click handler for each button
      return (
        <div className={`${baseClass}-button`} key={index}>
          <Button
            type='tertiary'
            leftIcon={Icon && <Icon className={`${baseClass}-buttonIcon`} />}
            onClick={this.handler}>
            {label}
          </Button>
        </div>
      )
    })
  }

  buttons = this.buildButtons(this.props)

  componentDidMount () {
    const { src, height } = this.props
    const backgroundImage = `url(${src})`
    const DOMelement = document.querySelector('.sui-CoverBasic--bgImage')
    this.setCSSPropertiesToElement({ 'background': backgroundImage, 'height': height }, DOMelement)
  }

  setCSSPropertiesToElement = (properties, DOMelement) => {
    Object.keys(properties).forEach(key => DOMelement.style.setProperty(key, properties[key]))
  }

  render () {
    return (
      <div className={this.coverBasicClassNames} onClick={this.buildClickHandler}>
        {this.props.children &&
          <div className={`${baseClass}-children`}>
            {this.props.children}
          </div>
        }
        {this.buttons.length > 0 &&
          <div className={`${baseClass}-buttonList`}>
            {this.buttons}
          </div>
        }
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
  height: PropTypes.number.isRequired,
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
