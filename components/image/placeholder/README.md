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
      <svg viewBox='0 0 1 1'>
        <rect width='100%' height='100%' />
      </svg>
    }
    fallback={
      <img src='https://satyr.io/500' className='some-important-class' alt='500x500' />
    }
  />
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/image/placeholder/demo).**
