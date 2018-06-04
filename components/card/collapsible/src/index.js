import PropTypes from 'prop-types'
import React, {Component} from 'react'
import Button from '@schibstedspain/sui-atom-button'
import Collapsible from '@schibstedspain/sui-collapsible-basic'
import IconX from '@schibstedspain/sui-svgiconset/lib/X'
import cx from 'classnames'

class CardCollapsible extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: props.collapsed
    }
    this._toggleCardContent = this._toggleCardContent.bind(this)
  }

  /**
   * Changes the collapsed/expand state of the card's content.
   */
  _toggleCardContent() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  /**
   * Renders a single text info item, that will be displayed in the card's header positioned depending on the expanded/collapsed state.
   * @param {Object} itemProps              Properties to include in text info item HTML Element.
   * @param {string} itemProps.label        Text to display.
   * @param {string} itemProps.link         If set, item will be displayed as a text link.
   * @param {boolean} itemProps.highlighted Highlight the item (bold style).
   * @return {Element} Item to display on card's header info area.
   */
  _renderInfoItem(
    {label, link, highlighted, target = '_blank', iconLeft: IconLeft, onClick},
    index
  ) {
    const InfoItemElement = link ? 'a' : 'span'
    const props = link ? {href: link, target, onClick} : {}

    return (
      <InfoItemElement
        key={`header-info-item-${index}`}
        className={cx('sui-CardCollapsible-headerInfoItem', {
          'sui-CardCollapsible-headerInfoItemLink': !!link,
          'is-highlighted': !!highlighted
        })}
        {...props}
      >
        {IconLeft && (
          <IconLeft
            svgClass="sui-CardCollapsible-infoItemIcon"
            className="sui-CardCollapsible-infoItemIcon"
          />
        )}
        <span>{label}</span>
      </InfoItemElement>
    )
  }

  _renderCardCloseButton() {
    const {iconClose: Icon = IconX} = this.props

    return (
      <div className="sui-CardCollapsible-headerClose">
        <a
          className="sui-CardCollapsible-closeButton"
          onClick={this._toggleCardContent}
        >
          <Icon
            svgClass="sui-CardCollapsible-closeIcon"
            className="sui-CardCollapsible-closeIcon"
          />
        </a>
      </div>
    )
  }

  /**
   * Renders the card's header, which may be different depending on its collapsed state, and the configuration defined in prop "headerInfo".
   * @param {Object} headerImage Configuration of the image to display in card's header.
   * @param {string} [headerImage.alt=logo]
   * @param {string} headerImage.href
   * @param {string} headerImage.src
   * @param {string} [headerImage.target=_blank]
   * @param {Object[]} info List of item info labels to show in card's header.
   * @return {Element} Card' header element.
   */
  _renderCardHeader({alt = 'logo', href, src, target = '_blank'}, info) {
    const {collapsed} = this.state
    const Image = <img src={src} alt={alt} />

    return (
      <div
        className={cx('sui-CardCollapsible-header', {
          'is-expanded': !collapsed
        })}
      >
        <div className="sui-CardCollapsible-headerImage">
          {href ? (
            <a href={href} target={target}>
              {Image}
            </a>
          ) : (
            Image
          )}
        </div>
        {info && (
          <div className="sui-CardCollapsible-headerInfo">
            {info.map(this._renderInfoItem)}
          </div>
        )}
      </div>
    )
  }

  /**
   * Renders the action button which trigger the expand/collapse action of the card.
   * @param config {object} Button configuration (prop "label" : Text label of expand/collapse action button).
   */
  _renderExpandButton() {
    const {expandButton: {label} = {}} = this.props

    return (
      !!label && (
        <Button fullWidth size="large" onClick={this._toggleCardContent}>
          {label}
        </Button>
      )
    )
  }

  render() {
    const {collapsed} = this.state
    const {
      className,
      children,
      headerImage,
      headerInfo,
      onChangeHandler,
      showCloseButton,
      hasBoxShadowWhenExpanded
    } = this.props
    const headerInfoConfig = collapsed
      ? headerInfo.displayWhenCollapsed
      : headerInfo.displayWhenExpanded
    const cssClassName = cx('sui-CardCollapsible', className, {
      'is-expanded': !collapsed,
      'sui-CardCollapsible--boxShadow': hasBoxShadowWhenExpanded
    })

    return (
      <div className={cssClassName}>
        {!collapsed && showCloseButton && this._renderCardCloseButton()}
        {headerInfo && this._renderCardHeader(headerImage, headerInfoConfig)}
        <Collapsible
          collapsed={collapsed}
          animationType="opacity"
          hideTriggerIcon
          animationSpeed="fast"
          label={collapsed && this._renderExpandButton()}
          handleClick={onChangeHandler}
        >
          {children}
        </Collapsible>
      </div>
    )
  }
}

CardCollapsible.propTypes = {
  /**
   * CSS className to apply to Card Expandable container.
   */
  className: PropTypes.string,
  /**
   * Collapsible card's content children node (will be displayed when the card is expanded).
   */
  children: PropTypes.node,
  /**
   * Configuration of an image which will be displayed in the card's header.
   * The image src is required, and it could be linkable to an URL (target can be specified as well).
   */
  headerImage: PropTypes.shape({
    alt: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top'])
  }).isRequired,
  /**
   * List of text labels which will be displayed in the card's header.
   * It is possible to have different info labels when the card is expanded or collapsed, setting in "headerInfo" property their corresponding:
   * - "displayWhenCollapsed": one below the other, at the bottom of the header's image.
   * - "displayWhenExpanded": one below the other, at the right side of the header's image.
   */
  headerInfo: PropTypes.shape({
    displayWhenCollapsed: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        link: PropTypes.string,
        highlighted: PropTypes.bool
      })
    ),
    displayWhenExpanded: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        link: PropTypes.string,
        highlighted: PropTypes.bool,
        target: PropTypes.string,
        iconLeft: PropTypes.func,
        onClick: PropTypes.func
      })
    )
  }),
  /**
   * Configuration of the "expand" button (displayed only when the card is collapsed).
   */
  expandButton: PropTypes.shape({
    label: PropTypes.string.isRequired
  }),
  /**
   * Function to call when the expanded/collapsed status of collapsible component has changed.
   */
  onChangeHandler: PropTypes.func,
  /**
   * Whether display the component collapsed or not on the first render.
   */
  collapsed: PropTypes.bool,
  /**
   * Flag to display a close button on the top-right side of the card.
   */
  showCloseButton: PropTypes.bool,
  /**
   * Customize icon close.
   */
  iconClose: PropTypes.func,
  /**
   * Flag to display a box-shadow around the card container when it is expanded.
   */
  hasBoxShadowWhenExpanded: PropTypes.bool
}

CardCollapsible.defaultProps = {
  collapsed: true,
  headerInfo: {
    displayWhenCollapsed: [],
    displayWhenExpanded: []
  },
  showCloseButton: false,
  hasBoxShadowWhenExpanded: false
}

CardCollapsible.displayName = 'CardCollapsible'

export default CardCollapsible
