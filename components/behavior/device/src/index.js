import React, {
  createContext,
  Children,
  cloneElement,
  isValidElement
} from 'react'
import PropTypes from 'prop-types'
import UAParser from 'ua-parser-js'
import {getDeviceType, isDeviceType, DEVICE_TYPES} from './types'

const UA = new UAParser()

export const setUA = userAgentString => new UAParser().setUA(userAgentString)
export const getDeviceTypeFromUAParser = UserAgentParser =>
  getDeviceType(UserAgentParser.getDevice().type)

// custom hook
export const useDeviceType = (deviceType, UserAgent = UA) => {
  const dt = deviceType || getDeviceTypeFromUAParser(UserAgent)
  return [dt, {...isDeviceType(dt)}]
}

// main component
const BehaviorDevice = ({children, deviceType, ...otherProps}) => {
  const [dt, is] = useDeviceType(deviceType)
  return Children.map(children, child =>
    isValidElement(child)
      ? cloneElement(child, {
          ...otherProps,
          deviceType: dt,
          ...is
        })
      : child
  )
}

BehaviorDevice.deviceTypes = DEVICE_TYPES

BehaviorDevice.CustomView = ({
  children,
  deviceType,
  condition, // boolean or function callback with useDeviceType react hook parameters
  ...otherProps
}) => {
  let boolean = condition
  const [dt, is] = useDeviceType(deviceType) // eslint-disable-line react-hooks/rules-of-hooks
  if (typeof condition === 'function') {
    boolean = condition([dt, is])
  }
  return boolean ? (
    <>
      {Children.map(children, child =>
        isValidElement(child) ? cloneElement(child, otherProps) : child
      )}
    </>
  ) : null
}
BehaviorDevice.CustomView.propTypes = {
  /**
   * react children node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  /**
   * userAgent Device type
   */
  deviceType: PropTypes.oneOf(Object.values(BehaviorDevice.deviceTypes)),
  /**
   * render condition
   */
  condition: PropTypes.oneOfType(PropTypes.bool, PropTypes.func)
}
;[('Console', 'Desktop', 'Mobile', 'SmartTv', 'Tablet', 'Wearable')].forEach(
  DeviceType => {
    /* eslint-disable react/prop-types */
    BehaviorDevice[`${DeviceType}View`] = ({deviceType, ...otherProps}) => {
      const dt = deviceType.toLowerCase()
      return (
        <BehaviorDevice.CustomView
          condition={deviceType && isDeviceType(dt)[`is${DeviceType}`]}
          source={DeviceType}
          target={deviceType}
          {...otherProps}
        />
      )
    }
    BehaviorDevice[`${DeviceType}View`].propTypes = {
      /**
       * userAgent Device type
       */
      deviceType: PropTypes.oneOf(Object.values(BehaviorDevice.deviceTypes))
    }
    /* eslint-enable react/prop-types */
  }
)

// HoC
export const withBehaviorDevice = Component => ({
  deviceType,
  ...otherProps
}) => (
  <BehaviorDevice deviceType={deviceType}>
    <Component {...otherProps} />
  </BehaviorDevice>
)

// BehaviorDeviceContext factory
export const createBehaviorDeviceContext = (deviceType, UserAgent) => {
  // BehaviorDeviceContext
  const BehaviorDeviceContext = createContext({
    deviceType: deviceType || getDeviceTypeFromUAParser(UserAgent)
  })

  // ContextProvider
  BehaviorDeviceContext.Provider = ({deviceType, ...otherProps}) => {
    const [dt, is] = useDeviceType(deviceType) // eslint-disable-line react-hooks/rules-of-hooks
    return (
      <BehaviorDeviceContext.Provider
        value={{
          deviceType: dt,
          ...is
        }}
      >
        <BehaviorDevice {...otherProps} />
      </BehaviorDeviceContext.Provider>
    )
  }
  BehaviorDeviceContext.Provider.propTypes = {
    /**
     * userAgent Device type
     */
    deviceType: PropTypes.oneOf(Object.values(BehaviorDevice.deviceTypes))
  }

  return BehaviorDeviceContext
}

BehaviorDevice.displayName = 'BehaviorDevice'
BehaviorDevice.propTypes = {
  /**
   * react children node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  /**
   * userAgent Device type
   */
  deviceType: PropTypes.oneOf(Object.values(BehaviorDevice.deviceTypes))
}
BehaviorDevice.defaultProps = {}

export default BehaviorDevice
