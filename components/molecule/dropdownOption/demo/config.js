import AtomImage from '@s-ui/react-atom-image'

export const BASE_CLASS_DEMO = 'DemoMoleculeDropdownOption'
export const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
export const CLASS_DEMO_OPTION = `${BASE_CLASS_DEMO}-option`

export const OPTIONS = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7']

export const OPTIONS_WITH_LEFT_ADDON = [
  {
    option: 'Option 1',
    leftAddon: <AtomImage className="DemoMoleculeDropdownOption-image" src={`https://imgur.com/sE9QMkm.png`} />
  },
  {
    option: 'Option 2',
    leftAddon: <AtomImage className="DemoMoleculeDropdownOption-image" src={`https://imgur.com/1CAYX6G.png`} />
  },
  {
    option: 'Option 3',
    leftAddon: <AtomImage className="DemoMoleculeDropdownOption-image" src={`https://imgur.com/DgwFO1R.png`} />
  },
  {option: 'Option with no addon'}
]
