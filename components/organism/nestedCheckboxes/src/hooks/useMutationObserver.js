import {useEffect, useRef} from 'react'

const useMutationObserver = (
  callback,
  options = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  }
) => {
  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback.bind(null, ref.current))
      observer.observe(ref.current, options)
      return () => observer.disconnect()
    }
  }, [callback, options])
  return [ref]
}

export default useMutationObserver
