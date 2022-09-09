# usePortal

> The layout grid component adapts to screen size (responsive), ensuring consistency across layouts.

## Installation

```sh
$ npm install @s-ui/react-hook-use-portal
```

## Usage

### Basic usage

#### Import package and use in the component

###### Stateless

```js
import usePortal from '@s-ui/react-hook-use-portal'

// Body portal /////////////////////////////////////////
const App = () => {
  const {Portal} = usePortal()

  return <Portal>This text is portaled at the end of document.body!</Portal>
}

// Barcelona portal /////////////////////////////////////////
const App = () => {
  const element = document && document.getElementById('Barcelona')
  const {Portal} = usePortal({
    bindTo: element
  })

  return <Portal>This text is portaled into Barcelona!</Portal>
}
```

### Arguments
```js
[
  {
    hasCloseOnOutsideClick, // (bool, true) closes the portal when clicking outside
    hasCloseOnEsc,  // (bool|true) closes the portal when ESC key pressed
    target, // attach the portal to this node in The DOM
    isOpen, // (bool, false) statefull control
    onOpen, // (function) fired when opening the modal
    onClose, // (function) fired when closing the modal
    onToggle, // (function) fired when modal open or closes
    onClick, // (function) fired when clicking on the portal.
  }
]
```

### Return
#### Object
```js
{
  isOpen, // (bool) is portal is visible or hidden
  open, // (function) sets portal visible
  close, // (function) sets portal hidden
  toggle, // (function) toogles the visible/hidden portal state
  Portal, // The rendered component
  portalRef, // returns teh component ref 
  ...customEventHandlers  //  
}
```
