import {useEffect} from 'react'

const UNIDENTIFIED_KEYS = ['Unidentified', 'Process']

const useKeyPress = (callback, {target, onChange}) => {
  return useEffect(() => {
    const element = target?.current
    if (!element) return

    const handleKeyDown = event => {
      if (UNIDENTIFIED_KEYS.includes(event.key)) return
      if (event.key.length === 1) {
        event.preventDefault()
      }
      callback(event)
    }

    const handleInput = event => {
      if (!event.data) return
      // eslint-disable-next-line n/no-callback-literal
      callback({key: event.data, preventDefault: () => {}})
    }

    element.addEventListener('keydown', handleKeyDown)
    element.addEventListener('input', handleInput)
    return () => {
      element.removeEventListener('keydown', handleKeyDown)
      element.removeEventListener('input', handleInput)
    }
  }, [target, callback, onChange]) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useKeyPress
