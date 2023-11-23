import {loremIpsum} from 'lorem-ipsum'

export const BASE_CLASS_DEMO = 'DemoBehaviorSticky'
export const CLASS_DEMO_FIXED_HEADER = `${BASE_CLASS_DEMO}-fixed-header`
export const CLASS_DEMO_FIXED_FOOTER = `${BASE_CLASS_DEMO}-fixed-footer`
export const CLASS_DEMO_FIXED_BUTTONS = `${BASE_CLASS_DEMO}-fixed-header-buttons`
export const CLASS_DEMO_CONTENT = `${BASE_CLASS_DEMO}-content`
export const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
export const CLASS_DEMO_BACKGROUND = `${BASE_CLASS_DEMO}-background`
export const CLASS_DEMO_PLACEHOLDER = `${BASE_CLASS_DEMO}-placeholder`

export const COLORS = {
  A: '#ffadad20',
  B: '#ffd6a520',
  C: '#fdffb620',
  D: '#caffbf20',
  E: '#9bf6ff20',
  F: '#a0c4ff20',
  G: '#bdb2ff20',
  H: '#ffc6ff20',
  I: '#fffffc20'
}

export const getLoremParagraphs = (n, count) => new Array(n).fill().map(() => loremIpsum({count, units: 'words'}))
