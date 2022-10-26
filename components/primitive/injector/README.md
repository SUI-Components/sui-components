# PrimitiveInjector

> Description

## Installation

```sh
$ npm install @s-ui/react-primitive-injector
```

## Usage

### Basic usage

#### Import package and use the component

```js
import Injector from '@s-ui/react-primitive-injector'
import {Fragment} from 'react'

const Component = ({
  children,
  className = 'injectorClassName',
  injectedProp = 'injectedProp',
  ignoredProp = false
}) => {
  return (
    <Injector
      className={className}
      injectedProp={injectedProp}
      ignoredProp={ignoredProp}
    >
      <Children className="childrenClassName" ignoredProp keptProp />
      <Fragment>
        <Children className="fragmentChildrenClassName" ignoredProp keptProp />
      </Fragment>
      {children}
    </Injector>
  )
}
```

The package also provides the default injector behavior as an equivalent function using:

```js
import {inject} from '@s-ui/react-primitive-injector'

// inject(children<React.Node/>, settings<Array>{props, combine, proviso}</Array)

const Component = ({
  children,
  className = 'injectorClassName',
  injectedProp = 'injectedProp',
  ignoredProp = false
}) => {
  return inject(
    <>
      <Children className="childrenClassName" ignoredProp keptProp />
      <>
        <Children className="fragmentChildrenClassName" ignoredProp keptProp />
      </>
      {children}
    </>,
    [{props: {className, injectedProp, ignoredProp}}]
  )
}
```

> **Find full description and more examples in the [demo page](#).**
