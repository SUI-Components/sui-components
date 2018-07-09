# CmpBanner

This component shows a Banner to inform the user that the website use cookies with different purposes. From here, it could just accept it and keep using the website or open the <CmpModal> in order to know more about this and even customize the consents.

The banner will be shown only if the user hasn't accepted yet the consents.

*Required* You need to have loaded the `cmp` compliant library in order to be able to use this component. Otherwise it won't be shown.

## Installation

```sh
$ npm install @s-ui/react-cmp-banner --save
```

## Usage

### Basic usage
```js
import CmpBanner from '@s-ui/react-cmp-banner'

return (
    <CmpBanner
      companyName="Your Company Name LTD"
      logo="https://www.schibsted.es/wp-content/themes/Schibsted-spn/img/logo.png"
      privacyUrl="#privacy-url-to-configure"
    />
)
```


> **Find full description and more examples in the [demo page](http://sui-components.now.sh/workbench/cmp/banner/demo).**