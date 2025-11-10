import Indicator from './Indicator/index.js'

const useIndicator = ({hideIndicator, indicatorBottom, percentage, indicatorTotal, color}) => {
  if (hideIndicator) return []
  const indicator = (
    <Indicator
      color={color}
      indicatorBottom={indicatorBottom}
      percentage={percentage}
      indicatorTotal={indicatorTotal}
    />
  )
  return [!indicatorBottom ? indicator : null, indicatorBottom ? indicator : null]
}

export default useIndicator
