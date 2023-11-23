import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Grid, H2, Label, Paragraph} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import MoleculeButtonGroup from '../../src/index.js'

const ArticleMode = ({className}) => {
  const [singleValue, setSingleValue] = useState([])
  const [multipleValue, setMultipleValue] = useState([])

  const singleClickHandler = event => {
    if (singleValue.includes(event.target.value)) {
      setSingleValue([])
    } else {
      setSingleValue([event.target.value])
    }
  }
  const multipleClickHandler = event => {
    if (multipleValue.includes(event.target.value)) {
      setMultipleValue(multipleValue.filter(v => v !== event.target.value))
    } else {
      setMultipleValue([...multipleValue, event.target.value])
    }
  }
  return (
    <Article className={className}>
      <H2>Mode</H2>
      <Paragraph>
        The Button group can take profit of the value and the "selected" toggle button for its behavior acting as a
        single selection mode (radio button group) or a multi selection mode (checkbox group)
      </Paragraph>
      <Grid gutter={[8, 8]} cols={2}>
        <Cell>
          <Label>single mode – radio button behavior</Label>
        </Cell>
        <Cell>
          <Label>multiple mode – checkbox group behavior</Label>
        </Cell>
        <Cell>
          <MoleculeButtonGroup onClick={singleClickHandler}>
            {new Array(5).fill().map((val, index) => (
              <AtomButton
                key={index}
                value={index}
                selected={singleValue.includes(`${index}`)}
                focused={singleValue.includes(`${index}`)}
              >
                {index}
              </AtomButton>
            ))}
          </MoleculeButtonGroup>
        </Cell>
        <Cell>
          <MoleculeButtonGroup onClick={multipleClickHandler}>
            {new Array(5).fill().map((val, index) => (
              <AtomButton
                key={index}
                value={index}
                selected={multipleValue.includes(`${index}`)}
                focused={multipleValue.includes(`${index}`)}
              >
                {index}
              </AtomButton>
            ))}
          </MoleculeButtonGroup>
        </Cell>
      </Grid>
    </Article>
  )
}

ArticleMode.displayName = 'ArticleMode'

ArticleMode.propTypes = {
  className: PropTypes.string
}

export default ArticleMode
