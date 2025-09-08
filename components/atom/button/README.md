# Button

> Atom Element: SUI button

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/button/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,button)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-button?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-button)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Abutton&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Abutton)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-button)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/button/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-atom-button --save
```

## Usage

### Basic usage

```js
import Button from '@s-ui/react-atom-button'

return (
  <div>
    <Button>Normal</Button>
    <Button focused>Focused</Button>
    <Button size="large" disabled>
      Disabled
    </Button>
  </div>
)
```

### Flexible props

All props available from regular buttons can be used.

```js
import Button from '@s-ui/react-atom-button'

return (
  <div>
    <Button onClick={() => alert('Primary with onClick')}>Primary with onClick</Button>
    <Button type="accent" title="Title: Lorem Ipsum">
      Accent with title
    </Button>
    <Button type="secondary" className="customClass">
      Secondary with className
    </Button>
  </div>
)
```

### Button with AtomIcon

You could use the `AtomButton` along the `AtomIcon` in order to show the button text with an icon. The proper `size` and `color` of the `AtomIcon` will be used according to the needs of the `AtomButton` definition.

```js
import Button from '@s-ui/react-atom-button'
import AtomIcon from '@s-ui/react-atom-icon'

const Icon = (
  <AtomIcon>
    <svg viewBox="0 0 24 24">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  </AtomIcon>
)

return (
  <div>
    <Button leftIcon={Icon} />
    <Button size="large" rightIcon={Icon}>
      Large icon
    </Button>
    <Button size="small" rightIcon={Icon}>
      Small icon
    </Button>
  </div>
)
```

### Button shape

Use `shape` prop to modify the border radius of the component. Choose between: `squared`, `rounded` and `circular`

```js
import Button, {atomButtonShapes} from '@s-ui/react-atom-button'

return (
  <>
    <AtomButton shape={atomButtonShapes.SQUARED} />
    <AtomButton shape={atomButtonShapes.ROUNDED} />
    <AtomButton shape={atomButtonShapes.CIRCULAR} />
  </>
)
```

### Button loading

Set `isLoading` prop to display the loading state of a button. Optionally, use `loader` prop if you want to overwrite the default spinner and `loadingText` prop if you want to display some text next to the `loader`.

```js
import Button from '@s-ui/react-atom-button'

return (
  <>
    <AtomButton isLoading />
    <AtomButton loadingText="Submitting" isLoading />
  </>
)
```

### Button with elevation

Set `elevation` prop to display a shadow around the button. If it's not set no shadow will be shown.

```js
import Button from '@s-ui/react-atom-button'
return (
  <>
    <Button elevation="medium">Example</Button>
    <Button elevation="large">Example</Button>
  </>
)
```

### Button inside Form

By default `AtomButton` inside a `form` will submit the form

```js
import Button from '@s-ui/react-atom-button'

return (
  <form onSubmit={() => window.alert('Submit!')}>
    <div>
      <input type="text" placeholder="Put your name" />
    </div>
    <div>
      <Button>Submit</Button>
    </div>
  </form>
)
```

If we need several `AtomButton` inside a form we can specify which one we want to submit the form w/ props `isButton` and `isSubmit`

```js
import Button from '@s-ui/react-atom-button'

return (
  <form onSubmit={() => window.alert('Submit!')}>
    <div>
      <input type="text" placeholder="Put your name" />
    </div>
    <div>
      <Button isButton onClick={() => window.alert('Click!')}>
        Click Me!
      </Button>
      <Button isButton onClick={() => window.alert('Click!')}>
        Click Me!
      </Button>
    </div>
    <div>
      <Button isSubmit>Submit</Button>
    </div>
  </form>
)
```

### Rendering a link

When `link` property is passed, the component will render an html link.

```js
import Button from '@s-ui/react-atom-button'

return (
  <Button link href="https://www.adevinta.com" target="_blank" rel="nofollow noopener">
    Link
  </Button>
)
```

output:

```html
<a class="sui-AtomButton sui-AtomButton--link" href="https://www.adevinta.com" target="_blank">Link</a>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/button).**
