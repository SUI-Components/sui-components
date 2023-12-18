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
    return this.map((value, innerIndex) => e(value, innerIndex + this.length * index))
  }, arr)

export const facebookIcon = <AntDesignIcon icon="AiFillFacebook" style={{color: 'currentColor'}} />
export const twitterIcon = <AntDesignIcon icon="AiOutlineTwitter" style={{color: 'currentColor'}} />
export const googleIcon = <AntDesignIcon icon="AiOutlineGoogle" style={{color: 'currentColor'}} />
export const youtubeIcon = <AntDesignIcon icon="AiFillYoutube" style={{color: 'currentColor'}} />
export const whatsappIcon = <AntDesignIcon icon="AiOutlineWhatsApp" style={{color: 'currentColor'}} />
export const instagramIcon = <AntDesignIcon icon="AiFillInstagram" style={{color: 'currentColor'}} />
export const starIcon = <AntDesignIcon icon="AiFillStar" style={{color: 'currentColor'}} />

export const atomButtonColorsIterator = Object.entries(atomButtonColors)
  .filter(([, color]) => ['primary', 'accent', 'neutral', 'success', 'alert', 'error'].includes(color))
  .map(([key, color], index) => [{key, color}, index])

export const atomButtonSocialColorsIterator = Object.entries(atomButtonColors)
  .filter(([, color]) =>
    [
      'social-facebook',
      'social-twitter',
      'social-google',
      'social-youtube',
      'social-whatsapp',
      'social-instagram'
    ].includes(color)
  )
  .map(([key, color], index) => [{key, color}, index])

export const atomButtonDesignsIterator = Object.entries(atomButtonDesigns).map(([designKey, designValue], index) => [
  {key: designKey, design: designValue},
  index
])

export const atomButtonElevationsIterator = Object.entries(atomButtonElevations).map(([key, elevation], index) => [
  {key, elevation},
  index
])

export const atomButtonSizesIterator = Object.entries(atomButtonSizes).map(([key, size], index) => [{key, size}, index])

export const atomButtonAlignmentIterator = Object.entries(atomButtonAlignment).map(([key, alignment], index) => [
  {key, alignment},
  index
])

export const atomButtonShapesIterator = Object.entries(atomButtonShapes).map(([key, shape], index) => [
  {key, shape},
  index
])

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
