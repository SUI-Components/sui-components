import {useEffect, useState} from 'react'

const isNotBlobType = src => typeof src === 'string'
const useGetBlobAsVideoSrcEffect = ({src, playerRef}) => {
  const [videoSrc, setVideoSrc] = useState(isNotBlobType(src) ? src : null)

  useEffect(() => {
    if (isNotBlobType(src)) return

    const objectUrl = URL.createObjectURL(src)
    setVideoSrc(objectUrl)
    playerRef.current?.load()

    return () => {
      window.URL.revokeObjectURL(objectUrl)
      setVideoSrc(null)
    }
  }, [src, playerRef])

  return videoSrc
}

export default useGetBlobAsVideoSrcEffect
