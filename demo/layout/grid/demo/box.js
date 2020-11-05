import PropTypes from 'prop-types'

const styles = {
  background: '#09f',
  color: '#fff',
  borderRadius: '8px',
  padding: '16px',
  minHeight: '120px',
  margin: '16px 0'
}

export default function Box({children}) {
  return (
    <div className="box" style={styles}>
      {children}
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.node.isRequired
}
