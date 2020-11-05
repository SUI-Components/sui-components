import PropTypes from 'prop-types'

const styles = {
  background: '#eee',
  padding: '24px'
}

export default function Wrapper({children}) {
  return (
    <div className="wrapper" style={styles}>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}
