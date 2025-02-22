# MoleculeThumbnail

> Thumbnails are images that appear on cards, highlights or detail pages. They can be shown in different sizes and appearances. There are basically two variants: logos for company logos and avatars for person images.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/thumbnail/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,thumbnail)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-thumbnail?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-thumbnail)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Athumbnail&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Athumbnail)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-thumbnail)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/thumbnail/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-thumbnail --save
```

## Usage

### Basic usage
```js
import MoleculeThumbnail from '@s-ui/react-molecule-thumbnail'

return (<MoleculeThumbnail
          src='https://someImage'
          alt='Some alt'
          placeholder={placeholder}
        />)
```

### Properties

#### Shape
It can be 'SQUARED' or 'CIRCLED'. It is recommended to use squared shape for logos and circled shapes for avatars.
```js
<MoleculeThumbnail
  src='https://someImage'
  alt='Some alt'
  placeholder={placeholder}
  shape={moleculeThumbnailShape.CIRCLED}
/>
```

#### Ratio
It can have same height and width ('1:1' aspect ratio) or it can be landscape ('16:9' or '4:3' aspect ratio).
```js
<MoleculeThumbnail
  src='https://someImage'
  alt='Some alt'
  placeholder={placeholder}
  ratio={moleculeThumbnailRatio['4:3']}
/>
```
#### Size
Thumbnails are available in 4 different sizes. This sizes will be adapted depending on the screen resolution (more on Responsive).

- XSMALL
- SMALL
- MEDIUM
- LARGE

```js
<MoleculeThumbnail
  src='https://someImage'
  alt='Some alt'
  placeholder={placeholder}
  size={moleculeThumbnailSize.SMALL}
/>
```

#### CaptionText
If a text is included a background color should appear as well. Enough contrast should be provided to ensure accessibility (more on Accessibility).
```js
<MoleculeThumbnail
  src='https://someImage'
  alt='Some alt'
  placeholder={placeholder}
  captionText='Show!'
/>
```

### AtomImage Properties

#### Spinner

```js
import Spinner from '@s-ui/react-atom-spinner'
...

 <MoleculeThumbnail
  src={IMAGES.FINAL}
  alt="Some alt"
  href="https://someLink"
  target="_blank"
  spinner={<Spinner noBackground />}
  placeholder={IMAGES.PLACEHOLDER}
  size={moleculeThumbnailSize.MEDIUM}
/>

```

#### Error

```js
const ImageNotFoundIcon = () => {
  return (
    <svg width="40" height="40">
      <path d="M6.458 33.333c-1.72 0-3.125-1.382-3.125-3.077v-16.41c0-1.694 1.404-3.077 3.125-3.077h5.209l-.88.477 2.357-3.661a2.073 2.073 0 0 1 1.752-.918h9.791c.636 0 1.245.3 1.667.82l2.813 3.692-.834-.41h5.209c1.72 0 3.125 1.383 3.125 3.077v16.41c0 1.695-1.404 3.077-3.125 3.077H6.458zm0-2.05h27.084a1.04 1.04 0 0 0 1.041-1.027v-16.41a1.04 1.04 0 0 0-1.041-1.025h-5.209c-.328 0-.636-.152-.833-.41l-2.793-3.668c-.014-.017-.03-.025-.02-.025h-9.791c-.027 0-.01-.009-.006-.015l-2.344 3.64a1.046 1.046 0 0 1-.88.478H6.459a1.04 1.04 0 0 0-1.041 1.025v16.41a1.04 1.04 0 0 0 1.041 1.026zM20 29.23c-4.602 0-8.333-3.674-8.333-8.205 0-4.532 3.73-8.205 8.333-8.205 4.602 0 8.333 3.673 8.333 8.205 0 4.531-3.73 8.205-8.333 8.205zm0-2.052c3.452 0 6.25-2.755 6.25-6.153 0-3.399-2.798-6.154-6.25-6.154s-6.25 2.755-6.25 6.154c0 3.398 2.798 6.153 6.25 6.153zm-3.939-4.812a4.049 4.049 0 0 1 .751-3.984L3.66 5.23A1.111 1.111 0 0 1 5.23 3.66L18.7 17.127c.409-.132.847-.204 1.301-.204.454 0 .892.072 1.301.204L34.77 3.66A1.111 1.111 0 1 1 36.34 5.23L23.188 18.384a4.049 4.049 0 0 1 .75 3.983L36.342 34.77a1.111 1.111 0 0 1-1.571 1.571L22.634 24.205a4.19 4.19 0 0 1-2.634.923 4.19 4.19 0 0 1-2.634-.923L5.23 36.34A1.111 1.111 0 0 1 3.66 34.77L16.06 22.367zm14.356-5.444c-.576 0-1.042-.46-1.042-1.026 0-.566.466-1.025 1.042-1.025h1.041c.576 0 1.042.459 1.042 1.025 0 .567-.466 1.026-1.042 1.026h-1.041z" />
    </svg>
  )
}

const defaultErrorText = 'Image not found'

...

<MoleculeThumbnail
    src={IMAGES.BAD}
    alt="Some alt"
    captionText="Show!"
    spinner={<Spinner noBackground />}
    placeholder={IMAGES.PLACEHOLDER}
    errorIcon={<ImageNotFoundIcon />}
    errorText={defaultErrorText}
    size={moleculeThumbnailSize.LARGE}
  />
</div>

```

> **Find full description and more examples in the [demo page](#).**
