export const BASE_CLASS = `sui-MoleculeTabs`

export const CLASS_SCROLLER = `${BASE_CLASS}-scroller`
export const CLASS_CONTENT = `${BASE_CLASS}-content`

export const TYPES = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  FULLWIDTH: 'fullWidth'
}

export const VARIANTS = {
  HIGHLIGHTED: 'highlighted',
  CLASSIC: 'classic'
}

export const TABS_JUSTIFY_CONTENT = {
  /* Positional alignment */
  // START: 'start' /* Pack items from the start */,
  // END: 'end' /* Pack items from the end */,
  FLEX_START: 'flex-start' /* Pack flex items from the start */,
  CENTER: 'center' /* Pack items around the center */,
  FLEX_END: 'flex-end' /* Pack flex items from the end */
  // LEFT: 'left' /* Pack items from the left */,
  // RIGHT: 'right' /* Pack items from the right */,

  /* Normal alignment */
  // NORMAL: 'normal',

  /* Distributed alignment */
  // SPACE_BETWEEN:
  //   'space-between' /* Distribute items evenly. The first item is flush with the start, the last is flush with the end */,
  // SPACE_AROUND:
  //   'space-around' /* Distribute items evenly. Items have a half-size space on either end */,
  // SPACE_EVENLY:
  //   'space-evenly' /* Distribute items evenly. Items have equal space around them */
  // STRETCH:
  //   'stretch' /* Distribute items evenly. Stretch 'auto'-sized items to fit the container */
}
