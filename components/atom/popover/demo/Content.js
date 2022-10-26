import {forwardRef} from 'react'

const Content = forwardRef((props, forwardedRef) => {
  return (
    <div ref={forwardedRef} style={{width: '200px', padding: '8px'}}>
      <span {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id mauris
        ornare, imperdiet nunc a, interdum dolor.
      </span>
    </div>
  )
})

export default Content
