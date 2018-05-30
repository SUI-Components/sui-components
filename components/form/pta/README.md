# FormPta

> Description

This component act as a wrapper to show PTA formbuilder APP into an iframe.

## Installation

```sh
$ npm install @schibstedspain/sui-form-pta --save
```

## Usage

### Basic usage
```js
import FormPta from '@schibstedspain/sui-form-pta'

return (
  <FormPta
    enableDraft={false}
    formUrl='http://url.demo'
    redirectOnErrorUrl='http://url.demo/error'
    redirectOnSuccessUrl='http://url.demo/success'
  />
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/form/pta/demo).**
