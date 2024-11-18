# MoleculeAvatar 👤

The Avatar component is the representation of a user.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/avatar/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,avatar)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-avatar?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-avatar)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Aavatar&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Aavatar)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-avatar)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/avatar/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-avatar
```

## Usage

### Basic usage

#### Import package and use the component

```js
import MoleculeAvatar from '@s-ui/react-molecule-avatar'

return <MoleculeAvatar />
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
    <MoleculeAvatar fallbackIcon={<Icon />} />
  </>
)
```

#### Name

If `name` is set but `src` is not the initials of the name will be used to generate a accessible background color

```jsx
import MoleculeAvatar from '@s-ui/react-molecule-avatar'

const FallbackNameStory = () => (
  <>
    <MoleculeAvatar name="Jon Snow" />
  </>
)
```

### Size

Modify the size of the avatar with `size` prop. Choose between `xsmall`, `small`, `medium`, `large`, `xlarge` and `xxlarge`

```jsx
import MoleculeAvatar, {AVATAR_SIZES} from '@s-ui/react-molecule-avatar'

const SizeStory = () => (
  <>
    <MoleculeAvatar size={USER_AVATAR_SIZES.XSMALL} />
    <MoleculeAvatar size={USER_AVATAR_SIZES.SMALL} />
    <MoleculeAvatar size={USER_AVATAR_SIZES.MEDIUM} />
    <MoleculeAvatar size={USER_AVATAR_SIZES.LARGE} />
    <MoleculeAvatar size={USER_AVATAR_SIZES.XLARGE} />
    <MoleculeAvatar size={USER_AVATAR_SIZES.XXLARGE} />
  </>
)
```

### Image

If `src` is set an image will be displayed, if it fails one of the fallbacks will be used instead.

```jsx
import MoleculeAvatar from '@s-ui/react-molecule-avatar'

const ImageStory = () => (
  <>
    <MoleculeAvatar name="Jon Snow" src="https://www.images/jon_snow.png" />
  </>
)
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
)
```

> **Find full description and more examples in the [demo page](#).**
