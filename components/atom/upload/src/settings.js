import loadable from '@loadable/component'

export const Dropzone = loadable(() => import('react-dropzone'), {ssr: true})

export const STATUSES = {
  ACTIVE: 'active',
  UPLOAD: 'upload',
  SUCCESS: 'success',
  ERROR: 'error'
}

export const BASE_CLASS = 'sui-AtomUpload'
export const CLASS_BLOCK_TEXT = `${BASE_CLASS}-blockText`
export const CLASS_BLOCK_TEXT_MAIN = `${CLASS_BLOCK_TEXT}-main`
export const CLASS_BLOCK_TEXT_SECONDARY = `${CLASS_BLOCK_TEXT}-secondary`

export const capitalize = text => text[0].toUpperCase() + text.substr(1)
