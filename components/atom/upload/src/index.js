import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const BASE_CLASS = 'sui-AtomUpload'
const CLASS_ICON_UPLOAD = 'sui-AtomUpload-iconUpload'
const CLASS_ICON_SUCCESS = 'sui-AtomUpload-iconSuccess'
const CLASS_BLOCK_TEXT = 'sui-AtomUpload-blockText'

class AtomUpload extends Component {
  render() {
    const {
      iconUpload: IconUpload,
      iconSuccess: IconSuccess,
      textActive,
      textUpload,
      textSuccess,
      textExplanation,
      status
    } = this.props
    console.log({
      textActive,
      textUpload,
      textSuccess
    })
    return (
      <div className={cx(BASE_CLASS, `${BASE_CLASS}--${status}`)}>
        {IconUpload && (
          <span className={CLASS_ICON_UPLOAD}>
            <IconUpload />
          </span>
        )}
        {IconSuccess && (
          <span className={CLASS_ICON_SUCCESS}>
            <IconSuccess />
          </span>
        )}
        <div className={CLASS_BLOCK_TEXT}>
          <h4>{textActive || textUpload || textSuccess}</h4>
          <p>{textExplanation}</p>
        </div>
      </div>
    )
  }
}

AtomUpload.displayName = 'AtomUpload'

AtomUpload.propTypes = {
  iconUpload: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  iconSuccess: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  textActive: PropTypes.string,
  textUpload: PropTypes.string,
  textSuccess: PropTypes.string,
  textExplanation: PropTypes.string,
  status: PropTypes.string
}

AtomUpload.defaultProps = {
  status: 'pending'
}

export default AtomUpload
