/* eslint-disable react/prop-types, no-unused-vars, no-console */
import {useState} from 'react'
import AtomButton from '../../../../components/atom/button/src'
import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '../../../../components/atom/icon/src'
import './index.scss'

const CURRENT_COLOR_EXAMPLES = ['#0099ff', 'rgb(36, 211, 212)', 'brown']
const ATOM_BUTTON_DESIGNS = ['solid', 'outline', 'flat']
const ATOM_BUTTON_COLORS = [
  'primary',
  'accent',
  'neutral',
  'success',
  'alert',
  'error'
]

const ICONS = [
  {
    name: 'Check (from Material Icons)',
    Component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>
    )
  },
  {
    name: 'Shop (from Material Icons)',
    Component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z" />
      </svg>
    )
  },
  {
    name: 'Programming Flag (from Streamline)',
    Component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M.5 24c-.276 0-.5-.224-.5-.5V.5C0 .224.224 0 .5 0s.5.224.5.5v1.783l2.577-.793c.983-.302 2.003-.455 3.031-.455 1.915 0 3.788.531 5.417 1.536 1.469.904 3.162 1.382 4.895 1.381.866 0 1.725-.12 2.554-.357l2.422-.692c.145-.042.294-.063.445-.064.914 0 1.654.736 1.658 1.642v13.162c0 .733-.492 1.385-1.197 1.586l-3.054.873c-.919.262-1.871.396-2.83.396-1.918 0-3.792-.529-5.418-1.531-1.471-.905-3.161-1.383-4.889-1.383-.93 0-1.852.139-2.741.412L1 18.88v4.62c0 .276-.224.5-.5.5zm6.112-7.415c1.913 0 3.785.529 5.413 1.531 1.469.904 3.162 1.382 4.894 1.382.866 0 1.726-.12 2.556-.357l3.054-.873c.277-.079.471-.335.471-.624V4.484c-.002-.355-.293-.644-.65-.644-.062 0-.122.009-.178.025l-2.422.692c-.918.262-1.87.395-2.829.395-1.919 0-3.793-.529-5.42-1.53-1.472-.907-3.164-1.387-4.893-1.387-.928 0-1.849.138-2.737.411L1 3.329v14.505l2.577-.793c.985-.302 2.006-.456 3.035-.456z" />
        <path d="M15.5 14c-.134 0-.259-.052-.354-.146S15 13.634 15 13.5s.052-.259.146-.354l2.646-2.646-2.646-2.646C15.052 7.759 15 7.634 15 7.5s.052-.259.146-.354S15.366 7 15.5 7s.259.052.354.146l3 3c.094.095.146.22.146.354s-.052.259-.146.354l-3 3c-.095.094-.22.146-.354.146zM8.5 14c-.134 0-.259-.052-.354-.146l-3-3C5.052 10.759 5 10.634 5 10.5s.052-.259.146-.354l3-3C8.241 7.052 8.366 7 8.5 7s.259.052.354.146S9 7.366 9 7.5s-.052.259-.146.354L6.207 10.5l2.646 2.646c.095.095.147.22.147.354s-.052.259-.146.354S8.634 14 8.5 14zM11 14c-.054 0-.107-.009-.158-.026-.126-.042-.229-.131-.289-.25s-.069-.255-.027-.382l2-6c.068-.205.258-.342.473-.342.054 0 .108.009.159.026.261.087.403.371.316.632l-2 6c-.068.205-.258.342-.474.342z" />
      </svg>
    )
  },
  {
    name: 'Space Invader  (from Streamline)',
    Component: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M14 20.5c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h3v-1H7v1h3c.551 0 1 .448 1 1v1c0 .552-.449 1-1 1H7c-.551 0-1-.448-1-1v-1H5c-.551 0-1-.448-1-1v-3H3v3c0 .552-.449 1-1 1H1c-.551 0-1-.448-1-1v-5c0-.551.449-1 1-1h1v-1c0-.551.449-1 1-1h1v-1c0-.551.449-1 1-1h1v-1H5c-.551 0-1-.449-1-1v-1c0-.551.449-1 1-1h1c.551 0 1 .449 1 1v1h1c.551 0 1 .449 1 1v1h6v-1c0-.551.448-1 1-1h1v-1c0-.551.448-1 1-1h1c.552 0 1 .449 1 1v1c0 .551-.448 1-1 1h-1v1h1c.552 0 1 .449 1 1v1h1c.552 0 1 .449 1 1v1h1c.552 0 1 .449 1 1v5c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-3h-1v3c0 .552-.448 1-1 1h-1v1c0 .552-.448 1-1 1h-3zm0-1h3v-1h-3v1zm-7 0h3v-1H7v1zm14-6c.552 0 1 .448 1 1v3h1v-5h-1c-.552 0-1-.449-1-1v-1h-1c-.552 0-1-.449-1-1v-1h-1c-.552 0-1-.449-1-1v-1h-1v1c0 .551-.448 1-1 1H9c-.551 0-1-.449-1-1v-1H7v1c0 .551-.449 1-1 1H5v1c0 .551-.449 1-1 1H3v1c0 .551-.449 1-1 1H1v5h1v-3c0-.552.449-1 1-1h1c.551 0 1 .448 1 1v3h1v-1c0-.552.449-1 1-1h10c.552 0 1 .448 1 1v1h1v-3c0-.552.448-1 1-1h1zm-2-8v-1h-1v1h1zm-14 0h1v-1H5v1z" />
        <path d="M7 12.5c-.551 0-1-.449-1-1v-1c0-.551.449-1 1-1h1c.551 0 1 .449 1 1v1c0 .551-.449 1-1 1H7zm0-1h1v-1H7v1zM16 12.5c-.552 0-1-.449-1-1v-1c0-.551.448-1 1-1h1c.552 0 1 .449 1 1v1c0 .551-.448 1-1 1h-1zm0-1h1v-1h-1v1z" />
      </svg>
    )
  }
]

