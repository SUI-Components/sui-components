# SectionInfo

A responsive `section` container to display custom information based on Title and Content structure.
## Installation

```sh
$ npm install @schibstedspain/sui-section-info --save
```

## Usage
Provide an `string` to a `title` prop and wrap a child component as a `content`.
Provide a `className` to set a custom classname to the container.
Check out **Basic Usage** section to get further info.

### Basic usage
```js
import SectionInfo from '@schibstedspain/sui-section-info'

const extras = 'Extras'
const extrasElement = <ul><li>air conditioning</li><li>elevator</li><li>parking</li></ul>

return (
  <SectionInfo className={'MyCoolSection'} title={extras}>
    {extrasElement}
  </SectionInfo>
)
```


> **Find full description and more examples in the [demo page](#).**