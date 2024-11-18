# AtomTag

> Atom Element: SUI Tag

We use tags to visually emphasise features of the UI and make recognition and interaction easier.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/tag/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,tag)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-tag?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-tag)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Atag&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Atag)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-tag)](https://github.com/SUI-Components/sui-components/blob/main/components/tag/table/LICENSE.md)

## Installation

```sh
npm install @s-ui/react-atom-tag --save
```

## Usage

```js
import AtomTag from '@s-ui/react-atom-tag'

<AtomTag label='Tag Structure' />
```

### Size

Tags structure can have 3 main sizes: Small, medium (default) and large. You can use this prop size to modify it.

`small | medium (default) | large`

```js
<AtomTag
  label="Structure Tag"
  size="small"
/>

<AtomTag
  label="Structure Tag"
  size="medium"
/>

<AtomTag
  label="Structure Tag"
  size="large"
/>
```

### Design

Tags structure can have 2 designs: Solid (default) and outline. You can use this prop design to modify it.

`solid (default) | outline`

```js
<AtomTag
  label="Structure Tag"
  design="solid"
/>

<AtomTag
  label="Structure Tag"
  design="outline"
/>
```

### Actionable

Actionable tags can be used as an anchor. Same as `<a>` to define an interactivity with the component.

```js
<AtomTag
  label="Navigation Tag"
  onClick={() => alert('click!')}
/>

<AtomTag
  href="https://sui-components.now.sh/"
  label="Anchor Tag"
  target="_blank"
/>
```

### Icons

Tags can include an action icon (generally a close icon). This icon will always be located to the right of content. You can add use the icon and closeIcon to added a icon.

```js
<AtomTag label="Tag Structure Tag" icon={<Icon />} />
```

### Responsive

Use the responsive true for make responsive layout. keep large size in mobile.

```js
<AtomTag label="Tag Structure" responsive />
```

### Tag types

Use the type in order to color it as desired from a high order component.

If you want to customize your tag you can pass a prop to identify this type and you also need to set your custom set of types in Sass:

**Your theme file** (Sass)

```css
$atom-tag-types: (
  "alert": (
    bgc: red,
    c: white
  ),
  "warning": (
    bgc: orange,
    c: white
  )
);
```


### Value

Use the prop value if you want to use this value on your onClick/onClose handler.

```js
<AtomTag
  label="Tag with value"
  onClick={(_, {value}) => alert('click! this is my value', value)}
  value={42}
/>
```

### onClose

The onClose event is triggered when the passed `closeIcon` is clicked.
It receives the native event as first argument and an object with the passed `label` and `value` as second argument.

```js
<AtomTag
  label="Tag with value"
  value={42}
  onClose={(_, {value, label}) => alert('Click! These are my value and label', {value, label})}
  closeIcon={<IconClose />}
/>
```


**Your high order component**

```js
<AtomTag type="alert" />
```

**Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/tag).**
