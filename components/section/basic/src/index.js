import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {SPACING} from './constants'

const CLASS = 'sui-SectionBasic'
const AVAILABLE_SPACINGS = Object.values(SPACING)

const getSpacingClassName = modifier => `${CLASS}-bottomSpacing--${modifier}`

const SectionBasic = ({
  children,
  contentBottomSpacing,
  headerBottomSpacing,
  sectionBottomSpacing,
  separator,
  textContent,
  title,
  customContentWhenEmpty
}) => (
  <section className={cx(CLASS, getSpacingClassName(sectionBottomSpacing))}>
    {title && (
      <header
        className={cx(
          `${CLASS}-header`,
          getSpacingClassName(headerBottomSpacing)
        )}
      >
        <h3 className={`${CLASS}-title`}>{title}</h3>
      </header>
    )}
    <div
      className={cx(`${CLASS}-content`, {
        [getSpacingClassName(contentBottomSpacing)]: separator
      })}
    >
      {textContent ? (
        <p className={`${CLASS}-textContent`}>{textContent}</p>
      ) : (
        children || customContentWhenEmpty
      )}
    </div>
    {separator && <hr className={`${CLASS}-separator`} />}
  </section>
)

SectionBasic.displayName = 'SectionBasic'

SectionBasic.propTypes = {
  children: PropTypes.node,
  /**
   * Flag to include an "hr" line separator element at the bottom of the section (default to false).
   */
  separator: PropTypes.bool,
  /**
   * Specifies that content of the section will be only the provided text, ignoring children and wrapping textContent in a paragraph.
   */
  textContent: PropTypes.string,
  /**
   * Text to be displayed as title at the top of the Section.
   */
  title: PropTypes.string,
  /**
   * Allows customisation of the bottom margin to add to the main section HTML element (margin bottom of component).
   */
  sectionBottomSpacing: PropTypes.oneOf(AVAILABLE_SPACINGS),
  /**
   * Allows customisation of the bottom margin to add to the section's header element (space between header and content).
   */
  headerBottomSpacing: PropTypes.oneOf(AVAILABLE_SPACINGS),
  /**
   * Allows customisation of the bottom margin to add to the section's content element (space between content and separator line).
   */
  contentBottomSpacing: PropTypes.oneOf(AVAILABLE_SPACINGS),
  /**
   * Content to be displayed inside the section when no children or no textContent has been provided.
   * If not set, no custom content will be displayed when section is empty.
   */
  customContentWhenEmpty: PropTypes.node
}

SectionBasic.defaultProps = {
  contentBottomSpacing: SPACING.LARGE,
  headerBottomSpacing: SPACING.LARGE,
  sectionBottomSpacing: SPACING.NONE,
  customContentWhenEmpty: null,
  separator: false
}

export default SectionBasic
export {SPACING as sectionBasicBottomSpacing}
