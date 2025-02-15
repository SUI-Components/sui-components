export interface ColorRamp {
  [key: string | number]: string
}

export interface ColorPrimitives {
  [key: string]: ColorRamp
}

export interface OpacityPrimitive {
  [key: string]: number
}

export type Base = string

export interface SettingsTheme {
  prefix?: string
  fontSize?: string
  colorSpace?: 'hex' | 'rgb'
}

export interface PrimitiveTheme {
  fontFamily?: {
    [key: string]: string[]
  }
  color?: ColorPrimitives
  opacity?: OpacityPrimitive
  size?: {
    [key: string]: string
  }
  elevation?: {
    [key: string]: number
  }
}

export interface SemanticTheme {
  color?: {
    brand?: {
      main?: string
      mainHovered?: string
      mainFocused?: string
      mainPressed?: string
      mainDisabled?: string
      onMain?: string

      mainContainer?: string
      mainContainerHovered?: string
      mainContainerFocused?: string
      mainContainerPressed?: string
      mainContainerDisabled?: string
      onMainContainer?: string

      mainVariant?: string
      mainVariantHovered?: string
      mainVariantFocused?: string
      mainVariantPressed?: string
      mainVariantDisabled?: string
      onMainVariant?: string

      accent?: string
      accentHovered?: string
      accentFocused?: string
      accentPressed?: string
      accentDisabled?: string
      onAccent?: string

      accentContainer?: string
      accentContainerHovered?: string
      accentContainerFocused?: string
      accentContainerPressed?: string
      accentContainerDisabled?: string
      onAccentContainer?: string

      accentVariant?: string
      accentVariantHovered?: string
      accentVariantFocused?: string
      accentVariantPressed?: string
      accentVariantDisabled?: string
      onAccentVariant?: string

      support?: string
      supportHovered?: string
      supportPressed?: string
      supportFocused?: string
      supportDisabled?: string
      onSupport?: string

      supportContainer?: string
      supportContainerHovered?: string
      supportContainerFocused?: string
      supportContainerPressed?: string
      supportContainerDisabled?: string
      onSupportContainer?: string

      supportVariant?: string
      supportVariantHovered?: string
      supportVariantFocused?: string
      supportVariantPressed?: string
      supportVariantDisabled?: string
      onSupportVariant?: string
    }
    feedback?: {
      success?: string
      successHovered?: string
      successPressed?: string
      successFocused?: string
      successDisabled?: string
      onSuccess?: string
      successContainer?: string
      successContainerHovered?: string
      successContainerFocused?: string
      successContainerPressed?: string
      successContainerDisabled?: string
      onSuccessContainer?: string
      alert?: string
      alertHovered?: string
      alertPressed?: string
      alertFocused?: string
      alertDisabled?: string
      onAlert?: string
      alertContainer?: string
      alertContainerHovered?: string
      alertContainerFocused?: string
      alertContainerPressed?: string
      alertContainerDisabled?: string
      onAlertContainer?: string
      error?: string
      errorHovered?: string
      errorPressed?: string
      errorFocused?: string
      errorDisabled?: string
      onError?: string
      errorContainer?: string
      errorContainerHovered?: string
      errorContainerFocused?: string
      errorContainerPressed?: string
      errorContainerDisabled?: string
      onErrorContainer?: string
      info?: string
      infoHovered?: string
      infoPressed?: string
      infoFocused?: string
      infoDisabled?: string
      onInfo?: string
      infoContainer?: string
      infoContainerHovered?: string
      infoContainerFocused?: string
      infoContainerPressed?: string
      infoContainerDisabled?: string
      onInfoContainer?: string
      neutral?: string
      neutralHovered?: string
      neutralPressed?: string
      neutralFocused?: string
      neutralDisabled?: string
      onNeutral?: string
      neutralContainer?: string
      neutralContainerHovered?: string
      neutralContainerFocused?: string
      neutralContainerPressed?: string
      neutralContainerDisabled?: string
      onNeutralContainer?: string
    }
    base?: {
      basic?: string
      basicHovered?: string
      basicFocused?: string
      basicPressed?: string
      basicDisabled?: string
      onBasic?: string

      basicContainer?: string
      basicContainerHovered?: string
      basicContainerFocused?: string
      basicContainerPressed?: string
      basicContainerDisabled?: string
      onBasicContainer?: string

      basicVariant?: string
      basicVariantHovered?: string
      basicVariantFocused?: string
      basicVariantPressed?: string
      basicVariantDisabled?: string
      onBasicVariant?: string

      background?: string
      onBackground?: string
      backgroundVariant?: string
      onBackgroundVariant?: string
      surface?: string
      onSurface?: string
      surfaceInverse?: string
      onSurfaceInverse?: string
      overlay?: string
      onOverlay?: string
      outline?: string
      outlineHovered?: string
      outlinePressed?: string
      outlineFocused?: string
      outlineDisabled?: string
      outlineHigh?: string
    }
    extra?: {
      [key: string | number]: string
    }
    social?: {
      facebook?: string
      whatsapp?: string
      youtube?: string
      tiktok?: string
      telegram?: string
      x?: string
      instagram?: string
    }
  }
  font?: {
    size?: {[key: string]: string}
    family?: {[key: string]: string}
    weight?: {[key: string]: string}
  }
  spacing?: {
    size?: {
      [key: string]: string
    }
  }
  elevation?: {
    [key: string]: number
  }
  opacity?: {
    [key: string]: number
  }
}

export interface Theme {
  settings: SettingsTheme
  primitive: PrimitiveTheme
  semantic: (themePrimitives: PrimitiveTheme, settingsTheme: SettingsTheme) => SemanticTheme
}

export interface ThemeResult {
  settings: SettingsTheme
  primitive: PrimitiveTheme
  semantic: SemanticTheme
}
