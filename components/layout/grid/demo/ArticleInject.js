import {useState} from 'react'

import LayoutGrid, {LayoutGridItem} from 'components/layout/grid/src/index.js'
import PropTypes from 'prop-types'

import {Article, H2, Label, Paragraph, RadioButton, RadioButtonGroup} from '@s-ui/documentation-library'

import DemoBox from './demoBox.js'
import DemoWrapper from './demoWrapper.js'

const ArticleInjectDemo = ({columns, rows = 3}) => {
  const elements = columns * rows
  const size = 12 / columns
  return (
    <DemoWrapper>
      <LayoutGrid colSpan={size}>
        {Array(elements)
          .fill(0)
          .map((e, i) => i + 1)
          .map(index => (
            <>
              <LayoutGridItem key={index}>
                <DemoBox>
                  <Label style={{color: 'white'}}>s:{size}</Label> <Label style={{color: 'white'}}>e:{index}</Label>
                </DemoBox>
              </LayoutGridItem>
            </>
          ))}
      </LayoutGrid>
    </DemoWrapper>
  )
}

ArticleInjectDemo.propTypes = {
  columns: PropTypes.number,
  rows: PropTypes.number
}

const ArticleInject = ({classname}) => {
  const [columnState, setColumnState] = useState('12')
  return (
    <Article className={classname}>
      <H2>Injector</H2>
      <Paragraph>
        To implement the grid you can use the Grid to inject the default GridItem props to each one.
      </Paragraph>
      <ArticleInjectDemo columns={12} rows={1} />
      <Paragraph>This gives us the possibility to also create other different grid options:</Paragraph>
      <RadioButtonGroup value={columnState} fullWidth onChange={(event, value) => setColumnState(value.toString())}>
        {[1, 2, 3, 4, 6, 12].reverse().map(column => (
          <RadioButton key={column} value={column.toString()} label={`${column} columns`} />
        ))}
      </RadioButtonGroup>
      <br />
      <br />
      <ArticleInjectDemo columns={columnState} rows={2} />
      <Paragraph>You can also use any kind of combination which sums 12 per row</Paragraph>
    </Article>
  )
}

ArticleInject.propTypes = {
  classname: PropTypes.string
}

export default ArticleInject
