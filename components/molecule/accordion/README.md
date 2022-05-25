# MoleculeAccordion

> The accordion is the component that contains collapsible components that allows the user to expand or collapse the content. We use this component to reduce the content of a page or section.

## Installation

```sh
$ npm install @s-ui/react-molecule-accordion --save
```

## Usage

```js
import MoleculeAccordion from '@s-ui/react-molecule-accordion'
```

### Basic usage

```js
<MoleculeAccordion behavior={moleculeAccordionBehavior.SINGLE}>
  <AccordionItem
    value="value-1"
    label="Accordion Item Label 1"
    content="content 1"
  />
  <AccordionItem
  value="value-2"
  label="Accordion Item Label 2"
  content="content 2"
  />
</MoleculeAccordion>
```

> **Find full description and more examples in the [demo page](#).**
