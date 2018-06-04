import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Chevronbottom from '@schibstedspain/sui-svgiconset/lib/Chevronbottom'

const CLASS = 'sui-CollapsibleReadmore'

const NO_OP = () => {}

export default class CollapsibleReadmore extends Component {
  static propTypes = {
    /**
     * The content element|s to be truncated if its height is higher than maxHeight.
     */
    children: PropTypes.node.isRequired,
    /**
     * An ellipsis ICON that will be placed next to the ellipsis text.
     */
    ellipsis: PropTypes.shape({
      icon: PropTypes.func,
      size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),
    /**
     * An ellipsis TEXT that will be added to the end of the content when it is truncated.
     * You should set one text to show when content is collapsed, and other one to show when is expanded.
     */
    ellipsisText: PropTypes.shape({
      collapsed: PropTypes.string.isRequired,
      expanded: PropTypes.string.isRequired
    }),
    /**
     * If enabled, displays a gradient at the bottom partially hiding the end of the content.
     */
    gradient: PropTypes.bool,
    /**
     * Specifies the max height that should be displayed before truncating the content.
     */
    maxHeight: PropTypes.number.isRequired,
    /**
     * Callback that gets invoked when the readmore ellipsis is clicked, passing its next collapsed/expanded status when called.
     */
    onEllipsisClick: PropTypes.func
  }

  static defaultProps = {
    ellipsis: {
      icon: Chevronbottom,
      size: 16
    },
    onEllipsisClick: NO_OP
  }

  static displayName = 'CollapsibleReadmore'

  state = {
    collapsed: false
  }

  _readMoreContentRef = React.createRef()

  _readMoreButtonEnabled = false

  _fullContentHeight = null

  _getContentWrapperClassNames() {
    return cx(`${CLASS}-contentWrapper`, {
      [`${CLASS}-gradient`]: this.props.gradient
    })
  }

  _getContentWrapperInlineStyles() {
    return {
      maxHeight: this.state.collapsed
        ? this.props.maxHeight
        : this._fullContentHeight
    }
  }

  _toggle() {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }))
  }

  _handleEllipsisClick = event => {
    event.stopPropagation()
    this.props.onEllipsisClick({
      collapsed: !this.state.collapsed
    })
    this._toggle()
  }

  _renderEllipsis() {
    const {
      ellipsis: {icon: EllipsisIcon, size},
      ellipsisText
    } = this.props

    return (
      <a
        className={`${CLASS}-ellipsisLink`}
        onClick={this._handleEllipsisClick}
        role="button"
      >
        <div className={`${CLASS}-ellipsisWrapper`}>
          <span className={`${CLASS}-ellipsisText`}>
            {this.state.collapsed
              ? ellipsisText.collapsed
              : ellipsisText.expanded}
          </span>
          <div className={`${CLASS}-ellipsisIconBox`}>
            {EllipsisIcon && (
              <EllipsisIcon
                className={`${CLASS}-ellipsisIcon`}
                size={size}
                svgClass={`${CLASS}-ellipsisIcon`}
              />
            )}
          </div>
        </div>
      </a>
    )
  }

  componentDidMount() {
    const contentWrapperEl = this._readMoreContentRef.current

    this._fullContentHeight = contentWrapperEl
      ? contentWrapperEl.offsetHeight
      : 0

    if (this._fullContentHeight > this.props.maxHeight) {
      this._readMoreButtonEnabled = true
      this._toggle()
    }
  }

  render() {
    const {children} = this.props

    return (
      <div className={cx(CLASS, {'is-expanded': !this.state.collapsed})}>
        <div
          className={this._getContentWrapperClassNames()}
          ref={this._readMoreContentRef}
          style={this._getContentWrapperInlineStyles()}
        >
          {children}
        </div>
        {this._readMoreButtonEnabled && this._renderEllipsis()}
      </div>
    )
  }
}
