import {createContext, useContext} from 'react'

import PropTypes from 'prop-types'

const defaultContext = {
  codeView: false,
  previewView: false,
  theme: 'light',
  setCodeView: () => {},
  setPreviewView: () => {},
  setTheme: () => {}
}

const Context = createContext(defaultContext)

export const useCodeEditorContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useCodeEditorContext must be used within a CodeEditorProvider')
  }
  return context
}

export const CodeEditorProvider = ({children, ...props}) => {
  return <Context.Provider value={props}>{children}</Context.Provider>
}

CodeEditorProvider.displayName = 'CodeEditorProvider'

CodeEditorProvider.propTypes = {
  children: PropTypes.node
}
