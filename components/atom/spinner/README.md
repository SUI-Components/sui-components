# AtomSpinner

> An animated loop used for giving users feedback while the content of a page or section is being loaded.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/spinner/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,spinner)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-spinner?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-spinner)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Aspinner&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Aspinner)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-spinner)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/spinner/LICENSE.md)

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

## Accessibility Features

The Spinner component is WCAG 2.2 compliant and includes the following accessibility features:

- Uses appropriate ARIA role="status" for loading state
- Provides screen reader feedback via aria-live regions
- Respects user's motion preferences (prefers-reduced-motion)
- Supports customizable ARIA labels
- Does not interfere with keyboard navigation
- Offers animation speed control

### Usage with Accessibility Options

```jsx
// Basic usage with accessibility props
<AtomSpinner 
  ariaLabel="Loading profile data"
  ariaLive="polite"
  speed="slow"
  disableAnimation={false}
/>

// For users who prefer reduced motion
<AtomSpinner disableAnimation={true} />
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/spinner/demo).**
