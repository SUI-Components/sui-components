import {AD, ES, FR, PT} from 'rendered-country-flags'

export const FLAG_SIZE = 24

export const phoneValidationType = {
  DEFAULT: 'default',
  SPLITTED: 'splitted'
}

export const PREFIXES = [
  {
    value: 'ES',
    label: 'España',
    countryCode: '+34',
    landlinePrefixs: ['9'],
    flag: ES,
    mask: {
      mobileMask: '000 000 000',
      landlineMask: '00 000 00 00'
    }
  },
  {
    value: 'FR',
    label: 'Francia',
    countryCode: '+33',
    landlinePrefixs: ['1', '2', '3', '4', '5'],
    flag: FR,
    mask: {
      mobileMask: '0 00 00 00 00',
      landlineMask: '0 00 00 00 00'
    }
  },
  {
    value: 'PT',
    label: 'Portugal',
    countryCode: '+351',
    landlinePrefixs: ['2'],
    flag: PT,
    mask: {
      mobileMask: '0 0000 0000',
      landlineMask: '00 000 0000'
    }
  },
  {
    value: 'AD',
    label: 'Andorra',
    countryCode: '+376',
    landlinePrefixs: ['8'],
    flag: AD,
    mask: {
      mobileMask: '000 000',
      landlineMask: '000 000'
    }
  }
]
