# ThumbnailBasic

> Shows an image with an optional caption text. Can also be used as a link

## Installation

```sh
$ npm install @schibstedspain/sui-thumbnail-basic --save
```

## Usage

### Basic usage
```js
import ThumbnailBasic from '@schibstedspain/sui-thumbnail-basic'

return (
  <ThumbnailBasic
    src='image source'
    alt='image alt'
    href='link'
    target='link target'
    captionText='Show!'
    placeholder={
      <img src='image to be shown until loading thumbnailBasic src' />
    }
  />
)
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/thumbnail/basic/demo).**
