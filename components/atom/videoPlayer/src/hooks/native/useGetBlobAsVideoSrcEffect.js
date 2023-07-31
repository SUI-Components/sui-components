import {useEffect, useState} from 'react'

const isNotBlobType = src => typeof src === 'string'
const useGetBlobAsVideoSrcEffect = ({src, videoNode}) => {
  const [videoSrc, setVideoSrc] = useState(isNotBlobType(src) ? src : null)

  useEffect(() => {
    if (isNotBlobType(src)) return

    const objectUrl = URL.createObjectURL(src)
    setVideoSrc(objectUrl)
    videoNode.current?.load()

    return () => {
      window.URL.revokeObjectURL(objectUrl)
      setVideoSrc(null)
    }
  }, [src, videoNode])

  return videoSrc
}

export default useGetBlobAsVideoSrcEffect
