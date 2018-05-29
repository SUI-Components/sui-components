# ScriptCriteo

> Component to load criteo with given props.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-script-criteo --save
```

## Usage

### Basic usage

```js
import ScriptCriteo from '@schibstedspain/sui-script-criteo'

return (
  <ScriptCriteo
    accountIds={[1234, 456]}
    customerId="12345678"
    siteType="m"
    hashedEmail="hashed-email-example"
    pageEvent={{ event: 'viewHome' }}
  />
)
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/script/criteo/demo).**
