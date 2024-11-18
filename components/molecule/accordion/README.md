# MoleculeAccordion

> The accordion is the component that contains collapsible components that allows the user to expand or collapse the content. We use this component to reduce the content of a page or section.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/accordion/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,accordion)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-accordion?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-accordion)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Aaccordion&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Aaccordion)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-accordion)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/accordion/LICENSE.md)

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
