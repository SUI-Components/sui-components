# usePortal

> Provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. ([doc](https://reactjs.org/docs/portals.html))

## Installation

```sh
$ npm install @s-ui/react-hook-use-portal
```

## Usage

### Basic usage

```js
// Array destructuring
const Foo = props => {
  const [Portal] = usePortal()
  return (
    <>
      This content is rendered on the propper VDOM tree.
      <Portal>This content added at the end of the document.body</Portal>
    </>
  )
}
```

```js
// Object destructuring
const Foo = props => {
  const {Portal} = usePortal()
  return (
    <>
      This content is rendered on the propper VDOM tree.
      <Portal>This content added at the end of the document.body</Portal>
    </>
  )
}
```

### Target Configuration

Target is the DOM place where the Portal might the appended. By default it is document.body. To set a different element, just add it to the hook configuration option arguments object:

```js
const Foo = props => {
  const portalContainer = useRef()
  const {Portal} = usePortal({target: portalContainer.current})
  return (
    <>
      <div>
        This content is rendered on the propper VDOM tree.
        <Portal>
          This content added at the end of the portalContainer element
        </Portal>
      </div>
      <div ref={portalContainer} /> {/** <-- this is the container where the portal children will be rendered **/}
    </>
  )
}
```

### Open and Close

Portals can be opened and closed.

```js
// Statefull (uncontrolled)
const Foo = props => {
  const {Portal, open, close, isOpen} = usePortal()
  return (
    <>
      {!isOpen && <button onClick={open}>open</button>}
      <Portal>
        This is added at the end of the document.body
        <button onClick={close}>close</button>
      </Portal>
    </>
  )
}
```

```js
// Stateless (controlled)
const Foo = props => {
  const [isOpen, setIsOpen] = useState(true)
  const {Portal} = usePortal()
  return (
    <>
      {!isOpen && <button onClick={() => setIsOpen(true)}>open</button>}
      <Portal isOpen={isOpen}>
        This is added at the end of the document.body
        <button onClick={() => setIsOpen(false)}>close</button>
      </Portal>
    </>
  )
}
```