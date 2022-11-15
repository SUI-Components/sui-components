## PROJECT STRUCTURE
**SUI-COMPONENTS** is the **monorepo multi-package** project of **[Adevinta](https://www.adevinta.com/)** **Spain Design System React public components**. All React components are located under [**components**](https://github.com/SUI-Components/sui-components/tree/master/components) directory. Every single component is published as a complete pill with all its required dependencies. 

**SUI-COMPONENTS** use [sui-studio](https://www.npmjs.com/package/@s-ui/studio) as a component prototyping tool. This tool requires a specific directory strategy for managing each package. This strategy force every single **component package** be included in a **component-category** directory. **SUI-COMPONENTS** follows the atomic design component category for grouping our design system components.
```
components/[componentCategory]/[componentName]
```

### ATOMIC DESIGN
Atomic design is a methodology composed of distinct stages working together to create interface design systems in a more deliberate and hierarchical manner.

> "Atomic design gives us the ability to traverse from abstract to concrete. Because of this, we can create systems that promote consistency and scalability while simultaneously showing things in their final context. And by assembling rather than deconstructing, we’re crafting a system right out of the gate instead of cherry picking patterns after the fact." – **_Brad Frost_**

Atomic design is not a linear process, but rather a mental model to help us think of our user interfaces as both a cohesive whole and a collection of parts at the same time. Each stage plays a key role in the hierarchy of our interface design systems.

The stages of our atomic design are:
- [QUARKS](#quark)
- [HADRONS](#hadron)
  - [Design Tokens](#design-token)
  - [Custom Hooks](#custom-hookcomponentshook)
  - [Primitives](#primitivecomponentsprimitive)
  - [High Order Components (HOC)](#high-order-components-hoc)
- [ATOMS](#atomcomponentsatom)
- [MOLECULES](#moleculecomponentsmolecule)
- [ORGANISMS](#organismcomponentsorganism)
- [SPECIES](#speciecomponentsspecie)
- [ECOSYSTEMS](#ecosystemcomponentsecosystem)

## QUARK
**Quarks** are types of elementary parts and a fundamental constituent of components. They are functionalities available in React Library or native browser functionalities like css custom properties.

Examples:

- state, context
- Component and PureComponent
- [Official Hooks](https://reactjs.org/docs/hooks-reference.html) (useState, useEffect, useContext, useReducer, useCallback, useRef, ...)
- Children, Fragment
- createElement, createFactory, cloneElement, createPortal
- Profiler, ErrorBoundary
- Suspense and lazy

## HADRON
Quarks combine to form composite particles called **hadrons**. The most common are design-tokens, custom-hooks, primitives and High-Order-Components.

### DESIGN TOKEN
Design tokens represent the small, repeated design decisions that make up a design system's visual style. Tokens replace static values, such as hex codes for color, with self-explanatory names.

Tokens enable a design system to have a single source of truth. They provide a kind of repository for recording and tracking style choices and changes.

When using tokens for design and implementation, style updates will propagate consistently through an entire product or suite of products.

Because tokens are reusable and purpose-driven, they can define system-wide updates to themes and contexts for use. For example, tokens can be used to systematically apply a high-contrast color scheme for improved visibility, or to change the type scale to make small text legible on a TV.

### [CUSTOM-HOOK](components/hook)
A **custom-Hook** is a JavaScript function whose name starts with **”use”** and that may call other Hooks. Building your own Hooks lets you extract component logic into reusable functions.

Unlike a React component, a custom Hook does NOT need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. Its name should always **start with use** so that you can tell at a glance that the [rules of Hooks](https://reactjs.org/docs/hooks-rules.html) apply to it.

> **Do I have to name my custom Hooks starting with “use”?**
>
> Please do. This convention is very important. Without it, React would NOT be able to automatically check for rules of Hooks violations because React could NOT tell if a certain function contains calls to Hooks inside it.

Examples:

- useMount
- useOnScreen
- useOrientation
- useScroll
- useEventListener
- useInterval
- useBoolean
- useToggle
- useSteps
- useCopyToClipboard
- usePortal

### [PRIMITIVE](components/primitive)
Repetitive self-enclosed functionalities with no visual effect served as a Component. 

- Polymorphic-element
- Injector
- Field
- Group

### High Order Components (HOC)
> A higher-order component (HOC) is a function that takes a component and returns a new component. They are named using **"with"** prefix (withWhatever).

Whereas a component transforms props into UI, a higher-order component transforms a component into another component.

<details>
<summary>Example</summary>

```jsx
// The following example wraps a component and renders that or returns
// a fallback depending on the 'isLoading' prop boolean state.
// WrappedComponent
const WrappedComponent = ({children}) => <span>{children}</span>

// FallbackComponent

// HOC
const higherOrderComponent = (
  WrappedComponent,
  FallbackComponent = () => 'loading...'
) => {
  return ({isLoading, ...props}) => {
    const Component = isLoading ? FallbackComponent : WrappedComponent
    return <Component {...props} />
  } 
}

// Resulting HighOrderComponentWrappedComponent
const EnhancedComponent = higherOrderComponent(WrappedComponent);

<EnhancedComponent />
```
</details>

HOC are NEVER used in **SUI_COMPONENTS**. We prefer composition over inheritance coding approach, and we believe that using hooks is readable than wrapping a component with a HOC.  

## [ATOM](components/atom)
**Atoms** are the basic building blocks of all matter. Each chemical element has distinct properties, and they can’t be broken down further without losing their meaning

Examples:

- Button
- Input
- Checkbox
- Radio
- ...


## [MOLECULE](components/molecule)
**Molecules** are groups of two or more atoms held together by chemical bonds. These combinations of atoms take on their own unique properties, and become more tangible and operational than atoms.

Examples:

- Autocomplete
- Select
- Accordion
- Carousel
- Tabs
- Stepper
- ...

## [ORGANISM](components/organism)
**Organisms** are assemblies of molecules functioning together as a unit. These relatively complex structures can range from single-celled organisms all the way up to incredibly sophisticated organisms like human beings.

Examples:

- Navbar
- Menu
- Timeline
- Table
- ...

## [SPECIE](components/specie)
**Species** are advanced life forms with a large number of different types of views and a single purpose. 

Examples:

- DateManager: DatePicker, RangePicker, DateTimePicker, ...
- FileManager: FileDirectory, PhotoEditor, ...
- Form
- ...

## [ECOSYSTEM](components/ecosystem)
**Ecosystem** is the environment where all the different containing elements exist. 

Examples:

- Theme Provider
- Notification Manager (Toast)
- Internationalization Provider
- Device Detector
- Shortcut Provider
- Network Detection
- ...