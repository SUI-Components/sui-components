import {useEffect, useState} from 'react'

const useGetBlobAsVideoSrcEffect = ({src, videoNode}) => {
  const [videoSrc, setVideoSrc] = useState(typeof src === 'string' ? src : null)

  useEffect(() => {
    if (videoSrc !== null) return

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
