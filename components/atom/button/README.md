# Button

> Atom Element: SUI button

![](./assets/screenshot.png)

## Installation

```sh
npm install @schibstedspain/sui-atom-button --save
```

## Usage

### Basic usage
```js
import Button from '@schibstedspain/sui-atom-button'

return (<div>
  <Button>Normal</Button>
  <Button focused>Focused</Button>
  <Button disabled>Disabled</Button>
</div>)

```

### Flexible props

All props available from regular buttons an be used.

```js
import Button from '@schibstedspain/sui-atom-button'

return (<div>
  <Button onClick={() => alert('Primary with onClick')}>
    Primary with onClick
  </Button>
  <Button accent title="Title: Lorem Ipsum">
    Accent with title
  </Button>
  <Button secondary className='customClass'>
    Secondary with className
  </Button>
</div>)

```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/button).**
