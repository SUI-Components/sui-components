import Indicator from './Indicator/index.js'

const useIndicator = ({hideIndicator, indicatorBottom, percentage, indicatorTotal}) => {
  if (hideIndicator) return []
  const indicator = (
    <Indicator indicatorBottom={indicatorBottom} percentage={percentage} indicatorTotal={indicatorTotal} />
  )
  return [!indicatorBottom ? indicator : null, indicatorBottom ? indicator : null]
}

export default useIndicator
