export function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}

export const phoneValidationType = {
  DEFAULT: 'default',
  SPLITTED: 'splitted'
}
