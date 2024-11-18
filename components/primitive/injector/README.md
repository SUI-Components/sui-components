# PrimitiveInjector

> Description

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/primitive/injector/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,primitive,injector)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-primitive-injector?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-primitive-injector)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Ainjector&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Ainjector)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-primitive-injector)](https://github.com/SUI-Components/sui-components/blob/main/components/primitive/injector/LICENSE.md)

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
