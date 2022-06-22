import {useRef} from 'react'

const useRefs = (value = []) => {
  const refs = useRef(value)
  return [
    index => {
      return refs.current[index]
    },
    index => {
      return node => {
        if (node === null) return
        refs.current[index] = {current: node}
      }
    },
    () => refs.current
  ]
}

export default useRefs
