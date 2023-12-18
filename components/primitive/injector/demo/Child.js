import JSONView from 'react-json-view'

import PropTypes from 'prop-types'

const Child = ({name, ...props}) => {
  const [jsonDisplayedProps, handlers] = Object.entries(props).reduce((result, [propKey, propValue] = []) => {
    let [jsonDisplayedProps, handlers] = result
    if (typeof propValue === 'function' && propKey.startsWith('on')) {
      handlers = {
        ...handlers,
        [propKey]: (...args) => propValue(...args, 'childHandler')
      }
    } else {
      jsonDisplayedProps = {...jsonDisplayedProps, [propKey]: propValue}
    }
    return [jsonDisplayedProps, handlers]
  }, [])
  return (
    <div role="button" {...handlers}>
      <JSONView
        name={name}
        src={jsonDisplayedProps}
        iconStyle="circle"
        displayDataTypes={false}
        displayObjectSize={false}
        enableClipboard={false}
        indentWidth={2}
      />
    </div>
  )
}

Child.propTypes = {
  name: PropTypes.string
}

export default Child
