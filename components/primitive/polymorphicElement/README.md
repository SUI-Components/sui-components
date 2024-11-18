# PolymorphicElement

> Render a basic polymorphic element capable of rendering a specified html tag or component when passed as a property.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/primitive/polymorphicElement/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,primitive,polymorphicElement)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-primitive-polymorphic-element?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-primitive-polymorphic-element)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3ApolymorphicElement&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3ApolymorphicElement)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-primitive-polymorphic-element)](https://github.com/SUI-Components/sui-components/blob/main/components/primitive/polymorphicElement/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-primitive-polymorphic-element
```

## Usage

### Basic usage

#### Import package and use the component

```js
import PolymorphicElement from 'components/primitive/polymorphicElement/lib/index.js'

function Component() {}

return (
<>
  <PolymorphicElement as="div"/>
  <PolymorphicElement as="h1"/>
  <PolymorphicElement as={Component}/>
</>
)
```

### Properties

| Property | Type | Default | Description |
|---|---|---|---|
| as | string \| function | 'span' | Render the passed value as the correspondent HTML tag or the component if a function is passed. |

> **Find full description and more examples in the [demo page](#).**
