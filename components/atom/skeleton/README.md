# AtomSkeleton

> Skeleton is used to display the loading state of a component while avoiding layout shift.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/skeleton/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,skeleton)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-skeleton?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-skeleton)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Askeleton&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Askeleton)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-skeleton)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/skeleton/LICENSE.md)

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

const AnimationStory = () => (
  <>
    <AtomSkeleton animation={ATOM_SKELETON_ANIMATIONS.wave} />
    <AtomSkeleton animation={ATOM_SKELETON_ANIMATIONS.pulse} />
    <AtomSkeleton animation={false} />
  </>
);
```

### Count

Use `count` prop to display several skeletons

```jsx
const CountStory = () => (
  <>
    <AtomSkeleton count={4} />
  </>
);
```

> **Find full description and more examples in the [demo page](#).**