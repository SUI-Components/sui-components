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
// [
//   ({
//     name: 'Check (from Material Icons)',
//     Component: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//         <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
//       </svg>
//     )
//   },
//   {
//     name: 'Shop (from Material Icons)',
//     Component: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//         <path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z" />
//       </svg>
//     )
//   },
//   {
//     name: 'Programming Flag (from Streamline)',
//     Component: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//         <path d="M.5 24c-.276 0-.5-.224-.5-.5V.5C0 .224.224 0 .5 0s.5.224.5.5v1.783l2.577-.793c.983-.302 2.003-.455 3.031-.455 1.915 0 3.788.531 5.417 1.536 1.469.904 3.162 1.382 4.895 1.381.866 0 1.725-.12 2.554-.357l2.422-.692c.145-.042.294-.063.445-.064.914 0 1.654.736 1.658 1.642v13.162c0 .733-.492 1.385-1.197 1.586l-3.054.873c-.919.262-1.871.396-2.83.396-1.918 0-3.792-.529-5.418-1.531-1.471-.905-3.161-1.383-4.889-1.383-.93 0-1.852.139-2.741.412L1 18.88v4.62c0 .276-.224.5-.5.5zm6.112-7.415c1.913 0 3.785.529 5.413 1.531 1.469.904 3.162 1.382 4.894 1.382.866 0 1.726-.12 2.556-.357l3.054-.873c.277-.079.471-.335.471-.624V4.484c-.002-.355-.293-.644-.65-.644-.062 0-.122.009-.178.025l-2.422.692c-.918.262-1.87.395-2.829.395-1.919 0-3.793-.529-5.42-1.53-1.472-.907-3.164-1.387-4.893-1.387-.928 0-1.849.138-2.737.411L1 3.329v14.505l2.577-.793c.985-.302 2.006-.456 3.035-.456z" />
//         <path d="M15.5 14c-.134 0-.259-.052-.354-.146S15 13.634 15 13.5s.052-.259.146-.354l2.646-2.646-2.646-2.646C15.052 7.759 15 7.634 15 7.5s.052-.259.146-.354S15.366 7 15.5 7s.259.052.354.146l3 3c.094.095.146.22.146.354s-.052.259-.146.354l-3 3c-.095.094-.22.146-.354.146zM8.5 14c-.134 0-.259-.052-.354-.146l-3-3C5.052 10.759 5 10.634 5 10.5s.052-.259.146-.354l3-3C8.241 7.052 8.366 7 8.5 7s.259.052.354.146S9 7.366 9 7.5s-.052.259-.146.354L6.207 10.5l2.646 2.646c.095.095.147.22.147.354s-.052.259-.146.354S8.634 14 8.5 14zM11 14c-.054 0-.107-.009-.158-.026-.126-.042-.229-.131-.289-.25s-.069-.255-.027-.382l2-6c.068-.205.258-.342.473-.342.054 0 .108.009.159.026.261.087.403.371.316.632l-2 6c-.068.205-.258.342-.474.342z" />
//       </svg>
//     )
//   },
//   {
//     name: 'Space Invader  (from Streamline)',
//     Component: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//         <path d="M14 20.5c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h3v-1H7v1h3c.551 0 1 .448 1 1v1c0 .552-.449 1-1 1H7c-.551 0-1-.448-1-1v-1H5c-.551 0-1-.448-1-1v-3H3v3c0 .552-.449 1-1 1H1c-.551 0-1-.448-1-1v-5c0-.551.449-1 1-1h1v-1c0-.551.449-1 1-1h1v-1c0-.551.449-1 1-1h1v-1H5c-.551 0-1-.449-1-1v-1c0-.551.449-1 1-1h1c.551 0 1 .449 1 1v1h1c.551 0 1 .449 1 1v1h6v-1c0-.551.448-1 1-1h1v-1c0-.551.448-1 1-1h1c.552 0 1 .449 1 1v1c0 .551-.448 1-1 1h-1v1h1c.552 0 1 .449 1 1v1h1c.552 0 1 .449 1 1v1h1c.552 0 1 .449 1 1v5c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-3h-1v3c0 .552-.448 1-1 1h-1v1c0 .552-.448 1-1 1h-3zm0-1h3v-1h-3v1zm-7 0h3v-1H7v1zm14-6c.552 0 1 .448 1 1v3h1v-5h-1c-.552 0-1-.449-1-1v-1h-1c-.552 0-1-.449-1-1v-1h-1c-.552 0-1-.449-1-1v-1h-1v1c0 .551-.448 1-1 1H9c-.551 0-1-.449-1-1v-1H7v1c0 .551-.449 1-1 1H5v1c0 .551-.449 1-1 1H3v1c0 .551-.449 1-1 1H1v5h1v-3c0-.552.449-1 1-1h1c.551 0 1 .448 1 1v3h1v-1c0-.552.449-1 1-1h10c.552 0 1 .448 1 1v1h1v-3c0-.552.448-1 1-1h1zm-2-8v-1h-1v1h1zm-14 0h1v-1H5v1z" />
//         <path d="M7 12.5c-.551 0-1-.449-1-1v-1c0-.551.449-1 1-1h1c.551 0 1 .449 1 1v1c0 .551-.449 1-1 1H7zm0-1h1v-1H7v1zM16 12.5c-.552 0-1-.449-1-1v-1c0-.551.448-1 1-1h1c.552 0 1 .449 1 1v1c0 .551-.448 1-1 1h-1zm0-1h1v-1h-1v1z" />
//       </svg>
//     )
//   })
// ]

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
