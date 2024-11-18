# usePortal

> Provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. ([doc](https://reactjs.org/docs/portals.html))

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/hook/usePortal/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,hook,usePortal)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-hook-use-portal?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-hook-use-portal)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Ahook%20label%3AusePortal&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Ahook+label%3AusePortal)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-hook-use-portal)](https://github.com/SUI-Components/sui-components/blob/main/components/hook/usePortal/LICENSE.md)

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