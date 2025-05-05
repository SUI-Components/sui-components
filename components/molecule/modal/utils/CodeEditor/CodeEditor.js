import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'

import PropTypes from 'prop-types'

const CodeEditor = ({code: codeProp, scope, ...props}) => {
  const code = codeProp?.trim() || ''
  return (
    <LiveProvider code={code} scope={scope} {...props}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

CodeEditor.propTypes = {
  code: PropTypes.string,
  scope: PropTypes.object
}

export default CodeEditor
