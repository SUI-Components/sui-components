import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ButtonBasic from '@schibstedspain/sui-button-basic'
import CollapsibleBasic from '@schibstedspain/sui-collapsible-basic'
import cx from 'classnames'

class CardCollapsible extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: true
    }
    this._toggleCardContent = this._toggleCardContent.bind(this)
  }

  /**
   * Changes the collapsed/expand state of the card's content.
   */
  _toggleCardContent () {
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
  _renderInfoItem ({label, link, highlighted}, index) {
    const InfoItemElement = link ? 'a' : 'span'
    const props = link ? {href: link, target: '_blank'} : {}

    return (
      <InfoItemElement key={`header-info-item-${index}`}
        className={cx('sui-CardCollapsible-headerInfoItem', {'sui-CardCollapsible-headerInfoItemLink': !!link, 'is-highlighted': !!highlighted})} {...props}>
        {label}
      </InfoItemElement>
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
  _renderCardHeader ({alt = 'logo', href, src, target = '_blank'}, info) {
    const Image = <img src={src} alt={alt} />

    return (
      <div className={cx('sui-CardCollapsible-header', {'is-expanded': !this.state.collapsed})}>
        <div className='sui-CardCollapsible-headerImage'>
          {href ? <a href={href} target={target}>{Image}</a> : Image}
        </div>
        {info &&
          <div className='sui-CardCollapsible-headerInfo'>
            {info.map(this._renderInfoItem)}
          </div>
        }
      </div>
    )
  }

  /**
   * Renders the action button which trigger the expand/collapse action of the card.
   * @param config {object} Button configuration (prop "label" : Text label of expand/collapse action button).
   * @return {Element} Expand or collapse action button element.
   */
  _renderActionButton (config) {
    return (
      !!config && <div className='sui-CollapsibleBasic-actionButton'>
        <ButtonBasic layout='full' onClick={this._toggleCardContent} text={config.label} size='large' />
      </div>
    )
  }

  render () {
    const {className, children, headerImage, headerInfo, collapseButton, expandButton, onChangeHandler} = this.props
    const {collapsed} = this.state

    return (
      <div className={cx('sui-CardCollapsible', className, {'is-expanded': !this.state.collapsed})}>
        {headerInfo && this._renderCardHeader(headerImage, collapsed ? headerInfo.displayWhenCollapsed : headerInfo.displayWhenExpanded)}
        <CollapsibleBasic
          collapsed={collapsed}
          label={this._renderActionButton(collapsed ? expandButton : collapseButton)}
          icon={false}
          handleClick={onChangeHandler}>
          {children}
        </CollapsibleBasic>
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
    target: PropTypes.oneOf([
      '_blank', '_parent', '_self', '_top'
    ])
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
        highlighted: PropTypes.bool
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
   * Configuration of the "collapsed" button (displayed only when the card is expanded).
   */
  collapseButton: PropTypes.shape({
    label: PropTypes.string.isRequired
  }),
  /**
   * Function to call when the expanded/collapsed status of collapsible component has changed.
   */
  onChangeHandler: PropTypes.func
}

CardCollapsible.displayName = 'CardCollapsible'

export default CardCollapsible
