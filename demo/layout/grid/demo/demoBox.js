import PropTypes from 'prop-types'

const styles = ({tiny}) => ({
  background: '#09f',
  color: '#fff',
  borderRadius: '8px',
  padding: '16px',
  minHeight: tiny ? '60px' : '120px',
  margin: '16px 0'
})

export default function DemoBox({tiny, children}) {
  return <div style={styles({tiny})}>{children}</div>
}

DemoBox.propTypes = {
  children: PropTypes.node.isRequired,
  tiny: PropTypes.bool
}
