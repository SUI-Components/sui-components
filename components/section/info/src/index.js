import React, {Component} from 'react'
import PropTypes from 'prop-types'

const baseClass = 'sui-SectionInfo'

class SectionInfo extends Component {
  render() {
    const {title, children} = this.props

    return (
      <section className={baseClass}>
        {title && <h3 className={`${baseClass}-title`}>{title}</h3>}
        <div className={`${baseClass}-content`}>{children}</div>
      </section>
    )
  }
}

SectionInfo.displayName = 'SectionInfo'

SectionInfo.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object
  ])
}

export default SectionInfo
