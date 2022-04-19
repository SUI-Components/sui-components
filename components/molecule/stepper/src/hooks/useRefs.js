import {useLayoutEffect, useRef, useState} from 'react'

const useRefs = () => {
  const refs = useRef(new Set())
  const [steps, setSteps] = useState(0)

  const useContextRef = node => {
    if (node === null) return
    if (refs.current.has(node)) {
      refs.current.delete(node)
    }
    refs.current.add(node)
    setSteps(refs.current.size)
  }
  const useContextUnRef = ref =>
    useLayoutEffect(
      () => () => {
        refs.current.delete(ref.current)
        setSteps(refs.current.size)
      },
      [ref]
    )

  return {useContextRef, useContextUnRef, steps}
}

export default useRefs
