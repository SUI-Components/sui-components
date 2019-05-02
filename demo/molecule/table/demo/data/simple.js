import {generateDataTable} from '../helpers/dataGenerator'

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    width: 350
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    width: 150
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 300
  }
]

const dataSource = generateDataTable(100)

export {dataSource, columns}
