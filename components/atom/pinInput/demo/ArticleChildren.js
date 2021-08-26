import PropTypes from 'prop-types'
import {
  Article,
  H2,
  Paragraph,
  Input,
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

const flexCentered = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const ArticleChildren = ({className}) => {
  const [weirdColumns, setWeirdColumns] = useState([
    ...getWeirdSumCombinationArray(possibleValues, columnIndex),
    ...getWeirdSumCombinationArray(possibleValues, columnIndex),
    ...getWeirdSumCombinationArray(possibleValues, columnIndex)
  ])

  const [code, setCode] = useState(
    `${Math.trunc(Math.random() * Math.pow(10, weirdColumns.length))}`
  )

  const [cardCode] = useState(`${Math.trunc(Math.random() * Math.pow(10, 16))}`)
  const [cardCVVCode] = useState(
    `${Math.trunc(Math.random() * Math.pow(10, 3))}`
  )

  const onChangeHandler = (event, args) => {
    setCode(args.value)
  }

  const setWeirdColumnsHandler = () => {
    const newWeirdSumCombinationArray = [
      ...getWeirdSumCombinationArray(possibleValues, columnIndex),
      ...getWeirdSumCombinationArray(possibleValues, columnIndex),
      ...getWeirdSumCombinationArray(possibleValues, columnIndex)
    ]
    setWeirdColumns(newWeirdSumCombinationArray)
    setCode(
      `${Math.trunc(
        Math.random() * Math.pow(10, newWeirdSumCombinationArray.length)
      )}`
    )
  }

  return (
    <Article className={className}>
      <H2>Children</H2>
      <Paragraph>Default look for PinInput component.</Paragraph>

      <PinInput onChangeHandler={onChangeHandler} defaultValue={code} />

      <Paragraph>
        We can customize children in the component using the PinInputField
        component.
      </Paragraph>
      <Grid cols={12} gutter={[8, 8]}>
        <Cell span={12}>
          <Label>Card Number</Label>
        </Cell>
        <Cell span={12}>
          <PinInput onChangeHandler={onChangeHandler} defaultValue={cardCode}>
            <Grid cols={19} gutter={[8, 8]}>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell style={flexCentered}>–</Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell style={flexCentered}>–</Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell style={flexCentered}>–</Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
              <Cell>
                <PinInputField isFullWidth />
              </Cell>
            </Grid>
          </PinInput>
        </Cell>
        <Cell span={12}>
          <Label>CVV</Label>
        </Cell>
        <Cell span={4}>
          <PinInput
            onChangeHandler={onChangeHandler}
            defaultValue={cardCVVCode}
            length={3}
          />
        </Cell>
      </Grid>
      <Paragraph>And many more...</Paragraph>
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
    </Article>
  )
}

ArticleChildren.propTypes = {
  className: PropTypes.string
}

export default ArticleChildren
