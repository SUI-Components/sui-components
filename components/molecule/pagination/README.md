# MoleculePagination

`MoleculePagination` is a component that displays a range of pages with the current page highlighted and the proper buttons to navigate across the available pages in the entire range of total pages

## Installation

```sh
$ npm install @s-ui/react-molecule-pagination --save
```

## Usage

```js
import MoleculePagination from '@s-ui/react-molecule-pagination'

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
<MoleculePagination totalPages={25} page={7} />
```

### Range of 5 pages
```js
<MoleculePagination totalPages={25} page={7} showPages={5}/>
```

### With icons
```js
<MoleculePagination totalPages={25} page={7} prevButtonIcon={prevButtonIcon} nextButtonIcon={nextButtonIcon}/>
```

### With translations
```js
<MoleculePagination totalPages={25} page={7} prevButtonText={prevButtonText} nextButtonText={nextButtonText}/>
```

### With callbacks
```js
<MoleculePagination totalPages={25} page={7} onClickNext={onClickNext} onClickPrev={onClickPrev} onClickPage={onClickPage}/>
```

### Full example
```js
<MoleculePagination 
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
