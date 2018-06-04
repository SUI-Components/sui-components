# SectionBasic

> Just a basic section container wrapped in a `<section>` HTML tag, with customisable margin-bottom between its inner elements and the possibility to add an <hr> separator.

## Installation

```sh
$ npm install @schibstedspain/sui-section-basic --save
```

## Usage

### Basic usage
```js
import SectionBasic, {sectionBasicBottomSpacing} from '@schibstedspain/sui-atom-panel'

return (
  <div>
    <SectionBasic
      title='Title of the section'
      separator
      sectionBottomSpacing={sectionBasicBottomSpacing.GIANT}
      headerBottomSpacing={sectionBasicBottomSpacing.XLARGE}
      contentBottomSpacing={sectionBasicBottomSpacing.MEDIUM}>
      <p>This section has a title</p>
      <p>There is a line separator displayed at the bottom of this section as an hr element.</p>
      <p>The margin-bottom of header, content and full section component have been customised.</p>
    </SectionBasic>
    <SectionBasic
      textContent='This section has no title, only text content and default vertical spacing.'
    />
  </div>
)

```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/section/basic/demo).**
