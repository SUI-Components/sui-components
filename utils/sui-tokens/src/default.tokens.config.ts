import chroma from 'chroma-js'

import {type Theme, type ThemePrimitive} from './types'

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
      hero: {
        50: '#F2FCF7',
        100: '#DFFFED',
        200: '#C4F3D9',
        300: '#98E9BC',
        400: '#2DD276',
        500: '#11A753',
        600: '#0E9549',
        700: '#097137',
        800: '#075529',
        900: '#02441F'
      },
      triforce: {
        50: '#FFFBEE',
        100: '#FFF3CC',
        200: '#FFEBAA',
        300: '#FFE799',
        400: '#FFD142',
        500: '#F9BE01',
        600: '#F9A501',
        700: '#EF9801',
        800: '#E57301',
        900: '#D75A00'
      },
      zelda: {
        50: '#FDF8FA',
        100: '#FBF4F6',
        200: '#FFE5EF',
        300: '#EBC2D0',
        400: '#DD7FA0',
        500: '#BF406D',
        600: '#A72A56',
        700: '#7A2946',
        800: '#541C30',
        900: '#460F22'
      },
      goron: {
        50: '#FFF6F6',
        100: '#FFEBEB',
        200: '#FFDEDE',
        300: '#FECDCD',
        400: '#FF6565',
        500: '#E51B1B',
        600: '#D60606',
        700: '#C90303',
        800: '#970202',
        900: '#840000'
      },
      zora: {
        50: '#F4F9FF',
        100: '#E5F2FF',
        200: '#D0E8FF',
        300: '#99CAFF',
        400: '#72B5FF',
        500: '#006FE5',
        600: '#0062CD',
        700: '#004999',
        800: '#003166',
        900: '#002955'
      },
      poe: {
        50: '#F9F9FA',
        100: '#F4F5F6',
        200: '#E6E9EB',
        300: '#D3D7D9',
        400: '#B7BEC2',
        500: '#808D93',
        600: '#677379',
        700: '#50595E',
        800: '#3F474B',
        900: '#24292C'
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
        illustrationDarkGreen: '#1ED86C',
        illustrationLightGreen: '#8BF5AF',
        illustrationDarkGrey: '#939393',
        illustrationLightGrey: '#E2E2E2',
        illustrationBlack: '#2A3439',
        illustrationWhite: '#FFFFFF',
        lightGreen: '#D2EDDE',
        lightBlue: '#E5F2FF',
        lightYellow: '#F7EFD4',
        lightGrey: '#F1F2F2'
      },
      base: {
        bright: '#FFFFFF',
        gloom: '#000000'
      },
      tin: {
        50: '#fafafa',
        100: '#f7f7f7',
        200: '#e8e8e8',
        300: '#d8d8d8',
        400: '#b8b8b8',
        500: '#919191',
        600: '#818181',
        700: '#626262',
        800: '#494949',
        900: '#3a3a3a'
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
  semantic: ({color, opacity, elevation, size, fontSize, fontFamily}: ThemePrimitive) => {
    return {
      color: {
        brand: {
          main: color.hero[500],
          mainHovered: color.hero[400],
          mainPressed: color.hero[400],
          mainFocused: color.hero[400],
          mainDisabled: chroma(color.hero[400]).alpha(opacity.dim3).css('rgb'),
          onMain: color.base.bright,

          mainContainer: color.hero[50],
          mainContainerHovered: color.hero[100],
          mainContainerFocused: color.hero[100],
          mainContainerPressed: color.hero[100],
          mainContainerDisabled: chroma(color.hero[50]).alpha(opacity.dim3).css('rgb'),
          onMainContainer: color.hero[700],

          mainVariant: color.hero[700],
          mainVariantHovered: color.hero[600],
          mainVariantFocused: color.hero[600],
          mainVariantPressed: color.hero[600],
          mainVariantDisabled: chroma(color.hero[600]).alpha(opacity.dim3).css('rgb'),
          onMainVariant: color.base.bright,

          accent: color.triforce[500],
          accentHovered: color.triforce[400],
          accentPressed: color.triforce[400],
          accentFocused: color.triforce[400],
          accentDisabled: chroma(color.triforce[500]).alpha(opacity.dim3).css('rgb'),
          onAccent: color.base.gloom,

          accentContainer: color.triforce[100],
          accentContainerHovered: color.triforce[50],
          accentContainerFocused: color.triforce[50],
          accentContainerPressed: color.triforce[50],
          accentContainerDisabled: chroma(color.triforce[100]).alpha(opacity.dim3).css('rgb'),
          onAccentContainer: color.base.gloom,

          accentVariant: color.triforce[300],
          accentVariantHovered: color.triforce[200],
          accentVariantFocused: color.triforce[200],
          accentVariantPressed: color.triforce[200],
          accentVariantDisabled: chroma(color.triforce[300]).alpha(opacity.dim3).css('rgb'),
          onAccentVariant: color.base.gloom,

          support: color.zelda[500],
          supportHovered: color.zelda[400],
          supportPressed: color.zelda[400],
          supportFocused: color.zelda[400],
          supportDisabled: chroma(color.zelda[500]).alpha(opacity.dim3).css('rgb'),
          onSupport: color.base.bright,

          supportContainer: color.zelda[100],
          supportContainerHovered: color.zelda[50],
          supportContainerFocused: color.zelda[50],
          supportContainerPressed: color.zelda[50],
          supportContainerDisabled: chroma(color.zelda[100]).alpha(opacity.dim3).css('rgb'),
          onSupportContainer: color.zelda[500],

          supportVariant: color.zelda[700],
          supportVariantHovered: color.zelda[600],
          supportVariantFocused: color.zelda[600],
          supportVariantPressed: color.zelda[600],
          supportVariantDisabled: chroma(color.zelda[700]).alpha(opacity.dim3).css('rgb'),
          onSupportVariant: color.base.bright
        },
        status: {
          success: color.hero[500],
          successHovered: color.hero[400],
          successPressed: color.hero[400],
          successFocused: color.hero[400],
          successDisabled: chroma(color.hero[500]).alpha(opacity.dim3).css('rgb'),
          onSuccess: color.base.bright,

          successContainer: color.hero[50],
          successContainerHovered: color.hero[100],
          successContainerFocused: color.hero[100],
          successContainerPressed: color.hero[100],
          successContainerDisabled: chroma(color.hero[50]).alpha(opacity.dim3).css('rgb'),
          onSuccessContainer: color.hero[700],

          alert: color.triforce[800],
          alertHovered: color.triforce[700],
          alertPressed: color.triforce[700],
          alertFocused: color.triforce[700],
          alertDisabled: chroma(color.triforce[800]).alpha(opacity.dim3).css('rgb'),
          onAlert: color.base.gloom,

          alertContainer: color.triforce[100],
          alertContainerHovered: color.triforce[50],
          alertContainerFocused: color.triforce[50],
          alertContainerPressed: color.triforce[50],
          alertContainerDisabled: chroma(color.triforce[100]).alpha(opacity.dim3).css('rgb'),
          onAlertContainer: color.base.gloom,

          error: color.goron[500],
          errorHovered: color.goron[400],
          errorPressed: color.goron[400],
          errorFocused: color.goron[400],
          errorDisabled: chroma(color.goron[500]).alpha(opacity.dim3).css('rgb'),
          onError: color.base.bright,

          errorContainer: color.goron[100],
          errorContainerHovered: color.goron[50],
          errorContainerFocused: color.goron[50],
          errorContainerPressed: color.goron[50],
          errorContainerDisabled: chroma(color.goron[100]).alpha(opacity.dim3).css('rgb'),
          onErrorContainer: color.goron[600],

          info: color.zora[500],
          infoHovered: color.zora[400],
          infoPressed: color.zora[400],
          infoFocused: color.zora[400],
          infoDisabled: chroma(color.zora[500]).alpha(opacity.dim3).css('rgb'),
          onInfo: color.base.bright,

          infoContainer: color.zora[100],
          infoContainerHovered: color.zora[50],
          infoContainerFocused: color.zora[50],
          infoContainerPressed: color.zora[50],
          infoContainerDisabled: chroma(color.zora[100]).alpha(opacity.dim3).css('rgb'),
          onInfoContainer: color.zora[600],

          neutral: color.poe[600],
          neutralHovered: color.poe[500],
          neutralPressed: color.poe[500],
          neutralFocused: color.poe[500],
          neutralDisabled: chroma(color.poe[600]).alpha(opacity.dim3).css('rgb'),
          onNeutral: color.base.bright,

          neutralContainer: color.poe[100],
          neutralContainerHovered: color.poe[50],
          neutralContainerFocused: color.poe[50],
          neutralContainerPressed: color.poe[50],
          neutralContainerDisabled: chroma(color.poe[100]).alpha(opacity.dim3).css('rgb'),
          onNeutralContainer: color.base.gloom
        },
        core: {
          basic: color.tin[500],
          basicHovered: color.tin[400],
          basicFocused: color.tin[400],
          basicPressed: color.tin[400],
          basicDisabled: chroma(color.tin[400]).alpha(opacity.dim3).css('rgb'),
          onBasic: color.base.bright,

          basicContainer: color.tin[50],
          basicContainerHovered: color.tin[100],
          basicContainerFocused: color.tin[100],
          basicContainerPressed: color.tin[100],
          basicContainerDisabled: chroma(color.tin[50]).alpha(opacity.dim3).css('rgb'),
          onBasicContainer: color.tin[700],

          basicVariant: color.tin[700],
          basicVariantHovered: color.tin[600],
          basicVariantFocused: color.tin[600],
          basicVariantPressed: color.tin[600],
          basicVariantDisabled: chroma(color.tin[600]).alpha(opacity.dim3).css('rgb'),
          onBasicVariant: color.base.bright,

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
          outlineDisabled: chroma(color.poe[400]).alpha(opacity.dim3).css('rgb'),
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
