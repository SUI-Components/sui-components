# ImagePlaceholder

> Shows a placeholder while loading an image. You can also set a fallback to be loaded in case it fails loading the image.

## Installation

```sh
$ npm install @schibstedspain/sui-image-placeholder --save
```

## Usage

### Basic usage
```js
import ImagePlaceholder from '@schibstedspain/sui-image-placeholder'

return (
  <ImagePlaceholder
    src='https://satyr.io/1000'
    alt='1000x1000'
    placeholder={
      src: '...',
      alt: '...'
      ...imageTagAttributes
    }
    fallback={
      src: '...',
      alt: '...'
      ...imageTagAttributes
    }
  />
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/image/placeholder/demo).**
