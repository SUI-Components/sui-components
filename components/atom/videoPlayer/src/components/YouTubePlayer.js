import PropTypes from 'prop-types'

const YouTubePlayer = ({src}) => {
  let videoSrc = src
  // If it's a non-embeddable video
  if (videoSrc.includes('youtube.com/watch?v=')) {
    const videoId = videoSrc.split('watch?v=')[1]
    videoSrc = `https://www.youtube.com/embed/${videoId}`
  }
  return (
    <iframe
      width="560"
      height="315"
      src={videoSrc}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  )
}

YouTubePlayer.propTypes = {
  src: PropTypes.string
}

export default YouTubePlayer
