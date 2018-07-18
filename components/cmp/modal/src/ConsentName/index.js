import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {CLASS} from '../settings'

export class ConsentName extends Component {
  state = {expanded: false}

  _handleExpand = () => {
    if (this.props.description) {
      this.setState({expanded: !this.state.expanded})
    }
  }

  render() {
    const {name, description, url} = this.props
    const {expanded} = this.state
    return (
      <div className={cx(description && `${CLASS}-consent--withDescription`)}>
        {url ? (
          <a
            className={`${CLASS}-consentLink`}
            href={url}
            target="_blank"
            rel="noopener"
          >
            {name}
          </a>
        ) : (
          <span
            className={cx(
              `${CLASS}-consentName`,
              expanded && `${CLASS}-consentName--expanded`
            )}
            onClick={this._handleExpand}
          >
            {name}
          </span>
        )}
        {description && (
          <span
            className={cx(
              `${CLASS}-consentDescription`,
              expanded && `${CLASS}-consentDescription--expanded`
            )}
          >
            {description}
          </span>
        )}
      </div>
    )
  }
}

ConsentName.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string
}
