export const BASE_CLASS = 'sui-PrimitiveTypography'

export const DESIGN = {
  DISPLAY_1: 'display-1',
  DISPLAY_2: 'display-2',
  DISPLAY_3: 'display-3',
  HEADLINE_1: 'headline-1',
  HEADLINE_2: 'headline-2',
  SUBHEAD: 'subhead',
  BODY_1: 'body-1',
  BODY_2: 'body-2',
  CAPTION: 'caption',
  SMALL: 'small',
  CALLOUT: 'callout'
}

export const VARIANT = {
  EXPANDED: 'expanded',
  DEFAULT: 'default'
  // COLLAPSED: 'collapsed'
}

export const FONT_SIZE = {
  XXS: 'xxs', // 10px
  XS: 'xs', // 12px
  S: 's', // 14px
  M: 'm', // 16px
  L: 'l', // 18px
  XL: 'xl', // 20px
  XXL: 'xxl', // 24px
  XXXL: 'xxxl', // 28px
  GIANT: 'giant' // 36px
}

export const FONT_FAMILY = {
  SANS_SERIF: 'sans-serif'
}

export const LETTER_SPACING = {
  XXS: 'xxs', // 1.5px
  XS: 'xs', // 1.2px
  S: 's', // 0.38px
  M: 'm', // 0.37px
  L: 'l', // 0.36px
  XL: 'xl', // 0.35px
  XXL: 'xxl', // 0.25px
  XXXL: 'xxxl', // 0.2px
  GIANT: 'giant' // 0.1px
}

export const FONT_STYLE = {
  ITALIC: 'italic',
  OBLIQUE: 'oblique'
}

export const TEXT_DECORATION_LINE = {
  UNDERLINE: 'underline',
  OVERLINE: 'overline',
  LINE_THROUGH: 'line-through'
}

export const FONT_WEIGHT = {
  THIN: 'thin', // 100
  EXTRA_LIGHT: 'extra-light', // 200
  LIGHT: 'light', // 300
  REGULAR: 'regular', // 400
  MEDIUM: 'medium', // 500
  SEMI_BOLD: 'semi-bold', // 600
  BOLD: 'bold', // 700
  EXTRA_BOLD: 'extra-bold', // 800
  BLACK: 'black' // 900
}

export const FONT_STRETCH = {
  ULTRA_CONDENSED: 'ultra-condensed', // 50%
  EXTRA_CONDENSED: 'extra-condensed', // 62.5%
  CONDENSED: 'condensed', // 75%
  SEMI_CONDENSED: 'semi-condensed', // 87.5%
  NORMAL: 'normal', // 100%
  SEMI_EXPANDED: 'semi-expanded', // 112.5%
  EXPANDED: 'expanded', // 125%
  EXTRA_EXPANDED: 'extra-expanded', // 150%
  ULTRA_EXPANDED: 'ultra-expanded' // 200%
}

export const LINE_HEIGHT = {
  XXS: 'xxs', // 12px
  XS: 'xs', // 14.4px
  S: 's', // 18.8px
  M: 'm', // 20.8px
  L: 'l', // 21.6px
  XL: 'xl', // 24px
  XXL: 'xxl', // 28.8px
  XXXL: 'xxxl', // 33.6px
  GIANT: 'giant' // 43.2px
}

