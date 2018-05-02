# MoleculeThumbnail

> Thumbnails are images that appear on cards, highlights or detail pages. They can be shown in different sizes and appearances. There are basically two variants: logos for company logos and avatars for person images.

<!-- ![](./assets/preview.png) -->

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


> **Find full description and more examples in the [demo page](#).**
