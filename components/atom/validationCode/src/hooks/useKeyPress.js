import {useEffect} from 'react'

const useKeyPress = (callback, {target}) => {
  const events = []
  return useEffect(() => {
    const element = target?.current
    if (element) {
      events.push(element.addEventListener('keydown', callback))
    }
    return () => {
      events.forEach(event => {
        if (element) element.removeEventListener('keydown', callback)
      })
    }
  }, [target, callback])
}

export default useKeyPress
