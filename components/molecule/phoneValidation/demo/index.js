import {useState} from 'react'

import {
  AntDesignIcon,
  Article,
  H1,
  H2,
  Paragraph
} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import MoleculePhoneValidation from '../src/index.js'
import {phoneValidationType, PREFIXES} from '../src/settings.js'

export const icon = (
  <AtomIcon>
    <AntDesignIcon icon={'AiOutlineDown'} style={{fill: 'currentColor'}} />
  </AtomIcon>
)

export default () => {
  const [phone, setPhone] = useState('')

  return (
    <div className="sui-StudioPreview">
      <H1>Phone Validation Demo</H1>
      <Paragraph>Telephone type input with prefixes in a dropdown.</Paragraph>
      <br />
      <Article>
        <H2>Default</H2>
        <MoleculePhoneValidation
          phone={phone}
          setPhone={setPhone}
          dropdownIcon={icon}
          prefixes={PREFIXES}
        />
      </Article>
      <br />
      <Article>
        <H2>Splitted</H2>
        <MoleculePhoneValidation
          type={phoneValidationType.SPLITTED}
          phone={phone}
          setPhone={setPhone}
          dropdownIcon={icon}
          prefixes={PREFIXES}
        />
      </Article>
    </div>
  )
}
