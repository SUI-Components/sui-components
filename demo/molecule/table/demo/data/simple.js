import React from 'react'
import {generateDataTable} from '../helpers/dataGenerator'

const columnsSorter = [
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

const columnsNoSorter = [
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
    width: 150,
    sorter: true
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: true
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 300
  }
]

const columnsWithActions = [
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
    width: 150,
    sorter: true
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: true
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 300
  },
  {
    title: 'Action',
    key: 'action',
    width: 360,
    render: (text, record, index) => {
      // console.log({text, record, index})
      return (
        <span>
          <a>Action 一 {record.name}</a>
          <a>Delete</a>
        </span>
      )
    }
  }
]

const dataSource = generateDataTable(100)

export {dataSource, columnsSorter, columnsNoSorter, columnsWithActions}
