# CmpModal

This component shows a Modal to let the user know about the consents, purposes and vendors that will use cookies in the platform to give different services. The modal connects with a `cmp` library in order to show all the data and let the user customize it, when possible.

*Required* You need to have loaded the `cmp` compliant library in order to be able to use this component. Otherwise it won't be shown.

## Installation

```sh
$ npm install @s-ui/react-cmp-modal --save
```

## Usage

### Basic usage
```js
import CmpModal from '@s-ui/react-cmp-modal'

return (
  <CmpModal
    onExit={() => { alert('User accepted everything, he wants to exit')}}
    retrieveConsentsFromCmp
    logo="https://www.website.com/img/logo.png"
    privacyUrl='https://www.website.com/privacy-url'
  />
)
```


> **Find full description and more examples in the [demo page](http://sui-components.now.sh/workbench/cmp/modal/demo).**