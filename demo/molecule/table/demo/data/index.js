import React from 'react'

import AtomTag, {atomTagSizes} from '@schibstedspain/sui-atom-tag'

import {
  generateDataTable,
  generateDataTableComplexCell
} from '../helpers/dataGenerator'

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M17.25 2.83V2.5a.75.75 0 1 0-1.5 0v.25h-7.5V2.5a.75.75 0 0 0-1.5 0v.33a4.73 4.73 0 0 0-4 4.67v9a4.76 4.76 0 0 0 4.75 4.75h9a4.76 4.76 0 0 0 4.75-4.75v-9a4.73 4.73 0 0 0-4-4.67zm2.5 6.42v7.25a3.25 3.25 0 0 1-3.25 3.25h-9a3.25 3.25 0 0 1-3.25-3.25V9.25h15.5zm0-1.75v.25H4.25V7.5A3.25 3.25 0 0 1 7.5 4.25h9a3.25 3.25 0 0 1 3.25 3.25zM14.5 18.25a2.75 2.75 0 0 1-2.75-2.75v-1a2.75 2.75 0 0 1 2.75-2.75h1a2.75 2.75 0 0 1 2.75 2.75v1a2.75 2.75 0 0 1-2.75 2.75h-1zm-1.25-3.75v1a1.25 1.25 0 0 0 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-1c0-.69-.56-1.25-1.25-1.25h-1c-.69 0-1.25.56-1.25 1.25z" />
  </svg>
)

const BASE_CLASS_DEMO = 'DemoMoleculeTable'
const CLASS_COMPLEX_CELL = `${BASE_CLASS_DEMO}-complexCell`

const columnsSorter = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: 'Age',
    dataIndex: 'age',
    align: 'right',
    key: 'age',
    width: 100,
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
]

const columnsNoSorter = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    width: '25%'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '25%',
    sorter: true
  },
  {
    title: 'Age',
    dataIndex: 'age',
    align: 'right',
    key: 'age',
    width: '15%',
    sorter: true
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: '35%'
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
    sorter: true,
    width: 60,
    align: 'right'
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

const columnsComplexCell = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    width: '25%'
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    width: '40%',
    render: (
      {name, image, company, age, address, tags} // eslint-disable-line
    ) => (
      <div className={CLASS_COMPLEX_CELL}>
        <img src={image} />
        <div>
          <p>
            <strong>
              {name} ({age})
            </strong>
          </p>
          <p>
            <em>{company}</em>
          </p>
          <p>
            <span>{address}</span>
          </p>
          <p>
            {tags
              .split(' ')
              .map((tag, i) => (
                <AtomTag
                  key={i}
                  icon={<Icon />}
                  label={tag}
                  size={atomTagSizes.SMALL}
                />
              ))}
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Comments',
    dataIndex: 'comments',
    key: 'comments',
    width: '35%'
  }
]

const dataSource = generateDataTable(100)
const dataSourceComplexCell = generateDataTableComplexCell(100)

export {
  dataSource,
  columnsSorter,
  columnsNoSorter,
  columnsWithActions,
  columnsComplexCell,
  dataSourceComplexCell
}
