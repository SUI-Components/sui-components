import chroma from 'chroma-js'

import {type Theme, type PrimitiveTheme} from './types'

const theme: Theme = {
  primitive: {
    prefix: 's-ui',
    fontSize: '16px',
    fontFamily: {
      sans: ["'Open Sans'", 'Helvetica', 'sans-serif'],
      serif: ['Georgia', 'Cambria', "'Times New Roman'", 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', "'Liberation Mono'", "'Courier New'", 'monospace']
    },
    color: {
      theBlue: {
        50: '#F4F4FC',
        100: '#E2E1F8',
        200: '#B1AEEC',
        300: '#8580E1',
        400: '#5952D6',
        500: '#2118C9',
        600: '#191297',
        700: '#140E79',
        800: '#0D0A50',
        900: '#080632'
      },
      sugarCotton: {
        50: '#FFF5F9',
        100: '#FFE1ED',
        200: '#FEBAD6',
        300: '#FE92BF',
        400: '#FE6BA7',
        500: '#FD398A',
        600: '#CA2E6E',
        700: '#982253',
        800: '#651737',
        900: '#3F0E22'
      },
      apple: {
        50: '#F5FBF8',
        100: '#E0F2E9',
        200: '#B7DFCB',
        300: '#8ECDAE',
        400: '#64BC90',
        500: '#31A56B',
        600: '#278456',
        700: '#1D6340',
        800: '#14422B',
        900: '#0C291B'
      },
      wiggins: {
        50: '#FFFCF6',
        100: '#FDF5E4',
        200: '#FBE9BF',
        300: '#F9DC9A',
        400: '#F7CF76',
        500: '#F4BF48',
        600: '#C3993A',
        700: '#92732B',
        800: '#624C1D',
        900: '#3D3012'
      },
      chilli: {
        50: '#FFF7F6',
        100: '#FEE6E5',
        200: '#FCC4C2',
        300: '#FAA29F',
        400: '#F8807D',
        500: '#F65651',
        600: '#C54541',
        700: '#943431',
        800: '#622220',
        900: '#3E1514'
      },
      sky: {
        50: '#F3FAFC',
        100: '#DAF1F4',
        200: '#A8DEE6',
        300: '#77CBD8',
        400: '#45B8CA',
        500: '#07A0B8',
        600: '#068093',
        700: '#04606E',
        800: '#03404A',
        900: '#02282E'
      },
      surfer: {
        50: '#F8F8F9',
        100: '#EBEBED',
        200: '#D1D0D5',
        300: '#B6B5BC',
        400: '#9C9BA4',
        500: '#7B7986',
        600: '#5C5B64',
        700: '#4A4950',
        800: '#313036',
        900: '#252428'
      },
      kiwi: {
        50: '#FDFDF6',
        100: '#F8FAE2',
        200: '#F0F3BC',
        300: '#E7EC96',
        400: '#DEE570',
        500: '#D3DD40',
        600: '#A9B133',
        700: '#7F8526',
        800: '#54581A',
        900: '#353710'
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
        theBlueV: '#7583FF'
      },
      base: {
        bright: '#FFFFFF',
        gloom: '#000000'
      }
    },
    colorSpace: 'rgb',
    opacity: {
      full: 1,
      dim1: 0.72,
      dim2: 0.68,
      dim3: 0.4,
      dim4: 0.16,
      dim5: 0.08,
      none: 0
    },
    size: {
      none: '0',
      px: '1px',
      '0.5': '0.125rem', // 2px
      '1': '0.25rem', // 4px
      '1.5': '0.375rem', // 6px
      '2': '0.5rem', // 8px
      '2.5': '0.625rem', // 10px
      '3': '0.75rem', // 12px
      '3.5': '0.875rem', // 14px
      '4': '1rem', // 16px
      '5': '1.25rem', // 20px
      '6': '1.5rem', // 24px
      '7': '1.75rem', // 28px
      '8': '2rem', // 32px
      '9': '2.25rem', // 36px
      '10': '2.5rem', // 40px
      '11': '2.75rem', // 44px
      '12': '3rem', // 48px
      '14': '3.5rem', // 56px
      '16': '4rem', // 64px
      '20': '5rem', // 80px
      '24': '6rem', // 96px
      '28': '7rem', // 112px
      '32': '8rem', // 128px
      '36': '9rem', // 144px
      '40': '10rem', // 160px
      '44': '11rem', // 176px
      '48': '12rem', // 192px
      '52': '13rem', // 208px
      '56': '14rem', // 224px
      '60': '15rem', // 240px
      '64': '16rem', // 256px
      '72': '18rem', // 288px
      '80': '20rem', // 320px
      '96': '24rem', // 384px
      auto: 'auto', // auto
      '1/2': '50%', // 50%
      '1/3': '33.333333%', // 33.333333%
      '2/3': '66.666667%', // 66.666667%
      '1/4': '25%', // 25%
      '2/4': '50%', // 50%
      '3/4': '75%', // 75%
      '1/5': '20%', // 20%
      '2/5': '40%', // 40%
      '3/5': '60%', // 60%
      '4/5': '80%', // 80%
      '1/6': '16.666667%', // 16.666667%
      '2/6': '33.333333%', // 33.333333%
      '3/6': '50%', // 50%
      '4/6': '66.666667%', // 66.666667%
      '5/6': '83.333333%', // 83.333333%
      '1/12': '8.333333%', // 8.333333%
      '2/12': '16.666667%', // 16.666667%
      '3/12': '25%', // 25%
      '4/12': '33.333333%', // 33.333333%
      '5/12': '41.666667%', // 41.666667%
      '6/12': '50%', // 50%
      '7/12': '58.333333%', // 58.333333%
      '8/12': '66.666667%', // 66.666667%
      '9/12': '75%', // 75%
      '10/12': '83.333333%', // 83.333333%
      '11/12': '91.666667%', // 91.666667%
      full: '100%', // 100%
      screen: '100dvw', // 100dvw
      min: 'min-content', // min-content
      max: 'max-content', // max-content
      fit: 'fit-content' // fit-content
    },
    elevation: {
      hide: -1,
      base: 0,
      raised: 1,
      dropdown: 1000,
      sticky: 1100,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800
    }
  },
  semantic: ({color, opacity, elevation, size, fontSize, fontFamily}: PrimitiveTheme) => {
    return {
      color: {
        brand: {
          main: color.theBlue[500],
          mainHovered: color.theBlue[400],
          mainPressed: color.theBlue[400],
          mainFocused: color.theBlue[400],
          mainDisabled: chroma(color.theBlue[400]).alpha(opacity.dim3).css('rgb'),
          onMain: color.base.bright,

          mainContainer: color.theBlue[50],
          mainContainerHovered: color.theBlue[100],
          mainContainerFocused: color.theBlue[100],
          mainContainerPressed: color.theBlue[100],
          mainContainerDisabled: chroma(color.theBlue[50]).alpha(opacity.dim3).css('rgb'),
          onMainContainer: color.theBlue[700],

          mainVariant: color.theBlue[700],
          mainVariantHovered: color.theBlue[600],
          mainVariantFocused: color.theBlue[600],
          mainVariantPressed: color.theBlue[600],
          mainVariantDisabled: chroma(color.theBlue[600]).alpha(opacity.dim3).css('rgb'),
          onMainVariant: color.base.bright,

          accent: color.sugarCotton[500],
          accentHovered: color.sugarCotton[400],
          accentPressed: color.sugarCotton[400],
          accentFocused: color.sugarCotton[400],
          accentDisabled: chroma(color.sugarCotton[500]).alpha(opacity.dim3).css('rgb'),
          onAccent: color.base.gloom,

          accentContainer: color.sugarCotton[100],
          accentContainerHovered: color.sugarCotton[50],
          accentContainerFocused: color.sugarCotton[50],
          accentContainerPressed: color.sugarCotton[50],
          accentContainerDisabled: chroma(color.sugarCotton[100]).alpha(opacity.dim3).css('rgb'),
          onAccentContainer: color.base.gloom,

          accentVariant: color.sugarCotton[300],
          accentVariantHovered: color.sugarCotton[200],
          accentVariantFocused: color.sugarCotton[200],
          accentVariantPressed: color.sugarCotton[200],
          accentVariantDisabled: chroma(color.sugarCotton[300]).alpha(opacity.dim3).css('rgb'),
          onAccentVariant: color.base.gloom,

          support: color.sky[500],
          supportHovered: color.sky[400],
          supportPressed: color.sky[400],
          supportFocused: color.sky[400],
          supportDisabled: chroma(color.sky[500]).alpha(opacity.dim3).css('rgb'),
          onSupport: color.base.bright,

          supportContainer: color.sky[100],
          supportContainerHovered: color.sky[50],
          supportContainerFocused: color.sky[50],
          supportContainerPressed: color.sky[50],
          supportContainerDisabled: chroma(color.sky[100]).alpha(opacity.dim3).css('rgb'),
          onSupportContainer: color.sky[500],

          supportVariant: color.sky[700],
          supportVariantHovered: color.sky[600],
          supportVariantFocused: color.sky[600],
          supportVariantPressed: color.sky[600],
          supportVariantDisabled: chroma(color.sky[700]).alpha(opacity.dim3).css('rgb'),
          onSupportVariant: color.base.bright
        },
        feedback: {
          success: color.apple[500],
          successHovered: color.apple[400],
          successPressed: color.apple[400],
          successFocused: color.apple[400],
          successDisabled: chroma(color.apple[500]).alpha(opacity.dim3).css('rgb'),
          onSuccess: color.base.bright,

          successContainer: color.apple[50],
          successContainerHovered: color.apple[100],
          successContainerFocused: color.apple[100],
          successContainerPressed: color.apple[100],
          successContainerDisabled: chroma(color.apple[50]).alpha(opacity.dim3).css('rgb'),
          onSuccessContainer: color.apple[700],

          alert: color.wiggins[800],
          alertHovered: color.wiggins[700],
          alertPressed: color.wiggins[700],
          alertFocused: color.wiggins[700],
          alertDisabled: chroma(color.wiggins[800]).alpha(opacity.dim3).css('rgb'),
          onAlert: color.base.gloom,

          alertContainer: color.wiggins[100],
          alertContainerHovered: color.wiggins[50],
          alertContainerFocused: color.wiggins[50],
          alertContainerPressed: color.wiggins[50],
          alertContainerDisabled: chroma(color.wiggins[100]).alpha(opacity.dim3).css('rgb'),
          onAlertContainer: color.base.gloom,

          error: color.chilli[500],
          errorHovered: color.chilli[400],
          errorPressed: color.chilli[400],
          errorFocused: color.chilli[400],
          errorDisabled: chroma(color.chilli[500]).alpha(opacity.dim3).css('rgb'),
          onError: color.base.bright,

          errorContainer: color.chilli[100],
          errorContainerHovered: color.chilli[50],
          errorContainerFocused: color.chilli[50],
          errorContainerPressed: color.chilli[50],
          errorContainerDisabled: chroma(color.chilli[100]).alpha(opacity.dim3).css('rgb'),
          onErrorContainer: color.chilli[600],

          info: color.sky[500],
          infoHovered: color.sky[400],
          infoPressed: color.sky[400],
          infoFocused: color.sky[400],
          infoDisabled: chroma(color.sky[500]).alpha(opacity.dim3).css('rgb'),
          onInfo: color.base.bright,

          infoContainer: color.sky[100],
          infoContainerHovered: color.sky[50],
          infoContainerFocused: color.sky[50],
          infoContainerPressed: color.sky[50],
          infoContainerDisabled: chroma(color.sky[100]).alpha(opacity.dim3).css('rgb'),
          onInfoContainer: color.sky[600],

          neutral: color.surfer[600],
          neutralHovered: color.surfer[500],
          neutralPressed: color.surfer[500],
          neutralFocused: color.surfer[500],
          neutralDisabled: chroma(color.surfer[600]).alpha(opacity.dim3).css('rgb'),
          onNeutral: color.base.bright,

          neutralContainer: color.surfer[100],
          neutralContainerHovered: color.surfer[50],
          neutralContainerFocused: color.surfer[50],
          neutralContainerPressed: color.surfer[50],
          neutralContainerDisabled: chroma(color.surfer[100]).alpha(opacity.dim3).css('rgb'),
          onNeutralContainer: color.base.gloom
        },
        base: {
          basic: color.surfer[500],
          basicHovered: color.surfer[400],
          basicFocused: color.surfer[400],
          basicPressed: color.surfer[400],
          basicDisabled: chroma(color.surfer[400]).alpha(opacity.dim3).css('rgb'),
          onBasic: color.base.bright,

          basicContainer: color.surfer[50],
          basicContainerHovered: color.surfer[100],
          basicContainerFocused: color.surfer[100],
          basicContainerPressed: color.surfer[100],
          basicContainerDisabled: chroma(color.surfer[50]).alpha(opacity.dim3).css('rgb'),
          onBasicContainer: color.surfer[700],

          basicVariant: color.surfer[700],
          basicVariantHovered: color.surfer[600],
          basicVariantFocused: color.surfer[600],
          basicVariantPressed: color.surfer[600],
          basicVariantDisabled: chroma(color.surfer[600]).alpha(opacity.dim3).css('rgb'),
          onBasicVariant: color.base.bright,

          background: color.base.bright,
          onBackground: color.base.gloom,
          backgroundVariant: color.surfer[100],
          onBackgroundVariant: color.base.gloom,

          surface: color.base.bright,
          onSurface: color.base.gloom,
          surfaceInverse: color.surfer[900],
          onSurfaceInverse: color.base.bright,

          overlay: color.base.gloom,
          onOverlay: color.base.bright,

          outline: color.surfer[400],
          outlineHovered: color.surfer[700],
          outlinePressed: color.surfer[700],
          outlineFocused: color.surfer[700],
          outlineDisabled: chroma(color.surfer[400]).alpha(opacity.dim3).css('rgb'),
          outlineHigh: color.surfer[900]
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
      },
      font: {
        size: {
          '2xs': '0.625rem', // 10px
          xs: '0.75rem', // 12px
          sm: '0.875rem', // 14px
          md: '1rem', // 16px
          lg: '1.125rem', // 18px
          xl: '1.25rem', // 20px
          '2xl': '1.5rem', // 24px
          '3xl': '1.75rem', // 28px
          '4xl': '2.25rem', // 36px
          '5xl': '3rem', // 48px
          '6xl': '4rem' // 64px
        },
        weight: {
          hairline: '100',
          thin: '200',
          light: '300',
          normal: '400',
          medium: '500',
          semiBold: '600',
          bold: '700',
          extraBold: '800',
          black: '900'
        },
        family: {
          sans: fontFamily.sans.join(', '),
          serif: fontFamily.serif.join(', '),
          mono: fontFamily.mono.join(', ')
        }
      },
      opacity,
      spacing: {
        size
      },
      elevation
    }
  }
}

export default theme
