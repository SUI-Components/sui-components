# ScriptLoader

> Description

<!-- ![](./assets/preview.png) -->

This components ensures that the render prop is not executed until the given script has been loaded.
Also you can safely call this component in multiple places with the same src and it will load it only once.


## Installation

```sh
$ npm install @schibstedspain/sui-script-loader --save
```

## Usage

### Basic usage
```js
import ScriptLoader from '@schibstedspain/sui-script-loader'

return (<ScriptLoader src={src} verifier={() => true} isAsync={false} render={() => 'Ready to render!'} />)
```

**Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/script/loader).**
