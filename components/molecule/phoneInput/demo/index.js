import {useState} from 'react'

import {
  AntDesignIcon,
  Article,
  H1,
  H2,
  Paragraph
} from '@s-ui/documentation-library'
import AtomIcon from '@s-ui/react-atom-icon'

import MoleculePhoneInput from '../src/index.js'
import {phoneValidationType, PREFIXES} from '../src/settings.js'

export const icon = (
  <AtomIcon>
    <AntDesignIcon icon={'AiOutlineDown'} style={{fill: 'currentColor'}} />
  </AtomIcon>
)

export default () => {
  const [phone, setPhone] = useState('666666666')

  const onValueChange = (_, {value}) => {
    setPhone(value)
  }

  return (
    <div className="sui-StudioPreview">
      <H1>Phone Input Demo</H1>
      <Paragraph>Telephone type input with prefixes in a dropdown.</Paragraph>
      <br />
      <Article>
        <H2>Default</H2>
        <MoleculePhoneInput
          value={phone}
          onChange={onValueChange}
          dropdownIcon={icon}
          placeholder="612 345 678"
          prefixes={PREFIXES}
          initialSelectedPrefix={PREFIXES[0]}
        />
      </Article>
      <br />
      <Article>
        <H2>Splitted</H2>
        <MoleculePhoneInput
          phone={phone}
          setPhone={setPhone}
          dropdownIcon={icon}
          placeholder="612 345 678"
          type={phoneValidationType.SPLITTED}
          prefixes={PREFIXES}
        />
      </Article>
    </div>
  )
}
