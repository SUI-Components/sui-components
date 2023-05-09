export const checkIfValidNumberInput = event => {
  // Check if input type number is valid as input type number doesn't currently work in browsers like Safari and Firefox
  // Allowing: Integers | Backspace | Tab | Delete | Left & Right arrow keys
  const allowedCharacter = /(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)/

  return !event.key.match(allowedCharacter) && event.preventDefault()
}
