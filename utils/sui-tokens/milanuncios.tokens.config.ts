import chroma from 'chroma-js'

import {type Theme, type ThemePrimitive} from './src/types'

const theme: Theme = {
  primitive: {
    size: '16px',
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
    }
  },
  semantic: ({color, opacity}: ThemePrimitive) => ({
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
    }
  })
}

export default theme
