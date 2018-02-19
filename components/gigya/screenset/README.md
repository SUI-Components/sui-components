# GigyaScreenset

> Description

<!-- ![](./assets/preview.png) -->

Injects a Gigya Screenset (Widget) into a container

## Installation

```sh
$ npm install @schibstedspain/sui-gigya-screenset --save
```

## Usage

### Basic usage
```js
import GigyaScreenset from '@schibstedspain/sui-gigya-screenset'

const screenSetOptions = {
  lang: 'es',
  deviceType: 'auto',
  screenSet: 'Default-RegistrationLogin',
  startScreen: 'Default-Login',
  containerID: 'gigya-login',
  onError: console.log,
  onAfterSubmit: console.log
}

return (<GigyaScreenset screenSetOptions={screenSetOptions} />)
```

To see the definition of `screenSetOptions` check [Gigya documentation](https://developers.gigya.com/display/GD/accounts.showScreenSet+JS)

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/gigya/screenset).**
