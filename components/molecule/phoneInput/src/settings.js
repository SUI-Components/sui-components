export const phoneValidationType = {
  DEFAULT: 'default',
  SPLITTED: 'splitted'
}

export const PREFIXES = [
  {
    value: 'ES',
    label: 'España',
    countryCode: '+34',
    mask: {
      mask: '000 000 000'
    }
  },
  {
    value: 'FR',
    label: 'Francia',
    countryCode: '+33',
    mask: {mask: '0 00 00 00 00'}
  },
  {
    value: 'PT',
    label: 'Portugal',
    countryCode: '+351',
    mask: {mask: '000 000 000'}
  },
  {
    value: 'AD',
    label: 'Andorra',
    countryCode: '+376',
    mask: {mask: '000 000 000'}
  }
]
