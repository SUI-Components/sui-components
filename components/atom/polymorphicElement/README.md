# PolymorphicElement

> Render a basic polymorphic element capable of rendering a specified html tag or component when passed as a property.

This package is no-longer maintained. Please use `@s-ui/react-primitive-polymorphic-element`

## Installation

```sh
$ npm install @s-ui/react-atom-polymorphic-element
```

## Usage

### Basic usage

#### Import package and use the component

```js
import PolymorphicElement from 'components/atom/polymorphicElement/lib/index.js'

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
