/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {useState, Fragment} from 'react'
import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '../../../../components/atom/icon/src'
import './index.scss'
import {
  AntDesignIcon,
  H1,
  H2,
  Paragraph,
  Article,
  Code,
  Grid,
  Cell,
  Label,
  RadioButtonGroup,
  RadioButton,
  Strong
} from '@s-ui/documentation-library'

const BASE_CLASS_DEMO = `DemoAtomIcon`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const ICONS = {
  AiOutlineCheck: 'AiOutlineCheck',
  AiOutlineShop: 'AiOutlineShop',
  AiOutlineCode: 'AiOutlineCode',
  AiOutlineCoffee: 'AiOutlineCoffee',
  AiOutlineLink: 'AiOutlineLink'
}

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const ColorsAndSizesDemo = () => {
  const [selectedIcon, setIcon] = useState(Object.values(ICONS)[0])
  return (
    <Article className={CLASS_SECTION}>
      <H2>Colors & Sizes</H2>
      <Paragraph>
        Icons can change its inner colors using the <Code>color</Code> prop. The
        inner svg elements fill inherit by default the current color.
      </Paragraph>
      <Paragraph>
        Sui-components provides {Object.values(ATOM_ICON_SIZES).length}{' '}
        different icon sizes under the <Code>size</Code> prop.
      </Paragraph>
      –––
      <br />
      <br />
      <RadioButtonGroup onChange={value => setIcon(value)} value={selectedIcon}>
        {Object.values(ICONS).map((iconName, index) => (
          <RadioButton
            key={index}
            value={iconName}
            label={
              <AtomIcon>
                <AntDesignIcon
                  icon={iconName}
                  style={{color: 'currentColor'}}
                />
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
              <Cell
                key={`${indexSize}-${indexColor}`}
                style={{...flexCenteredStyle, minHeight: 32}}
              >
                <AtomIcon color={iconColor} size={iconSize}>
                  <AntDesignIcon
                    icon={selectedIcon}
                    style={{color: 'currentColor'}}
                  />
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

const ColorInheritanceDemo = () => {
  const COLOR_EXAMPLES = ['#0099ff', 'rgb(36, 211, 212)', 'brown']
  const [selectedColor, setColor] = useState()
  return (
    <Article className={CLASS_SECTION}>
      <H2>Color inheritance</H2>
      <Paragraph>
        currentColor value for color prop is the default value and will inherit
        the color from the inmediate nearest parent value of color property in
        CSS. This way you could safely make your icon get a different color with
        endless posibilities to match your designs without having to care about
        variables on the SUI components.
      </Paragraph>
      –––
      <br />
      <br />
      <RadioButtonGroup
        onChange={value => setColor(value)}
        value={selectedColor}
      >
        {COLOR_EXAMPLES.map((colorValue, index) => (
          <RadioButton key={index} value={colorValue} label={colorValue} />
        ))}
      </RadioButtonGroup>
      <Paragraph
        className="DemoAtomIcon-colorExample"
        style={{color: selectedColor}}
      >
        The icon{' '}
        <AtomIcon color="currentColor" size={ATOM_ICON_SIZES.medium}>
          <AntDesignIcon
            icon={Object.values(ICONS)[1]}
            style={{color: 'currentColor'}}
          />
        </AtomIcon>{' '}
        inherits the color of this text {selectedColor}
      </Paragraph>
    </Article>
  )
}

const LazyDemo = () => (
  <Article className={CLASS_SECTION}>
    <H2>Lazy Icons</H2>
    <Paragraph>
      By default, icons will be rendered <Strong>eagerly</Strong>. That means
      that they will be rendered on the server and, on the client, they will be
      hydrated asap. You could use the prop <Code>render</Code> and use the{' '}
      <Code>lazy</Code> value so the icons are rendered only when near the
      viewport. That could be useful when icons are used on a footer or on large
      lists.
    </Paragraph>
    <Grid cols={Object.values(ICONS).length} gutter={[8, 8]}>
      {Object.values(ICONS).map((iconName, index) => (
        <Cell key={index}>
          <AtomIcon render="lazy">
            <AntDesignIcon icon={iconName} style={{color: 'currentColor'}} />
          </AtomIcon>
        </Cell>
      ))}
    </Grid>
  </Article>
)

export default function() {
  return (
    <div className="sui-StudioPreview">
      <H1>Icon</H1>
      <Paragraph>
        <Code>&#60;AtomIcon&#62;</Code> wraps a <Code>&#60;svg&#62;</Code> that
        follows the rules defined on the UX Definition and give you some colors,
        sizes and interesting features like lazy-load rendering.
      </Paragraph>
      <ColorsAndSizesDemo />
      <br />
      <ColorInheritanceDemo />
      <br />
      <LazyDemo />
      <br />
    </div>
  )
}
