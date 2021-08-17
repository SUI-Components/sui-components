import {useEffect} from 'react'

const useKeyPress = (callback, {target}) => {
  const events = []
  useEffect(() => {
    const element = target?.current
    if (element) {
      events.push(element.addEventListener('keydown', callback))
    }
    return () => {
      events.forEach(event => {
        if (element) element.removeEventListener(event)
      })
    }
  }, [target])
}

export default useKeyPress
