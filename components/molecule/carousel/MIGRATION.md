# MIGRATION

From [react-slidy](https://github.com/midudev/react-slidy) 4 to @s-ui/react-molecule-carousel

1. Update the dependency

**from**

```json
{
  "dependencies": {
    ...
    "react-slidy": "4.x.x",
    ...
  }
}
```

**to**

```json
{
  "dependencies": {
    ...
    "@s-ui/react-molecule-carousel": "1",
    ...
  }
}
```

2. Replace the imports

**from**

```js
import Slidy from 'react-slidy'
```

**to**

```js
import MoleculeCarousel from '@s-ui/react-molecule-carousel'
```

3. Replace props (if needed)

- The `useWhatever` is a reserved prefix for react-hooks.
- Booleans MUST start with `isWathever` or `hasWhatever`.
  - ~~`useFullWidth`~~ --> **`isFullWidth`**
  - ~~`useFullHeight`~~ --> **`isFullHeight`**
  - ~~`keyboardNavigation`~~ --> **`hasKeyboardNavigation`**
  - ~~`infiniteLoop`~~ --> **`hasInfiniteLoop`**
  - ~~`lazyLoadSlider`~~ --> **`hasLazyLoadSlider`**
  - ~~`sanitize`~~ --> **`isSanitized`**
  - ~~`showArrows`~~ --> **`hasArrows`**
- Handlers MUST have the `onWhatever` prefix in react.
  - ~~`doAfterInit`~~ --> **`onInit`**
  - ~~`doAfterDestroy`~~ --> **`onDestroy`**
  - ~~`doAfterSlide`~~ --> **`onSlideAfter`**
  - ~~`doBeforeSlide`~~ --> **`onSlideBefore`**
  - ~~`doBeforeSlide`~~ --> **`onSlideBefore`**
- The initial state have the `defaultWahetever` prefix.
  - ~~`initialSlide`~~ --> **`defaultSlide`**
- Prop name has NOT first capital letter
- Prop values SHOULD better be provided as element (not elementType) (nodes over Component entities)
  - ~~`ArrowLeft`~~ --> **`arrowLeft`**
  - ~~`ArrowRight`~~ --> **`arrowRight`**

**from**

```jsx
import Slidy from 'react-slidy'

return (
  <Slidy
    useFullWidth
    useFullHeight
    keyboardNavigation
    infiniteLoop
    lazyLoadSlider
    sanitize
    showArrows
    doAfterInit={afterInitHandler}
    doAfterDestroy={afterDestroyHandler}
    doAfterSlide={afterSlideHandler}
    doBeforeSlide={beforeSlideHandler}
    initialSlide={index}
    ArrowLeft={ArrowLeftComponent}
    ArrowRight={ArrowRightComponent}
  >
    <img alt="1" src="./image1.jpg" />
    <img alt="2" src="./image3.jpg" />
    <img alt="3" src="./image3.jpg" />
  </Slidy>
)
```

**to**

```jsx
import MoleculeCarousel from '@s-ui/react-molecule-carousel'

return (
  <MoleculeCarousel
    isFullWidth
    isFullHeight
    hasKeyboardNavigation
    hasInfiniteLoop
    hasLazyLoadSlider
    isSanitized
    hasArrows
    onInit={afterInitHandler}
    onDestroy={afterDestroyHandler}
    onSlideAfter={afterSlideHandler}
    onSlideBefore={beforeSlideHandler}
    defaultSlide={index}
    arrowLeft={<ArrowLeftComponent />}
    arrowRight={<ArrowRightComponent />}
  >
    <img alt="1" src="./image1.jpg" />
    <img alt="2" src="./image3.jpg" />
    <img alt="3" src="./image3.jpg" />
  </MoleculeCarousel>
)
```

> The package also includes an exported props transposer (adapter) to easy migrate from react-slidy props to @s-ui/react-molecule-carousel. This will only be maintained in V1, so please create a refactor task to remove the usage of that adapter and transpose manually the relation naming.

```jsx
import MoleculeCarousel, {
  adaptReactSlidyProps
} from '@s-ui/react-molecule-carousel'

return (
  <MoleculeCarousel
    {...adaptReactSlidyProps({
      useFullWidth: true,
      useFullHeight: true,
      keyboardNavigation: true,
      infiniteLoop: true,
      lazyLoadSlider: true,
      sanitize: true,
      showArrows: true,
      doAfterInit: afterInitHandler,
      doAfterDestroy: afterDestroyHandler,
      doAfterSlide: afterSlideHandler,
      doBeforeSlide: beforeSlideHandler,
      initialSlide: index,
      ArrowLeft: ArrowLeftComponent,
      ArrowRight: ArrowRightComponent,
      ...
      anyOtherProp: anyOtherPropValue
    })}
  >
    <img alt="1" src="./image1.jpg" />
    <img alt="2" src="./image3.jpg" />
    <img alt="3" src="./image3.jpg" />
  </MoleculeCarousel>
)
```

You also have new handlers

- **`onSlide`**: fired every time an index is changed
- **`onPrevious`**: fired every time rhe carousel takes previous index
- **`onNext`**: fired every time rhe carousel takes next index
