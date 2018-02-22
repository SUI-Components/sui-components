# GigyaGlobalEvents

> Description

<!-- ![](./assets/preview.png) -->

This component acts as a middleware between Gigya event handler and our components or use cases.
The main reason is because Gigya has no way to clear the registered listeners, this leads to errors when our SPA mounts a component multiple times.

This solution allow us to register as many listeners as we want, and provide us with the ability to unregister on change props or when the component is unmounted.

## Installation

```sh
$ npm install @schibstedspain/sui-gigya-global-events --save
```

## Usage

### Basic usage
```js
import GigyaGlobalEvents from '@schibstedspain/sui-gigya-global-events'

return (<GigyaGlobalEvents onLogin={event => console.log('This will be executed onLogin')} onLogout={event => console.log('This will be executed onLogout')} />)
```

To see the full list of global events check [Gigya Documentation](https://developers.gigya.com/display/GD/accounts.addEventHandlers+JS)

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/gigya/globalEvents).**
