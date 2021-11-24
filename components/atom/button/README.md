# Button

> Atom Element: SUI button

![](./assets/screenshot.png)

## Installation

```sh
$ npm install @s-ui/react-atom-button --save
```

## Usage

### Basic usage

```js
import Button from '@s-ui/react-atom-button'

return (<div>
  <Button>Normal</Button>
  <Button focused>Focused</Button>
  <Button size='large' disabled>Disabled</Button>
</div>)

```

### Flexible props

All props available from regular buttons can be used.

```js
import Button from '@s-ui/react-atom-button'

return (<div>
  <Button onClick={() => alert('Primary with onClick')}>
    Primary with onClick
  </Button>
  <Button type='accent' title="Title: Lorem Ipsum">
    Accent with title
  </Button>
  <Button type='secondary' className='customClass'>
    Secondary with className
  </Button>
</div>)
```

### Button with AtomIcon

You could use the `AtomButton` along the `AtomIcon` in order to show the button text with an icon. The proper `size` and `color` of the `AtomIcon` will be used according to the needs of the `AtomButton` definition.

```js
import Button from '@s-ui/react-atom-button'
import AtomIcon from '@s-ui/react-atom-icon'

const Icon = <AtomIcon>
  <svg viewBox="0 0 24 24">
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
</AtomIcon>

return (<div>
  <Button leftIcon={Icon} />
  <Button size="large" rightIcon={Icon} >
    Large icon
  </Button>
  <Button size="small" rightIcon={Icon} >
    Small icon
  </Button>
</div>)
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
      <Button isButton onClick={() => window.alert('Click!')}>Click Me!</Button>
      <Button isButton onClick={() => window.alert('Click!')}>Click Me!</Button>
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
  <Button link href='http://www.schibsted.com/' target='_blank' rel="nofollow noopener">Link</Button>
)

```

output:

```html
<a class="sui-AtomButton sui-AtomButton--link" href="http://www.schibsted.com/" target='_blank'>Link</a>
```

### Rendering a link with a custom react router state
When `link` and `routeState` properties are passed, the component will render an html link with a custom state that will be passed through `react-router` to the react route to which the anchor refers.

```js
import Button from '@s-ui/react-atom-button'

const customState = {isCustomState: true}

return (
  <Button link href='/sui/react-custom-route' routeState={customState}>Link</Button>
)

```

output:

```js
const ReactRouteStatePage = ({location}) => {
  const {state} = location
  console.log(state) // {isCustomState: true}

}
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/button).**
