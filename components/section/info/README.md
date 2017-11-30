# SectionInfo

> A responsive `section` container to display custom information based on Title and Content structure.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-section-info --save
```

## Usage
Provide an `string` to a `title` prop and wrap a child component as a `content`.
Check out **Basic Usage** section to get further info.

### Basic usage
```js
import SectionInfo from '@schibstedspain/sui-section-info'

const extras = 'Extras'
const extrasElement = <ul><li>air conditioning</li><li>elevator</li><li>parking</li></ul>

return (
  <div>
    <SectionInfo title={extras}>
      {extrasElement}
    </SectionInfo>
  </div>
)
```


> **Find full description and more examples in the [demo page](#).**