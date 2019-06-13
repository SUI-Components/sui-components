# MoleculeTableField

`MoleculeTableField` is a compound component used to display and organize a set of data.  It includes `MoleculeTable`, `MoleculePagination` and ``MoleculeSelect` to simplify the selection of params applied to the requested data displayed in the table.

## Installation

```sh
$ npm install @s-ui/react-molecule-table-field --save
```

## Usage

```js
import MoleculeTableField, {WithStateTableField} from '@s-ui/react-molecule-table-field'
```

### Basic usage

```js
import axios from 'axios'

const urlClients = 'https://5ccbef39f47db80014010ca6.mockapi.io/clients'

const ORDERS = {
  ascend: 'asc',
  descend: 'desc'
}

const getClientsFromServer = async ({sortBy, order, page, pageSize}) => {
  const {data} = await axios.get(urlClients, {
    params: {sortBy, order: ORDERS[order], page, limit: pageSize}
  })
  // const totalPages = Math.round(data.length / pageSize)
  return {data, pagination: {page, pageSize, totalPages: 10}}
}

const columns = [
  { title: 'Id', dataIndex: 'id', key: 'id', width: '25%'},
  { title: 'Name', dataIndex: 'name', key: 'name', width: '25%', sorter: true },
  { title: 'Age', dataIndex: 'age', align: 'right', key: 'age', width: '15%', sorter: true },
  { title: 'Address', dataIndex: 'address', key: 'address', width: '35%' }
]

const MoleculeTableFieldWithDataFromServer = WithStateTableField(
  MoleculeTableField
)(getClientsFromServer)
```

```js
 <MoleculeTableFieldWithDataFromServer
    columns={columnsSorterBackend}
    title="Table Example Sort (Server)"
  />
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/table/demo).**