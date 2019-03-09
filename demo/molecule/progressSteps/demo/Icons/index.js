import React from 'react'

import IconLineFactory from './icon-line-factory'
import IconFillFactory from './icon-fill-factory'

import IconLineClock from './icon-line-clock'
import IconFillClock from './icon-fill-clock'

import IconLineLocation from './icon-line-location'
import IconFillLocation from './icon-fill-location'

import IconLineSuitcase from './icon-line-suitcase'
import IconFillSuitcase from './icon-fill-suitcase'

const FillCheckIcon = () => (
  <svg className="svg-icon" viewBox="0 0 20 20">
    <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03" />
  </svg>
)

export {
  FillCheckIcon,
  IconLineFactory,
  IconFillFactory,
  IconLineClock,
  IconFillClock,
  IconLineLocation,
  IconFillLocation,
  IconLineSuitcase,
  IconFillSuitcase
}
