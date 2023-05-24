import {forwardRef} from 'react'
import PropTypes from 'prop-types'

import {DESIGN} from '../config.js'
import PrimitiveTypography from '../index.js'

const getDesign = ({design, displayName}) => {
  const Component = forwardRef(
    ({design: omittedDesign, ...props}, forwardedRef) => (
      <PrimitiveTypography design={design} {...props} ref={forwardedRef} />
    )
  )
  Component.propTypes = {
    design: PropTypes.oneOf(Object.values(DESIGN))
  }
  Component.displayName = displayName

  return Component
}

const Styles = Object.fromEntries(
  Object.entries({
    [DESIGN.DISPLAY_1]: 'Display1',
    [DESIGN.DISPLAY_2]: 'Display2',
    [DESIGN.DISPLAY_3]: 'Display3',
    [DESIGN.HEADLINE_1]: 'Headline1',
    [DESIGN.HEADLINE_2]: 'Headline2',
    [DESIGN.SUBHEAD]: 'SubHead',
    [DESIGN.BODY_1]: 'Body1',
    [DESIGN.BODY_2]: 'Body2',
    [DESIGN.CAPTION]: 'Caption',
    [DESIGN.SMALL]: 'Small',
    [DESIGN.CALLOUT]: 'Callout'
  }).map(([design, name]) => [
    name,
    getDesign({design, displayName: `PrimitiveTypography${name}`})
  ])
)

export default Styles
