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
      src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiM3NzciLz4KPC9zdmc+',
      alt: 'placeholder'
    }
    fallback={
      src: 'https://satyr.io/50',
      alt: '50x50 image'
    }
  />
)
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/thumbnail/list/demo).**
