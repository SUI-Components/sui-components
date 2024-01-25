import {Fragment, useState} from 'react'

import {
  AntDesignIcon,
  Article,
  Cell,
  Code,
  Grid,
  H2,
  Label,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'

import AtomIcon, {ATOM_ICON_COLORS, ATOM_ICON_SIZES} from '../src/index.js'
import {CLASS_SECTION, flexCenteredStyle, ICONS} from './settings.js'

const ColorsAndSizesDemo = () => {
  const [selectedIcon, setIcon] = useState(Object.values(ICONS)[0])
  return (
    <Article className={CLASS_SECTION}>
      <H2>Colors & Sizes</H2>
      <Paragraph>
        Icons can change its inner colors using the <Code>color</Code> prop. The inner svg elements fill inherit by
        default the current color.
      </Paragraph>
      <Paragraph>
        Sui-components provides {Object.values(ATOM_ICON_SIZES).length} different icon sizes under the <Code>size</Code>{' '}
        prop.
      </Paragraph>
      –––
      <br />
      <br />
      <RadioButtonGroup onChange={(event, value) => setIcon(value)} value={selectedIcon}>
        {Object.values(ICONS).map((iconName, index) => (
          <RadioButton
            key={index}
            value={iconName}
            label={
              <AtomIcon>
                <AntDesignIcon icon={iconName} style={{color: 'currentColor'}} />
              </AtomIcon>
            }
          />
        ))}
      </RadioButtonGroup>
      <br />
      <br />
      <Grid cols={9} gutter={[8, 8]}>
        <Cell />
        {Object.values(ATOM_ICON_COLORS).map((iconColor, index) => (
          <Cell key={index} style={flexCenteredStyle}>
            <Label>{iconColor}</Label>
          </Cell>
        ))}
        <Cell />
        {Object.values(ATOM_ICON_SIZES).map((iconSize, indexSize) => (
          <Fragment key={indexSize}>
            <Cell style={{...flexCenteredStyle, justifyContent: 'flex-start'}}>
              <Label>{iconSize}</Label>
            </Cell>
            {Object.values(ATOM_ICON_COLORS).map((iconColor, indexColor) => (
              <Cell key={`${indexSize}-${indexColor}`} style={{...flexCenteredStyle, minHeight: 32}}>
                <AtomIcon color={iconColor} size={iconSize}>
                  <AntDesignIcon icon={selectedIcon} style={{color: 'currentColor'}} />
                </AtomIcon>
              </Cell>
            ))}
            <Cell style={{...flexCenteredStyle, justifyContent: 'flex-end'}}>
              <Label>{iconSize}</Label>
            </Cell>
          </Fragment>
        ))}
        <Cell />
      </Grid>
    </Article>
  )
}

export default ColorsAndSizesDemo
