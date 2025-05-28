# MoleculePagination

`MoleculePagination` is a component that displays a range of pages with the current page highlighted and the proper buttons to navigate across the available pages in the entire range of total pages

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/pagination/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,pagination)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-pagination?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-pagination)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Apagination&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Apagination)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-pagination)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/pagination/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-pagination --save
```

## Usage

```js
import MoleculePagination from '@s-ui/react-molecule-pagination'

const ariaLabel = 'Paginación'
const prevLinkAriaLabel = 'Página previa'
const nextLinkAriaLabel = 'Página siguiente'
const pagePrefixAriaLabel = 'Página'

const prevButtonIcon = () => <span>&lt;</span>
const nextButtonIcon = () => <span>&gt;</span>
const prevButtonText = 'Anterior'
const nextButtonText = 'Siguiente'
const onSelectNext = (e, {page}) => { console.log({e, page}) }
const onSelectPrev = (e, {page}) => { console.log({e, page}) }
const onSelectPage = (e, {page}) => { console.log({e, page}) }
```

### Basic usage
```js
<MoleculePagination
  ariaLabel={ariaLabel}
  prevLinkAriaLabel={prevLinkAriaLabel}
  nextLinkAriaLabel={nextLinkAriaLabel}
  pagePrefixAriaLabel={pagePrefixAriaLabel} 
  totalPages={25} 
  page={7} 
  />
```

### Range of 5 pages
```js
<MoleculePagination
  ariaLabel={ariaLabel}
  prevLinkAriaLabel={prevLinkAriaLabel}
  nextLinkAriaLabel={nextLinkAriaLabel}
  pagePrefixAriaLabel={pagePrefixAriaLabel} 
  totalPages={25} 
  page={7}
  showPages={5}
  />
```

### With icons
```js
<MoleculePagination
  ariaLabel={ariaLabel}
  prevLinkAriaLabel={prevLinkAriaLabel}
  nextLinkAriaLabel={nextLinkAriaLabel}
  pagePrefixAriaLabel={pagePrefixAriaLabel} 
  totalPages={25} 
  page={7}
  prevButtonIcon={prevButtonIcon}
  nextButtonIcon={nextButtonIcon}
  />
```

### With translations
```js
<MoleculePagination
  ariaLabel={ariaLabel}
  prevLinkAriaLabel={prevLinkAriaLabel}
  nextLinkAriaLabel={nextLinkAriaLabel}
  pagePrefixAriaLabel={pagePrefixAriaLabel} 
  totalPages={25} 
  page={7}
  prevButtonText={prevButtonText}
  nextButtonText={nextButtonText}
  />
```

### With callbacks
```js
<MoleculePagination
  ariaLabel={ariaLabel}
  prevLinkAriaLabel={prevLinkAriaLabel}
  nextLinkAriaLabel={nextLinkAriaLabel}
  pagePrefixAriaLabel={pagePrefixAriaLabel} 
  totalPages={25} 
  page={7}
  onSelectNext={onSelectNext}
  onSelectPrev={onSelectPrev}
  onSelectPage={onSelectPage}
  />
```

### Full example
```js
<MoleculePagination 
  ariaLabel={ariaLabel}
  prevLinkAriaLabel={prevLinkAriaLabel}
  nextLinkAriaLabel={nextLinkAriaLabel}
  pagePrefixAriaLabel={pagePrefixAriaLabel} 
  totalPages={25} 
  page={7} 
  prevButtonIcon={prevButtonIcon}
  nextButtonIcon={nextButtonIcon}
  prevButtonText={prevButtonText} 
  nextButtonText={nextButtonText}
  onSelectNext={onSelectNext} 
  onSelectPrev={onSelectPrev} 
  onSelectPage={onSelectPage}
/>
```



> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/pagination/demo).**
