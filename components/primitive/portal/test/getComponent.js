import {useRef} from 'react'

import PropTypes from 'prop-types'

const getComponent = ({triggerClass, targetClass, component: Component}) => {
  const TRIGGER_CLASS = triggerClass
  const TARGET_CLASS = targetClass

  const Response = ({children, ...props}) => {
    const ref = useRef()
    return (
      <>
        <div className={TRIGGER_CLASS}>
          <Component target={ref} {...props}>
            {children}
          </Component>
        </div>
        <div className={TARGET_CLASS} ref={ref} />
      </>
    )
  }

  Response.displayName = 'Response'

  Response.propTypes = {
    component: PropTypes.elementType,
    children: PropTypes.node
  }

  return Response
}

export default getComponent
