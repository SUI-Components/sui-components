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
      src={`https://placehold.co/${validWidth}x${validHeight}/${backgroundHEXColor}/${textHEXColor}/${format}?text=${validText}`}
      alt={validText}
      {...otherProps}
    />
  )
}

export default PlaceHolder
