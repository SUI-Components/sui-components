export const DEVICE_TYPES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  SMART_TV: 'smarttv',
  CONSOLE: 'console',
  WEARABLE: 'wearable',
  DESKTOP: 'desktop'
}

export const getDeviceType = deviceType => {
  let response
  if (deviceType === undefined) {
    response = 'desktop'
  } else {
    for (const DEVICE_TYPES_KEY in DEVICE_TYPES) {
      if (deviceType && deviceType === DEVICE_TYPES[DEVICE_TYPES_KEY]) {
        response = DEVICE_TYPES[DEVICE_TYPES_KEY]
        break
      }
    }
  }
  return response
}

export const isDeviceType = deviceType =>
  Object.assign(
    {},
    {
      isConsole: deviceType === DEVICE_TYPES.CONSOLE,
      isMobile: deviceType === DEVICE_TYPES.MOBILE,
      isTablet: deviceType === DEVICE_TYPES.TABLET,
      isSmartTv: deviceType === DEVICE_TYPES.SMART_TV,
      isWearable: deviceType === DEVICE_TYPES.WEARABLE,
      isDesktop: deviceType === DEVICE_TYPES.DESKTOP
    }
  )
