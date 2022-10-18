# AtomSpinner

> An animated loop used for giving users feedback while the content of a page or section is being loaded.

## Installation

```sh
$ npm install @s-ui/react-atom-spinner --save
```

## Usage

### Basic usage

```js
import AtomSpinner from '@s-ui/react-atom-spinner'

return (
  <AtomSpinner />
)
```

### Full Screen Spinner
By default ```type``` prop has ```atomSpinnerTypes.SECTION``` value.

```js
import AtomSpinner, {atomSpinnerTypes} from '@s-ui/react-atom-spinner'

return (
  <AtomSpinner type={AtomSpinnerTypes.FULL} />
)
```

### Delayed Spinner
You can delay when the Spinner is shown.

```js
import AtomSpinner from '@s-ui/react-atom-spinner'

return (
  <AtomSpinner isDelayed  />
)
```

### Overlay Types
Different overlay types can be selected. Each one modify the overlay background color and the colors of the loader. All of these can be customized in your theme.
Options are: ```LIGHT``` (default), ```ACCENT```, ```DARK```, ```PRIMARY``` and ```TRANSPARENT```.

```js
import AtomSpinner, {atomSpinnerOverlayTypes} from '@s-ui/react-atom-spinner'

return (
  <AtomSpinner overlayType={atomSpinnerOverlayTypes.DARK} />
)
```

### Custom Children
Children of ```AtomSpinner``` are injected with the same props ```AtomSpinner``` is receiving and with the component's default ones.
In the following example, CustomChildren can be a reusable component.
```js
import {atomSpinnerOverlayTypes. atomSpinnerTypes} from '@s-ui/react-atom-spinner'
import cx from 'classnames'

const CustomChildren = ({children, loader, overlayType, type}) => {
  const className = cx('readme-custom-children', {
    'readme-custom-children--dark':
      overlayType === atomSpinnerOverlayTypes.DARK,
    'readme-custom-children--fullPage': type === atomSpinnerTypes.FULL
  })

  return (
    <>
      {loader}
      // the use of `loader` is not mandatory, and can be replaced
      <div className={className}>{children}</div>
    </>
  )
}
```

```js
import AtomSpinner, {atomSpinnerOverlayTypes. atomSpinnerTypes} from '@s-ui/react-atom-spinner'
import CustomChildren from './CustomChildren.js'

return (
  <>
  <AtomSpinner>
    <CustomChildren>With custom children</CustomChildren>
  </AtomSpinner>
  <AtomSpinner overlayType={atomSpinnerOverlayTypes.DARK} type={atomSpinnerTypes.FULL}>
    <CustomChildren>
      With custom children but receiving different props through AtomSpinner
    </CustomChildren>
  </AtomSpinner>
  </>
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/spinner/demo).**