export default function() {
  const [selectedIcon, setIcon] = useState(ICONS[0])

  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <h1>Icon</h1>
        <ul className="DemoAtomIcon-select">
          <li className="DemoAtomIcon-option" style={{minWidth: '120px'}}>
            Select your icon:
          </li>
          {ICONS.map(({name, Component}, idx) => (
            <li
              key={name}
              className={`DemoAtomIcon-option ${
                ICONS[idx].name === selectedIcon.name ? 'is-selected' : ''
              }`}
              onClick={() => setIcon(ICONS[idx])}
            >
              <AtomIcon size="large">{Component}</AtomIcon>
              <strong>{name}</strong>
            </li>
          ))}
        </ul>
        <h2 className="DemoAtomIcon-title">
          <code>color</code> and <code>size</code> props matrix
        </h2>
        <table
          className="sui-StudioTable DemoAtomIcon-table"
          width="auto"
          cellPadding="8"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <td />
              {Object.keys(ATOM_ICON_COLORS).map(color => {
                return (
                  <td key={color}>
                    <h4 className="DemoAtomIcon-tableLabel">{color}</h4>
                  </td>
                )
              })}
            </tr>
            {Object.keys(ATOM_ICON_SIZES).map(size => {
              return (
                <tr key={size}>
                  <td key="label">
                    <h4 className="DemoAtomIcon-tableLabel">{size}</h4>
                  </td>
                  {Object.keys(ATOM_ICON_COLORS).map(color => {
                    return (
                      <td key={color}>
                        <AtomIcon color={color} size={size}>
                          {selectedIcon.Component}
                        </AtomIcon>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <h2 className="DemoAtomIcon-title">
          Using <code>currentColor</code> color type
        </h2>
        <p>
          <code>currentColor</code> value for <code>color</code> prop is the
          default value and will inherit the color from the inmediate nearest
          parent value of color property in CSS. This way you could safely make
          your icon get a different color with endless posibilities to match
          your designs without having to care about variables on the SUI
          components.
        </p>
        <section>
          {CURRENT_COLOR_EXAMPLES.map(color => (
            <p
              className="DemoAtomIcon-colorExample"
              key={color}
              style={{color}}
            >
              <AtomIcon color="currentColor" size={ATOM_ICON_SIZES.extraLarge}>
                {selectedIcon.Component}
              </AtomIcon>
              <code>The icon inherits the color of this text {color}</code>
            </p>
          ))}
        </section>

        <h2 className="DemoAtomIcon-title">
          Using with the <code>AtomButton</code>
        </h2>
        <p>
          While the <code>AtomButton</code> component was prepared without the{' '}
          <code>AtomIcon</code> in mind, and thus strong styling is forced
          inside the button, still you could safely use it.
        </p>
        <p>
          <strong>
            Using the <code>AtomButton</code> with only the icon:
          </strong>{' '}
          Pass the AtomIcon as <code>leftIcon</code> or <code>rightIcon</code>{' '}
          of the <code>AtomButton</code>.
        </p>
        <section className="DemoAtomIcon-grid DemoAtomIcon-grid--small">
          <AtomButton
            leftIcon={<AtomIcon>{selectedIcon.Component}</AtomIcon>}
          />
        </section>
        <p>
          <strong>
            Using the <code>AtomButton</code> with text:
          </strong>{' '}
          Use the prop <code>leftIcon</code> or <code>rightIcon</code> in order
          to show the icon on the desired placement.
        </p>
        <p>
          <strong>
            <code>leftIcon</code>
          </strong>
        </p>
        <section className="DemoAtomIcon-grid">
          <AtomButton leftIcon={<AtomIcon>{selectedIcon.Component}</AtomIcon>}>
            Left icon
          </AtomButton>
        </section>
        <p>
          <strong>
            <code>rightIcon</code>
          </strong>
        </p>
        <section className="DemoAtomIcon-grid">
          <AtomButton rightIcon={<AtomIcon>{selectedIcon.Component}</AtomIcon>}>
            Right icon
          </AtomButton>
        </section>
        <p>
          <strong>
            Size will be automatically detected from <code>AtomButton</code>
          </strong>{' '}
          so you don't have to worry. Even if you try to use an incorrect size,
          the size will be used correctly. Also, this will happen with the{' '}
          <code>color</code> prop, so, if you try to use a different color with
          the <code>AtomButton</code> it will be corrected for you.
        </p>
        <section className="DemoAtomIcon-grid">
          <AtomButton
            size="large"
            rightIcon={<AtomIcon>{selectedIcon.Component}</AtomIcon>}
          >
            Large icon
          </AtomButton>

          <AtomButton rightIcon={<AtomIcon>{selectedIcon.Component}</AtomIcon>}>
            Small icon
          </AtomButton>

          <AtomButton
            size="small"
            rightIcon={<AtomIcon>{selectedIcon.Component}</AtomIcon>}
          >
            Small icon
          </AtomButton>

          <AtomButton
            size="small"
            rightIcon={
              <AtomIcon size="large">{selectedIcon.Component}</AtomIcon>
            }
          >
            Try large icon
          </AtomButton>
        </section>
        <h2 className="DemoAtomIcon-title">Lazy icons</h2>
        <p>
          By default, icons will be rendered <strong>eagerly</strong>. That
          means that they will be rendered on the server and, on the client,
          they will be hydrated asap. You could use the prop <code>render</code>{' '}
          and use the <code>lazy</code> value so the icons are rendered only
          when near the viewport. That could be useful when icons are used on a
          footer or on large lists.
        </p>
        <section className="DemoAtomIcon-grid">
          <AtomButton
            size="large"
            rightIcon={
              <AtomIcon render="lazy">{selectedIcon.Component}</AtomIcon>
            }
          >
            Large icon
          </AtomButton>

          <AtomButton
            render="lazy"
            rightIcon={
              <AtomIcon render="lazy">{selectedIcon.Component}</AtomIcon>
            }
          >
            Small icon
          </AtomButton>

          <AtomButton
            size="small"
            render="lazy"
            rightIcon={
              <AtomIcon render="lazy">{selectedIcon.Component}</AtomIcon>
            }
          >
            Small icon
          </AtomButton>

          <AtomButton
            size="small"
            render="lazy"
            rightIcon={
              <AtomIcon render="lazy" size="large">
                {selectedIcon.Component}
              </AtomIcon>
            }
          >
            Try large icon
          </AtomButton>
        </section>
      </div>
    </div>
  )
}
