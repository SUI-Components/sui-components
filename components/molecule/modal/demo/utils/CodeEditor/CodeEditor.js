import {useState} from 'react'
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'
import cx from 'classnames'
import {themes} from 'prism-react-renderer'
import usePrefersColorScheme from 'use-prefers-color-scheme'

import PropTypes from 'prop-types'

import {CodeEditorProvider} from './Context/index.js'
import CodeEditorActions from './CodeEditorActions.js'

const CodeEditor = ({code: codeProp, scope, theme: themeProp, ...props}) => {
  const prefersColorScheme = usePrefersColorScheme()
  const mode = ['light', 'dark'].includes(themeProp) ? themeProp : prefersColorScheme === 'dark' ? 'dark' : 'light'
  const code = codeProp?.trim() || ''
  const [codeView, setCodeView] = useState(true)
  const [previewView, setPreviewView] = useState(true)
  const isBothView = codeView && previewView
  const [theme, setTheme] = useState(mode)

  return (
    <CodeEditorProvider {...{codeView, previewView, theme, setCodeView, setPreviewView, setTheme}}>
      <LiveProvider code={code} scope={scope} theme={theme === 'light' ? themes.vsLight : themes.vsDark} {...props}>
        <div className="demo-live demo-live-container-wrapper">
          <div className="demo-live demo-live-container">
            <div className={cx('demo-live', 'demo-live-provider')}>
              <div
                className={cx('demo-live', 'demo-live-editor-wrapper', {
                  'demo-live-editor-wrapper-full': !isBothView && codeView,
                  'demo-live-editor-wrapper-half': isBothView
                })}
              >
                <LiveEditor className="demo-live demo-live-editor" />
              </div>
              <div
                className={cx('demo-live', 'demo-live-preview-wrapper', {
                  'demo-live-preview-wrapper-full': !isBothView && previewView,
                  'demo-live-preview-wrapper-half': isBothView
                })}
              >
                <LivePreview className="demo-live demo-live-preview" />
              </div>
            </div>
            <CodeEditorActions />
            <div className={cx('demo-live', 'demo-live-error-wrapper')}>
              <LiveError className="demo-live demo-live-error" />
            </div>
          </div>
        </div>
      </LiveProvider>
    </CodeEditorProvider>
  )
}

CodeEditor.propTypes = {
  code: PropTypes.string,
  scope: PropTypes.object,
  theme: PropTypes.oneOf(['light', 'dark'])
}

export default CodeEditor
