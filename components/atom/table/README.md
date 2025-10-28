# AtomTable

> Atom Table to show tabular information.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/table/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,table)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-table?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-table)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Atable&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Atable)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-table)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/table/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-atom-table --save
```

## Usage

### Basic usage

#### CSS

```scss
@import '@s-ui/react-atom-table/lib/index';
```

#### Javascript

```js
import AtomTable from '@s-ui/react-atom-table'

const contentHead = [
  'Versión',
  'Año',
  'Combustible',
  'Potencia',
  'Precio',
  ''
]

const contentBody = [
  [
    {
      content: 'Volkswagen Golf Edition 1.0 TSI 85kW',
      type: 'th',
      isNowrap: true
    },
    {content: '2019'},
    {content: 'Gasolina'},
    {content: '115vc'},
    {content: 'Desde 24.000€'},
    {content: 'Más información'}
  ],
  [
    {
      content: 'Volkswagen Golf Edition 1.0 TSI 85kW',
      type: 'th',
      isNowrap: true
    },
    {content: '2019'},
    {content: 'Gasolina'},
    {content: '115vc'},
    {content: 'Desde 24.000€'},
    {content: 'Más información'}
  ]
]

return <AtomTable head={contentHead} body={contentBody} />
  
> **Find full description and more examples in the [demo page](#).**
```
