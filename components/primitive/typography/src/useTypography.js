import cx from 'classnames'
import merge from 'lodash.merge'

import {
  BASE_CLASS,
  DESIGN,
  KIND,
  TEXT_DECORATION_LINE,
  VARIANT
} from './config.js'

const getInheritedProps = ({design, variant}) => {
  if (typeof KIND[design] === 'object') {
    if (typeof KIND[design][variant] === 'object') {
      return KIND[design][variant]
    }
  }
  return {}
}

const getLinkProps = ({isLinked}, props) => {
  return {
    ...props,
    ...(isLinked && {textDecorationLine: TEXT_DECORATION_LINE.UNDERLINE})
  }
}

const getClassNames = ({
  design,
  variant,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  fontStretch,
  letterSpacing,
  lineHeight,
  textDecorationLine,
  className,
  isBlurred,
  isLinked
}) => {
  return cx(
    BASE_CLASS,
    [`${BASE_CLASS}-design-${design}`, `${BASE_CLASS}-variant-${variant}`],
    {
      [`${BASE_CLASS}-linked`]: isLinked,
      [`${BASE_CLASS}-fontSize-${fontSize}`]: fontSize !== undefined,
      [`${BASE_CLASS}-fontFamily-${fontFamily}`]: fontFamily !== undefined,
      [`${BASE_CLASS}-fontWeight-${fontWeight}`]: fontWeight !== undefined,
      [`${BASE_CLASS}-fontStyle-${fontStyle}`]: fontStyle !== undefined,
      [`${BASE_CLASS}-fontStretch-${fontStretch}`]: fontStretch !== undefined,
      [`${BASE_CLASS}-letterSpacing-${letterSpacing}`]:
        letterSpacing !== undefined,
      [`${BASE_CLASS}-lineHeight-${lineHeight}`]: lineHeight !== undefined,
      [`${BASE_CLASS}-textDecorationLine-${textDecorationLine}`]:
        textDecorationLine !== undefined,
      [`${BASE_CLASS}-blurred-${isBlurred}`]: isBlurred !== undefined,
      className
    }
  )
}

const useTypography = ({
  design = DESIGN.BODY_1,
  variant = VARIANT.DEFAULT,
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
}) => {
  const {className: inheritedClassName, ...inheritedProps} = getLinkProps(
    {isLinked},
    getInheritedProps({design, variant})
  )
  const className = getClassNames(
    merge(inheritedProps, {
      ...props,
      design,
      variant,
      fontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      fontStretch,
      letterSpacing,
      lineHeight,
      textDecorationLine,
      isBlurred,
      isLinked
    })
  )
  return {
    ...props,
    ...{
      className,
      ...(as && {as})
    },
    children
  }
}

export default useTypography
