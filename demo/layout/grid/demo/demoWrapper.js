import PropTypes from 'prop-types'

const styles = {
  background: '#eee',
  padding: '24px'
}

export default function DemoWrapper({children}) {
  return <div style={styles}>{children}</div>
}

DemoWrapper.propTypes = {
  children: PropTypes.node.isRequired
}
