import {useImperativeHandle} from 'react'

const useImperativeApi = ({ref, getCurrentTime}) => {
  useImperativeHandle(
    ref,
    () => {
      return {
        getCurrentTime
      }
    },
    []
  )
}

export default useImperativeApi
