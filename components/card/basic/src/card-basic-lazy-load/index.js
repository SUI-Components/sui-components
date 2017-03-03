import React, { PropTypes } from 'react'
import LazyLoad from 'react-lazy-load'

/**
 * Lazy load implementation for Card Basic images.
 */
export default function CardBasicLazyLoad ({
  debounce,
  offsetVertical,
  children
}) {
  return (
    <LazyLoad debounce={debounce} offsetVertical={offsetVertical}>
      {children}
    </LazyLoad>
  )
}

CardBasicLazyLoad.propTypes = {
  /**
   * By default the throttling function is actually a debounce function so that
   * the checking function is only triggered after a user stops scrolling. To
   * use traditional throttling where it will only check the loadable content
   * every throttle milliseconds, set debounce to false.
   */
  debounce: PropTypes.bool.isRequired,
  /**
   * This option allows you to specify how far above and below the viewport you
   * want to begin displaying your content.
   */
  offsetVertical: PropTypes.number,
  /**
   * Component children element.
   */
  children: PropTypes.element.isRequired
}

CardBasicLazyLoad.defaultProps = {
  debounce: false,
  offsetVertical: 100
}
