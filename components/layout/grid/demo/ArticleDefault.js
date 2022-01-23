import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Label,
  H2,
  H4,
  Paragraph,
  Article,
  Code,
  RadioButtonGroup,
  RadioButton,
  Button
} from '@s-ui/documentation-library'

import LayoutGrid, {LayoutGridItem} from 'components/layout/grid/src/index.js'
import DemoWrapper from './demoWrapper.js'
import DemoBox from './demoBox.js'

const getWeirdSumCombinationArray = (values = [], max) => {
  const arrSum = arr => arr.reduce((a, b) => a + b, 0)
  const arrShuffle = array => array.sort(() => Math.random() - 0.5)
  const result = []
  while (arrSum(result) < max) {
    const possibleValues = values.filter(value => max - arrSum(result) >= value)
    if (possibleValues.length === 0) {
      break
    } else {
      const randomArrayIndex = array => Math.floor(Math.random() * array.length)
      result.push(possibleValues[randomArrayIndex(possibleValues)])
    }
  }
  return arrShuffle(result)
}

const ArticleDefaultDemo = ({columns, rows = 3}) => {
  const elements = columns * rows
  const size = 12 / columns
  return (
    <DemoWrapper>
      <LayoutGrid>
        {Array(elements)
          .fill(0)
          .map((e, i) => i + 1)
          .map(index => (
            <>
              <LayoutGridItem key={index} colSpan={size}>
                <DemoBox>
                  <Label style={{color: 'white'}}>s:{size}</Label>{' '}
                  <Label style={{color: 'white'}}>e:{index}</Label>
                </DemoBox>
              </LayoutGridItem>
            </>
          ))}
      </LayoutGrid>
    </DemoWrapper>
  )
}

ArticleDefaultDemo.propTypes = {
  columns: PropTypes.number,
  rows: PropTypes.number
}

const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const columnIndex = 12

const ArticleDefault = ({classname}) => {
  const [columnState, setColumnState] = useState('12')
  const [weirdColumns, setWeirdColumns] = useState([
    ...getWeirdSumCombinationArray(possibleValues, columnIndex),
    ...getWeirdSumCombinationArray(possibleValues, columnIndex),
    ...getWeirdSumCombinationArray(possibleValues, columnIndex)
  ])
  return (
    <Article className={classname}>
      <H2>How to use</H2>
      <Paragraph>
        To implement the grid, you need to use the two components it provides{' '}
        <Code>{'<LayoutGrid />'}</Code> a container, while each{' '}
        <Code>{'<LayoutGridItem />'}</Code> will as a cell to define your grid
        with the size you specify for each one of them. It only manages its
        inner space not adding unnecessary extra margins or paddings.
      </Paragraph>
      <H4>12 Column Grid</H4>
      <Paragraph>
        It offers a 12 column grid system. Column grids are used to organize
        elements into columns.
      </Paragraph>
      <ArticleDefaultDemo columns={12} rows={1} />
      <Paragraph>
        Use the <Code>colSpan</Code> prop to define the number of columns to
        provide to each LayoutGridItem. It can be an integer value between 1 and
        12. All possible factor (2*2*3 = 12) combinations can be used to fit it
        into other kind of grid.
      </Paragraph>
      <Paragraph>
        This gives us the possibility to also create other different grid
        options:
      </Paragraph>
      <RadioButtonGroup
        value={columnState}
        fullWidth
        onChange={(event, value) => setColumnState(value.toString())}
      >
        {[1, 2, 3, 4, 6, 12].reverse().map(column => (
          <RadioButton
            key={column}
            value={column.toString()}
            label={`${column} columns`}
          />
        ))}
      </RadioButtonGroup>
      <br />
      <br />
      <ArticleDefaultDemo columns={columnState} rows={2} />
      <Paragraph>
        You can also use any kind of combination which sums 12 per row
      </Paragraph>
      <Button
        onClick={() =>
          setWeirdColumns([
            ...getWeirdSumCombinationArray(possibleValues, columnIndex),
            ...getWeirdSumCombinationArray(possibleValues, columnIndex),
            ...getWeirdSumCombinationArray(possibleValues, columnIndex)
          ])
        }
      >
        shuffle
      </Button>
      <br />
      <br />
      <DemoWrapper>
        <LayoutGrid>
          {weirdColumns.map((size, index) => (
            <>
              <LayoutGridItem key={index} colSpan={size}>
                <DemoBox>
                  <Label style={{color: 'white'}}>s:{size}</Label>{' '}
                  <Label style={{color: 'white'}}>e:{index + 1}</Label>
                </DemoBox>
              </LayoutGridItem>
            </>
          ))}
        </LayoutGrid>
      </DemoWrapper>
    </Article>
  )
}

ArticleDefault.propTypes = {
  classname: PropTypes.string
}

export default ArticleDefault
