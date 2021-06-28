/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {useState, Fragment} from 'react'
import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from 'components/atom/icon/src'
import AtomButton from '@s-ui/react-atom-button'
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
  flexWrap: 'nowrap',
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
      <RadioButtonGroup
        onChange={(event, value) => setIcon(value)}
        value={selectedIcon}
      >
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
        onChange={(event, value) => setColor(value)}
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

const SpanDemo = () => (
  <Article className={CLASS_SECTION}>
    <H2>Icons wrapped with span</H2>
    <Paragraph>
      Some icons could be wrapped on a <Code>span</Code> tag so they could be
      rendered by using setDangerouslySetInnerHTML for performance reasons. They
      should be shown centered anyway:
    </Paragraph>
    <AtomButton
      leftIcon={
        <AtomIcon>
          <span
            dangerouslySetInnerHTML={{
              __html: `<svg viewBox="0 0 24 24"><path d="m2.615.77-.774.774a6.285 6.285 0 0 0-.997 7.589l.155.253A50.69 50.69 0 0 0 14.62 23.011l.054.034c2.46 1.566 5.71 1.21 7.792-.873l.774-.774a2.596 2.596 0 0 0 0-3.669l-3.26-3.26a2.596 2.596 0 0 0-3.496-.158l-.15.135c-.23.23-.508.345-.798.345-.29 0-.568-.116-.773-.321L9.544 9.25a1.096 1.096 0 0 1-.067-1.474l.09-.098a2.57 2.57 0 0 0 .738-1.81c0-.688-.274-1.348-.761-1.835L6.284.77a2.596 2.596 0 0 0-3.669 0zm2.609 1.06 3.26 3.264a1.094 1.094 0 0 1 .082 1.455l-.22.241a2.603 2.603 0 0 0 .137 3.521l5.219 5.22a2.593 2.593 0 0 0 3.518.139l.25-.23c.407-.338 1.047-.31 1.449.09l3.26 3.26c.428.427.428 1.12 0 1.548l-.773.774a4.783 4.783 0 0 1-5.754.772l-.234-.142A49.147 49.147 0 0 1 2.655 9.148l-.416-.606a4.78 4.78 0 0 1 .662-5.938l.774-.774a1.096 1.096 0 0 1 1.549 0z"/></svg>`
            }}
          />
        </AtomIcon>
      }
    >
      Button with Icon WITH span wrapped
    </AtomButton>
    <br />
    <br />
    <AtomButton
      leftIcon={
        <AtomIcon>
          <svg viewBox="0 0 24 24">
            <path d="m2.615.77-.774.774a6.285 6.285 0 0 0-.997 7.589l.155.253A50.69 50.69 0 0 0 14.62 23.011l.054.034c2.46 1.566 5.71 1.21 7.792-.873l.774-.774a2.596 2.596 0 0 0 0-3.669l-3.26-3.26a2.596 2.596 0 0 0-3.496-.158l-.15.135c-.23.23-.508.345-.798.345-.29 0-.568-.116-.773-.321L9.544 9.25a1.096 1.096 0 0 1-.067-1.474l.09-.098a2.57 2.57 0 0 0 .738-1.81c0-.688-.274-1.348-.761-1.835L6.284.77a2.596 2.596 0 0 0-3.669 0zm2.609 1.06 3.26 3.264a1.094 1.094 0 0 1 .082 1.455l-.22.241a2.603 2.603 0 0 0 .137 3.521l5.219 5.22a2.593 2.593 0 0 0 3.518.139l.25-.23c.407-.338 1.047-.31 1.449.09l3.26 3.26c.428.427.428 1.12 0 1.548l-.773.774a4.783 4.783 0 0 1-5.754.772l-.234-.142A49.147 49.147 0 0 1 2.655 9.148l-.416-.606a4.78 4.78 0 0 1 .662-5.938l.774-.774a1.096 1.096 0 0 1 1.549 0z" />
          </svg>
        </AtomIcon>
      }
    >
      Button with Icon WITHOUT span wrapped
    </AtomButton>
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
      <SpanDemo />
    </div>
  )
}
