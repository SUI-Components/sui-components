# AtomTag

> Atom Element: SUI Tag

We use tags to visually emphasise features of the UI and make recognition and interaction easier.

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
