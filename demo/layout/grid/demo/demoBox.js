import PropTypes from 'prop-types'

const styles = ({tiny, color, style}) => ({
  background: color ?? '#09f',
  color: '#fff',
  borderRadius: '8px',
  padding: '16px',
  minHeight: tiny ? '60px' : '120px',
  height: '100%',
  margin: 0,
  ...style
})

export default function DemoBox({tiny, children, color, style}) {
  return <div style={styles({tiny, color, style})}>{children}</div>
}

DemoBox.propTypes = {
  children: PropTypes.node.isRequired,
  tiny: PropTypes.bool,
  color: PropTypes.string,
  style: PropTypes.object
}
