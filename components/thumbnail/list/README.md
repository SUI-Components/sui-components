# ThumbnailList

> List of thumbnail-basic

## Installation

```sh
$ npm install @schibstedspain/sui-thumbnail-list --save
```

## Usage

### Basic usage
```js
import ThumbnailList from '@schibstedspain/sui-thumbnail-list'

return (
  <ThumbnailList
    items={items}
    captionText='Show!'
    placeholder={
      <img src='image to be shown until loading thumbnailBasic src' />
    }
    fallback={
      <img src='image to be shown if the thumbnail image fails' />
    }
  />
)
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/thumbnail/list/demo).**
