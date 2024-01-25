export const IMAGES = {
  FINAL: 'https://picsum.photos/4000?image=980',
  PLACEHOLDER: 'https://picsum.photos/50?image=980',
  SKELETON: 'https://cdn1.iconfinder.com/data/icons/online-wireframes/32/Wireframe_Photo_Album_Picture-256.png',
  BAD: 'https://pic__sum.pho__tos/50?image=980',
  RANDOM_IMAGE: (key, index) => `https://source.unsplash.com/collection/190727/4000x3000?${key}=${index}.jpg`
}

export const defaultErrorText = 'Image not found'

export const BASE_CLASS_DEMO = `DemoAtomImage`
export const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

export const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}
