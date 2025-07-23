import PropTypes from 'prop-types'

const Forest = ({style, ...props}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        backgroundImage: 'url("https://i.postimg.cc/fRGgH7fr/pexels-jakkel-418831.jpg")',
        ...style
      }}
      {...props}
    />
  )
}

Forest.displayName = 'Forest'

Forest.propTypes = {
  style: PropTypes.object
}

export default Forest
