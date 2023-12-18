const usePercentage = ({percentage, mainBarPercentage, extraBarPercentage}) => {
  const response = []
  if (Array.isArray(percentage) && percentage.length >= 0 && percentage.every(number => typeof number === 'number')) {
    return percentage
  }
  if (typeof mainBarPercentage === 'number') {
    response.push(mainBarPercentage)
  }
  if (typeof extraBarPercentage === 'number') {
    response[1] = extraBarPercentage
    response[0] = response[0] === undefined ? 0 : response[0]
  }
  return response.length === 0 && typeof percentage === 'number' ? [percentage] : response
}

export default usePercentage
