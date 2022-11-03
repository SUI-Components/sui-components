import cx from 'classnames'
import PropTypes from 'prop-types'

const CarouselItem = ({children, classNameBase, itemsLength}) => {
  return (
    <li
      className={cx(`${classNameBase}-item`)}
      style={itemsLength !== 1 ? {width: `${100 / itemsLength}%`} : {}}
    >
      {children}
    </li>
  )
}

CarouselItem.propTypes = {
  itemsLength: PropTypes.number,
  classNameBase: PropTypes.string,
  children: PropTypes.node
}

export default CarouselItem
