import PropTypes from 'prop-types'

import PolymorphicElement from '@s-ui/react-primitive-polymorphic-element'

import ComponentTypes from './component/index.js'
import useTypography from './useTypography.js'
import {
  DESIGN,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_STRETCH,
  FONT_STYLE,
  FONT_WEIGHT,
  LETTER_SPACING,
  LINE_HEIGHT,
  TEXT_DECORATION_LINE,
  VARIANT
} from './config.js'

const PrimitiveTypography = ({
  design,
  variant,
  as = 'span',
  children,
  className,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  fontStretch, // condensed, extended
  letterSpacing,
  lineHeight,
  textDecorationLine,
  isLinked,
  isBlurred,
  ...props
}) => {
  const {...resultingProps} = useTypography({
    design,
    variant,
    as,
    fontSize,
    fontFamily,
    fontWeight,
    fontStyle,
    fontStretch,
    letterSpacing,
    lineHeight,
    textDecorationLine,
    isLinked,
    isBlurred,
    children,
    ...props
  })
  return <PolymorphicElement {...resultingProps} />
}

PrimitiveTypography.displayName = 'PrimitiveTypography'
PrimitiveTypography.propTypes = {
  /* Render the passed value as the correspondent HTML tag or the component if a function is passed */
  as: PropTypes.elementType,
  /**
   * Allows you to add extra styles and avoid extra DOM elements to style purposes.
   */
  className: PropTypes.string,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Adds the proper styles to look like a link.
   */
  isLinked: PropTypes.bool,
  /**
   * Adds blur effect to the text given.
   */
  isBlurred: PropTypes.bool,
  /**
   * Different kinds of styles proposed.
   */
  design: PropTypes.oneOf(Object.values(DESIGN)),
  /**
   * Different variants of each style defined
   */
  variant: PropTypes.oneOf(Object.values(VARIANT)),
  /**
   * css font size tokens
   */
  fontSize: PropTypes.oneOf(Object.values(FONT_SIZE)),
  /**
   * css font family tokens
   */
  fontFamily: PropTypes.oneOf(Object.values(FONT_FAMILY)),
  /**
   * css font weight tokens
   */
  fontWeight: PropTypes.oneOf(Object.values(FONT_WEIGHT)),
  /**
   * css font style tokens
   */
  fontStyle: PropTypes.oneOf(Object.values(FONT_STYLE)),
  /**
   * css font stretch tokens
   */
  fontStretch: PropTypes.oneOf(Object.values(FONT_STRETCH)),
  /**
   * css letter spacing tokens
   */
  letterSpacing: PropTypes.oneOf(Object.values(LETTER_SPACING)),
  /**
   * css line height tokens
   */
  lineHeight: PropTypes.oneOf(Object.values(LINE_HEIGHT)),
  /**
   * css text decoration line tokens
   */
  textDecorationLine: PropTypes.oneOf(Object.values(TEXT_DECORATION_LINE))
}

const {
  Display1,
  Display2,
  Display3,
  Headline1,
  Headline2,
  SubHead,
  Body1,
  Body2,
  Caption,
  Small,
  Callout
} = ComponentTypes

export default PrimitiveTypography

export {
  useTypography,
  DESIGN as primitiveTypographyDesign,
  VARIANT as primitiveTypographyVariant,
  FONT_SIZE as primitiveTypographyFontSize,
  FONT_FAMILY as primitiveTypographyFontFamily,
  FONT_WEIGHT as primitiveTypographyFontWeight,
  FONT_STYLE as primitiveTypographyFontStyle,
  FONT_STRETCH as primitiveTypographyFontStretch,
  LETTER_SPACING as primitiveTypographyLetterSpacing,
  LINE_HEIGHT as primitiveTypographyLineHeight,
  TEXT_DECORATION_LINE as primitiveTypographyTextDecoration,
  Display1 as PrimitiveTypographyDisplay1,
  Display2 as PrimitiveTypographyDisplay2,
  Display3 as PrimitiveTypographyDisplay3,
  Headline1 as PrimitiveTypographyHeadline1,
  Headline2 as PrimitiveTypographyHeadline2,
  SubHead as PrimitiveTypographySubHead,
  Body1 as PrimitiveTypographyBody1,
  Body2 as PrimitiveTypographyBody2,
  Caption as PrimitiveTypographyCaption,
  Small as PrimitiveTypographySmall,
  Callout as PrimitiveTypographyCallout
}
