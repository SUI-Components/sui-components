import {TYPES} from '../config.js'

export default (event, {type, onEnterKey}) => {
  if (type === TYPES.NUMBER) {
    // Check if input type number is valid as input type number doesn't currently work in browsers like Safari and Firefox
    // Allowing: Integers | Backspace | Tab | Delete | Left & Right arrow keys

    // const allowedCharacter =
    //   /(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight|Enter)/
    const onEnterKeyArray = Array.isArray(onEnterKey)
      ? onEnterKey
      : [onEnterKey]
    const allowedCharacter = new RegExp(
      `(^\\d*$)|(${[
        'Backspace',
        'Tab',
        'Delete',
        'ArrowLeft',
        'ArrowRight',
        ...onEnterKeyArray
      ].join('|')})`
    )
    return event.key.match(allowedCharacter)
  }
  return true
}
