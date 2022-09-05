import {AntDesignIcon} from '@s-ui/documentation-library'

import {
  atomButtonAlignment,
  atomButtonColors,
  atomButtonDesigns,
  atomButtonElevations,
  atomButtonShapes,
  atomButtonSizes
} from '../src/index.js'

export const BASE_CLASS_DEMO = `DemoAtomButton`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const stackMap = (arr = [], ...mappingCallbacks) =>
  mappingCallbacks.flatMap(function (e, index) {
    return this.map((value, innerIndex) =>
      e(value, innerIndex + this.length * index)
    )
  }, arr)

export const facebookIcon = (
  <AntDesignIcon icon="AiFillFacebook" style={{color: 'currentColor'}} />
)
export const twitterIcon = (
  <AntDesignIcon icon="AiOutlineTwitter" style={{color: 'currentColor'}} />
)
export const googleIcon = (
  <AntDesignIcon icon="AiOutlineGoogle" style={{color: 'currentColor'}} />
)
export const youtubeIcon = (
  <AntDesignIcon icon="AiFillYoutube" style={{color: 'currentColor'}} />
)
export const whatsappIcon = (
  <AntDesignIcon icon="AiOutlineWhatsApp" style={{color: 'currentColor'}} />
)
export const instagramIcon = (
  <AntDesignIcon icon="AiFillInstagram" style={{color: 'currentColor'}} />
)
export const starIcon = (
  <AntDesignIcon icon="AiFillStar" style={{color: 'currentColor'}} />
)

export const atomButtonColorsIterator = Object.values(atomButtonColors)
  .filter(color =>
    ['primary', 'accent', 'neutral', 'success', 'alert', 'error'].includes(
      color
    )
  )
  .map((color, index) => [{color}, index])

export const atomButtonSocialColorsIterator = Object.values(atomButtonColors)
  .filter(color =>
    [
      'social-facebook',
      'social-twitter',
      'social-google',
      'social-youtube',
      'social-whatsapp',
      'social-instagram'
    ].includes(color)
  )
  .map((color, index) => [{color}, index])

export const atomButtonDesignsIterator = Object.values(atomButtonDesigns).map(
  (design, index) => [{design}, index]
)

export const atomButtonElevationsIterator = Object.values(
  atomButtonElevations
).map((elevation, index) => [{elevation}, index])

export const atomButtonSizesIterator = [
  atomButtonSizes.SMALL,
  undefined,
  atomButtonSizes.LARGE
].map((size, index) => [{size}, index])

export const atomButtonAlignmentIterator = [
  undefined,
  atomButtonAlignment.LEFT,
  atomButtonAlignment.RIGHT
].map((alignment, index) => [{alignment}, index])

export const atomButtonShapesIterator = Object.values(atomButtonShapes).map(
  (shape, index) => [{shape}, index]
)

export const socialIconsMapper = {
  'social-facebook': facebookIcon,
  'social-twitter': twitterIcon,
  'social-google': googleIcon,
  'social-youtube': youtubeIcon,
  'social-whatsapp': whatsappIcon,
  'social-instagram': instagramIcon
}

export const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}
