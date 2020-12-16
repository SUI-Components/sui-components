/* eslint-disable react/prop-types, no-unused-vars, no-console */

const PlaceHolder = ({
  width = 150,
  height = 150,
  backgroundHEXColor = 'DDDDDD',
  text,
  textHEXColor = '000000',
  format = 'png',
  ...otherProps
}) => {
  const validWidth = Number.isInteger(width) ? width : height
  const validHeight = Number.isInteger(height) ? height : width
  const validText = text || `${validWidth}x${validHeight} placeholder`
  return (
    <img
      src={`https://via.placeholder.com/${validWidth}x${validHeight}.${format}/${backgroundHEXColor}/${textHEXColor}/?text=${validText}`}
      alt={validText}
      {...otherProps}
    />
  )
}

export default PlaceHolder
