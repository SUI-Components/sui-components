export const BASE_CLASS = `sui-MoleculeProgressSteps`

export const CLASS_STEPS = `${BASE_CLASS}-path`
export const CLASS_CONTENT = `${BASE_CLASS}-content`
export const CLASS_COMPRESSED_INFO = `${BASE_CLASS}-compressedInfo`

export const CLASS_VERTICAL = `${BASE_CLASS}--vertical`
export const CLASS_COMPRESSED = `${BASE_CLASS}--compressed`

export const PROGRESS_BAR_JUSTIFY_CONTENT = {
  /* Positional alignment */
  CENTER: 'center' /* Pack items around the center */,
  START: 'start' /* Pack items from the start */,
  END: 'end' /* Pack items from the end */,
  FLEX_START: 'flex-start' /* Pack flex items from the start */,
  FLEX_END: 'flex-end' /* Pack flex items from the end */,
  LEFT: 'left' /* Pack items from the left */,
  RIGHT: 'right' /* Pack items from the right */,

  /* Normal alignment */
  NORMAL: 'normal',

  /* Distributed alignment */
  SPACE_BETWEEN:
    'space-between' /* Distribute items evenly. The first item is flush with the start, the last is flush with the end */,
  SPACE_AROUND:
    'space-around' /* Distribute items evenly. Items have a half-size space on either end */,
  SPACE_EVENLY:
    'space-evenly' /* Distribute items evenly. Items have equal space around them */,
  STRETCH:
    'stretch' /* Distribute items evenly. Stretch 'auto'-sized items to fit the container */
}
