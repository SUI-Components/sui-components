import throttle from 'lodash.throttle'

/**
 * Throttle time for events' listeners
 * @type {Number}
 */
const THROTTLE_TIME = 500

/**
 * Options for resize event's listeners
 * @type {Object}
 */
const EVENT_OPTIONS = {capture: true, passive: true}

/**
 * Callbacks to execute on each resize event.
 * @type {Array<Function>}
 */
let listeners = []

/**
 * Service to get width and height of the viewport
 */
class ViewportResize {
  /**
   * Register event to update viewport width and height
   * @param {Function} listener
   */
  static addListener(listener) {
    listeners.push(listener)
    this.update()

    if (listeners.length) {
      window.addEventListener('resize', this.update, EVENT_OPTIONS)
    }
  }

  /**
   * Unregister event to update viewport width and height
   * @param {Function} listener
   */
  static removeListener(listener) {
    listeners = listeners.filter(cb => cb !== listener)

    if (!listeners.length) {
      window.removeEventListener('resize', this.update, EVENT_OPTIONS)
    }
  }

  /**
   * Take viewport limits and update width and height
   */
  static update() {
    this.height = document.body.clientHeight
    this.width = document.body.clientWidth
    listeners.forEach(cb => cb(this.width, this.height))
  }
}

ViewportResize.update = throttle(ViewportResize.update, THROTTLE_TIME)

export default ViewportResize
