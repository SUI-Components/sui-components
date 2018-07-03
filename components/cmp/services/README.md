# CmpServices

Components with render props that offers you different logic in order to use CMP library.

With <CmpServices>, you could inject the services methods to your children component using a render prop.

The available methods are:
- getConsentStatus
- getPurposesAndVendors
- sendConsents

## Installation

```sh
$ npm install @s-ui/react-cmp-services --save
```

## Usage of CmpServices

### Basic usage
```js
import CmpServices from '@s-ui/react-cmp-services'

return (
  <CmpServices>
    {({getConsentStatus, getPurposesAndVendors, sendConsents}) => (
      <CmpModalContainer
        {...this.props}
        getPurposesAndVendors={getPurposesAndVendors}
        sendConsents={sendConsents}
      />
    )}
  </CmpServices>
)
```

## Usage of CmpWaitForLibrary

Sometimes, you want to wait for the cmp library to be ready in order to start using it in your project. This component wraps a children component that will be render only when the CMP library is ready to be used. You could bypass the check by using a prop `cmpReady` to tell the component that you already know that the library is ready. This is useful in case you want a component to decide by props if you want to check or not if the library is ready.

```js
import {CmpWaitForLibrary} from '@s-ui/react-cmp-services'

return (
  <CmpWaitForLibrary>
    <h1>This message will be shown when the CMP library is ready</h1>
  </CmpWaitForLibrary>
)
```

> **Find full description and more examples in the [demo page](http://sui-components.now.sh/workbench/cmp/services/demo).**