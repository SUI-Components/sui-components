import {forwardRef, useEffect} from 'react'

import PropTypes from 'prop-types'

import {toQueryString} from '@s-ui/js/lib/string'

import useImperativeApi from '../hooks/useImperativeApi.js'
import useYouTubeProperties from '../hooks/youtube/useYouTubeProperties.js'
import {BASE_CLASS, YOUTUBE_DEFAULT_TITLE} from '../settings/index.js'
import {YOUTUBE} from '../settings/players.js'

const YouTubePlayer = forwardRef(
  (
    {
      autoPlay,
      controls,
      muted,
      onLoadVideo,
      src,
      timeLimit,
      timeOffset,
      title = YOUTUBE_DEFAULT_TITLE
    },
    forwardedRef
  ) => {
    const {getEmbeddableUrl} = useYouTubeProperties()

    useEffect(() => {
      onLoadVideo({
        src,
        type: YOUTUBE.VIDEO_TYPE,
        duration: null,
        videoWidth: null,
        videoHeight: null
      })
    }, [])

    useImperativeApi({
      ref: forwardedRef,
      getCurrentTime: () => Promise.resolve(null)
    })

    const params = toQueryString({
      autoplay: autoPlay ? '1' : '0',
      controls: controls ? '1' : '0',
      start: timeOffset || '0',
      end: timeLimit,
      mute: muted ? '1' : '0'
    })

    const videoSrc = `${getEmbeddableUrl(src)}?${params}`
    return (
      <div className={`${BASE_CLASS}-youtubePlayer`}>
        <iframe
          className={`${BASE_CLASS}-youtubePlayerFrame`}
          src={videoSrc}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }
)

YouTubePlayer.propTypes = {
  autoPlay: PropTypes.bool,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  onLoadVideo: PropTypes.func,
  timeLimit: PropTypes.number,
  timeOffset: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string
}

export default YouTubePlayer
