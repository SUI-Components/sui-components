export const BASE_CLASS = 'sui-AtomVideoPlayer'
export const UNKNOWN = 'unknown'
export const HLS_DEFAULT_TITLE = 'HLS video player'
export const NATIVE_DEFAULT_TITLE = 'Native video player'
export const VIMEO_DEFAULT_TITLE = 'VIMEO video player'
export const YOUTUBE_DEFAULT_TITLE = 'YouTube video player'
export const AUTOPLAY = {
  TRUE: true,
  FALSE: false,
  ON_VIEWPORT: 'ON_VIEWPORT'
}
export const AUTOPLAY_OPTIONS = Object.keys(AUTOPLAY)
export const AUTOPLAY_DEFAULT_VALUE = AUTOPLAY.FALSE
export const INTERSECTION_OBSERVER_DEFAULT_CONFIGURATION = {
  root: null,
  rootMargin: '0% 0% -25% 0%',
  threshold: 1
}
export const NO_OP = () => null
export const IS_NODE = typeof window === 'undefined'
export const BLOB_TYPE = IS_NODE ? null : Blob
