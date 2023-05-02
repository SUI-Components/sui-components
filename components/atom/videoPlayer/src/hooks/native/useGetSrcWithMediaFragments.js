const useGetSrcWithMediaFragments = ({videoSrc, timeOffset, timeLimit}) => {
  const isEmpty = param => param === undefined || param === null
  const isNotEmpty = param => !isEmpty(param)

  let timeOffsetParam = timeOffset
  if (isEmpty(timeOffset) && isNotEmpty(timeLimit)) timeOffsetParam = '0'

  if (isNotEmpty(videoSrc)) {
    const timeLimitParam = timeLimit ? `,${timeLimit}` : ''
    timeOffsetParam = timeOffsetParam ? `#t=${timeOffsetParam}` : ''
    return `${videoSrc}${timeOffsetParam}${timeLimitParam}`
  }

  return null
}

export default useGetSrcWithMediaFragments
