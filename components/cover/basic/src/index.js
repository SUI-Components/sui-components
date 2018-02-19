import PropTypes from 'prop-types'
import React from 'react'
import cx from 'classnames'
import Button from '@schibstedspain/sui-atom-button'

const CoverBasic = (props) => {
  const buttons = buildButtons(props)

  // Custom css class is attached when component is clickable.
  const coverBasicClassNames = cx(
    'sui-CoverBasic',
    props.className,
    {'is-clickable': isClickable(props)})

  const imageContainerClassNames = cx(
    {'sui-CoverBasic-gradient': props.gradient},
    {'sui-CoverBasic-objectFitFix': !isObjectFitSupported()})

  // Sadly, object-fit compatibility support cannot be done with just adding one class.
  // The following line is the second part of the solution which is an inline style.
  const ieObjectFitInlineStyleFix =
    isObjectFitSupported() ? '' : { style: {backgroundImage: 'url(' + props.src + ')'} }

  return (
    <div className={coverBasicClassNames} onClick={buildClickHandler(props)}>
      <div className={imageContainerClassNames} {...ieObjectFitInlineStyleFix}>
        <img className='sui-CoverBasic-image' src={props.src} />
      </div>
      {props.children &&
        <div className='sui-CoverBasic-children'>
          {props.children}
        </div>
      }
      {buttons.length > 0 &&
        <div className='sui-CoverBasic-buttonList'>
          {buttons}
        </div>
      }
    </div>
  )
}

const buildClickHandler = (props) => {
  return (event) => {
    isClickable(props) && props.handleClick(event)
  }
}

const isClickable = (props) => {
  return !!props.handleClick
}

const buildButtons = (props) => {
  return props.buttons.map(({ icon: Icon, label, handleClick }, index) => {
    // Build click handler for each button
    function handler (event) {
      event.stopPropagation()
      handleClick && handleClick(event)
    }
    return (
      <div className='sui-CoverBasic-button' key={index}>
        <Button
          className='sui-CoverBasic-buttonItem'
          type='tertiary'
          leftIcon={Icon && <Icon className='sui-CoverBasic-buttonIcon' />}
          onClick={handler}>
          { label }
        </Button>
      </div>
    )
  })
}

const isObjectFitSupported = () => {
  return !(typeof document.documentElement.style.objectFit === 'undefined')
}

CoverBasic.displayName = 'CoverBasic'

CoverBasic.propTypes = {
  /**
   * Children will be displayed.
   */
  children: PropTypes.node,
  /**
   * Classname appended to the main container.
   */
  className: PropTypes.string,
  /**
   * Image source.
   */
  src: PropTypes.string.isRequired,
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
