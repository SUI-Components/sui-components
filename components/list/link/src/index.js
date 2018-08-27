import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import LinkBasic from '@schibstedspain/sui-link-basic'

class ListLink extends Component {
  _renderLink = (item, index) => {
    const {displayInline, useReactRouterLinks} = this.props
    const classListItem = cx('sui-ListLink-item', {
      'sui-ListLink-item--inline': displayInline
    })

    return (
      <li className={classListItem} key={index}>
        <LinkBasic {...item} useReactRouterLinks={useReactRouterLinks} />
      </li>
    )
  }

  render() {
    return (
      <ul className="sui-ListLink">{this.props.list.map(this._renderLink)}</ul>
    )
  }
}

ListLink.displayName = 'ListLink'
ListLink.defaultProps = {
  list: []
}
ListLink.propTypes = {
  displayInline: PropTypes.bool,
  list: PropTypes.array,
  useReactRouterLinks: PropTypes.bool
}

export default ListLink
