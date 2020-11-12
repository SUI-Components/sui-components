import PropTypes from 'prop-types'

const styles = {
  background: '#09f',
  color: '#fff',
  borderRadius: '8px',
  padding: '16px',
  minHeight: '120px',
  margin: '16px 0'
}

export default function DemoBox({children}) {
  return <div style={styles}>{children}</div>
}

DemoBox.propTypes = {
  children: PropTypes.node.isRequired
}
