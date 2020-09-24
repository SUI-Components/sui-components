# MoleculeAvatar 👤

The Avatar component is the representation of a user.

## Installation

```sh
$ npm install @s-ui/react-molecule-avatar
```

## Usage

### Basic usage

#### Import package and use the component

```js
import MoleculeAvatar from '@s-ui/react-molecule-avatar'

return (<MoleculeAvatar />)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
// @import 'your theme';
@import '~@s-ui/react-molecule-avatar/lib/index';
```

### Fallbacks

#### Icon

If no `name` or `src` is set, a default icon will be displayed by default, it can be customized using `fallbackIcon` prop

```jsx
import MoleculeAvatar from '@s-ui/react-molecule-avatar'

const FallbackIconStory = () => (
  <>
    <MoleculeAvatar />
    <MoleculeAvatar fallbackIcon={<Icon />}/>
  </>
);
```

#### Name

If `name` is set but `src` is not the initials of the name will be used to generate a accessible background color

```jsx
import MoleculeAvatar from '@s-ui/react-molecule-avatar'

const FallbackNameStory = () => (
  <>
    <MoleculeAvatar name="Jon Snow" />
  </>
);
```

### Size

Modify the size of the avatar with `size` prop. Choose between `small`, `medium`, `large` and `xlarge`

```jsx
import MoleculeAvatar, {AVATAR_SIZES} from '@s-ui/react-molecule-avatar'

const SizeStory = () => (
  <>
    <MoleculeAvatar size={USER_AVATAR_SIZES.SMALL} />
    <MoleculeAvatar size={USER_AVATAR_SIZES.MEDIUM} />
    <MoleculeAvatar size={USER_AVATAR_SIZES.LARGE} />
    <MoleculeAvatar size={USER_AVATAR_SIZES.XLARGE} />
  </>
);
```

### Image

If `src` is set an image will be displayed, if it fails one of the fallbacks will be used instead.

```jsx
import MoleculeAvatar from '@s-ui/react-molecule-avatar'

const ImageStory = () => (
  <>
    <MoleculeAvatar name="Jon Snow" src="https://www.images/jon_snow.png" />
  </>
);
```

### Badge

Use `MoleculeAvatar.Badge` component to display a status badge.

```jsx
import MoleculeAvatar from '@s-ui/react-molecule-avatar'

const BadgeStory = () => (
  <>
    <MoleculeAvatar name="Jon Snow">
      <MoleculeAvatar.Badge />
    </MoleculeAvatar>
  </>
);
```

> **Find full description and more examples in the [demo page](#).**