export const KIND = {
  [DESIGN.DISPLAY_1]: {
    [VARIANT.DEFAULT]: {
      fontSize: 'xxgiant',
      lineHeight: 'xxgiant',
      fontWeight: FONT_WEIGHT.BOLD
    },
    [VARIANT.EXPANDED]: {
      fontSize: 'xxxgiant',
      lineHeight: 'xxxgiant',
      fontWeight: FONT_WEIGHT.BOLD
    }
  },
  [DESIGN.DISPLAY_2]: {
    [VARIANT.DEFAULT]: {
      fontSize: 'xgiant',
      lineHeight: LINE_HEIGHT.GIANT,
      fontWeight: FONT_WEIGHT.BOLD
    },
    [VARIANT.EXPANDED]: {
      fontSize: 'xxgiant',
      lineHeight: 'xxxgiant',
      fontWeight: FONT_WEIGHT.BOLD
    }
  },
  [DESIGN.DISPLAY_3]: {
    [VARIANT.DEFAULT]: {
      fontSize: FONT_SIZE.XXL,
      lineHeight: LINE_HEIGHT.XXXL,
      fontWeight: FONT_WEIGHT.BOLD
    },
    [VARIANT.EXPANDED]: {
      fontSize: FONT_SIZE.XXL,
      lineHeight: LINE_HEIGHT.XXXL,
      fontWeight: FONT_WEIGHT.BOLD
    }
  },
  [DESIGN.HEADLINE_1]: {
    [VARIANT.DEFAULT]: {
      fontSize: FONT_SIZE.XL,
      lineHeight: LINE_HEIGHT.XXL,
      fontWeight: FONT_WEIGHT.BOLD
    },
    [VARIANT.EXPANDED]: {
      fontSize: FONT_SIZE.XXL,
      lineHeight: LINE_HEIGHT.XXXL,
      fontWeight: FONT_WEIGHT.BOLD
    }
  },
  [DESIGN.HEADLINE_2]: {
    [VARIANT.DEFAULT]: {
      fontSize: FONT_SIZE.L,
      lineHeight: LINE_HEIGHT.M,
      fontWeight: FONT_WEIGHT.BOLD
    },
    [VARIANT.EXPANDED]: {
      fontSize: FONT_SIZE.XL,
      lineHeight: LINE_HEIGHT.M,
      fontWeight: FONT_WEIGHT.BOLD
    }
  },
  [DESIGN.SUBHEAD]: {
    [VARIANT.DEFAULT]: {
      fontSize: FONT_SIZE.M,
      lineHeight: LINE_HEIGHT.M,
      fontWeight: FONT_WEIGHT.BOLD
    },
    [VARIANT.EXPANDED]: {
      fontSize: FONT_SIZE.M,
      lineHeight: LINE_HEIGHT.M,
      fontWeight: FONT_WEIGHT.BOLD
    }
  },
  [DESIGN.BODY_1]: {
    [VARIANT.DEFAULT]: {
      fontSize: FONT_SIZE.M,
      lineHeight: LINE_HEIGHT.XL,
      fontWeight: FONT_WEIGHT.REGULAR
    },
    [VARIANT.EXPANDED]: {
      fontSize: FONT_SIZE.M,
      lineHeight: LINE_HEIGHT.XL,
      fontWeight: FONT_WEIGHT.BOLD
    }
  },
  [DESIGN.BODY_2]: {
    [VARIANT.DEFAULT]: {
      fontSize: FONT_SIZE.S,
      lineHeight: LINE_HEIGHT.M,
      fontWeight: FONT_WEIGHT.REGULAR
    },
    [VARIANT.EXPANDED]: {
      fontSize: FONT_SIZE.S,
      lineHeight: LINE_HEIGHT.M,
      fontWeight: FONT_WEIGHT.BOLD
    }
  },
  [DESIGN.CAPTION]: {
    [VARIANT.DEFAULT]: {
      fontSize: FONT_SIZE.XS,
      lineHeight: LINE_HEIGHT.XS,
      fontWeight: FONT_WEIGHT.REGULAR
    },
    [VARIANT.EXPANDED]: {
      fontSize: FONT_SIZE.XS,
      lineHeight: LINE_HEIGHT.XS,
      fontWeight: FONT_WEIGHT.BOLD
    }
  },
  [DESIGN.SMALL]: {
    [VARIANT.DEFAULT]: {
      fontSize: FONT_SIZE.XXS,
      lineHeight: LINE_HEIGHT.XS,
      fontWeight: FONT_WEIGHT.REGULAR
    },
    [VARIANT.EXPANDED]: {
      fontSize: FONT_SIZE.XXS,
      lineHeight: LINE_HEIGHT.XS,
      fontWeight: FONT_WEIGHT.BOLD
    }
  },
  [DESIGN.CALLOUT]: {
    [VARIANT.DEFAULT]: {
      fontSize: FONT_SIZE.M,
      lineHeight: LINE_HEIGHT.XL,
      fontWeight: FONT_WEIGHT.BOLD
    },
    [VARIANT.EXPANDED]: {
      fontSize: FONT_SIZE.M,
      lineHeight: LINE_HEIGHT.XL,
      fontWeight: FONT_WEIGHT.BOLD
    }
  }
}
