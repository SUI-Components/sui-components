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

- ~~`useFullWidth`~~ --> **`isFullWidth`**: booleans MUST start with `isWathever` or `hasWhatever`. The `useWhatever` is a reserved prefix for react-hooks.
- ~~`useFullHeight`~~ --> **`isFullHeight`**: booleans MUST start with `isWathever` or `hasWhatever`. The `useWhatever` is a reserved prefix for react-hooks.
- ~~`doAfterInit`~~ --> **`onInit`**: handlers MUST have the `onWhatever` prefix in react .
- ~~`doAfterDestroy`~~ --> **`onDestroy`**: handlers MUST have the `onWhatever` prefix in react.
- ~~`doAfterSlide`~~ --> **`onSlideAfter`**: handlers MUST have the `onWhatever` prefix in react.
- ~~`doBeforeSlide`~~ --> **`onSlideBefore`**: handlers MUST have the `onWhatever` prefix in react.

**from**

```jsx
import Slidy from 'react-slidy'

return (
  <Slidy
    useFullWidth
    useFullHeight
    doAfterInit={AfterInit}
    doAfterDestroy={AfterDestroy}
    doAfterSlide={AfterSlide}
    doBeforeSlide={BeforeSlide}
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
    onInit={AfterInit}
    onDestroy={AfterDestroy}
    onSlideAfter={AfterSlide}
    onSlideBefore={BeforeSlide}
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
