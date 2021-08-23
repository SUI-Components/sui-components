import PropTypes from 'prop-types'
import {
  Article,
  H2,
  H3,
  Paragraph,
  Box,
  Input,
  Code,
  Button,
  Grid,
  Cell,
  Label
} from '@s-ui/documentation-library'
import PinInput from '../src/PinInput'
import PinInputField from '../src/PinInputField'
import {useState} from 'react'

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

const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const columnIndex = 12

const ArticleChildren = ({className}) => {
  const [weirdColumns, setWeirdColumns] = useState([
    ...getWeirdSumCombinationArray(possibleValues, columnIndex),
    ...getWeirdSumCombinationArray(possibleValues, columnIndex),
    ...getWeirdSumCombinationArray(possibleValues, columnIndex)
  ])

  const [code, setCode] = useState(
    `${Math.trunc(Math.random() * Math.pow(10, weirdColumns.length))}`
  )

  const onChangeHandler = (event, args) => {
    setCode(args.value)
  }

  const setWeirdColumnsHandler = () => {
    setWeirdColumns([
      ...getWeirdSumCombinationArray(possibleValues, columnIndex),
      ...getWeirdSumCombinationArray(possibleValues, columnIndex),
      ...getWeirdSumCombinationArray(possibleValues, columnIndex)
    ])
  }

  return (
    <Article className={className}>
      <H2>Children</H2>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum earum
        nobis, deserunt voluptate labore illo, temporibus ex iure aliquam
        tempore accusamus, aliquid velit magni eius! A at molestias sunt!
      </Paragraph>
      <PinInput onChange={onChangeHandler} value={code} length={code.length} />

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum earum
        nobis, deserunt voluptate labore illo, temporibus ex iure aliquam
        tempore accusamus, aliquid velit magni eius! A at molestias sunt!
      </Paragraph>
      <Grid cols={1} gutter={[8, 8]}>
        <Cell>
          <Button onClick={setWeirdColumnsHandler}>shuffle</Button>
        </Cell>
        <Cell>
          <PinInput onChange={onChangeHandler} value={code}>
            <Grid cols={12} gutter={[8, 8]} style={{width: '100%'}}>
              {weirdColumns.map((size, index) => (
                <Cell key={index} span={size}>
                  <PinInputField isFullWidth />
                </Cell>
              ))}
              <Cell span={12}>
                <Input
                  style={{textAlign: 'center'}}
                  value={code}
                  disabled
                  fullWidth
                />
              </Cell>
            </Grid>
          </PinInput>
        </Cell>
      </Grid>
      <br />
      <Paragraph>
        By default, it sets autocomplete="on-time-code" to its inner input
        fields by the default true bolean prop <Code>isOneTimeCode</Code>.
      </Paragraph>
    </Article>
  )
}

ArticleChildren.propTypes = {
  className: PropTypes.string
}

export default ArticleChildren
