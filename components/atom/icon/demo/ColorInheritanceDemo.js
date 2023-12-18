import {useState} from 'react'

import {AntDesignIcon, Article, H2, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import AtomIcon, {ATOM_ICON_SIZES} from '../src/index.js'
import {CLASS_SECTION, ICONS} from './settings.js'

const ColorInheritanceDemo = () => {
  const COLOR_EXAMPLES = ['#0099ff', 'rgb(36, 211, 212)', 'brown']
  const [selectedColor, setColor] = useState()
  return (
    <Article className={CLASS_SECTION}>
      <H2>Color inheritance</H2>
      <Paragraph>
        currentColor value for color prop is the default value and will inherit the color from the inmediate nearest
        parent value of color property in CSS. This way you could safely make your icon get a different color with
        endless posibilities to match your designs without having to care about variables on the SUI components.
      </Paragraph>
      –––
      <br />
      <br />
      <RadioButtonGroup onChange={(event, value) => setColor(value)} value={selectedColor}>
        {COLOR_EXAMPLES.map((colorValue, index) => (
          <RadioButton key={index} value={colorValue} label={colorValue} />
        ))}
      </RadioButtonGroup>
      <Paragraph className="DemoAtomIcon-colorExample" style={{color: selectedColor}}>
        The icon{' '}
        <AtomIcon color="currentColor" size={ATOM_ICON_SIZES.medium}>
          <AntDesignIcon icon={Object.values(ICONS)[1]} style={{color: 'currentColor'}} />
        </AtomIcon>{' '}
        inherits the color of this text {selectedColor}
      </Paragraph>
    </Article>
  )
}

export default ColorInheritanceDemo
