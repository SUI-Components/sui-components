export interface ColorRamp {
  [key: string | number]: string
}

export interface ColorPrimitives {
  [key: string]: ColorRamp
}

export interface OpacityPrimitive {
  [key: string]: number
}

export interface ColorType {
  name: string
  color: string
  convert: () => {
    [key: string]: string
  }
}

export type Base = string

export interface ThemePrimitive {
  color: ColorPrimitives
  colorSpace: 'hex' | 'rgb'
  opacity: OpacityPrimitive
  size: string
}

export type propertySyntax =
  | 'angle'
  | 'color'
  | 'custom-ident'
  | 'image'
  | 'integer'
  | 'length'
  | 'length-percentage'
  | 'number'
  | 'percentage'
  | 'resolution'
  | 'string'
  | 'time'
  | 'transform-function'
  | 'transform-list'
  | 'url'

export interface SemanticShape {
  color: {
    brand: {
      main: string
      mainHovered: string
      mainFocused: string
      mainPressed: string
      mainDisabled: string
      onMain: string

      mainContainer: string
      mainContainerHovered: string
      mainContainerFocused: string
      mainContainerPressed: string
      mainContainerDisabled: string
      onMainContainer: string

      mainVariant: string
      mainVariantHovered: string
      mainVariantFocused: string
      mainVariantPressed: string
      mainVariantDisabled: string
      onMainVariant: string

      accent: string
      accentHovered: string
      accentFocused: string
      accentPressed: string
      accentDisabled: string
      onAccent: string

      accentContainer: string
      accentContainerHovered: string
      accentContainerFocused: string
      accentContainerPressed: string
      accentContainerDisabled: string
      onAccentContainer: string

      accentVariant: string
      accentVariantHovered: string
      accentVariantFocused: string
      accentVariantPressed: string
      accentVariantDisabled: string
      onAccentVariant: string

      support: string
      supportHovered: string
      supportPressed: string
      supportFocused: string
      supportDisabled: string
      onSupport: string

      supportContainer: string
      supportContainerHovered: string
      supportContainerFocused: string
      supportContainerPressed: string
      supportContainerDisabled: string
      onSupportContainer: string

      supportVariant: string
      supportVariantHovered: string
      supportVariantFocused: string
      supportVariantPressed: string
      supportVariantDisabled: string
      onSupportVariant: string
    }
    status: {
      success: string
      successHovered: string
      successPressed: string
      successFocused: string
      successDisabled: string
      onSuccess: string
      successContainer: string
      successContainerHovered: string
      successContainerFocused: string
      successContainerPressed: string
      successContainerDisabled: string
      onSuccessContainer: string
      alert: string
      alertHovered: string
      alertPressed: string
      alertFocused: string
      alertDisabled: string
      onAlert: string
      alertContainer: string
      alertContainerHovered: string
      alertContainerFocused: string
      alertContainerPressed: string
      alertContainerDisabled: string
      onAlertContainer: string
      error: string
      errorHovered: string
      errorPressed: string
      errorFocused: string
      errorDisabled: string
      onError: string
      errorContainer: string
      errorContainerHovered: string
      errorContainerFocused: string
      errorContainerPressed: string
      errorContainerDisabled: string
      onErrorContainer: string
      info: string
      infoHovered: string
      infoPressed: string
      infoFocused: string
      infoDisabled: string
      onInfo: string
      infoContainer: string
      infoContainerHovered: string
      infoContainerFocused: string
      infoContainerPressed: string
      infoContainerDisabled: string
      onInfoContainer: string
      neutral: string
      neutralHovered: string
      neutralPressed: string
      neutralFocused: string
      neutralDisabled: string
      onNeutral: string
      neutralContainer: string
      neutralContainerHovered: string
      neutralContainerFocused: string
      neutralContainerPressed: string
      neutralContainerDisabled: string
      onNeutralContainer: string
    }
    base: {
      background: string
      onBackground: string
      backgroundVariant: string
      onBackgroundVariant: string
      surface: string
      onSurface: string
      surfaceInverse: string
      onSurfaceInverse: string
      overlay: string
      onOverlay: string
      outline: string
      outlineHovered: string
      outlinePressed: string
      outlineFocused: string
      outlineDisabled: string
      outlineHigh: string
    }
    extra: {
      [key: string | number]: string
    }
    social: {
      facebook: string
      whatsapp: string
      youtube: string
      tiktok: string
      telegram: string
      x: string
      instagram: string
    }
  }
}

export interface Theme {
  primitive: ThemePrimitive
  semantic: (themePrimitives: ThemePrimitive) => SemanticShape
}
