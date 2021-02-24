import PropTypes from 'prop-types'

const styles = {
  background: '#eee',
  padding: 0
}

export default function DemoWrapper({children, style}) {
  return <div style={{...styles, ...style}}>{children}</div>
}

DemoWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}
