# SectionInfo

A responsive `section` container to display custom information based on Title and Content structure.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-section-info --save
```

## Usage
Provide an `string` to a `title` prop and wrap a child component as a `content`. If no `title` prop is provided or contains an empty string `''` the corresponding Title DOM element won't be rendered.

Check out **Basic Usage** section to get further info.

Set custom values to container sizing and flex properties using the following Sass variables:

```scss
// Max-width Section container value
$mw-section-info: 670px !default;

$c-sui-section-info-border: $c-gray-light !default;
$bdb-section-info: 1px solid $c-sui-section-info-border !default;

// Flex Grow Title and Container
$fg-section-info-title: 0 !default;
$fg-section-info-content: 0 !default;

// Flex Shrink Title and Container
$fs-section-info-title: 0 !default;
$fs-section-info-content: 1 !default;

// Flex Basis Title and Container
$fb-section-info-title: 200px !default;
$fb-section-info-content: 100% !default;

// Title and Container font-sizing
$fz-section-info-title: $fz-l !default;
$fz-section-info-content: $fz-m !default;

// Margins
$m-section-info-title: 0 !default;
$m-section-info-content: 0 !default;

// Paddings
$p-section-info-title: $p-l $p-m !default;
$p-section-info-content: 0 $p-m !default;
```

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