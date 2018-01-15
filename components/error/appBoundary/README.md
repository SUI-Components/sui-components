# ErrorAppBoundary

> Sample reusable React error boundary component for React 16+

The simplest way to use a boundary is to wrap it around any component that may throw an error. This will handle errors thrown by that component's descendents also. This component is specially prepared to wrap your whole App in order to show a message to the user when an unexpected Error happened.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-error-appBoundary --save
```

### Basic usage
```js
import ErrorAppBoundary from '@schibstedspain/sui-error-appBoundary'

return (
  <ErrorAppBoundary
    buttonLabel='OK!'
    icon={<SvgErrorIcon />}
    message='Oops! An error has occurred! Nasty plasty! Sorry!'
    onError={({ errorMessage, errorStack }) => console.error({ errorMessage, errorStack })}
  >
    <main>
      <AppHeader />
      <BodyContent />
      <Footer />
    </main>
  </ErrorAppBoundary>
)
```


> **Find full description and more examples in the [demo page](#).**
