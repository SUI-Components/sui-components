import chroma from 'chroma-js'

import {type Theme, type PrimitiveTheme} from './src/types'

const theme: Theme = {
  primitive: {
    fontSize: '16px',
    color: {
      blue: {
        50: '#F4F4FB',
        100: '#EAEBF7',
        200: '#CBCDEB',
        300: '#979CD8',
        400: '#636BC5',
        500: '#303AB2',
        600: '#262E8E',
        700: '#1F2573',
        800: '#151A50',
        900: '#0C0E2C'
      },
      greenWashed: {
        50: '#F3FDFC',
        100: '#E8FBFA',
        200: '#C6F5F2',
        300: '#8EEDE7',
        400: '#56E4DB',
        500: '#1EDBCF',
        600: '#18AFA5',
        700: '#12847D',
        800: '#0D625D',
        900: '#073633'
      },
      magenta: {
        50: '#FDF3F6',
        100: '#FCE8EE',
        200: '#F7C4D5',
        300: '#F18AAD',
        400: '#EA5084',
        500: '#E3165B',
        600: '#B51148',
        700: '#930E3B',
        800: '#660929',
        900: '#380516'
      },
      green: {
        50: '#F2FAF5',
        100: '#E5F5EB',
        200: '#BFE8D0',
        300: '#80D2A1',
        400: '#40BB72',
        500: '#00A544',
        600: '#008436',
        700: '#006B2C',
        800: '#004A1E',
        900: '#002810'
      },
      red: {
        50: '#FBF4F3',
        100: '#FCEBE8',
        200: '#F7CCC4',
        300: '#F09A8A',
        400: '#E9674F',
        500: '#E23515',
        600: '#B42A10',
        700: '#93220D',
        800: '#651709',
        900: '#380D05'
      },
      orange: {
        50: '#FEF9F2',
        100: '#FEF4E6',
        200: '#FCE4BF',
        300: '#FBCA80',
        400: '#F9AF40',
        500: '#F79500',
        600: '#C57700',
        700: '#A06000',
        800: '#6F4300',
        900: '#3D2500'
      },
      gray: {
        50: '#F8F8F8',
        100: '#F1F1F1',
        200: '#DCDCDC',
        300: '#BBBBBB',
        400: '#999999',
        500: '#777777',
        600: '#5F5F5F',
        700: '#4D4D4D',
        800: '#353535',
        900: '#1D1D1D'
      },
      social: {
        facebook: '#4267B2',
        whatsapp: '#25D366',
        youtube: '#FF0000',
        tiktok: '#000000',
        telegram: '#0088cc',
        x: '#14171A',
        instagram: '#E1306C'
      },
      extra: {
        accent: '#E3165B',
        opportunity: '#FE4F51',
        greenVibrant: '#8BC34A',
        blueVibrant: '#AAAAFA',
        greenWashedVibrant: '#6DFFFF'
      },
      base: {
        bright: '#FFFFFF',
        gloom: '#000000'
      }
    },
    colorSpace: 'rgb',
    opacity: {
      full: 1,
      dim1: 0.82,
      dim2: 0.55,
      dim3: 0.37,
      dim4: 0.28,
      dim5: 0.18,
      none: 0
    }
  },
  semantic: ({color, opacity}: PrimitiveTheme) => ({
    color: {
      brand: {
        main: color.blue[500],
        mainHovered: color.hero[400],
        mainPressed: color.hero[400],
        mainFocused: color.hero[400],
        mainDisabled: chroma(color.hero[500]).alpha(opacity.dim5).css('rgb'),
        onMain: color.base.bright,

        mainContainer: color.hero[100],
        mainContainerHovered: color.hero[50],
        mainContainerFocused: color.hero[50],
        mainContainerPressed: color.hero[50],
        mainContainerDisabled: chroma(color.hero[100]).alpha(opacity.dim5).css('rgb'),
        onMainContainer: color.hero[700],

        mainVariant: color.hero[700],
        mainVariantHovered: color.hero[600],
        mainVariantFocused: color.hero[600],
        mainVariantPressed: color.hero[600],
        mainVariantDisabled: chroma(color.hero[700]).alpha(opacity.dim5).css('rgb'),
        onMainVariant: color.base.bright,

        accent: color.triforce[500],
        accentHovered: color.triforce[400],
        accentPressed: color.triforce[400],
        accentFocused: color.triforce[400],
        accentDisabled: chroma(color.triforce[500]).alpha(opacity.dim5).css('rgb'),
        onAccent: color.gray[900],

        accentContainer: color.triforce[100],
        accentContainerHovered: color.triforce[50],
        accentContainerFocused: color.triforce[50],
        accentContainerPressed: color.triforce[50],
        accentContainerDisabled: chroma(color.triforce[100]).alpha(opacity.dim5).css('rgb'),
        onAccentContainer: color.base.gloom,

        accentVariant: color.triforce[300],
        accentVariantHovered: color.triforce[200],
        accentVariantFocused: color.triforce[200],
        accentVariantPressed: color.triforce[200],
        accentVariantDisabled: chroma(color.triforce[300]).alpha(opacity.dim5).css('rgb'),
        onAccentVariant: color.base.gloom,

        support: color.zelda[500],
        supportHovered: color.zelda[400],
        supportPressed: color.zelda[400],
        supportFocused: color.zelda[400],
        supportDisabled: chroma(color.zelda[500]).alpha(opacity.dim5).css('rgb'),
        onSupport: color.base.bright,

        supportContainer: color.zelda[100],
        supportContainerHovered: color.zelda[50],
        supportContainerFocused: color.zelda[50],
        supportContainerPressed: color.zelda[50],
        supportContainerDisabled: chroma(color.zelda[100]).alpha(opacity.dim5).css('rgb'),
        onSupportContainer: color.zelda[500],

        supportVariant: color.zelda[700],
        supportVariantHovered: color.zelda[600],
        supportVariantFocused: color.zelda[600],
        supportVariantPressed: color.zelda[600],
        supportVariantDisabled: chroma(color.zelda[700]).alpha(opacity.dim5).css('rgb'),
        onSupportVariant: color.base.bright
      },
      feedback: {
        success: color.hero[500],
        successHovered: color.hero[400],
        successPressed: color.hero[400],
        successFocused: color.hero[400],
        successDisabled: chroma(color.hero[500]).alpha(opacity.dim5).css('rgb'),
        onSuccess: color.base.bright,

        successContainer: color.hero[50],
        successContainerHovered: color.hero[100],
        successContainerFocused: color.hero[100],
        successContainerPressed: color.hero[100],
        successContainerDisabled: chroma(color.hero[50]).alpha(opacity.dim5).css('rgb'),
        onSuccessContainer: color.hero[700],

        alert: color.triforce[800],
        alertHovered: color.triforce[700],
        alertPressed: color.triforce[700],
        alertFocused: color.triforce[700],
        alertDisabled: chroma(color.triforce[800]).alpha(opacity.dim5).css('rgb'),
        onAlert: color.base.gloom,

        alertContainer: color.triforce[100],
        alertContainerHovered: color.triforce[50],
        alertContainerFocused: color.triforce[50],
        alertContainerPressed: color.triforce[50],
        alertContainerDisabled: chroma(color.triforce[100]).alpha(opacity.dim5).css('rgb'),
        onAlertContainer: color.base.gloom,

        error: color.goron[500],
        errorHovered: color.goron[400],
        errorPressed: color.goron[400],
        errorFocused: color.goron[400],
        errorDisabled: chroma(color.goron[500]).alpha(opacity.dim5).css('rgb'),
        onError: color.base.bright,

        errorContainer: color.goron[100],
        errorContainerHovered: color.goron[50],
        errorContainerFocused: color.goron[50],
        errorContainerPressed: color.goron[50],
        errorContainerDisabled: chroma(color.goron[100]).alpha(opacity.dim5).css('rgb'),
        onErrorContainer: color.goron[600],

        info: color.zora[500],
        infoHovered: color.zora[400],
        infoPressed: color.zora[400],
        infoFocused: color.zora[400],
        infoDisabled: chroma(color.zora[500]).alpha(opacity.dim5).css('rgb'),
        onInfo: color.base.bright,

        infoContainer: color.zora[100],
        infoContainerHovered: color.zora[50],
        infoContainerFocused: color.zora[50],
        infoContainerPressed: color.zora[50],
        infoContainerDisabled: chroma(color.zora[100]).alpha(opacity.dim5).css('rgb'),
        onInfoContainer: color.zora[600],

        neutral: color.poe[600],
        neutralHovered: color.poe[500],
        neutralPressed: color.poe[500],
        neutralFocused: color.poe[500],
        neutralDisabled: chroma(color.poe[600]).alpha(opacity.dim5).css('rgb'),
        onNeutral: color.base.bright,

        neutralContainer: color.poe[100],
        neutralContainerHovered: color.poe[50],
        neutralContainerFocused: color.poe[50],
        neutralContainerPressed: color.poe[50],
        neutralContainerDisabled: chroma(color.poe[100]).alpha(opacity.dim5).css('rgb'),
        onNeutralContainer: color.base.gloom
      },
      base: {
        background: color.base.bright,
        onBackground: color.base.gloom,
        backgroundVariant: color.poe[100],
        onBackgroundVariant: color.base.gloom,

        surface: color.base.bright,
        onSurface: color.base.gloom,
        surfaceInverse: color.poe[900],
        onSurfaceInverse: color.base.bright,

        overlay: color.base.gloom,
        onOverlay: color.base.bright,

        outline: color.poe[400],
        outlineHovered: color.poe[700],
        outlinePressed: color.poe[700],
        outlineFocused: color.poe[700],
        outlineDisabled: chroma(color.poe[400]).alpha(opacity.dim5).css('rgb'),
        outlineHigh: color.poe[900]
      },
      extra: {},
      social: {
        facebook: color.social.facebook,
        whatsapp: color.social.whatsapp,
        youtube: color.social.youtube,
        tiktok: color.social.tiktok,
        telegram: color.social.telegram,
        x: color.social.x,
        instagram: color.social.instagram
      }
    }
  })
}

export default theme
