# AtomSkeleton

> Skeleton is used to display the loading state of a component while avoding layout shift.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-atom-skeleton
```

## Usage

### Basic usage

#### Import package and use the component

```js
import AtomSkeleton from '@s-ui/react-atom-skeleton'

return (<AtomSkeleton />)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
@import '~@s-ui/react-atom-skeleton/lib/index';
```

### Variant

Use `variant` prop to shape the skeleton and make it look like the final user interface. Choose between `round`, `square` and `circle`.

```jsx
import AtomSkeleton, {ATOM_SKELETON_VARIANTS} from '@s-ui/react-atom-skeleton'

const VariantStory = () => (
  <>
    <AtomSkeleton variant={ATOM_SKELETON_VARIANTS.circle} />
    <AtomSkeleton variant={ATOM_SKELETON_VARIANTS.round} />
    <AtomSkeleton variant={ATOM_SKELETON_VARIANTS.square} />
  </>
);
```

### Size

While the `width` and `height` props could be set, it was made to be used directly in your components.

```jsx
import AtomSkeleton from '@s-ui/react-atom-skeleton'

const SizeStory = () => (
  <>
    <AtomSkeleton height="16px" />
    <h2>
      <AtomSkeleton />
    </h2>
  </>
);
```

### Animation

Use `animation` prop to choose between `wave` and `pulse` animation, if the prop is set to `false` the component won't have any.

```jsx
import AtomSkeleton, {ATOM_SKELETON_ANIMATIONS} from '@s-ui/react-atom-skeleton'

const VariantStory = () => (
  <>
    <AtomSkeleton animation={ATOM_SKELETON_ANIMATIONS.wave} />
    <AtomSkeleton animation={ATOM_SKELETON_ANIMATIONS.pulse} />
    <AtomSkeleton animation={false} />
  </>
);
```

### Count

```jsx
const VariantStory = () => (
  <>
    <AtomSkeleton count={4} />
  </>
);
```

> **Find full description and more examples in the [demo page](#).**