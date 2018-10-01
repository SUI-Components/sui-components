import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const STATUSES = {
  ACTIVE: 'active',
  UPLOAD: 'upload',
  SUCCESS: 'success',
  ERROR: 'error'
}

const BASE_CLASS = 'sui-AtomUpload'
const CLASS_BLOCK_TEXT = `${BASE_CLASS}-blockText`

const capitalize = text => text[0].toUpperCase() + text.substr(1)

class AtomUpload extends PureComponent {
  renderStatusBlock(status) {
    const classNameIcon = `${BASE_CLASS}-icon${capitalize(status)}`
    const IconStatus = this.props[`icon${capitalize(status)}`]
    const textStatus = this.props[`text${capitalize(status)}`]
    const {textExplanation} = this.props
    return (
      <div className={cx(BASE_CLASS, `${BASE_CLASS}--${status}`)}>
        <span className={classNameIcon}>
          <IconStatus />
        </span>
        <div className={CLASS_BLOCK_TEXT}>
          <h4>{textStatus}</h4>
          {status === STATUSES.ACTIVE &&
            textExplanation && <p>{textExplanation}</p>}
        </div>
      </div>
    )
  }

  render() {
    const {status} = this.props
    return (
      Object.values(STATUSES).includes(status) && this.renderStatusBlock(status)
    )
  }
}

AtomUpload.displayName = 'AtomUpload'

AtomUpload.propTypes = {
  iconActive: PropTypes.oneOfType([PropTypes.element, PropTypes.func]), // eslint-disable-line react/no-unused-prop-types
  iconUpload: PropTypes.oneOfType([PropTypes.element, PropTypes.func]), // eslint-disable-line react/no-unused-prop-types
  iconSuccess: PropTypes.oneOfType([PropTypes.element, PropTypes.func]), // eslint-disable-line react/no-unused-prop-types
  iconError: PropTypes.oneOfType([PropTypes.element, PropTypes.func]), // eslint-disable-line react/no-unused-prop-types
  textActive: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  textUpload: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  textSuccess: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  textError: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  textExplanation: PropTypes.string,
  status: PropTypes.string.isRequired
}

export default AtomUpload
