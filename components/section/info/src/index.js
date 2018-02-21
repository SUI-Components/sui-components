import React, {Component} from 'react'
import PropTypes from 'prop-types'

const baseClass = 'sui-SectionInfo'

class SectionInfo extends Component {
  displayTitle (title) {
    return (title !== undefined && title !== '')
  }

  render () {
    const { title, children } = this.props

    return (
      <section className={baseClass}>
        { this.displayTitle(title) && <h3 className={`${baseClass}-title`}>{title}</h3> }
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
