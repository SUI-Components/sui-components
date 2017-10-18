# PaginationBasic

> Component with a basic pagination system

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-pagination-basic --save
```

## Usage

### Basic usage
```js
import PaginationBasic from '@schibstedspain/sui-pagination-basic'

return (
  <PaginationBasic
    currentPage={20}
    handlePaginate={() => {}}
    showFirstLast
    totalPages={40}
    window={10}
  />
)
```

> **Find full description and more examples in the [demo page](#).**
