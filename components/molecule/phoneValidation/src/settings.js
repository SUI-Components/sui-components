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
  ES: {mask: '000 000 000'},
  FR: {mask: '0 00 00 00 00'},
  PT: {mask: '000 000 000'},
  AD: {mask: '000 000 000'},
  default: {mask: '000 000 000'}
}

export const PREFIXES = [
  {value: 'ES', label: 'España', countryCode: '+34'},
  {value: 'FR', label: 'Francia', countryCode: '+33'},
  {value: 'PT', label: 'Portugal', countryCode: '+351'},
  {value: 'AD', label: 'Andorra', countryCode: '+376'}
]
