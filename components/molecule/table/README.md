# MoleculeTable

`MoleculeTable` is a component used to display and organize a set of data.  It has a responsive mode to simplify the visualization of data in smartphones and tablets.

## Installation

```sh
$ npm install @s-ui/react-molecule-table --save
```

## Usage

```js
import MoleculeTable from '@s-ui/react-molecule-table'

const data = [
    {id: "bff49bab-3a59-48e9-ac92-996f96e665df", name: "Brennan Jones", age: 62, address: "264 Leland Meadow"},
    {id: "6dd1946a-9777-43da-97d4-2277479c80a9", name: "Berenice Hahn", age: 73, address: "515 Kozey Branch"},
    {id: "6ecc615a-aaed-48ea-813c-6cf89db41e26", name: "Mr. Giuseppe Howell", age: 98, address: "416 Carter Crossroad"},
    {id: "34789772-74a8-4727-8a0e-6e81b9bc03f6", name: "Zoila Von", age: 83, address: "53361 Nora Stravenue"},
    {id: "e71dca71-2001-49d7-96d5-437f6805d4ce", name: "Mikel Abbott III", age: 34, address: "46588 Rosanna Mountain"}
]
```

### Basic usage

```js

const columns = [
  { title: 'Id', dataIndex: 'id', key: 'id', width: '25%' },
  { title: 'Name', dataIndex: 'name', key: 'name', width: '25%' },
  { title: 'Age', dataIndex: 'age', align: 'right', key: 'age', width: '15%' },
  { title: 'Address', dataIndex: 'address', key: 'address', width: '35%' }
]
```

```js
<MoleculeTable
  dataSource={data}
  columns={columns}
  title="Table Example Sort (Client)"
/>
```

### Sorting (Client)

```js
const columns = [
  { title: 'Id', dataIndex: 'id', key: 'id', width: '25%' },
  { title: 'Name', dataIndex: 'name', key: 'name', width: '25%', 
    sorter: (a, b) => a.name.length - b.name.length }
  { title: 'Age', dataIndex: 'age', align: 'right', key: 'age', width: '15%',  
    sorter: (a, b) => a.age - b.age}
  { title: 'Address', dataIndex: 'address', key: 'address', width: '35%' }
]
```

```js
<MoleculeTable
  dataSource={data}
  columns={columns}
  title="Table Example Sort (Client)"
/>
```

### Sorting (Backend)

```js
const columns = [
  { title: 'Id', dataIndex: 'id', key: 'id', width: '25%' },
  { title: 'Name', dataIndex: 'name', key: 'name', width: '25%', sorter: true },
  { title: 'Age', dataIndex: 'age', align: 'right', key: 'age', width: '15%',  sorter: true },
  { title: 'Address', dataIndex: 'address', key: 'address', width: '35%' }
]
```

```js
<MoleculeTable
  dataSource={data}
  columns={columns}
  title="Table Example Sort (Client)"
  onChange={(pagination, filters, {columnKey: sortBy, order} = {})  => {
      // get data from server and "rehydrate" dataSource w/ new data
  }}
/>
```

### Row Selection

```js
const columns = [
  { title: 'Id', dataIndex: 'id', key: 'id', width: '25%' },
  { title: 'Name', dataIndex: 'name', key: 'name', width: '25%'},
  { title: 'Age', dataIndex: 'age', align: 'right', key: 'age', width: '15%'},
  { title: 'Address', dataIndex: 'address', key: 'address', width: '35%' }
]
```

```js
<MoleculeTable
    rowSelection={{ onChange: console.log }}
    dataSource={data}
    columns={columns}
    title="Table Example Row Selection"
/>
```

### With Actions

```js

import {
  IconFillBackup,
  IconFillDashboard
} from './Icons'

const columns = [
  { title: 'Id', dataIndex: 'id', key: 'id', width: '25%' },
  { title: 'Name', dataIndex: 'name', key: 'name', width: '25%'},
  { title: 'Age', dataIndex: 'age', align: 'right', key: 'age', width: '15%'},
  { title: 'Address', dataIndex: 'address', key: 'address', width: '35%' }
]


const Actions = (
  {record, index}
) => (
  <span style={{display: 'flex'}}>
    <span
      style={{cursor: 'pointer'}}
      onClick={() => console.log({record, index})}
    >
      <IconFillBackup />
    </span>
    <span
      style={{cursor: 'pointer'}}
      onClick={() => console.log({record, index})}
    >
      <IconFillDashboard />
    </span>
  </span>
)
```

```js
<MoleculeTable
    actions={<Actions />}
    dataSource={data}
    columns={columns}
    title="Table Example With Actions"
/>
```

### With Complex Cell

```js

const data = [
  {
    id: "4934cc00-35f5-4621-ac52-b0e353745a0f",
    user: {
      name: "Peggie Turcotte",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/boxmodel/128.jpg",
      company: "Murazik, Brakus and Kub",
      age: 69,
      address: "1758 Raven Trail",
      tags: "Money Market Account Outdoors Cliff"
    },
    comments: "quaerat"
  },
  {
    id: "2703c92d-00ac-4600-84e4-c3462ca0f7db",
    user: {
      name: "Lavern Rath",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/sergeysafonov/128.jpg",
      company: "Weissnat and Sons",
      age: 90,
      address: "332 Stamm Pine",
      tags: "red"
    },
    comments: "Ut perferendis quia accusamus culpa delectus eos consequatur velit. Minima sunt qui dolore sed porro..."
  },
  {
    id: "c7203d4e-ddde-4435-83d4-356fca755e7d",
    user: {
      name: "Erin Sauer PhD",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/cyril_gaillard/128.jpg",
      company: "Jacobson, Blick and Collins",
      age: 35,
      address: "87128 Tyrique Centers",
      tags: "productivity"
    },
    comments: "sed"
  },
  {
    id: "42053bf6-67c0-4923-ab34-cce7f898ef29",
    user: {
      name: "Efrain McDermott",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/osmanince/128.jpg",
      company: "Hills, Eichmann and Turner",
      age: 27,
      address: "6969 Kuhic Meadows",
      tags: "SDD Forward Division"
    },
    comments: "Totam corporis cumque dolorem pariatur quae et facere. Quo repellendus in impedit veritatis et omnis..."
  },
  {
    id: "bf7b8044-fd80-47de-bc09-27b26fc22d21",
    user: {
      name: "Mack Veum",
      image: "https://s3.amazonaws.com/uifaces/faces/twitter/maximsorokin/128.jpg",
      company: "Morar and Sons",
      age: 85,
      address: "5577 Luna Street",
      tags: "Toys harness"
    },
    comments: "Ducimus non voluptas enim.\nInventore et consequuntur odio.\nEaque accusamus enim hic quidem possimus ..."
  }
]

const columns = [
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
      {name, image, company, age, address, tags}
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

```

```js
<MoleculeTable
  dataSource={data}
  columns={columns}
  title="Table With Complex Cell"
/>
```

### Mobile mode

```js

const columns = [
  { title: 'Id', dataIndex: 'id', key: 'id', width: '25%' },
  { title: 'Name', dataIndex: 'name', key: 'name', width: '25%' },
  { title: 'Age', dataIndex: 'age', align: 'right', key: 'age', width: '15%' },
  { title: 'Address', dataIndex: 'address', key: 'address', width: '35%' }
]
```

```js
<MoleculeTable
  dataSource={data}
  columns={columns}
  title="Table Example Sort (Client)"
  mobile
/>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/table/demo).**