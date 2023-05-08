export function getFlagEmoji(countryCode = '') {
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

export const MASKLISTS = {
  ES: '(1[0-2]|0[1-9])/(1[5-9]|2d)'
}
