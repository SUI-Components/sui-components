import {useRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {VSCodeIcon} from '@s-ui/documentation-library'

import {useCodeEditorContext} from './Context/index.js'
import {viewsIndex, getViewIndex} from './config.js'

const CodeEditorActions = ({className, onChange, ...props}) => {
  const {codeView, setCodeView, previewView, setPreviewView} = useCodeEditorContext()
  const isBothView = codeView && previewView
  const handleClick = event => {
    const {currentTarget} = event
    const index = currentTarget?.dataset?.index
    if (index !== undefined) {
      const {
        settings: {codeView: nextCodeView, previewView: nextPreviewView}
      } = viewsIndex[index]
      setCodeView(nextCodeView)
      setPreviewView(nextPreviewView)
    }
  }
  const refs = useRef([])

  const setRef = index => element => {
    refs.current[index] = element
  }

  const handleKeyDown = event => {
    const viewsNumber = Object.keys(viewsIndex).length
    const viewIndex = getViewIndex({codeView, previewView})
    const leftViewIndex = (viewsNumber + viewIndex - 1) % viewsNumber
    const rightViewIndex = (viewsNumber + viewIndex + 1) % viewsNumber
    const {
      settings: {codeView: leftCodeView, previewView: leftPreviewView}
    } = viewsIndex[leftViewIndex]
    const {
      settings: {codeView: rightCodeView, previewView: rightPreviewView}
    } = viewsIndex[rightViewIndex]

    switch (event.key) {
      case 'ArrowLeft':
        setCodeView(leftCodeView)
        setPreviewView(leftPreviewView)
        refs.current[leftViewIndex].focus()
        break
      case 'ArrowRight':
        setCodeView(rightCodeView)
        setPreviewView(rightPreviewView)
        refs.current[rightViewIndex].focus()
        break
      default:
        break
    }
  }
  return (
    <div role="listbox" aria-label="code editor actions" className={cx('demo-live', 'demo-live-actions-wrapper')}>
      <div
        role="listbox"
        onKeyDown={handleKeyDown}
        aria-label="code editor actions"
        className={cx('demo-live', 'demo-live-actions', className)}
      >
        <div className={cx('demo-live', 'demo-live-actions-presentation-wrapper')}>
          <div
            className={cx('demo-live', 'demo-live-actions-presentation', {
              'demo-live-actions-presentation-full': !isBothView && previewView,
              'demo-live-actions-presentation-half': isBothView
            })}
            aria-hidden="true"
            role="presentation"
          />
        </div>
        <button
          className={cx('demo-live', 'demo-live-actions-button')}
          aria-selected={!isBothView && codeView}
          role="option"
          tabIndex={!isBothView && codeView ? 0 : -1}
          type="button"
          ref={setRef(0)}
          data-index={0}
          onClick={handleClick}
        >
          <VSCodeIcon icon="VscCode" style={{color: 'currentColor'}} />
        </button>
        <button
          className={cx('demo-live', 'demo-live-actions-button')}
          aria-selected={isBothView}
          role="option"
          tabIndex={isBothView ? 0 : -1}
          type="button"
          ref={setRef(1)}
          data-index={1}
          onClick={handleClick}
        >
          <VSCodeIcon icon="VscMultipleWindows" style={{color: 'currentColor'}} />
        </button>
        <button
          className={cx('demo-live', 'demo-live-actions-button')}
          aria-selected={!isBothView && previewView}
          role="option"
          tabIndex={!isBothView && previewView ? 0 : -1}
          type="button"
          ref={setRef(2)}
          data-index={2}
          onClick={handleClick}
        >
          <VSCodeIcon icon="VscSymbolMethod" style={{color: 'currentColor'}} />
        </button>
      </div>
    </div>
  )
}

CodeEditorActions.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func
}

export default CodeEditorActions
