import {useEffect, useState} from 'react'

const useGetBlobAsVideoSrcEffect = ({src, videoNode}) => {
  const [videoSrc, setVideoSrc] = useState(typeof src === 'string' ? src : null)

  useEffect(() => {
    if (videoSrc !== null) return

    const reader = new FileReader()

    reader.onload = function (e) {
      setVideoSrc(e.target.result)
      videoNode.current?.load()
    }

    reader.readAsDataURL(src)
  }, [src, videoNode, videoSrc])

  return videoSrc
}

export default useGetBlobAsVideoSrcEffect
