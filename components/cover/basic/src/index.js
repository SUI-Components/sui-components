import React, {PropTypes} from 'react'
import cx from 'classnames'
import ButtonBasic from '@schibstedspain/sui-button-basic'

const CoverBasic = (props) => {
  const buttons = buildButtons(props)

  // Custom css class is attached when component is clickable.
  const coverBasicClassNames = cx('sui-CoverBasic', {
    'is-clickable': isClickable(props)
  })

  return (
    <div className={coverBasicClassNames} onClick={buildClickHandler(props)}>
      <div className={(props.gradient ? 'sui-CoverBasic-gradient' : '')}>
        <img className='sui-CoverBasic-image' src={props.src} />
      </div>
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
  return props.buttons.map((item, index) => {
    // Build click handler for each button
    function handler (event) {
      event.stopPropagation()
      item.handleClick(event)
    }
    return (
      <ButtonBasic
        key={index}
        icon={item.svg}
        text={item.label}
        onClick={handler}
      />
    )
  })
}

CoverBasic.displayName = 'CoverBasic'

CoverBasic.propTypes = {
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
      svg: PropTypes.node
    })
  )
}

CoverBasic.defaultProps = {
  buttons: [],
  gradient: false
}

export default CoverBasic
