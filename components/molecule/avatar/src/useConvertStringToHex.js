import {useMemo} from 'react'

const convertStringToHex = str => {
  let hash = 0

  if (str.length === 0) {
    return
  }

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  let color = '#'

  for (let j = 0; j < 3; j++) {
    const value = (hash >> (j * 8)) & 255
    color += ('00' + value.toString(16)).substr(-2)
  }

  return color
}

const useConvertStringToHex = str => {
  return useMemo(() => {
    return str ? convertStringToHex(str) : undefined
  }, [str])
}

export default useConvertStringToHex
