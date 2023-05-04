import HLSPlayer from '../components/HLSPlayer.js'
import NativePlayer from '../components/NativePlayer.js'
import VimeoPlayer from '../components/VimeoPlayer.js'
import YouTubePlayer from '../components/YouTubePlayer.js'

export const YOUTUBE_EMBEDDABLE_URL = 'https://www.youtube.com/embed/'
export const YOUTUBE_STANDARD_URL = 'youtube.com/watch?v='
export const YOUTUBE_SHORT_URL = 'youtu.be/'

export const HLS = {
  FILE_FORMATS: ['m3u8'],
  VIDEO_TYPE: 'hls',
  PLAYER_COMPONENT: HLSPlayer
}

export const NATIVE = {
  INSTANCE_TYPE: Blob,
  FILE_FORMATS: ['mp4', 'ogg', 'webm'],
  VIDEO_TYPE: 'native',
  PLAYER_COMPONENT: NativePlayer
}

export const VIMEO = {
  EMBEDDABLE_URL: 'https://player.vimeo.com/video/',
  SRC_PATTERNS: ['https://vimeo.com/'],
  VIDEO_TYPE: 'vimeo',
  PLAYER_COMPONENT: VimeoPlayer
}

export const YOUTUBE = {
  EMBEDDABLE_URL: YOUTUBE_EMBEDDABLE_URL,
  SRC_PATTERNS: [
    YOUTUBE_EMBEDDABLE_URL,
    YOUTUBE_STANDARD_URL,
    YOUTUBE_SHORT_URL
  ],
  VIDEO_TYPE: 'youtube',
  PLAYER_COMPONENT: YouTubePlayer
}

export const DETECTION_TYPES = {
  FILE_EXTENSION: 'FILE_EXTENSION',
  SRC_PATTERN: 'SRC_PATTERN',
  SRC_INSTANCE_TYPE: 'SRC_INSTANCE_TYPE'
}

export const DETECTABLE_VIDEO_TYPES = [
  {
    DETECTION_TYPE: DETECTION_TYPES.FILE_EXTENSION,
    TYPE_DESCRIPTION: HLS
  },
  {
    DETECTION_TYPE: DETECTION_TYPES.FILE_EXTENSION,
    TYPE_DESCRIPTION: NATIVE
  },
  {
    DETECTION_TYPE: DETECTION_TYPES.SRC_INSTANCE_TYPE,
    TYPE_DESCRIPTION: NATIVE
  },
  {
    DETECTION_TYPE: DETECTION_TYPES.SRC_PATTERN,
    TYPE_DESCRIPTION: YOUTUBE
  },
  {
    DETECTION_TYPE: DETECTION_TYPES.SRC_PATTERN,
    TYPE_DESCRIPTION: VIMEO
  }
]