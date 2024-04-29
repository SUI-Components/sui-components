import {useState} from 'react'

import PropTypes from 'prop-types'

import {Article, Cell, Code, Grid, H2, Label, ListItem, Paragraph, UnorderedList} from '@s-ui/documentation-library'
import AtomButton from '@s-ui/react-atom-button'

import MoleculeButtonGroup, {
  moleculeButtonGroupDesigns,
  moleculeButtonGroupDisplay,
  moleculeButtonGroupSpaced
} from '../../src/index.js'

const ArticleDisplay = ({className}) => {
  const [multipleValue, setMultipleValue] = useState([])

  const multipleClickHandler = event => {
    if (multipleValue.includes(event.target.value)) {
      setMultipleValue(multipleValue.filter(v => v !== event.target.value))
    } else {
      setMultipleValue([...multipleValue, event.target.value])
    }
  }
  return (
    <Article className={className}>
      <H2>Display</H2>
      <Paragraph>
        There are {Object.values(moleculeButtonGroupDisplay).length} types of display. They are provided by exported{' '}
        <Code>moleculeButtonGroupDisplay</Code> enum:
      </Paragraph>
      <UnorderedList>
        {Object.entries(moleculeButtonGroupDisplay).map(
          ([moleculeButtonGroupSizeKey, moleculeButtonGroupSizeValue]) => (
            <ListItem key={moleculeButtonGroupSizeKey}>
              <Code>{moleculeButtonGroupSizeKey}</Code>: {moleculeButtonGroupSizeValue}
            </ListItem>
          )
        )}
      </UnorderedList>
      <Grid gutter={[8, 8]} cols={Object.values(moleculeButtonGroupDisplay).length}>
        {Object.entries(moleculeButtonGroupDisplay).map(
          ([moleculeButtonGroupDisplayKey, moleculeButtonGroupDisplayValue]) => (
            <Cell key={moleculeButtonGroupDisplayKey}>
              <Label>{moleculeButtonGroupDisplayValue}</Label>
            </Cell>
          )
        )}
        {Object.entries(moleculeButtonGroupDisplay).map(
          ([moleculeButtonGroupDisplayKey, moleculeButtonGroupDisplayValue]) => (
            <Cell key={moleculeButtonGroupDisplayKey}>
              <MoleculeButtonGroup
                design={moleculeButtonGroupDesigns.OUTLINE}
                onClick={multipleClickHandler}
                display={moleculeButtonGroupDisplayValue}
                spaced={moleculeButtonGroupSpaced.MEDIUM}
              >
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
          )
        )}
      </Grid>
    </Article>
  )
}

ArticleDisplay.displayName = 'ArticleDisplay'

ArticleDisplay.propTypes = {
  className: PropTypes.string
}

export default ArticleDisplay
